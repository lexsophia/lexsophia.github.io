/* LexSophia TEAP Writing Practice Engine (API-free, browser-local)
   Features: Focus Mode, live word/paragraph/connector/copy-rate metrics,
   timer, side-by-side model essay comparison, rubric self-check, AI prompt copy. */
(function () {
  'use strict';

  const CONNECTORS = [
    'however', 'although', 'though', 'nevertheless', 'nonetheless', 'whereas',
    'while', 'therefore', 'consequently', 'furthermore', 'moreover', 'additionally',
    'in contrast', 'on the other hand', 'for example', 'for instance', 'in addition',
    'in conclusion', 'in summary', 'first', 'second', 'finally', 'admittedly'
  ];

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function tokenize(text) {
    return (text || '').toLowerCase().replace(/[^a-z0-9'\s-]/g, ' ').split(/\s+/).filter(Boolean);
  }

  function countWords(text) {
    return (text || '').trim() ? (text.trim().match(/\S+/g) || []).length : 0;
  }

  function countParagraphs(text) {
    return (text || '').trim() ? text.trim().split(/\n\s*\n/).filter(Boolean).length : 0;
  }

  function countConnectors(text) {
    const low = ' ' + (text || '').toLowerCase().replace(/[^a-z\s]/g, ' ') + ' ';
    let n = 0;
    CONNECTORS.forEach(function (c) {
      if (low.indexOf(' ' + c + ' ') !== -1) n++;
    });
    return n;
  }

  function calcCopyRate(draft, sources) {
    const dTokens = tokenize(draft);
    if (dTokens.length < 6) return 0;
    const srcText = sources.map(function (s) { return s.body || ''; }).join(' ');
    const sTokens = tokenize(srcText);
    const sTrigrams = new Set();
    for (let i = 0; i <= sTokens.length - 3; i++) {
      sTrigrams.add(sTokens[i] + ' ' + sTokens[i + 1] + ' ' + sTokens[i + 2]);
    }
    let hit = 0;
    const total = dTokens.length - 2;
    for (let i = 0; i < total; i++) {
      const tri = dTokens[i] + ' ' + dTokens[i + 1] + ' ' + dTokens[i + 2];
      if (sTrigrams.has(tri)) hit++;
    }
    return Math.round((hit / Math.max(1, total)) * 100);
  }

  function fmtTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  }

  function initApp() {
    const root = document.getElementById('teap-writing-app');
    const bank = window.TEAP_WRITING_BANK || [];
    if (!root || !bank.length) return;

    const state = {
      view: 'launcher', // launcher | editor | review
      task: null,
      draft: '',
      remainSec: 0,
      timerId: null,
      checks: {},
      copied: false
    };

    function stopTimer() {
      if (state.timerId) { clearInterval(state.timerId); state.timerId = null; }
    }

    function startTask(taskId) {
      const t = bank.find(function (x) { return x.id === taskId; }) || bank[0];
      stopTimer();
      state.task = t;
      state.draft = window.LexSophiaProgress ? window.LexSophiaProgress.loadDraft('teap:writing:' + t.id) : '';
      state.remainSec = t.minutes * 60;
      state.checks = {};
      state.copied = false;
      state.view = 'editor';
      state.timerId = setInterval(function () {
        if (state.remainSec > 0) {
          state.remainSec--;
          const el = root.querySelector('#tw-timer');
          if (el) {
            el.textContent = fmtTime(state.remainSec);
            el.classList.toggle('is-warn', state.remainSec <= 180);
          }
        }
      }, 1000);
      window.scrollTo(0, 0);
      render();
    }

    function renderSources(task) {
      return task.sources.map(function (src) {
        let content = '';
        if (src.body) content += '<p class="teap-stim-body">' + esc(src.body) + '</p>';
        if (src.table) {
          content += '<div style="overflow-x:auto;margin-top:8px"><table class="teap-table"><thead><tr>' +
            src.table.headers.map(function (h) { return '<th>' + esc(h) + '</th>'; }).join('') +
            '</tr></thead><tbody>' +
            src.table.rows.map(function (row) {
              return '<tr>' + row.map(function (c) { return '<td>' + esc(c) + '</td>'; }).join('') + '</tr>';
            }).join('') +
            '</tbody></table></div>';
        }
        return '<div class="lx-passage-card" style="margin-top:12px"><h3 class="teap-stim-title">' + esc(src.heading) + '</h3>' + content + '</div>';
      }).join('');
    }

    function renderLauncher() {
      document.body.classList.remove('lx-focus-mode');
      root.classList.remove('is-wide-stim');
      root.innerHTML = [
        '<div class="teap-launcher">',
        '  <div>',
        '    <h2 style="margin:0 0 6px;font-size:20px">Writing 課題を選択</h2>',
        '    <p style="margin:0;font-size:13.5px;color:#475569">Task A（約70語要約）と Task B（約200語・資料統合エッセイ）をリアルタイム語数・丸写し率チェック付きで演習できます。</p>',
        '  </div>',
        '  <div class="teap-skill-grid" style="margin:0">',
        bank.map(function (t) {
          return '<article class="teap-skill-card" style="padding:20px">' +
            '<div>' +
              '<div class="teap-skill-card__head"><span class="teap-pill is-mint">' + esc(t.task) + '</span><span class="teap-part-meta">' + esc(t.targetLabel) + ' · ' + t.minutes + '分</span></div>' +
              '<h3 style="margin-top:8px;font-size:16.5px">' + esc(t.title) + '</h3>' +
            '</div>' +
            '<div class="teap-card-actions"><button type="button" class="btn" data-tw-start="' + t.id + '">この課題を書く →</button></div>' +
          '</article>';
        }).join(''),
        '  </div>',
        '</div>'
      ].join('\n');

      root.querySelectorAll('[data-tw-start]').forEach(function (b) {
        b.addEventListener('click', function () { startTask(b.getAttribute('data-tw-start')); });
      });
    }

    function updateMetrics() {
      const t = state.task;
      if (!t) return;
      const wc = countWords(state.draft);
      const pc = countParagraphs(state.draft);
      const cc = countConnectors(state.draft);
      const cr = calcCopyRate(state.draft, t.sources);

      const wcEl = root.querySelector('#tw-m-words');
      const pcEl = root.querySelector('#tw-m-paras');
      const ccEl = root.querySelector('#tw-m-conn');
      const crEl = root.querySelector('#tw-m-copy');
      if (wcEl) {
        wcEl.textContent = wc + ' 語';
        wcEl.className = 'lx-metric-pill' + (wc >= t.minWords && wc <= t.maxWords ? ' is-ok' : (wc > t.maxWords ? ' is-warn' : ''));
      }
      if (pcEl) pcEl.textContent = pc + ' 段落';
      if (ccEl) ccEl.textContent = '接続語 ' + cc;
      if (crEl) {
        crEl.textContent = '丸写し率 ' + cr + '%';
        crEl.className = 'lx-metric-pill' + (cr >= 35 ? ' is-warn' : (wc >= 20 ? ' is-ok' : ''));
      }
    }

    function renderEditor() {
      const t = state.task;
      document.body.classList.add('lx-focus-mode');
      root.classList.add('is-wide-stim');

      root.innerHTML = [
        '<div class="lx-test-head">',
        '  <div class="lx-test-meta">',
        '    <button type="button" class="lx-test-back" id="btn-tw-home">← ホーム</button>',
        '    <span class="lx-test-count">' + esc(t.task) + ' · ' + esc(t.label) + '</span>',
        '    <span class="lx-test-timer" id="tw-timer">' + fmtTime(state.remainSec) + '</span>',
        '  </div>',
        '</div>',
        '<div class="lx-flag-row">',
        '  <span class="lx-part-tag">' + esc(t.title) + '</span>',
        '  <span class="lx-flag-btn" style="cursor:default">目標：' + esc(t.targetLabel) + '</span>',
        '</div>',
        '<div class="teap-workspace has-stim" style="margin-top:14px">',
        '  <div>',
        '    <div class="lx-situation-note" style="margin-top:0"><strong>Directions:</strong> ' + esc(t.instruction) + '</div>',
        renderSources(t),
        '  </div>',
        '  <div class="lx-editor-card">',
        '    <div class="lx-metric-bar">',
        '      <span class="lx-metric-pill" id="tw-m-words">0 語</span>',
        '      <span class="lx-metric-pill" id="tw-m-paras">0 段落</span>',
        '      <span class="lx-metric-pill" id="tw-m-conn">接続語 0</span>',
        '      <span class="lx-metric-pill" id="tw-m-copy">丸写し率 0%</span>',
        '    </div>',
        '    <textarea id="tw-textarea" class="lx-textarea" placeholder="ここに英語で答案を入力してください...">' + esc(state.draft) + '</textarea>',
        '    <p style="margin:8px 0 0;font-size:12px;color:#8c959f">※ 入力内容はブラウザ内のみで処理され、外部には送信されません。</p>',
        '  </div>',
        '</div>',
        '<div class="lx-test-foot">',
        '  <div class="lx-test-foot__inner">',
        '    <div class="lx-test-foot__row">',
        '      <button type="button" class="lx-foot-next" id="btn-tw-finish">書き終えて模範解答と比較する</button>',
        '    </div>',
        '  </div>',
        '</div>'
      ].join('\n');

      const ta = root.querySelector('#tw-textarea');
      ta.addEventListener('input', function () {
        state.draft = ta.value;
        if (window.LexSophiaProgress) {
          window.LexSophiaProgress.saveDraft('teap:writing:' + t.id, state.draft);
        }
        updateMetrics();
      });
      updateMetrics();

      root.querySelector('#btn-tw-home').addEventListener('click', function () {
        const goHome = function () { stopTimer(); window.location.href = '/teap/'; };
        if (state.draft.trim().length > 0 && window.LexSophiaShell && window.LexSophiaShell.confirmExit) {
          window.LexSophiaShell.confirmExit(goHome);
        } else {
          goHome();
        }
      });
      root.querySelector('#btn-tw-finish').addEventListener('click', function () {
        stopTimer();
        if (window.LexSophiaProgress) {
          window.LexSophiaProgress.saveDraft('teap:writing:' + t.id, state.draft);
          window.LexSophiaProgress.recordSession({
            exam: 'teap',
            skill: 'writing',
            mode: t.task,
            title: t.title,
            correct: 1,
            total: 1,
            acc: 100
          });
        }
        state.view = 'review';
        window.scrollTo(0, 0);
        render();
      });
    }

    function buildAiPrompt(t, draft) {
      const src = t.sources.map(function (s) {
        let out = s.heading + '\n';
        if (s.body) out += s.body + '\n';
        if (s.table) out += s.table.headers.join(' | ') + '\n' + s.table.rows.map(function (r) { return r.join(' | '); }).join('\n') + '\n';
        return out;
      }).join('\n');
      return [
        'あなたは大学入試TEAP（通常版）Writingの専門採点官です。以下の課題と受験者の答案を、TEAP公式の観点（課題達成・構成・語彙・文法・言い換え）で厳密に日本語で添削してください。',
        '',
        '【課題】' + t.task + '（目標：' + t.targetLabel + '）',
        t.instruction,
        '',
        '【資料】',
        src,
        '【受験者の答案（' + countWords(draft) + '語）】',
        draft || '（未入力）',
        '',
        '【出力してほしい項目】',
        '1. 4観点（課題達成・構成・語彙・文法）ごとの5段階評価と講評',
        '2. 誤り・不自然な箇所の修正案（Before → After）',
        '3. 受験者の主張を活かした高得点リライト版（目標語数内）'
      ].join('\n');
    }

    function renderReview() {
      const t = state.task;
      document.body.classList.add('lx-focus-mode');
      root.classList.remove('is-wide-stim');

      const wc = countWords(state.draft);
      const cr = calcCopyRate(state.draft, t.sources);
      const cc = countConnectors(state.draft);
      const checkedCount = t.rubric.filter(function (_, i) { return !!state.checks[i]; }).length;
      const pct = Math.round((checkedCount / t.rubric.length) * 100);
      const circum = 603.2;
      const offset = (circum * (1 - pct / 100)).toFixed(1);

      root.innerHTML = [
        '<div class="lx-test-head">',
        '  <div class="lx-test-meta">',
        '    <button type="button" class="lx-test-back" id="btn-tw-home">← ホーム</button>',
        '    <span class="lx-test-count">Writing 振り返り</span>',
        '    <span class="lx-test-timer">' + wc + '語</span>',
        '  </div>',
        '</div>',
        '<div class="lx-res-head">',
        '  <div class="lx-res-head__copy">',
        '    <h1>' + esc(t.task) + ' 振り返り</h1>',
        '    <p>下のチェックリストで自己評価すると達成度が反映されます。</p>',
        '  </div>',
        '  <img class="lx-res-head__owl" src="/img/owl-violet.png" alt="" width="221" height="320" decoding="async">',
        '</div>',
        '<div class="lx-score-card">',
        '  <p class="lx-score-card__label">セルフチェック達成度</p>',
        '  <div class="lx-gauge" role="img" aria-label="達成度 ' + pct + '%">',
        '    <svg viewBox="0 0 240 240" aria-hidden="true">',
        '      <circle class="lx-gauge__track" cx="120" cy="120" r="96"></circle>',
        '      <circle class="lx-gauge__fill" cx="120" cy="120" r="96" stroke-dasharray="' + circum + '" stroke-dashoffset="' + offset + '"></circle>',
        '    </svg>',
        '    <div class="lx-gauge__center">',
        '      <p class="lx-gauge__val">' + pct + '<small>%</small></p>',
        '      <p class="lx-gauge__sub">' + checkedCount + ' / ' + t.rubric.length + ' 項目達成</p>',
        '    </div>',
        '  </div>',
        '  <div class="lx-stat-grid">',
        '    <div class="lx-stat-tile"><p class="k">あなたの語数</p><p class="v">' + wc + '語</p></div>',
        '    <div class="lx-stat-tile"><p class="k">目標レンジ</p><p class="v">' + t.minWords + '–' + t.maxWords + '</p></div>',
        '    <div class="lx-stat-tile"><p class="k">丸写し率</p><p class="v">' + cr + '%</p></div>',
        '    <div class="lx-stat-tile"><p class="k">接続語数</p><p class="v">' + cc + '語</p></div>',
        '  </div>',
        '</div>',
        '<div class="lx-res-card">',
        '  <h2>自己評価チェックリスト（TEAP 4観点）</h2>',
        '  <div class="lx-checklist">',
        t.rubric.map(function (item, idx) {
          return '<label class="lx-check-row"><input type="checkbox" data-tw-chk="' + idx + '"' + (state.checks[idx] ? ' checked' : '') + '><span>' + esc(item) + '</span></label>';
        }).join(''),
        '  </div>',
        '</div>',
        '<div class="lx-res-card">',
        '  <h2>あなたの答案 vs 高得点モデル解答</h2>',
        '  <div class="lx-compare-grid">',
        '    <div class="lx-compare-box"><h3>あなたの答案（' + wc + '語）</h3><p style="white-space:pre-line">' + esc(state.draft || '（未入力）') + '</p></div>',
        '    <div class="lx-compare-box is-model"><h3>高得点モデル解答</h3><p style="white-space:pre-line">' + esc(t.modelEssay) + '</p></div>',
        '  </div>',
        '  <details style="margin-top:12px"><summary style="cursor:pointer;font-size:13.5px;font-weight:700">モデル解答の和訳・言い換え表現を見る</summary>',
        '    <div class="lx-review-body">',
        '      <p><b>和訳：</b>' + esc(t.modelJa) + '</p>',
        '      <p><b>押さえるべき要点：</b><br>' + t.keyPoints.map(function (k) { return '・' + esc(k); }).join('<br>') + '</p>',
        '      <p><b>使える言い換え：</b><br>' + t.paraphrases.map(function (p) { return '・' + esc(p); }).join('<br>') + '</p>',
        '    </div>',
        '  </details>',
        '</div>',
        '<div class="lx-res-actions is-two">',
        '  <button type="button" class="lx-foot-next" id="btn-tw-copy-ai">' + (state.copied ? '✓ AI添削プロンプトをコピーしました！' : 'AI添削用プロンプトをコピー') + '</button>',
        '  <button type="button" class="lx-foot-prev" id="btn-tw-back-edit">書き直す</button>',
        '</div>'
      ].join('\n');

      root.querySelectorAll('[data-tw-chk]').forEach(function (cb) {
        cb.addEventListener('change', function () {
          state.checks[cb.getAttribute('data-tw-chk')] = cb.checked;
          render();
        });
      });
      root.querySelector('#btn-tw-copy-ai').addEventListener('click', function () {
        const promptText = buildAiPrompt(t, state.draft);
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(promptText).then(function () {
            state.copied = true; render();
          });
        } else {
          state.copied = true; render();
        }
      });
      root.querySelector('#btn-tw-back-edit').addEventListener('click', function () {
        state.view = 'editor'; window.scrollTo(0, 0); render();
      });
      root.querySelector('#btn-tw-home').addEventListener('click', function () {
        window.location.href = '/teap/';
      });
    }

    function render() {
      if (state.view === 'launcher') renderLauncher();
      else if (state.view === 'editor') renderEditor();
      else renderReview();
    }

    const params = new URLSearchParams(window.location.search);
    const qTask = params.get('task');
    if (qTask) startTask(qTask);
    else render();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initApp);
  else initApp();
})();

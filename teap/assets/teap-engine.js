/* LexSophia TEAP Reading Interactive Engine (Exam Mode + Learning Mode + Quick Diagnostic) */
(function () {
  'use strict';

  const STORAGE_HISTORY = 'lexsophia.teap.history.v1';
  const STORAGE_WEAK = 'lexsophia.teap.weak.v1';

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function readJson(key, fallback) {
    try {
      const v = JSON.parse(localStorage.getItem(key));
      return v == null ? fallback : v;
    } catch (e) { return fallback; }
  }

  function writeJson(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
  }

  function fmtTime(sec) {
    const s = Math.max(0, Math.floor(sec));
    const m = Math.floor(s / 60);
    const r = s % 60;
    return String(m).padStart(2, '0') + ':' + String(r).padStart(2, '0');
  }

  function renderChartHtml(chart) {
    if (!chart) return '';
    let inner = '';
    if (chart.type === 'table') {
      const ths = (chart.headers || []).map(h => '<th>' + esc(h) + '</th>').join('');
      const trs = (chart.rows || []).map(row =>
        '<tr>' + row.map(cell => '<td>' + esc(cell) + '</td>').join('') + '</tr>'
      ).join('');
      inner = '<div style="overflow-x:auto"><table class="teap-table" aria-label="' + esc(chart.alt || chart.title) + '"><thead><tr>' + ths + '</tr></thead><tbody>' + trs + '</tbody></table></div>';
    } else if (chart.type === 'bar') {
      const vals = chart.values || [];
      const labels = chart.labels || [];
      const maxV = Math.max(10, ...vals) * 1.18;
      const W = 460, H = 210, padL = 34, padR = 16, padT = 22, padB = 46;
      const plotW = W - padL - padR, plotH = H - padT - padB;
      const bw = Math.min(46, (plotW / Math.max(1, vals.length)) * 0.58);
      const step = plotW / Math.max(1, vals.length);
      const bars = vals.map((v, i) => {
        const bh = (v / maxV) * plotH;
        const x = padL + i * step + (step - bw) / 2;
        const y = padT + plotH - bh;
        const lx = x + bw / 2;
        return '<rect x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + bw.toFixed(1) + '" height="' + bh.toFixed(1) + '" rx="6" fill="#0176f0"/>' +
          '<text x="' + lx.toFixed(1) + '" y="' + (y - 6).toFixed(1) + '" text-anchor="middle" fill="#0f172a" font-size="11" font-weight="700">' + esc(v) + esc(chart.unit || '') + '</text>' +
          '<text x="' + lx.toFixed(1) + '" y="' + (H - 14).toFixed(1) + '" text-anchor="middle" fill="#475569" font-size="10" font-weight="600">' + esc(labels[i] || '') + '</text>';
      }).join('');
      inner = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + esc(chart.alt || chart.title) + '">' +
        '<line x1="' + padL + '" y1="' + (padT + plotH) + '" x2="' + (W - padR) + '" y2="' + (padT + plotH) + '" stroke="#cbd5e1" stroke-width="1.2"/>' +
        bars + '</svg>';
    } else if (chart.type === 'line') {
      const vals = chart.values || [];
      const labels = chart.labels || [];
      const minV = Math.min(...vals) * 0.85;
      const maxV = Math.max(...vals) * 1.08;
      const W = 460, H = 200, padL = 42, padR = 24, padT = 22, padB = 34;
      const plotW = W - padL - padR, plotH = H - padT - padB;
      const coords = vals.map((v, i) => {
        const x = vals.length === 1 ? padL + plotW / 2 : padL + (i / (vals.length - 1)) * plotW;
        const y = padT + plotH - ((v - minV) / Math.max(1, maxV - minV)) * plotH;
        return { x, y, v, label: labels[i] || '' };
      });
      const poly = coords.map(c => c.x.toFixed(1) + ',' + c.y.toFixed(1)).join(' ');
      const dots = coords.map(c =>
        '<circle cx="' + c.x.toFixed(1) + '" cy="' + c.y.toFixed(1) + '" r="4.5" fill="#0176f0" stroke="#fff" stroke-width="2"/>' +
        '<text x="' + c.x.toFixed(1) + '" y="' + (c.y - 10).toFixed(1) + '" text-anchor="middle" fill="#0f172a" font-size="11" font-weight="700">' + esc(c.v) + '</text>' +
        '<text x="' + c.x.toFixed(1) + '" y="' + (H - 10).toFixed(1) + '" text-anchor="middle" fill="#475569" font-size="10.5" font-weight="600">' + esc(c.label) + '</text>'
      ).join('');
      inner = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + esc(chart.alt || chart.title) + '">' +
        '<line x1="' + padL + '" y1="' + (padT + plotH) + '" x2="' + (W - padR) + '" y2="' + (padT + plotH) + '" stroke="#cbd5e1" stroke-width="1.2"/>' +
        '<polyline points="' + poly + '" fill="none" stroke="#0176f0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>' +
        dots + '</svg>';
    }
    return '<div class="teap-chart-box">' +
      '<p class="teap-chart-title">' + esc(chart.title || '') + '</p>' +
      (chart.subtitle ? '<p class="teap-chart-sub">' + esc(chart.subtitle) + '</p>' : '') +
      inner + '</div>';
  }

  function formatStimBody(body) {
    return esc(body || '').replace(/\[\s*(\d+)\s*\]/g, '<span class="teap-blank-mark">[ $1 ]</span>');
  }

  function buildQuickSet() {
    // 12 questions representative of all 6 Reading parts (2 from Part 1, 2 from 2A, 2 from 2B, 2 from 2C, 2 from 3A, 2 from 3B)
    // Preserves shared stimulus coherence by taking first items of a set cleanly.
    const byPart = p => TEAP_READING_BANK.filter(q => q.part === p);
    return [
      ...byPart('1').slice(0, 2),
      ...byPart('2A').slice(0, 2),
      ...byPart('2B').slice(0, 2),
      ...byPart('2C').slice(0, 2),
      ...byPart('3A').slice(0, 2),
      ...byPart('3B').slice(0, 2)
    ];
  }

  function initTeapReadingApp(rootEl, opts) {
    if (!rootEl || typeof TEAP_READING_BANK === 'undefined') return;
    const config = opts || {};

    const state = {
      view: 'launcher', // launcher | running | results
      mode: 'exam',     // exam | study | quick
      title: 'TEAP Reading フル模試（60問・70分）',
      questions: [],
      answers: {},      // qId -> chosenIdx
      flags: {},        // qId -> bool
      idx: 0,
      showPalette: false,
      mobileView: 'passage', // passage | question
      totalSec: 4200,
      remainSec: 4200,
      elapsedSec: 0,
      timerId: null
    };

    function stopTimer() {
      if (state.timerId) {
        clearInterval(state.timerId);
        state.timerId = null;
      }
    }

    function startSession(mode, partFilter, customQuestions) {
      stopTimer();
      let qs = [];
      let totalSec = 0;
      let title = '';
      if (Array.isArray(customQuestions) && customQuestions.length) {
        qs = customQuestions;
        title = '間違えた問題の再挑戦（' + qs.length + '問）';
        mode = 'study';
      } else if (partFilter) {
        qs = TEAP_READING_BANK.filter(q => q.part === partFilter);
        const pInfo = TEAP_CONFIG.reading.parts.find(p => p.id === partFilter);
        title = 'TEAP Reading ' + (pInfo ? pInfo.name + '（' + pInfo.label + ' · ' + qs.length + '問）' : 'Part ' + partFilter);
        totalSec = (pInfo ? pInfo.recMin : 10) * 60;
      } else if (mode === 'quick') {
        qs = buildQuickSet();
        title = 'TEAP Reading クイック診断（独自短縮12問・目安15分）';
        totalSec = 15 * 60;
      } else {
        qs = [...TEAP_READING_BANK];
        title = mode === 'exam'
          ? 'TEAP Reading フル模試（60問・70分）'
          : 'TEAP Reading 学習モード（全60問・即時解説つき）';
        totalSec = 70 * 60;
      }

      state.view = 'running';
      state.mode = mode;
      state.title = title;
      state.questions = qs;
      state.answers = {};
      state.flags = {};
      state.idx = 0;
      state.showPalette = false;
      state.mobileView = 'passage';
      state.totalSec = totalSec;
      state.remainSec = totalSec;
      state.elapsedSec = 0;

      if (mode === 'exam' || mode === 'quick') {
        state.timerId = setInterval(() => {
          state.elapsedSec += 1;
          state.remainSec = Math.max(0, state.remainSec - 1);
          const tEl = rootEl.querySelector('#teap-timer-val');
          if (tEl) {
            tEl.textContent = fmtTime(state.remainSec);
            tEl.classList.toggle('is-warn', state.remainSec <= 300);
          }
          if (state.remainSec <= 0) {
            finishSession(true);
          }
        }, 1000);
      } else {
        state.timerId = setInterval(() => { state.elapsedSec += 1; }, 1000);
      }
      render();
    }

    function finishSession(autoSubmitted) {
      stopTimer();
      state.view = 'results';

      let correct = 0;
      const wrongIds = [];
      const partStats = {};
      state.questions.forEach(q => {
        if (!partStats[q.part]) partStats[q.part] = { correct: 0, total: 0 };
        partStats[q.part].total += 1;
        const chosen = state.answers[q.id];
        if (chosen === q.correctIndex) {
          correct += 1;
          partStats[q.part].correct += 1;
        } else {
          wrongIds.push(q.id);
        }
      });

      // Persist TEAP history & weak IDs independently from TOEIC
      const hist = readJson(STORAGE_HISTORY, []);
      hist.unshift({
        mode: state.mode,
        title: state.title,
        correct,
        total: state.questions.length,
        pct: Math.round((correct / Math.max(1, state.questions.length)) * 100),
        seconds: state.elapsedSec,
        parts: partStats,
        wrongIds,
        autoSubmitted: !!autoSubmitted,
        takenAt: new Date().toISOString()
      });
      writeJson(STORAGE_HISTORY, hist.slice(0, 30));

      const weakMap = readJson(STORAGE_WEAK, {});
      state.questions.forEach(q => {
        const chosen = state.answers[q.id];
        if (chosen === undefined) return;
        if (chosen !== q.correctIndex) {
          weakMap[q.id] = { id: q.id, part: q.part, wrongCount: ((weakMap[q.id] && weakMap[q.id].wrongCount) || 0) + 1, active: true };
        } else if (weakMap[q.id]) {
          weakMap[q.id].active = false;
        }
      });
      writeJson(STORAGE_WEAK, weakMap);

      render();
      rootEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function renderLauncher() {
      const hist = readJson(STORAGE_HISTORY, []);
      const last = hist[0];
      const partChips = TEAP_CONFIG.reading.parts.map(p =>
        '<button type="button" class="teap-part-chip" data-start-part="' + esc(p.id) + '">' + esc(p.name) + ' ' + esc(p.label) + '（' + p.officialCount + '問）</button>'
      ).join('');

      rootEl.innerHTML =
        '<div class="teap-launcher">' +
          '<div class="teap-pill-row" style="margin:0">' +
            '<span class="teap-pill is-blue">TEAP Reading 独自60問</span>' +
            '<span class="teap-pill">公式構成準拠（1:20 / 2A:5 / 2B:5 / 2C:10 / 3A:8 / 3B:12）</span>' +
            (last ? '<span class="teap-pill is-mint">前回記録：' + last.correct + '/' + last.total + '問（' + last.pct + '%）</span>' : '') +
          '</div>' +
          '<div class="teap-mode-grid">' +
            '<button type="button" class="teap-mode-btn" id="btn-teap-exam">' +
              '<strong>試験モード（60問・70分）</strong>' +
              '<span>全体タイマー・フラグ・未回答一覧・自動終了つきで本番形式を体験。</span>' +
            '</button>' +
            '<button type="button" class="teap-mode-btn" id="btn-teap-study">' +
              '<strong>学習モード（60問・即時解説）</strong>' +
              '<span>1問ごとに和訳・根拠箇所・全選択肢の誤答理由をすぐ確認。</span>' +
            '</button>' +
            '<button type="button" class="teap-mode-btn" id="btn-teap-quick">' +
              '<strong>クイック診断（12問・15分）</strong>' +
              '<span>全6パートから2問ずつ抽出したLexSophia独自の短縮版。</span>' +
            '</button>' +
          '</div>' +
          '<div>' +
            '<p style="font-size:13px;font-weight:700;color:#475569;margin:0 0 8px;">パート別に学習モードで解く：</p>' +
            '<div class="teap-part-select-row">' + partChips + '</div>' +
          '</div>' +
          '<div class="teap-notice-box" style="margin:0;"><strong>非公式対策教材について：</strong>すべての問題は公式見本を参考に独自作成したオリジナル問題です。TEAP公式スコアは単純比例ではないため、採点画面では正答数・正答率・パート別成績を表示します。</div>' +
        '</div>';

      rootEl.querySelector('#btn-teap-exam').addEventListener('click', () => startSession('exam', null));
      rootEl.querySelector('#btn-teap-study').addEventListener('click', () => startSession('study', null));
      rootEl.querySelector('#btn-teap-quick').addEventListener('click', () => startSession('quick', null));
      rootEl.querySelectorAll('[data-start-part]').forEach(btn => {
        btn.addEventListener('click', () => startSession('study', btn.dataset.startPart));
      });
    }

    function renderRunning() {
      const q = state.questions[state.idx];
      const stim = q.stimulusId ? TEAP_READING_STIMULI[q.stimulusId] : null;
      const chart = q.chartData || (stim && stim.chartData) || null;
      const hasStim = !!(stim || chart);
      const chosen = state.answers[q.id];
      const isStudyRevealed = state.mode === 'study' && chosen !== undefined;
      const answeredCount = Object.keys(state.answers).length;
      const pct = Math.round(((state.idx + 1) / state.questions.length) * 100);
      const isFlagged = !!state.flags[q.id];

      let stimHtml = '';
      if (hasStim) {
        stimHtml = '<div class="teap-stim-pane lx-passage-card" style="margin-top:0">' +
          (stim ? '<h3 class="teap-stim-title">' + esc(stim.title) + '</h3><p class="teap-stim-body">' + formatStimBody(stim.body) + '</p>' : '') +
          (chart ? renderChartHtml(chart) : '') +
          '</div>';
      }

      const optsHtml = q.options.map((opt, i) => {
        let cls = 'lx-choice';
        if (isStudyRevealed) {
          if (i === q.correctIndex) cls += ' is-correct';
          else if (i === chosen) cls += ' is-wrong';
        } else if (chosen === i) {
          cls += ' is-selected';
        }
        return '<button type="button" class="' + cls + '" data-opt-idx="' + i + '"' + (isStudyRevealed ? ' disabled' : '') + '>' +
          '<span class="lx-key">' + (i + 1) + '</span>' +
          '<span>' + esc(opt) + '</span>' +
          '</button>';
      }).join('');

      let fbHtml = '';
      if (isStudyRevealed) {
        const isOk = chosen === q.correctIndex;
        const distList = (q.distractorReasons || []).map((r, i) =>
          '<li><b>(' + (i + 1) + ')</b> ' + esc(r) + '</li>'
        ).join('');
        fbHtml = '<div class="teap-fb" role="status" style="background:#fff;border:0;box-shadow:0 8px 20px rgba(24,24,27,0.06),0 0 1px rgba(24,24,27,0.18);border-radius:20px">' +
          '<p><b>' + (isOk ? '◎ 正解' : '✕ 不正解 — 正解は (' + (q.correctIndex + 1) + ')') + '</b> · レベル目安：' + esc(q.difficulty) + '（独自仮分類）</p>' +
          '<p><b>解説：</b>' + esc(q.explanationJa) + '</p>' +
          '<p><b>和訳：</b>' + esc(q.translationJa) + '</p>' +
          (q.evidence ? '<div class="teap-fb__ev"><b>根拠箇所：</b>' + esc(q.evidence) + '</div>' : '') +
          '<ul class="teap-fb__dists">' + distList + '</ul>' +
          '</div>';
      }

      const paletteHtml = state.showPalette
        ? '<div class="teap-palette" id="teap-palette" style="background:#fff;border:0;box-shadow:0 8px 20px rgba(24,24,27,0.06),0 0 1px rgba(24,24,27,0.18);border-radius:20px">' +
            '<div style="display:flex;justify-content:space-between;align-items:center;font-size:12.5px;font-weight:700;color:#475569;flex-wrap:wrap;gap:8px;">' +
              '<span>問題一覧（回答済 ' + answeredCount + ' / ' + state.questions.length + ' · 未回答 ' + (state.questions.length - answeredCount) + '）</span>' +
              '<button type="button" class="lx-tool-pill" id="btn-teap-submit">採点して提出</button>' +
            '</div>' +
            '<div class="teap-palette__grid">' +
              state.questions.map((item, i) => {
                let c = 'teap-pal-btn';
                if (i === state.idx) c += ' is-current';
                if (state.flags[item.id]) c += ' is-flagged';
                else if (state.answers[item.id] !== undefined) c += ' is-answered';
                return '<button type="button" class="' + c + '" data-jump-idx="' + i + '" aria-label="第' + (i + 1) + '問">' + (i + 1) + '</button>';
              }).join('') +
            '</div>' +
          '</div>'
        : '';

      const mobileTabsHtml = hasStim
        ? '<div class="teap-mobile-tabs" role="tablist" aria-label="本文と設問の切替" style="background:transparent;top:98px">' +
            '<button type="button" class="teap-mobile-tab' + (state.mobileView === 'passage' ? ' is-active' : '') + '" data-mview="passage" role="tab">本文・図表を見る</button>' +
            '<button type="button" class="teap-mobile-tab' + (state.mobileView === 'question' ? ' is-active' : '') + '" data-mview="question" role="tab">設問に答える</button>' +
          '</div>'
        : '';

      const partInfo = (TEAP_CONFIG.reading.parts || []).find(p => p.id === q.part);
      const partLabel = 'Part ' + q.part + (partInfo ? ' · ' + partInfo.label : '');
      const timerText = (state.mode === 'exam' || state.mode === 'quick')
        ? fmtTime(state.remainSec)
        : ('回答済 ' + answeredCount + '/' + state.questions.length);

      rootEl.classList.toggle('is-wide-stim', hasStim);
      rootEl.innerHTML =
        '<div class="lx-test-head">' +
          '<div class="lx-test-meta">' +
            '<button type="button" class="lx-test-back" id="btn-teap-quit">← メニュー</button>' +
            '<span class="lx-test-count">' + (state.idx + 1) + ' / ' + state.questions.length + '問</span>' +
            '<span class="lx-test-timer' + ((state.mode === 'exam' || state.mode === 'quick') && state.remainSec <= 300 ? ' is-warn' : '') + '" id="teap-timer-val">' + esc(timerText) + '</span>' +
          '</div>' +
          '<div class="lx-test-progress" aria-hidden="true"><i style="width:' + pct + '%"></i></div>' +
        '</div>' +
        '<div class="lx-flag-row">' +
          '<span class="lx-part-tag">' + esc(partLabel) + '</span>' +
          '<div class="lx-flag-actions">' +
            '<button type="button" class="lx-flag-btn" id="btn-teap-palette">一覧 (' + answeredCount + '/' + state.questions.length + ')</button>' +
            '<button type="button" class="lx-flag-btn' + (isFlagged ? ' is-flagged' : '') + '" id="btn-teap-flag">' + (isFlagged ? '保存済み' : '迷った・保存') + '</button>' +
          '</div>' +
        '</div>' +
        paletteHtml +
        mobileTabsHtml +
        '<div class="teap-workspace' + (hasStim ? ' has-stim' : '') + '" style="margin-top:16px" data-mobile-view="' + esc(state.mobileView) + '">' +
          stimHtml +
          '<div class="teap-q-pane">' +
            '<p class="lx-q-inst" style="margin-top:0">' + esc(q.instruction) + '</p>' +
            '<p class="lx-q-stem">' + esc(q.question) + '</p>' +
            '<div class="lx-choices">' + optsHtml + '</div>' +
            fbHtml +
          '</div>' +
        '</div>' +
        '<div class="lx-test-foot">' +
          '<div class="lx-test-foot__inner">' +
            '<div class="lx-test-foot__row">' +
              (state.idx > 0 ? '<button type="button" class="lx-foot-prev" id="btn-teap-prev">← 前へ</button>' : '') +
              '<button type="button" class="lx-foot-next" id="btn-teap-next">' + (state.idx === state.questions.length - 1 ? '採点結果を見る' : '次へ') + '</button>' +
            '</div>' +
            '<p class="lx-kbd-hint" aria-hidden="true"><kbd>1</kbd>–<kbd>4</kbd> 選択 · <kbd>Enter</kbd> 次へ · <kbd>F</kbd> 保存</p>' +
          '</div>' +
        '</div>' +
        '<div class="teap-modal-backdrop" id="teap-confirm-modal" hidden role="dialog" aria-modal="true" aria-labelledby="teap-modal-title">' +
          '<div class="teap-modal">' +
            '<h3 id="teap-modal-title">解答を提出して採点しますか？</h3>' +
            '<p id="teap-modal-msg"></p>' +
            '<div class="teap-modal__acts">' +
              '<button type="button" class="teap-ctrl-btn" id="btn-teap-modal-cancel">見直す</button>' +
              '<button type="button" class="teap-ctrl-btn is-primary" id="btn-teap-modal-ok">提出して採点する</button>' +
            '</div>' +
          '</div>' +
        '</div>';

      rootEl.querySelectorAll('[data-opt-idx]').forEach(btn => {
        btn.addEventListener('click', () => {
          state.answers[q.id] = Number(btn.dataset.optIdx);
          render();
        });
      });
      rootEl.querySelectorAll('[data-mview]').forEach(btn => {
        btn.addEventListener('click', () => {
          state.mobileView = btn.dataset.mview;
          render();
        });
      });
      rootEl.querySelectorAll('[data-jump-idx]').forEach(btn => {
        btn.addEventListener('click', () => {
          state.idx = Number(btn.dataset.jumpIdx);
          state.showPalette = false;
          window.scrollTo(0, 0);
          render();
        });
      });
      rootEl.querySelector('#btn-teap-flag').addEventListener('click', () => {
        state.flags[q.id] = !state.flags[q.id];
        render();
      });
      rootEl.querySelector('#btn-teap-palette').addEventListener('click', () => {
        state.showPalette = !state.showPalette;
        render();
      });
      const prevBtn = rootEl.querySelector('#btn-teap-prev');
      if (prevBtn) prevBtn.addEventListener('click', () => {
        if (state.idx > 0) { state.idx -= 1; window.scrollTo(0, 0); render(); }
      });
      rootEl.querySelector('#btn-teap-next').addEventListener('click', () => {
        if (state.idx < state.questions.length - 1) { state.idx += 1; window.scrollTo(0, 0); render(); }
        else openSubmitConfirm();
      });
      const submitBtn = rootEl.querySelector('#btn-teap-submit');
      if (submitBtn) submitBtn.addEventListener('click', openSubmitConfirm);
      rootEl.querySelector('#btn-teap-quit').addEventListener('click', () => {
        stopTimer();
        state.view = 'launcher';
        render();
      });
      rootEl.querySelector('#btn-teap-modal-cancel').addEventListener('click', () => {
        rootEl.querySelector('#teap-confirm-modal').hidden = true;
      });
      rootEl.querySelector('#btn-teap-modal-ok').addEventListener('click', () => finishSession(false));
    }

    function openSubmitConfirm() {
      const answered = Object.keys(state.answers).length;
      const unanswered = state.questions.length - answered;
      const flagged = Object.values(state.flags).filter(Boolean).length;
      const modal = rootEl.querySelector('#teap-confirm-modal');
      const msg = rootEl.querySelector('#teap-modal-msg');
      if (!modal || !msg) { finishSession(false); return; }
      msg.textContent = '回答済み：' + answered + ' / ' + state.questions.length + '問' +
        (unanswered > 0 ? '（未回答 ' + unanswered + '問あり）' : '（全問回答済み）') +
        (flagged > 0 ? ' · フラグ付き ' + flagged + '問' : '') + '。このまま採点しますか？';
      modal.hidden = false;
    }

    function renderResults() {
      let correct = 0;
      const wrongQs = [];
      const partStats = {};
      state.questions.forEach(q => {
        if (!partStats[q.part]) partStats[q.part] = { correct: 0, total: 0 };
        partStats[q.part].total += 1;
        if (state.answers[q.id] === q.correctIndex) {
          correct += 1;
          partStats[q.part].correct += 1;
        } else {
          wrongQs.push(q);
        }
      });
      const acc = Math.round((correct / Math.max(1, state.questions.length)) * 100);
      const answered = Object.keys(state.answers).length;

      const partRows = TEAP_CONFIG.reading.parts
        .filter(p => partStats[p.id])
        .map(p => {
          const st = partStats[p.id];
          const pAcc = Math.round((st.correct / st.total) * 100);
          return { ...p, correct: st.correct, total: st.total, acc: pAcc };
        });

      const weakest = partRows.length ? [...partRows].sort((a, b) => a.acc - b.acc)[0] : null;

      const partsHtml = partRows.map(p =>
        '<div class="teap-res-part-row">' +
          '<div class="teap-res-part-top">' +
            '<span>' + esc(p.name) + '（' + esc(p.label) + '）</span>' +
            '<span>' + p.correct + ' / ' + p.total + '問（' + p.acc + '%） · <a href="' + esc(p.slug) + '">対策ガイド →</a></span>' +
          '</div>' +
          '<div class="teap-res-bar"><i style="width:' + p.acc + '%"></i></div>' +
        '</div>'
      ).join('');

      const reviewHtml = state.questions.map((q, i) => {
        const chosen = state.answers[q.id];
        const ok = chosen === q.correctIndex;
        return '<details style="padding:10px 14px;border-radius:12px;background:#f8fafc;border:1px solid #e2e8f0;">' +
          '<summary style="cursor:pointer;font-size:13.5px;font-weight:700;color:' + (ok ? '#047857' : '#b45309') + ';">' +
            'Q' + (i + 1) + ' [Part ' + esc(q.part) + '] ' + (ok ? '正解' : (chosen === undefined ? '未回答' : '不正解')) + ' — ' + esc(q.question.slice(0, 72)) + (q.question.length > 72 ? '...' : '') +
          '</summary>' +
          '<div style="margin-top:8px;font-size:13px;line-height:1.65;color:#334155;">' +
            '<p style="margin:0 0 4px;"><b>正解：</b>(' + (q.correctIndex + 1) + ') ' + esc(q.options[q.correctIndex]) +
              (chosen !== undefined && !ok ? ' ／ <b>あなたの解答：</b>(' + (chosen + 1) + ') ' + esc(q.options[chosen]) : '') + '</p>' +
            '<p style="margin:0 0 4px;"><b>解説：</b>' + esc(q.explanationJa) + '</p>' +
            '<p style="margin:0 0 4px;"><b>和訳：</b>' + esc(q.translationJa) + '</p>' +
            (q.evidence ? '<p style="margin:0;"><b>根拠：</b>' + esc(q.evidence) + '</p>' : '') +
          '</div>' +
        '</details>';
      }).join('');

      rootEl.innerHTML =
        '<div>' +
          '<div class="teap-pill-row" style="margin:0 0 10px;">' +
            '<span class="teap-pill is-blue">採点完了</span>' +
            '<span class="teap-pill">' + esc(state.title) + '</span>' +
          '</div>' +
          '<div class="teap-res-kpis">' +
            '<div class="teap-res-kpi"><p class="k">正答数</p><p class="v">' + correct + ' / ' + state.questions.length + '</p></div>' +
            '<div class="teap-res-kpi"><p class="k">正答率</p><p class="v">' + acc + '%</p></div>' +
            '<div class="teap-res-kpi"><p class="k">回答済 / 未回答</p><p class="v">' + answered + ' / ' + (state.questions.length - answered) + '</p></div>' +
            '<div class="teap-res-kpi"><p class="k">所要時間</p><p class="v">' + fmtTime(state.elapsedSec) + '</p></div>' +
          '</div>' +
          (weakest ? '<div class="teap-notice-box" style="background:#eef6ff;border-color:#bfdbfe;"><strong>最優先の強化パート：' + esc(weakest.name) + '（' + esc(weakest.label) + ' · 正答率 ' + weakest.acc + '%）</strong><br><a href="' + esc(weakest.slug) + '">' + esc(weakest.name) + ' の攻略ガイドと演習を見る →</a></div>' : '') +
          '<div class="teap-res-parts">' + partsHtml + '</div>' +
          '<div class="teap-notice-box"><strong>スコア表示について：</strong>TEAP公式スコア（各技能100点満点）は統計的処理により算出され正答率と単純比例しないため、本ツールでは独自問題の正答数・正答率・パート別成績をそのまま表示しています。' + (state.mode === 'quick' ? ' また、クイック診断（12問）はLexSophia独自の短縮版であり、60問フル模試と同等の精度を示すものではありません。' : '') + '</div>' +
          '<div class="teap-card-actions" style="margin:16px 0;">' +
            (wrongQs.length ? '<button type="button" class="btn" id="btn-teap-retry-wrong">間違えた ' + wrongQs.length + '問 だけ再挑戦する →</button>' : '') +
            '<button type="button" class="btn alt" id="btn-teap-again">モード選択に戻る</button>' +
          '</div>' +
          '<h3 style="font-size:16px;margin:18px 0 10px;">全問の解答・和訳・解説一覧</h3>' +
          '<div style="display:grid;gap:8px;">' + reviewHtml + '</div>' +
        '</div>';

      const retryBtn = rootEl.querySelector('#btn-teap-retry-wrong');
      if (retryBtn) retryBtn.addEventListener('click', () => startSession('study', null, wrongQs));
      rootEl.querySelector('#btn-teap-again').addEventListener('click', () => {
        state.view = 'launcher';
        render();
      });
    }

    function render() {
      const isFocus = state.view === 'running' || state.view === 'results';
      document.body.classList.toggle('lx-focus-mode', isFocus);
      if (state.view !== 'running') rootEl.classList.remove('is-wide-stim');
      if (state.view === 'launcher') renderLauncher();
      else if (state.view === 'running') renderRunning();
      else renderResults();
    }

    document.addEventListener('keydown', (e) => {
      if (state.view !== 'running') return;
      if (e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
      if (/^[1-4]$/.test(e.key)) {
        const btn = rootEl.querySelector('[data-opt-idx="' + (Number(e.key) - 1) + '"]');
        if (btn && !btn.disabled) { e.preventDefault(); btn.click(); }
      } else if (e.key === 'Enter') {
        const nb = rootEl.querySelector('#btn-teap-next');
        if (nb) { e.preventDefault(); nb.click(); }
      } else if (e.key === 'f' || e.key === 'F') {
        const fb = rootEl.querySelector('#btn-teap-flag');
        if (fb) { e.preventDefault(); fb.click(); }
      }
    });

    // Auto-start if URL query or explicit page option specifies mode/part
    const params = new URLSearchParams(location.search);
    const qMode = params.get('mode') || config.autoMode || null;
    const qPart = params.get('part') || config.autoPart || null;
    if (qMode || qPart) {
      startSession(qMode || 'study', qPart);
    } else {
      render();
    }
  }

  window.LexSophiaTeap = { initReadingApp: initTeapReadingApp };
})();

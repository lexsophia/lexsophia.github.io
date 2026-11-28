/* LexSophia TEAP Speaking Mock Interview Engine (API-free, browser-local)
   Features: Focus Mode, Interviewer TTS audio, Prep/Speak countdown timers,
   Local MediaRecorder voice recording & playback, Model responses, Self-check. */
(function () {
  'use strict';

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function speakPrompts(prompts, onEnd) {
    if (!('speechSynthesis' in window)) { if (onEnd) onEnd(); return; }
    try { window.speechSynthesis.cancel(); } catch (_) {}
    let idx = 0;
    function next() {
      if (idx >= prompts.length) { if (onEnd) onEnd(); return; }
      const u = new SpeechSynthesisUtterance(prompts[idx]);
      u.lang = 'en-US';
      u.rate = 0.96;
      u.onend = function () { idx++; setTimeout(next, 450); };
      u.onerror = function () { if (onEnd) onEnd(); };
      window.speechSynthesis.speak(u);
    }
    next();
  }

  function initApp() {
    const root = document.getElementById('teap-speaking-app');
    const bank = window.TEAP_SPEAKING_BANK || [];
    if (!root || !bank.length) return;

    const state = {
      view: 'launcher', // launcher | runner | result
      set: null,
      partIdx: 0,
      speaking: false,
      timerPhase: 'idle', // idle | prep | speak
      remainSec: 0,
      timerId: null,
      recording: false,
      recorder: null,
      stream: null,
      audioUrls: {}, // { partIdx: objectURL }
      showModel: {},
      checks: {} // { "partIdx-itemIdx": bool }
    };

    function stopTimer() {
      if (state.timerId) { clearInterval(state.timerId); state.timerId = null; }
      state.timerPhase = 'idle';
    }

    function stopSpeech() {
      state.speaking = false;
      if ('speechSynthesis' in window) { try { window.speechSynthesis.cancel(); } catch (_) {} }
    }

    function stopRecording() {
      if (state.recorder && state.recorder.state !== 'inactive') {
        try { state.recorder.stop(); } catch (_) {}
      }
      if (state.stream) {
        state.stream.getTracks().forEach(function (tr) { tr.stop(); });
        state.stream = null;
      }
      state.recording = false;
    }

    function startCountdown(phase, sec) {
      stopTimer();
      state.timerPhase = phase;
      state.remainSec = sec;
      render();
      state.timerId = setInterval(function () {
        state.remainSec--;
        const el = root.querySelector('#ts-timer');
        if (state.remainSec <= 0) {
          stopTimer();
          if (el) el.textContent = (phase === 'prep' ? '準備終了' : '時間終了');
          render();
        } else if (el) {
          el.textContent = (phase === 'prep' ? '準備 ' : '発話 ') + state.remainSec + '秒';
        }
      }, 1000);
    }

    function toggleRecording() {
      if (state.recording) {
        stopRecording();
        render();
        return;
      }
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert('このブラウザではマイク録音がサポートされていません。タイマーを使って声に出して練習できます。');
        return;
      }
      navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
        state.stream = stream;
        const chunks = [];
        const rec = new MediaRecorder(stream);
        rec.ondataavailable = function (e) { if (e.data && e.data.size > 0) chunks.push(e.data); };
        rec.onstop = function () {
          const blob = new Blob(chunks, { type: rec.mimeType || 'audio/webm' });
          if (state.audioUrls[state.partIdx]) URL.revokeObjectURL(state.audioUrls[state.partIdx]);
          state.audioUrls[state.partIdx] = URL.createObjectURL(blob);
          state.recording = false;
          render();
        };
        state.recorder = rec;
        state.recording = true;
        rec.start();
        render();
      }).catch(function () {
        alert('マイクへのアクセスが許可されませんでした。ブラウザのマイク設定を確認するか、録音なしで練習してください。');
      });
    }

    function startSet(setId) {
      stopTimer(); stopSpeech(); stopRecording();
      state.set = bank.find(function (s) { return s.setId === setId; }) || bank[0];
      state.partIdx = 0;
      state.audioUrls = {};
      state.showModel = {};
      state.checks = {};
      state.view = 'runner';
      window.scrollTo(0, 0);
      render();
    }

    function renderLauncher() {
      document.body.classList.remove('lx-focus-mode');
      root.innerHTML = [
        '<div class="teap-launcher">',
        '  <div>',
        '    <h2 style="margin:0 0 6px;font-size:20px">模擬面接セットを選択（Part 1〜4）</h2>',
        '    <p style="margin:0;font-size:13.5px;color:#475569">面接官の音声読み上げ・準備/発話タイマー・ブラウザ録音聴き返しで、Part 1〜4を通して実践練習できます。</p>',
        '  </div>',
        '  <div class="teap-skill-grid" style="margin:0">',
        bank.map(function (s) {
          return '<article class="teap-skill-card" style="padding:20px">' +
            '<div>' +
              '<div class="teap-skill-card__head"><span class="teap-pill is-mint">全4パート</span><span class="teap-part-meta">約10分</span></div>' +
              '<h3 style="margin-top:8px;font-size:16.5px">' + esc(s.title) + '</h3>' +
              '<p style="margin-top:6px">Part 1 インタビュー / Part 2 ロールプレイ / Part 3 スピーチ / Part 4 Q&amp;A</p>' +
            '</div>' +
            '<div class="teap-card-actions"><button type="button" class="btn" data-ts-start="' + s.setId + '">模擬面接を始める →</button></div>' +
          '</article>';
        }).join(''),
        '  </div>',
        '</div>'
      ].join('\n');

      root.querySelectorAll('[data-ts-start]').forEach(function (b) {
        b.addEventListener('click', function () { startSet(b.getAttribute('data-ts-start')); });
      });
    }

    function renderRunner() {
      document.body.classList.add('lx-focus-mode');
      const p = state.set.parts[state.partIdx];
      const total = state.set.parts.length;
      const pct = Math.round(((state.partIdx + 1) / total) * 100);
      const isLast = state.partIdx === total - 1;
      const audioUrl = state.audioUrls[state.partIdx];
      const modelOpen = !!state.showModel[state.partIdx];

      const playIcon = state.speaking
        ? '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>'
        : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';

      root.innerHTML = [
        '<div class="lx-test-head">',
        '  <div class="lx-test-meta">',
        '    <button type="button" class="lx-test-back" id="btn-ts-home">← ホーム</button>',
        '    <span class="lx-test-count">' + esc(p.part) + ' / ' + total + '</span>',
        '    <span class="lx-test-timer' + (state.timerPhase !== 'idle' && state.remainSec <= 10 ? ' is-warn' : '') + '" id="ts-timer">' + (state.timerPhase === 'prep' ? '準備 ' + state.remainSec + '秒' : (state.timerPhase === 'speak' ? '発話 ' + state.remainSec + '秒' : esc(p.badge))) + '</span>',
        '  </div>',
        '  <div class="lx-test-progress" aria-hidden="true"><i style="width:' + pct + '%"></i></div>',
        '</div>',
        '<div class="lx-flag-row">',
        '  <span class="lx-part-tag">' + esc(p.name) + '</span>',
        '  <span class="lx-flag-btn" style="cursor:default">' + esc(p.badge) + '</span>',
        '</div>',
        '<div class="lx-audio-card">',
        '  <div class="lx-audio-row">',
        '    <button type="button" class="lx-audio-play' + (state.speaking ? ' is-playing' : '') + '" id="btn-ts-play" aria-label="面接官の質問を再生">' + playIcon + '</button>',
        '    <div class="lx-audio-copy">',
        '      <p class="k">' + (state.speaking ? '面接官が質問を読み上げ中...' : '面接官の質問を聞く') + '</p>',
        '      <p class="d">' + esc(p.instruction) + '</p>',
        '    </div>',
        '  </div>',
        '  <div class="lx-audio-tools">',
        '    <div class="lx-speed-chips">',
        p.prepSec > 0 ? '      <button type="button" class="lx-tool-pill" id="btn-ts-prep">準備タイマー (' + p.prepSec + '秒)</button>' : '',
        '      <button type="button" class="lx-tool-pill" id="btn-ts-speak">発話タイマー (' + p.speakSec + '秒)</button>',
        '    </div>',
        '    <button type="button" class="lx-tool-pill' + (state.recording ? ' is-rec' : '') + '" id="btn-ts-rec">' + (state.recording ? '■ 録音を停止' : '● 自分の回答を録音') + '</button>',
        '  </div>',
        audioUrl ? '  <div class="lx-rec-player"><span style="font-size:12px;font-weight:700;color:#424a53">録音した自分の回答：</span><audio controls src="' + audioUrl + '" style="height:34px;flex:1"></audio></div>' : '',
        '</div>',
        '<div class="lx-passage-card">',
        p.topic ? '  <p class="lx-q-inst" style="margin-top:0">TOPIC CARD</p><p class="lx-q-stem" style="margin-top:6px">' + esc(p.topic) + '</p>' : '',
        p.cardPoints ? '  <p class="lx-q-inst" style="margin-top:0">ROLE-PLAY CARD（伝えるべき3点）</p><ul style="margin:8px 0 0;padding-left:20px;display:grid;gap:6px;font-size:14.5px">' + p.cardPoints.map(function (pt) { return '<li>' + esc(pt) + '</li>'; }).join('') + '</ul>' : '',
        '  <p class="lx-q-inst" style="margin-top:' + (p.topic || p.cardPoints ? '14px' : '0') + '">INTERVIEWER PROMPTS</p>',
        '  <ol style="margin:8px 0 0;padding-left:20px;display:grid;gap:8px;font-size:15.5px;font-weight:600;color:#24292f">' + p.prompts.map(function (pr) { return '<li>' + esc(pr) + '</li>'; }).join('') + '</ol>',
        '</div>',
        '<div class="lx-res-card">',
        '  <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap">',
        '    <h2 style="margin:0">自己チェック＆模範解答</h2>',
        '    <button type="button" class="lx-tool-pill" id="btn-ts-model">' + (modelOpen ? '模範解答を隠す' : '模範解答・フレーズを見る') + '</button>',
        '  </div>',
        '  <div class="lx-checklist" style="margin-top:14px">',
        p.checklist.map(function (c, i) {
          const key = state.partIdx + '-' + i;
          return '<label class="lx-check-row"><input type="checkbox" data-ts-chk="' + key + '"' + (state.checks[key] ? ' checked' : '') + '><span>' + esc(c) + '</span></label>';
        }).join(''),
        '  </div>',
        modelOpen ? [
          '  <div class="lx-compare-box is-model" style="margin-top:14px">',
          '    <h3>高得点モデル回答</h3>',
          '    <p>' + esc(p.modelResponse) + '</p>',
          '    <p style="margin-top:8px;font-size:13px;color:#424a53"><b>和訳：</b>' + esc(p.modelJa) + '</p>',
          '    <p style="margin-top:8px;font-size:13px;color:#007a5a"><b>使えるフレーズ：</b><br>' + p.phrases.map(function (ph) { return '・' + esc(ph); }).join('<br>') + '</p>',
          '  </div>'
        ].join('\n') : '',
        '</div>',
        '<div class="lx-test-foot">',
        '  <div class="lx-test-foot__inner">',
        '    <div class="lx-test-foot__row">',
        state.partIdx > 0 ? '      <button type="button" class="lx-foot-prev" id="btn-ts-prev">← 前のパート</button>' : '',
        isLast
          ? '      <button type="button" class="lx-foot-next" id="btn-ts-finish">模擬面接を完了して結果を見る</button>'
          : '      <button type="button" class="lx-foot-next" id="btn-ts-next">次のパートへ</button>',
        '    </div>',
        '  </div>',
        '</div>'
      ].join('\n');

      root.querySelector('#btn-ts-home').addEventListener('click', function () {
        const goHome = function () { stopTimer(); stopSpeech(); stopRecording(); window.location.href = '/teap/'; };
        if (state.partIdx > 0 && window.LexSophiaShell && window.LexSophiaShell.confirmExit) {
          window.LexSophiaShell.confirmExit(goHome);
        } else {
          goHome();
        }
      });
      root.querySelector('#btn-ts-play').addEventListener('click', function () {
        if (state.speaking) { stopSpeech(); render(); }
        else {
          state.speaking = true; render();
          speakPrompts(p.prompts, function () { state.speaking = false; render(); });
        }
      });
      const prepBtn = root.querySelector('#btn-ts-prep');
      if (prepBtn) prepBtn.addEventListener('click', function () { startCountdown('prep', p.prepSec); });
      root.querySelector('#btn-ts-speak').addEventListener('click', function () { startCountdown('speak', p.speakSec); });
      root.querySelector('#btn-ts-rec').addEventListener('click', toggleRecording);
      root.querySelector('#btn-ts-model').addEventListener('click', function () {
        state.showModel[state.partIdx] = !state.showModel[state.partIdx];
        render();
      });
      root.querySelectorAll('[data-ts-chk]').forEach(function (cb) {
        cb.addEventListener('change', function () { state.checks[cb.getAttribute('data-ts-chk')] = cb.checked; });
      });
      const prevBtn = root.querySelector('#btn-ts-prev');
      if (prevBtn) prevBtn.addEventListener('click', function () {
        stopTimer(); stopSpeech(); stopRecording(); state.partIdx--; window.scrollTo(0, 0); render();
      });
      const nextBtn = root.querySelector('#btn-ts-next');
      if (nextBtn) nextBtn.addEventListener('click', function () {
        stopTimer(); stopSpeech(); stopRecording(); state.partIdx++; window.scrollTo(0, 0); render();
      });
      const finBtn = root.querySelector('#btn-ts-finish');
      if (finBtn) finBtn.addEventListener('click', function () {
        stopTimer(); stopSpeech(); stopRecording(); state.view = 'result'; window.scrollTo(0, 0); render();
      });
    }

    function renderResult() {
      document.body.classList.add('lx-focus-mode');
      let total = 0;
      let done = 0;
      state.set.parts.forEach(function (p, pi) {
        p.checklist.forEach(function (_, ci) {
          total++;
          if (state.checks[pi + '-' + ci]) done++;
        });
      });
      const pct = total ? Math.round((done / total) * 100) : 0;
      if (window.LexSophiaProgress) {
        window.LexSophiaProgress.recordSession({
          exam: 'teap',
          skill: 'speaking',
          mode: state.set.setId,
          title: state.set.title,
          correct: done,
          total: total,
          acc: pct
        });
      }
      const circum = 603.2;
      const offset = (circum * (1 - pct / 100)).toFixed(1);

      root.innerHTML = [
        '<div class="lx-test-head">',
        '  <div class="lx-test-meta">',
        '    <button type="button" class="lx-test-back" id="btn-ts-home">← ホーム</button>',
        '    <span class="lx-test-count">Speaking 完了</span>',
        '    <span class="lx-test-timer">Part 1–4</span>',
        '  </div>',
        '</div>',
        '<div class="lx-res-head">',
        '  <div class="lx-res-head__copy">',
        '    <h1>Speaking 振り返り</h1>',
        '    <p>' + esc(state.set.title) + 'のセルフチェック結果です。</p>',
        '  </div>',
        '  <img class="lx-res-head__owl" src="/img/owl-blue.png" alt="" width="236" height="320" decoding="async">',
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
        '      <p class="lx-gauge__sub">' + done + ' / ' + total + ' 項目達成</p>',
        '    </div>',
        '  </div>',
        '</div>',
        '<div class="lx-res-actions is-two">',
        '  <button type="button" class="lx-foot-next" id="btn-ts-again">別の模擬面接セットを試す</button>',
        '  <button type="button" class="lx-foot-prev" id="btn-ts-back-home">TEAPホームへ戻る</button>',
        '</div>'
      ].join('\n');

      root.querySelector('#btn-ts-home').addEventListener('click', function () { window.location.href = '/teap/'; });
      root.querySelector('#btn-ts-back-home').addEventListener('click', function () { window.location.href = '/teap/'; });
      root.querySelector('#btn-ts-again').addEventListener('click', function () { state.view = 'launcher'; window.scrollTo(0, 0); render(); });
    }

    function render() {
      if (state.view === 'launcher') renderLauncher();
      else if (state.view === 'runner') renderRunner();
      else renderResult();
    }

    const params = new URLSearchParams(window.location.search);
    const qSet = params.get('set');
    if (qSet) startSet(qSet);
    else render();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initApp);
  else initApp();
})();

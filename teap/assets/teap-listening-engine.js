/* LexSophia TEAP Listening Interactive Practice Engine
   Supports: Exam Mode (1-play, Part 1A/1B question after audio, Part 2A/2B preview),
   Study Mode (unlimited replay, speed control, instant script/translation/trap analysis),
   Quick Diagnosis (12Q covering all 5 parts), and Part-by-Part Practice. */
(function () {
  'use strict';

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ---------- SVG Chart Renderer (Bar & Line) ---------- */
  function renderChartSVG(chart, compact) {
    if (!chart) return '';
    const w = compact ? 260 : 460;
    const h = compact ? 150 : 210;
    const padL = compact ? 30 : 44;
    const padR = 14;
    const padT = 18;
    const padB = compact ? 28 : 34;
    const plotW = w - padL - padR;
    const plotH = h - padT - padB;
    const maxVal = chart.max || 100;

    let inner = '';
    // Horizontal grid lines
    const steps = 4;
    for (let i = 0; i <= steps; i++) {
      const y = padT + (plotH * i) / steps;
      const v = Math.round(maxVal * (1 - i / steps));
      inner += '<line x1="' + padL + '" y1="' + y + '" x2="' + (w - padR) + '" y2="' + y + '" stroke="#e2e8f0" stroke-width="1"/>';
      inner += '<text x="' + (padL - 5) + '" y="' + (y + 3) + '" text-anchor="end" font-size="' + (compact ? 9 : 11) + '" fill="#64748b">' + v + '</text>';
    }

    if (chart.type === 'bar' && Array.isArray(chart.items)) {
      const n = chart.items.length;
      const slot = plotW / n;
      const barW = Math.min(compact ? 32 : 52, slot * 0.56);
      chart.items.forEach(function (it, idx) {
        const bh = Math.max(2, (it.value / maxVal) * plotH);
        const x = padL + idx * slot + (slot - barW) / 2;
        const y = padT + plotH - bh;
        inner += '<rect x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + barW.toFixed(1) + '" height="' + bh.toFixed(1) + '" rx="4" fill="#00a87e"/>';
        inner += '<text x="' + (x + barW / 2).toFixed(1) + '" y="' + (y - 4).toFixed(1) + '" text-anchor="middle" font-size="' + (compact ? 9.5 : 11.5) + '" font-weight="700" fill="#0f172a">' + it.value + (chart.unit || '') + '</text>';
        inner += '<text x="' + (x + barW / 2).toFixed(1) + '" y="' + (h - 8) + '" text-anchor="middle" font-size="' + (compact ? 9.5 : 11) + '" fill="#334155">' + esc(it.label) + '</text>';
      });
    } else if (chart.type === 'line' && Array.isArray(chart.values)) {
      const n = chart.values.length;
      const pts = chart.values.map(function (v, idx) {
        const x = padL + (n === 1 ? plotW / 2 : (plotW * idx) / (n - 1));
        const y = padT + plotH - (v / maxVal) * plotH;
        return { x: x, y: y, v: v, label: chart.labels[idx] };
      });
      const poly = pts.map(function (p) { return p.x.toFixed(1) + ',' + p.y.toFixed(1); }).join(' ');
      inner += '<polyline fill="none" stroke="#00a87e" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round" points="' + poly + '"/>';
      pts.forEach(function (p) {
        inner += '<circle cx="' + p.x.toFixed(1) + '" cy="' + p.y.toFixed(1) + '" r="' + (compact ? 3.5 : 4.5) + '" fill="#ffffff" stroke="#00a87e" stroke-width="2.4"/>';
        inner += '<text x="' + p.x.toFixed(1) + '" y="' + (p.y - 7).toFixed(1) + '" text-anchor="middle" font-size="' + (compact ? 9.5 : 11) + '" font-weight="700" fill="#0f172a">' + p.v + '</text>';
        inner += '<text x="' + p.x.toFixed(1) + '" y="' + (h - 8) + '" text-anchor="middle" font-size="' + (compact ? 9.5 : 11) + '" fill="#334155">' + esc(p.label) + '</text>';
      });
    }

    return '<svg viewBox="0 0 ' + w + ' ' + h + '" role="img" aria-label="' + esc(chart.title || 'Chart') + '">' + inner + '</svg>';
  }

  /* ---------- Build Normalized Unit List (Part 1 single items + Part 2 multi-question sets) ---------- */
  function buildAllUnits() {
    const p1 = Array.isArray(window.TEAP_LISTENING_P1) ? window.TEAP_LISTENING_P1 : [];
    const p2 = Array.isArray(window.TEAP_LISTENING_P2) ? window.TEAP_LISTENING_P2 : [];
    const units = [];

    p1.forEach(function (q) {
      units.push({
        unitId: q.id,
        part: q.part,
        title: 'Q' + q.num + '（Part ' + q.part + '）',
        situation: q.situation,
        turns: q.turns,
        jaScript: q.jaScript,
        stimulusChart: null,
        previewQuestion: q.part === '1C',
        questions: [q]
      });
    });

    p2.forEach(function (set) {
      const nums = set.questions.map(function (q) { return q.num; });
      units.push({
        unitId: set.setId,
        part: set.part,
        title: 'Q' + nums[0] + '–' + nums[nums.length - 1] + '（Part ' + set.part + ' · ' + set.title + '）',
        situation: set.situation,
        turns: set.turns,
        jaScript: set.jaScript,
        stimulusChart: set.stimulusChart || null,
        previewQuestion: true,
        questions: set.questions.map(function (q) {
          return Object.assign({ part: set.part }, q);
        })
      });
    });

    return units;
  }

  function buildQuickUnits(allUnits) {
    // 12 questions across all 5 parts: 1A(2), 1B(2), 1C(1), 2A(1 set = 3Q), 2B(1 set = 4Q)
    const picks = [];
    const byPart = function (p) { return allUnits.filter(function (u) { return u.part === p; }); };
    picks.push.apply(picks, byPart('1A').slice(0, 2));
    picks.push.apply(picks, byPart('1B').slice(0, 2));
    picks.push.apply(picks, byPart('1C').slice(0, 1));
    picks.push.apply(picks, byPart('2A').slice(0, 1));
    picks.push.apply(picks, byPart('2B').slice(0, 1));
    return picks;
  }

  /* ---------- Web Speech API Audio Player ---------- */
  const SpeechPlayer = {
    supported: typeof window !== 'undefined' && 'speechSynthesis' in window,
    playing: false,
    queueTimer: null,
    rate: 1.0,
    voices: [],

    loadVoices: function () {
      if (!this.supported) return;
      const list = window.speechSynthesis.getVoices() || [];
      this.voices = list.filter(function (v) { return /^en/i.test(v.lang); });
    },

    pickVoice: function (speaker) {
      if (!this.voices.length) this.loadVoices();
      if (!this.voices.length) return null;
      const preferUS = this.voices.filter(function (v) { return /en[-_]US/i.test(v.lang); });
      const pool = preferUS.length ? preferUS : this.voices;
      if (speaker === 'W') {
        const fem = pool.find(function (v) { return /samantha|victoria|karen|zira|google us english|aria|jenny|female/i.test(v.name); });
        return fem || pool[0];
      }
      const mal = pool.find(function (v) { return /alex|daniel|david|fred|guy|male|matthew/i.test(v.name); });
      return mal || pool[pool.length - 1] || pool[0];
    },

    stop: function () {
      this.playing = false;
      if (this.queueTimer) {
        clearTimeout(this.queueTimer);
        this.queueTimer = null;
      }
      if (this.supported) {
        try { window.speechSynthesis.cancel(); } catch (_) {}
      }
    },

    playSequence: function (segments, onProgress, onDone) {
      const self = this;
      self.stop();
      if (!self.supported) {
        if (onDone) onDone(false);
        return;
      }
      self.playing = true;
      let idx = 0;

      function next() {
        if (!self.playing) return;
        if (idx >= segments.length) {
          self.playing = false;
          if (onDone) onDone(true);
          return;
        }
        const seg = segments[idx];
        if (onProgress) onProgress(idx, seg);
        const utter = new SpeechSynthesisUtterance(seg.text);
        utter.lang = 'en-US';
        utter.rate = self.rate;
        utter.pitch = seg.speaker === 'W' ? 1.08 : 0.94;
        const v = self.pickVoice(seg.speaker);
        if (v) utter.voice = v;

        utter.onend = function () {
          if (!self.playing) return;
          idx++;
          self.queueTimer = setTimeout(next, seg.pauseMs || 380);
        };
        utter.onerror = function () {
          if (!self.playing) return;
          self.playing = false;
          if (onDone) onDone(false);
        };
        window.speechSynthesis.speak(utter);
      }

      next();
    }
  };

  if (SpeechPlayer.supported) {
    SpeechPlayer.loadVoices();
    if (typeof window.speechSynthesis.onvoiceschanged !== 'undefined') {
      window.speechSynthesis.onvoiceschanged = function () { SpeechPlayer.loadVoices(); };
    }
  }

  /* ---------- Main App Mount ---------- */
  function initApp() {
    const root = document.getElementById('teap-listening-app');
    if (!root) return;

    const allUnits = buildAllUnits();
    if (!allUnits.length) {
      root.innerHTML = '<p>問題データの読み込みに失敗しました。</p>';
      return;
    }

    const state = {
      view: 'launcher', // launcher | runner | result
      mode: 'study',    // exam | study | quick
      partFilter: null,
      units: [],
      unitIdx: 0,
      answers: {},      // { qId: optionIndex }
      playedUnits: {},  // { unitId: count }
      revealedQ: {},    // { unitId: true } (for exam mode Part 1A/1B after audio)
      showScript: {},   // { unitId: true }
      rate: 1.0,
      countdown: null,
      countdownSec: 0,
      statusText: ''
    };

    function clearCountdown() {
      if (state.countdown) {
        clearInterval(state.countdown);
        state.countdown = null;
      }
      state.countdownSec = 0;
    }

    function startCountdown(sec) {
      clearCountdown();
      state.countdownSec = sec;
      const badge = root.querySelector('#tl-answer-timer');
      if (badge) {
        badge.textContent = '残り ' + state.countdownSec + '秒';
        badge.classList.remove('is-warn');
      }
      state.countdown = setInterval(function () {
        state.countdownSec--;
        const b = root.querySelector('#tl-answer-timer');
        if (!b) { clearCountdown(); return; }
        if (state.countdownSec <= 0) {
          clearCountdown();
          b.textContent = '10秒経過';
          b.classList.add('is-warn');
        } else {
          b.textContent = '残り ' + state.countdownSec + '秒';
        }
      }, 1000);
    }

    function startSession(mode, partFilter) {
      SpeechPlayer.stop();
      clearCountdown();
      state.mode = mode;
      state.partFilter = partFilter || null;
      if (mode === 'quick') {
        state.units = buildQuickUnits(allUnits);
      } else if (partFilter) {
        state.units = allUnits.filter(function (u) { return u.part === partFilter; });
      } else {
        state.units = allUnits.slice();
      }
      state.unitIdx = 0;
      state.answers = {};
      state.playedUnits = {};
      state.revealedQ = {};
      state.showScript = {};
      state.statusText = '';
      state.view = 'runner';
      render();
    }

    function totalQuestionsInSession() {
      return state.units.reduce(function (acc, u) { return acc + u.questions.length; }, 0);
    }

    function answeredCountInSession() {
      let c = 0;
      state.units.forEach(function (u) {
        u.questions.forEach(function (q) {
          if (state.answers[q.id] !== undefined) c++;
        });
      });
      return c;
    }

    function playCurrentUnit() {
      const u = state.units[state.unitIdx];
      if (!u) return;
      const isExam = state.mode === 'exam' || state.mode === 'quick';
      const count = state.playedUnits[u.unitId] || 0;
      if (isExam && count >= 1) return;

      SpeechPlayer.rate = state.rate;
      const segments = [];
      u.turns.forEach(function (t) {
        segments.push({ speaker: t.speaker, text: t.text, label: t.speaker === 'W' ? 'Female' : 'Male', pauseMs: 360 });
      });
      // For Part 1A & 1B, read the question right after the audio (matching real TEAP)
      if (!u.previewQuestion && u.questions[0]) {
        segments.push({ speaker: 'M', text: 'Question. ' + u.questions[0].question, label: 'Question', pauseMs: 300 });
      }

      state.playedUnits[u.unitId] = count + 1;
      state.statusText = '再生中...';
      render();

      SpeechPlayer.playSequence(
        segments,
        function (segIdx, seg) {
          const el = root.querySelector('#tl-audio-status');
          if (el) el.textContent = '再生中（' + (segIdx + 1) + '/' + segments.length + ' · ' + seg.label + '）';
        },
        function (ok) {
          state.revealedQ[u.unitId] = true;
          state.statusText = ok ? '再生完了' : '音声合成が利用できないためスクリプトを表示してください';
          if (!ok) state.showScript[u.unitId] = true;
          render();
          if (ok && isExam) startCountdown(10);
        }
      );
    }

    function renderLauncher() {
      const cfg = window.TEAP_LISTENING_CONFIG;
      root.innerHTML = [
        '<div class="teap-launcher">',
        '  <div>',
        '    <h2 style="margin:0 0 6px;font-size:20px">演習モードを選択</h2>',
        '    <p style="margin:0;font-size:13.5px;color:#475569">公式構成（Part 1A〜2B・全50問）に沿った完全オリジナル問題です。ブラウザの英語音声合成で今すぐリスニング演習ができます。</p>',
        '  </div>',
        '  <div class="teap-mode-grid">',
        '    <button type="button" class="teap-mode-btn" id="btn-tl-quick">',
        '      <strong>12問クイック診断（約8分）</strong>',
        '      <span>全5パート（1A〜2B）を網羅した短縮診断。1回再生・パート別の弱点を即確認。</span>',
        '    </button>',
        '    <button type="button" class="teap-mode-btn" id="btn-tl-study">',
        '      <strong>50問 学習モード（即時解説）</strong>',
        '      <span>何度でも再生・速度変更OK。1問ごとにスクリプト・和訳・引っ掛け解説を表示。</span>',
        '    </button>',
        '    <button type="button" class="teap-mode-btn" id="btn-tl-exam">',
        '      <strong>50問 本番モード</strong>',
        '      <span>1回再生限定・Part 1A/1Bは音声後に質問表示・10秒解答タイマー付き。</span>',
        '    </button>',
        '  </div>',
        '  <div>',
        '    <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:#334155">パート別集中演習（学習モード）</p>',
        '    <div class="teap-part-select-row">',
        cfg.parts.map(function (p) {
          return '<button type="button" class="teap-part-chip" data-tl-part="' + p.id + '">' + p.name + '：' + p.label + '（' + p.officialCount + '問）</button>';
        }).join(''),
        '    </div>',
        '  </div>',
        '</div>'
      ].join('\n');

      root.querySelector('#btn-tl-quick').addEventListener('click', function () { startSession('quick'); });
      root.querySelector('#btn-tl-study').addEventListener('click', function () { startSession('study'); });
      root.querySelector('#btn-tl-exam').addEventListener('click', function () { startSession('exam'); });
      root.querySelectorAll('[data-tl-part]').forEach(function (b) {
        b.addEventListener('click', function () { startSession('study', b.getAttribute('data-tl-part')); });
      });
    }

    function renderRunner() {
      const u = state.units[state.unitIdx];
      const isExam = state.mode === 'exam' || state.mode === 'quick';
      const totalQ = totalQuestionsInSession();
      const doneQ = answeredCountInSession();
      const pct = Math.round(((state.unitIdx + 1) / state.units.length) * 100);
      const played = state.playedUnits[u.unitId] || 0;
      const playDisabled = isExam && played >= 1;
      const hideQuestionNow = isExam && !u.previewQuestion && !state.revealedQ[u.unitId];
      const scriptVisible = !isExam && !!state.showScript[u.unitId];
      const partMeta = (window.TEAP_LISTENING_CONFIG.parts || []).find(function (p) { return p.id === u.part; });
      const partTagText = 'Part ' + u.part + (partMeta ? ' · ' + partMeta.label : '');
      const countText = u.questions.length === 1
        ? (u.questions[0].num + ' / ' + totalQ + '問')
        : ('Q' + u.questions[0].num + '–' + u.questions[u.questions.length - 1].num + '（全' + totalQ + '問）');

      const playIcon = SpeechPlayer.playing
        ? '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>'
        : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';

      const audioTitle = SpeechPlayer.playing
        ? '音声を再生中...'
        : (playDisabled ? '音声再生済み（本番1回限定）' : (played > 0 ? '音声をもう一度再生' : '音声を再生'));

      const audioSub = state.statusText || (u.previewQuestion
        ? '質問・図表を確認してから再生できます'
        : (isExam ? '再生後に質問と選択肢が表示されます' : '再生して内容を聞き取ってください'));

      const audioCard = [
        '<div class="lx-audio-card">',
        '  <div class="lx-audio-row">',
        '    <button type="button" class="lx-audio-play' + (SpeechPlayer.playing ? ' is-playing' : '') + '" id="btn-tl-play" aria-label="' + esc(audioTitle) + '"' + (playDisabled ? ' disabled' : '') + '>' + playIcon + '</button>',
        '    <div class="lx-audio-copy">',
        '      <p class="k">' + esc(audioTitle) + '</p>',
        '      <p class="d" id="tl-audio-status">' + esc(audioSub) + '</p>',
        '    </div>',
        '  </div>',
        !isExam ? [
          '  <div class="lx-audio-tools">',
          '    <div class="lx-speed-chips" role="group" aria-label="再生速度">',
          '      <span class="lx-speed-chips__label">速度:</span>',
          [0.85, 1.0, 1.15].map(function (r) {
            return '<button type="button" class="lx-speed-chip' + (state.rate === r ? ' is-active' : '') + '" data-tl-rate="' + r + '">' + r.toFixed(r === 1 ? 1 : 2) + '×</button>';
          }).join(''),
          '    </div>',
          '    <button type="button" class="lx-tool-pill" id="btn-tl-script">' + (scriptVisible ? 'スクリプトを隠す' : '英文スクリプト') + '</button>',
          '  </div>'
        ].join('\n') : '',
        scriptVisible ? '<div class="tl-script-box">' + u.turns.map(function (t) {
          return '<p><strong>' + (t.speaker === 'W' ? 'Woman' : 'Man') + ':</strong> ' + esc(t.text) + '</p>';
        }).join('') + '</div>' : '',
        '</div>'
      ].join('\n');

      const stimChartHtml = u.stimulusChart ? [
        '<div class="lx-passage-card">',
        '  <p class="teap-chart-title">' + esc(u.stimulusChart.title) + '</p>',
        u.stimulusChart.sub ? '  <p class="teap-chart-sub">' + esc(u.stimulusChart.sub) + '</p>' : '',
        renderChartSVG(u.stimulusChart, false),
        '</div>'
      ].join('\n') : '';

      const questionsHtml = hideQuestionNow
        ? '<div class="lx-situation-note" style="margin-top:18px">まずは上の再生ボタンから音声を聞き取ってください。終了後に質問と選択肢が表示されます。</div>'
        : u.questions.map(function (q) {
            const chosen = state.answers[q.id];
            const showFb = !isExam && chosen !== undefined;
            const optsHtml = q.chartOptions
              ? '<div class="tl-chart-opt-grid" style="margin-top:18px">' + q.chartOptions.map(function (ch, idx) {
                  let cls = 'tl-chart-opt';
                  if (showFb) {
                    if (idx === q.answer) cls += ' is-correct';
                    else if (idx === chosen) cls += ' is-wrong';
                  } else if (idx === chosen) {
                    cls += ' is-selected';
                  }
                  return '<button type="button" class="' + cls + '" data-tl-q="' + q.id + '" data-tl-opt="' + idx + '">' +
                    '<div class="tl-chart-opt__head"><span class="lx-key" style="width:28px;height:28px;border-radius:50%;display:grid;place-items:center;background:#f6f8fa;font-size:12.5px;font-weight:700">' + (idx + 1) + '</span><strong>' + esc(ch.title) + '</strong></div>' +
                    renderChartSVG(ch, true) +
                  '</button>';
                }).join('') + '</div>'
              : '<div class="lx-choices">' + q.options.map(function (opt, idx) {
                  let cls = 'lx-choice';
                  if (showFb) {
                    if (idx === q.answer) cls += ' is-correct';
                    else if (idx === chosen) cls += ' is-wrong';
                  } else if (idx === chosen) {
                    cls += ' is-selected';
                  }
                  return '<button type="button" class="' + cls + '" data-tl-q="' + q.id + '" data-tl-opt="' + idx + '">' +
                    '<span class="lx-key">' + (idx + 1) + '</span><span>' + esc(opt) + '</span></button>';
                }).join('') + '</div>';

            const fbHtml = showFb ? [
              '<div class="teap-fb" style="background:#fff;border:0;box-shadow:0 8px 20px rgba(24,24,27,0.06),0 0 1px rgba(24,24,27,0.18);border-radius:20px">',
              '  <div><b>' + (chosen === q.answer ? '◎ 正解！' : '✕ 不正解（正解：' + (q.answer + 1) + '）') + '</b></div>',
              '  <div class="teap-fb__ev"><b>根拠：</b>' + esc(q.evidence) + '</div>',
              '  <div><b>解説：</b>' + esc(q.explanation) + '</div>',
              q.trapType ? '  <div><b>引っ掛けの類型：</b>' + esc(q.trapType) + '</div>' : '',
              '  <details style="margin-top:4px"><summary style="cursor:pointer;font-weight:700;color:#0f172a">和訳スクリプトを見る</summary><p style="white-space:pre-line;margin:8px 0 0">' + esc(u.jaScript) + '</p></details>',
              '</div>'
            ].join('\n') : '';

            return '<div class="tl-q-block" style="border-top-color:#e6ebf0">' +
              (u.questions.length > 1 ? '<p class="lx-q-inst">Q' + q.num + '</p>' : '') +
              '<p class="lx-q-stem">' + esc(q.question) + '</p>' +
              optsHtml + fbHtml +
            '</div>';
          }).join('');

      const isLast = state.unitIdx === state.units.length - 1;
      root.innerHTML = [
        '<div class="lx-test-head">',
        '  <div class="lx-test-meta">',
        '    <button type="button" class="lx-test-back" id="btn-tl-exit">← メニュー</button>',
        '    <span class="lx-test-count">' + esc(countText) + '</span>',
        '    <span class="lx-test-timer" id="tl-answer-timer">' + (state.countdownSec > 0 ? '残り ' + state.countdownSec + '秒' : '解答済 ' + doneQ + '/' + totalQ) + '</span>',
        '  </div>',
        '  <div class="lx-test-progress" aria-hidden="true"><i style="width:' + pct + '%"></i></div>',
        '</div>',
        audioCard,
        '<div class="lx-flag-row">',
        '  <span class="lx-part-tag">' + esc(partTagText) + '</span>',
        '  <span class="lx-flag-btn" style="cursor:default">' + (state.mode === 'quick' ? '12問診断' : (state.mode === 'exam' ? '本番1回再生' : '学習モード')) + '</span>',
        '</div>',
        '<div class="lx-situation-note"><strong>Situation:</strong> ' + esc(u.situation) + '</div>',
        stimChartHtml,
        questionsHtml,
        '<div class="lx-test-foot">',
        '  <div class="lx-test-foot__inner">',
        '    <div class="lx-test-foot__row">',
        state.unitIdx > 0 ? '      <button type="button" class="lx-foot-prev" id="btn-tl-prev">← 前へ</button>' : '',
        isLast
          ? '      <button type="button" class="lx-foot-next" id="btn-tl-finish">採点して結果を見る</button>'
          : '      <button type="button" class="lx-foot-next" id="btn-tl-next">次へ</button>',
        '    </div>',
        '    <p class="lx-kbd-hint" aria-hidden="true"><kbd>1</kbd>–<kbd>4</kbd> 選択 · <kbd>Enter</kbd> 次へ · <kbd>R</kbd> 音声再生</p>',
        '  </div>',
        '</div>'
      ].join('\n');

      const playBtn = root.querySelector('#btn-tl-play');
      if (playBtn) {
        playBtn.addEventListener('click', function () {
          if (SpeechPlayer.playing) {
            SpeechPlayer.stop();
            state.statusText = '停止しました';
            render();
          } else {
            playCurrentUnit();
          }
        });
      }
      const scriptBtn = root.querySelector('#btn-tl-script');
      if (scriptBtn) scriptBtn.addEventListener('click', function () { state.showScript[u.unitId] = !state.showScript[u.unitId]; render(); });
      root.querySelectorAll('[data-tl-rate]').forEach(function (b) {
        b.addEventListener('click', function () {
          state.rate = parseFloat(b.getAttribute('data-tl-rate')) || 1.0;
          render();
        });
      });
      root.querySelectorAll('[data-tl-q]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          const qid = btn.getAttribute('data-tl-q');
          const opt = parseInt(btn.getAttribute('data-tl-opt'), 10);
          state.answers[qid] = opt;
          render();
        });
      });
      root.querySelector('#btn-tl-exit').addEventListener('click', function () {
        SpeechPlayer.stop(); clearCountdown(); state.view = 'launcher'; render();
      });
      const prevBtn = root.querySelector('#btn-tl-prev');
      if (prevBtn) prevBtn.addEventListener('click', function () {
        if (state.unitIdx > 0) { SpeechPlayer.stop(); clearCountdown(); state.unitIdx--; state.statusText = ''; window.scrollTo(0, 0); render(); }
      });
      const nextBtn = root.querySelector('#btn-tl-next');
      if (nextBtn) nextBtn.addEventListener('click', function () {
        if (state.unitIdx < state.units.length - 1) { SpeechPlayer.stop(); clearCountdown(); state.unitIdx++; state.statusText = ''; window.scrollTo(0, 0); render(); }
      });
      const finBtn = root.querySelector('#btn-tl-finish');
      if (finBtn) finBtn.addEventListener('click', function () {
        SpeechPlayer.stop(); clearCountdown(); state.view = 'result'; window.scrollTo(0, 0); render();
      });
    }

    function renderResult() {
      const partStats = {};
      let total = 0;
      let correct = 0;
      const reviewItems = [];

      state.units.forEach(function (u) {
        if (!partStats[u.part]) partStats[u.part] = { total: 0, correct: 0 };
        u.questions.forEach(function (q) {
          total++;
          partStats[u.part].total++;
          const chosen = state.answers[q.id];
          const ok = chosen === q.answer;
          if (ok) {
            correct++;
            partStats[u.part].correct++;
          }
          reviewItems.push({ unit: u, q: q, chosen: chosen, ok: ok });
        });
      });

      const acc = total ? Math.round((correct / total) * 100) : 0;
      let weakestPart = null;
      let weakestPct = 101;
      Object.keys(partStats).forEach(function (p) {
        const s = partStats[p];
        const pct = Math.round((s.correct / s.total) * 100);
        if (pct < weakestPct) { weakestPct = pct; weakestPart = p; }
      });

      root.innerHTML = [
        '<div class="teap-topbar">',
        '  <div class="teap-topbar__left"><span class="teap-pill is-mint">採点結果</span></div>',
        '  <div class="teap-topbar__right"><button type="button" class="teap-ctrl-btn is-primary" id="btn-tl-retry">もう一度メニューへ</button></div>',
        '</div>',
        '<div class="teap-res-kpis">',
        '  <div class="teap-res-kpi"><p class="k">正答数</p><p class="v">' + correct + ' / ' + total + '</p></div>',
        '  <div class="teap-res-kpi"><p class="k">正答率</p><p class="v">' + acc + '%</p></div>',
        '  <div class="teap-res-kpi"><p class="k">最優先の弱点</p><p class="v">' + (weakestPart ? 'Part ' + weakestPart : '—') + '</p></div>',
        '  <div class="teap-res-kpi"><p class="k">弱点正答率</p><p class="v">' + (weakestPart ? weakestPct + '%' : '—') + '</p></div>',
        '</div>',
        '<div class="teap-res-parts">',
        Object.keys(partStats).map(function (p) {
          const s = partStats[p];
          const pct = Math.round((s.correct / s.total) * 100);
          return '<div class="teap-res-part-row">' +
            '<div class="teap-res-part-top"><span>Part ' + esc(p) + '</span><span>' + s.correct + ' / ' + s.total + '（' + pct + '%）</span></div>' +
            '<div class="teap-res-bar"><i style="width:' + pct + '%"></i></div>' +
          '</div>';
        }).join(''),
        '</div>',
        '<div class="teap-notice-box"><strong>スコア表示について：</strong>TEAP公式スコア（100点満点）は統計処理で算出されるため、独自問題の正答率を公式スコアに直結表示せず、パート別正答率と弱点分析を提供しています。</div>',
        '<h3 style="margin:20px 0 10px;font-size:17px">全問振り返り（根拠・引っ掛け類型・和訳）</h3>',
        '<div style="display:grid;gap:10px">',
        reviewItems.map(function (it) {
          const q = it.q;
          return '<details class="tl-review-item">' +
            '<summary><span class="teap-pill ' + (it.ok ? 'is-mint' : 'is-amber') + '">' + (it.ok ? '正解' : '復習') + '</span> <strong>Q' + q.num + '（Part ' + esc(it.unit.part) + '）</strong> ' + esc(q.question) + '</summary>' +
            '<div class="tl-review-body">' +
              '<p><b>あなたの解答：</b>' + (it.chosen !== undefined ? (it.chosen + 1) + '. ' + esc(q.options[it.chosen]) : '未解答') + ' ／ <b>正解：</b>' + (q.answer + 1) + '. ' + esc(q.options[q.answer]) + '</p>' +
              '<p><b>根拠：</b>' + esc(q.evidence) + '</p>' +
              '<p><b>解説：</b>' + esc(q.explanation) + '</p>' +
              (q.trapType ? '<p><b>引っ掛け類型：</b>' + esc(q.trapType) + '</p>' : '') +
              '<p style="white-space:pre-line;color:#475569"><b>和訳スクリプト：</b>\n' + esc(it.unit.jaScript) + '</p>' +
            '</div>' +
          '</details>';
        }).join(''),
        '</div>'
      ].join('\n');

      root.querySelector('#btn-tl-retry').addEventListener('click', function () {
        state.view = 'launcher';
        render();
      });
    }

    function render() {
      const isFocus = state.view === 'runner' || state.view === 'result';
      document.body.classList.toggle('lx-focus-mode', isFocus);
      root.classList.remove('is-wide-stim');
      if (state.view === 'launcher') renderLauncher();
      else if (state.view === 'runner') renderRunner();
      else renderResult();
    }

    document.addEventListener('keydown', function (e) {
      if (state.view !== 'runner') return;
      if (e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
      const u = state.units[state.unitIdx];
      if (!u) return;
      if (e.key === 'r' || e.key === 'R') {
        const pb = root.querySelector('#btn-tl-play');
        if (pb && !pb.disabled) { e.preventDefault(); pb.click(); }
      } else if (e.key === 'Enter') {
        const nb = root.querySelector('#btn-tl-next') || root.querySelector('#btn-tl-finish');
        if (nb) { e.preventDefault(); nb.click(); }
      } else if (u.questions.length === 1 && /^[1-4]$/.test(e.key)) {
        const idx = parseInt(e.key, 10) - 1;
        const btn = root.querySelector('[data-tl-q="' + u.questions[0].id + '"][data-tl-opt="' + idx + '"]');
        if (btn) { e.preventDefault(); btn.click(); }
      }
    });

    // Auto-start via URL parameters (?mode=quick|study|exam&part=1A)
    const params = new URLSearchParams(window.location.search);
    const qMode = params.get('mode');
    const qPart = params.get('part');
    if (qMode === 'quick' || qMode === 'study' || qMode === 'exam') {
      startSession(qMode, qPart);
    } else if (qPart) {
      startSession('study', qPart);
    } else {
      render();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();

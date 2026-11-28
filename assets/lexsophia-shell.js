/* ============================================================
   LexSophia Shared Multi-Exam Shell Controller
   - Horizontal Exam Switcher Pills (TOEIC | TEAP | 英検 | IELTS)
   - Coming Soon Dialog for Eiken / IELTS
   - Interactive Command Box Chip Switcher
   ============================================================ */
(function () {
  'use strict';

  const EXAMS = [
    { id: 'toeic', label: 'TOEIC', href: '/', status: 'live' },
    { id: 'teap', label: 'TEAP', href: '/teap/', status: 'live' },
    { id: 'eiken', label: '英検', href: null, status: 'soon' },
    { id: 'ielts', label: 'IELTS', href: null, status: 'soon' }
  ];

  const SOON_INFO = {
    eiken: {
      badge: '英検 · Coming Soon',
      bg: '#fef6dc',
      color: '#945d00',
      title: '英検対策セクションを準備中です',
      desc: '準1級・2級・準2級・1級に対応した級別の無料レベル診断と、語彙・長文・リスニング演習を順次公開予定です。',
      items: [
        '級を選んで15問で合格圏をチェックできる無料診断',
        '大問別の弱点分析と全問日本語解説',
        'ライティング・面接（二次試験）の対策ガイド'
      ]
    },
    ielts: {
      badge: 'IELTS · Coming Soon',
      bg: '#f1eaff',
      color: '#5f22d9',
      title: 'IELTS対策セクションを準備中です',
      desc: '留学・大学院入試向けのAcademicを中心に、推定Band目安と弱点がわかる無料診断・パラフレーズ演習を準備しています。',
      items: [
        'Academic Reading / Listening の短縮診断とBand目安',
        '頻出パラフレーズ・True/False/Not Given 対策',
        'Writing Task 1 / 2 の構成テンプレートと自己評価'
      ]
    }
  };

  function getActiveExam() {
    const attr = document.body && document.body.getAttribute('data-exam');
    if (attr) return attr;
    const path = window.location.pathname || '/';
    if (path.indexOf('/teap') === 0) return 'teap';
    if (path.indexOf('/eiken') === 0) return 'eiken';
    if (path.indexOf('/ielts') === 0) return 'ielts';
    return 'toeic';
  }

  let modalEl = null;

  function ensureModal() {
    if (modalEl) return modalEl;
    const backdrop = document.createElement('div');
    backdrop.className = 'lx-soon-backdrop';
    backdrop.hidden = true;
    backdrop.innerHTML = [
      '<div class="lx-soon-dialog" role="dialog" aria-modal="true" aria-labelledby="lx-soon-title">',
      '  <button type="button" class="lx-soon-close" aria-label="閉じる">×</button>',
      '  <span class="lx-soon-badge" id="lx-soon-badge"></span>',
      '  <h2 id="lx-soon-title"></h2>',
      '  <p id="lx-soon-desc"></p>',
      '  <ul class="lx-soon-list" id="lx-soon-list"></ul>',
      '  <div class="lx-soon-actions">',
      '    <a class="lx-soon-btn lx-soon-btn--primary" href="/teap/">TEAP対策を見る</a>',
      '    <a class="lx-soon-btn lx-soon-btn--ghost" href="/">TOEIC診断を見る</a>',
      '  </div>',
      '</div>'
    ].join('\n');

    backdrop.addEventListener('click', function (e) {
      if (e.target === backdrop || e.target.closest('.lx-soon-close')) {
        backdrop.hidden = true;
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !backdrop.hidden) {
        backdrop.hidden = true;
      }
    });
    document.body.appendChild(backdrop);
    modalEl = backdrop;
    return modalEl;
  }

  function openSoonModal(examId) {
    const info = SOON_INFO[examId];
    if (!info) return;
    const backdrop = ensureModal();
    const badge = backdrop.querySelector('#lx-soon-badge');
    badge.textContent = info.badge;
    badge.style.background = info.bg;
    badge.style.color = info.color;
    backdrop.querySelector('#lx-soon-title').textContent = info.title;
    backdrop.querySelector('#lx-soon-desc').textContent = info.desc;
    backdrop.querySelector('#lx-soon-list').innerHTML = info.items
      .map(function (t) { return '<li>' + t + '</li>'; })
      .join('');
    backdrop.hidden = false;
    const closeBtn = backdrop.querySelector('.lx-soon-close');
    if (closeBtn) closeBtn.focus();
  }

  function mountExamBars() {
    const activeExam = getActiveExam();
    const bars = document.querySelectorAll('[data-lx-exam-bar]');
    bars.forEach(function (bar) {
      const nav = document.createElement('nav');
      nav.className = 'lx-exam-pills';
      nav.setAttribute('aria-label', '試験を切り替え');

      EXAMS.forEach(function (exam) {
        const isActive = exam.id === activeExam;
        if (exam.status === 'live') {
          const a = document.createElement('a');
          a.className = 'lx-exam-pill' + (isActive ? ' is-active' : '');
          a.setAttribute('data-pill', exam.id);
          a.href = exam.href;
          if (isActive) a.setAttribute('aria-current', 'page');
          a.innerHTML = '<span class="lx-exam-pill__dot" aria-hidden="true"></span>' + exam.label;
          nav.appendChild(a);
        } else {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'lx-exam-pill is-soon';
          btn.setAttribute('data-pill', exam.id);
          btn.setAttribute('aria-haspopup', 'dialog');
          btn.innerHTML =
            '<span class="lx-exam-pill__dot" aria-hidden="true"></span>' +
            exam.label +
            '<span class="lx-soon-tag">Soon</span>';
          btn.addEventListener('click', function () {
            openSoonModal(exam.id);
          });
          nav.appendChild(btn);
        }
      });

      bar.innerHTML = '';
      bar.appendChild(nav);
    });
  }

  function initCommandBoxes() {
    document.querySelectorAll('[data-lx-command-box]').forEach(function (box) {
      const titleEl = box.querySelector('[data-lx-cmd-title]');
      const metaEl = box.querySelector('[data-lx-cmd-meta]');
      const ctaEl = box.querySelector('[data-lx-cmd-cta]');
      const ctaLabelEl = box.querySelector('[data-lx-cmd-cta-label]');
      const chips = box.querySelectorAll('[data-lx-mode]');

      chips.forEach(function (chip) {
        chip.addEventListener('click', function () {
          chips.forEach(function (c) {
            c.classList.toggle('is-active', c === chip);
            c.setAttribute('aria-pressed', String(c === chip));
          });
          if (titleEl && chip.dataset.title) titleEl.textContent = chip.dataset.title;
          if (metaEl && chip.dataset.meta) metaEl.textContent = chip.dataset.meta;
          if (ctaEl && chip.dataset.href) ctaEl.setAttribute('href', chip.dataset.href);
          if (ctaLabelEl && chip.dataset.cta) ctaLabelEl.textContent = chip.dataset.cta;
        });
      });
    });
  }

  function init() {
    mountExamBars();
    initCommandBoxes();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

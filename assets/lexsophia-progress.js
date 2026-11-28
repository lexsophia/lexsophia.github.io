/* ============================================================
   LexSophia Unified Multi-Exam Local Progress Module (v1)
   Schema designed for TOEIC / TEAP / Eiken / IELTS and future
   Supabase cloud sync without breaking changes.
   ============================================================ */
(function () {
  'use strict';

  const STORAGE_KEY = 'lexsophia_progress_v1';
  const MAX_SESSIONS = 120;

  function todayKey() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return y + '-' + m + '-' + day;
  }

  function yesterdayKey() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return y + '-' + m + '-' + day;
  }

  function defaultState() {
    return {
      version: 1,
      updatedAt: null,
      streak: { count: 0, lastDate: null },
      sessions: [],
      drafts: {},
      weakItems: {}
    };
  }

  function load() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object') return defaultState();
      return Object.assign(defaultState(), parsed, {
        streak: Object.assign({ count: 0, lastDate: null }, parsed.streak || {}),
        sessions: Array.isArray(parsed.sessions) ? parsed.sessions : [],
        drafts: parsed.drafts && typeof parsed.drafts === 'object' ? parsed.drafts : {},
        weakItems: parsed.weakItems && typeof parsed.weakItems === 'object' ? parsed.weakItems : {}
      });
    } catch (_) {
      return defaultState();
    }
  }

  function save(data) {
    data.updatedAt = new Date().toISOString();
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (_) {}
    return data;
  }

  function bumpStreak(data) {
    const today = todayKey();
    const yest = yesterdayKey();
    if (data.streak.lastDate === today) return;
    if (data.streak.lastDate === yest) {
      data.streak.count = (data.streak.count || 0) + 1;
    } else {
      data.streak.count = 1;
    }
    data.streak.lastDate = today;
  }

  function recordSession(entry) {
    if (!entry || !entry.exam || !entry.skill) return null;
    const data = load();
    const now = new Date().toISOString();
    const rec = {
      id: entry.exam + '-' + entry.skill + '-' + Date.now(),
      exam: String(entry.exam),
      skill: String(entry.skill),
      mode: entry.mode ? String(entry.mode) : 'practice',
      title: entry.title ? String(entry.title) : '',
      correct: typeof entry.correct === 'number' ? entry.correct : 0,
      total: typeof entry.total === 'number' ? entry.total : 0,
      acc: typeof entry.acc === 'number' ? entry.acc : 0,
      weakestPart: entry.weakestPart || null,
      createdAt: now
    };
    data.sessions.unshift(rec);
    if (data.sessions.length > MAX_SESSIONS) {
      data.sessions = data.sessions.slice(0, MAX_SESSIONS);
    }

    // Update weak item IDs if supplied
    const weakKey = rec.exam + ':' + rec.skill;
    const prevWeak = Array.isArray(data.weakItems[weakKey]) ? data.weakItems[weakKey] : [];
    const set = new Set(prevWeak);
    if (Array.isArray(entry.wrongIds)) {
      entry.wrongIds.forEach(function (id) { if (id) set.add(String(id)); });
    }
    if (Array.isArray(entry.correctIds)) {
      entry.correctIds.forEach(function (id) { set.delete(String(id)); });
    }
    data.weakItems[weakKey] = Array.from(set).slice(0, 120);

    bumpStreak(data);
    save(data);
    return rec;
  }

  function saveDraft(key, text) {
    if (!key) return;
    const data = load();
    if (!text || !String(text).trim()) {
      delete data.drafts[key];
    } else {
      data.drafts[key] = {
        text: String(text),
        updatedAt: new Date().toISOString()
      };
    }
    save(data);
  }

  function loadDraft(key) {
    if (!key) return '';
    const data = load();
    return data.drafts[key] && typeof data.drafts[key].text === 'string'
      ? data.drafts[key].text
      : '';
  }

  function clearDraft(key) {
    if (!key) return;
    const data = load();
    delete data.drafts[key];
    save(data);
  }

  function getExamSummary(exam) {
    const data = load();
    const list = data.sessions.filter(function (s) { return s.exam === exam; });
    const latest = list[0] || null;
    const bySkill = {};
    list.forEach(function (s) {
      if (!bySkill[s.skill]) bySkill[s.skill] = s;
    });
    const weakCount = Object.keys(data.weakItems)
      .filter(function (k) { return k.indexOf(exam + ':') === 0; })
      .reduce(function (acc, k) { return acc + (data.weakItems[k] ? data.weakItems[k].length : 0); }, 0);

    // Check if streak is still alive (today or yesterday)
    const alive = data.streak.lastDate === todayKey() || data.streak.lastDate === yesterdayKey();
    return {
      streak: alive ? (data.streak.count || 0) : 0,
      totalSessions: list.length,
      latest: latest,
      bySkill: bySkill,
      weakCount: weakCount,
      draftCount: Object.keys(data.drafts).filter(function (k) { return k.indexOf(exam + ':') === 0; }).length
    };
  }

  function getWeakIds(exam, skill) {
    const data = load();
    const key = exam + ':' + skill;
    return Array.isArray(data.weakItems[key]) ? data.weakItems[key].slice() : [];
  }

  function exportPayload() {
    return load();
  }

  function renderHubSummary() {
    const mount = document.querySelector('[data-lx-progress-banner]');
    if (!mount) return;
    const exam = mount.getAttribute('data-lx-progress-banner') || 'teap';
    const sum = getExamSummary(exam);
    if (!sum.totalSessions && !sum.draftCount) {
      mount.hidden = true;
      return;
    }

    const skillNames = { reading: 'Reading', listening: 'Listening', writing: 'Writing', speaking: 'Speaking' };
    const latestLabel = sum.latest
      ? (skillNames[sum.latest.skill] || sum.latest.skill) + ' ' + sum.latest.acc + '%'
      : (sum.draftCount ? 'Writing 下書き保存中' : '—');

    const weakR = getWeakIds(exam, 'reading').length;
    const weakL = getWeakIds(exam, 'listening').length;
    let weakBtnHtml = '';
    if (exam === 'teap' && (weakR > 0 || weakL > 0)) {
      const targetHref = weakR >= weakL ? '/teap/reading/?mode=weak' : '/teap/listening/?mode=weak';
      const targetLabel = weakR >= weakL ? ('Reading 苦手' + weakR + '問を復習 →') : ('Listening 苦手' + weakL + '問を復習 →');
      weakBtnHtml = '<a class="lx-progress-strip__cta" href="' + targetHref + '">' + targetLabel + '</a>';
    }

    mount.hidden = false;
    mount.innerHTML = [
      '<div class="lx-progress-strip">',
      '  <div class="lx-progress-strip__head">',
      '    <span class="lx-progress-strip__title">あなたの学習記録（ブラウザ自動保存）</span>',
      weakBtnHtml || '    <span class="lx-progress-strip__note">次回も続きから再開できます</span>',
      '  </div>',
      '  <div class="lx-progress-strip__kpis">',
      '    <div class="lx-progress-kpi"><span class="k">連続学習</span><strong class="v">' + sum.streak + '日</strong></div>',
      '    <div class="lx-progress-kpi"><span class="k">累計演習</span><strong class="v">' + sum.totalSessions + '回</strong></div>',
      '    <div class="lx-progress-kpi"><span class="k">直近の記録</span><strong class="v">' + latestLabel + '</strong></div>',
      '    <div class="lx-progress-kpi"><span class="k">要復習</span><strong class="v">' + sum.weakCount + '問</strong></div>',
      '  </div>',
      '</div>'
    ].join('\n');
  }

  window.LexSophiaProgress = {
    recordSession: recordSession,
    saveDraft: saveDraft,
    loadDraft: loadDraft,
    clearDraft: clearDraft,
    getWeakIds: getWeakIds,
    getExamSummary: getExamSummary,
    exportPayload: exportPayload
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderHubSummary);
  } else {
    renderHubSummary();
  }
})();

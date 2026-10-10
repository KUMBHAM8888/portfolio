/* Portfolio · renders the rows from data.js and runs the project overlays. */
(function () {
  'use strict';
  var S = window.SITE;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var esc = function (t) { return String(t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var ICON = {
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5z"/></svg>',
    left: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.4 4.6a1 1 0 0 1 0 1.4L9.4 12l6 6a1 1 0 1 1-1.4 1.4l-6.7-6.7a1 1 0 0 1 0-1.4L14 4.6a1 1 0 0 1 1.4 0z"/></svg>',
    right: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.6 4.6a1 1 0 0 1 1.4 0l6.7 6.7a1 1 0 0 1 0 1.4L10 19.4A1 1 0 1 1 8.6 18l6-6-6-6a1 1 0 0 1 0-1.4z"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.3 5.3a1 1 0 0 1 1.4 0L12 10.6l5.3-5.3a1 1 0 1 1 1.4 1.4L13.4 12l5.3 5.3a1 1 0 0 1-1.4 1.4L12 13.4l-5.3 5.3a1 1 0 0 1-1.4-1.4l5.3-5.3-5.3-5.3a1 1 0 0 1 0-1.4z"/></svg>',
  };

  /* ---------- Generated poster art (no image files needed) ---------- */
  function art(p, motif, id) {
    var a = p[0], b = p[1], g = 'g' + id, shapes = '';
    if (motif === 'rings') {
      for (var i = 1; i <= 9; i++) shapes += '<circle cx="78%" cy="30%" r="' + i * 34 + '" fill="none" stroke="' + b + '" stroke-opacity="' + (0.55 - i * 0.05).toFixed(2) + '" stroke-width="' + (i % 3 === 0 ? 3 : 1.2) + '"/>';
    } else if (motif === 'pulse') {
      shapes = '<path d="M0 170 H90 L110 120 L132 230 L156 60 L178 200 L196 170 H400" fill="none" stroke="' + b + '" stroke-width="4" stroke-linejoin="round"/>' +
        '<path d="M0 260 H120 L136 230 L152 290 L170 250 H400" fill="none" stroke="' + b + '" stroke-opacity=".35" stroke-width="2"/>';
      for (var j = 0; j < 12; j++) shapes += '<line x1="' + j * 36 + '" y1="0" x2="' + j * 36 + '" y2="600" stroke="' + b + '" stroke-opacity=".08"/>';
    } else {
      for (var k = 0; k < 7; k++) shapes += '<rect x="' + (40 + k * 14) + '" y="' + (60 + k * 34) + '" width="' + (300 - k * 28) + '" height="22" rx="4" fill="' + b + '" fill-opacity="' + (0.85 - k * 0.11).toFixed(2) + '"/>';
    }
    return '<svg class="art" viewBox="0 0 400 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="' + g + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + a + '"/><stop offset="1" stop-color="#07080C"/></linearGradient></defs><rect width="400" height="600" fill="url(#' + g + ')"/>' + shapes + '</svg>';
  }

  /* ---------- Rows ---------- */
  function rowHead(id, title, sub, withArrows) {
    return '<div class="row-head"><h2 id="h-' + id + '">' + esc(title) + (sub ? '<small>' + esc(sub) + '</small>' : '') + '</h2>' +
      (withArrows ? '<div class="arrows"><button type="button" data-dir="-1" aria-label="Scroll ' + esc(title) + ' left">' + ICON.left + '</button><button type="button" data-dir="1" aria-label="Scroll ' + esc(title) + ' right">' + ICON.right + '</button></div>' : '') + '</div>';
  }

  var ARROW = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.3 5.3a1 1 0 0 1 1.4 0l6 6a1 1 0 0 1 0 1.4l-6 6a1 1 0 1 1-1.4-1.4l4.3-4.3H4a1 1 0 1 1 0-2h13.6l-4.3-4.3a1 1 0 0 1 0-1.4z"/></svg>';
  function projectById(id) { return S.projects.filter(function (x) { return x.id === id; })[0]; }

  var builders = {
    focus: function () {
      return rowHead('focus', 'Current Focus', 'What I’m working on right now', false) +
        '<div class="rail cw">' + S.focus.map(function (c, i) {
          var o = c.project ? projectById(c.project) : null;
          var pal = o ? o.palette : c.palette, motif = o ? o.motif : c.motif;
          return '<button class="cw-card" type="button" data-target="' + c.target + '"' + (c.project ? ' data-project="' + c.project + '"' : '') + (c.job != null ? ' data-job="' + c.job + '"' : '') + '>' +
            '<span class="thumb">' + art(pal, motif, 'cw' + i) + '<span class="pb">' + ARROW + '</span></span>' +
            '<span class="txt"><b>' + esc(c.title) + '</b><span>' + esc(c.sub) + '</span><em>' + esc(c.tag) + '</em></span></button>';
        }).join('') + '</div>';
    },
    experience: function () {
      return rowHead('experience', 'Experience', 'Five years across telecom, financial services and energy', false) +
        '<div class="seasons"><div class="season-tabs" role="tablist" aria-label="Employers">' +
        S.experience.map(function (s, i) { return '<button type="button" role="tab" id="tab-s' + i + '" aria-controls="job-panel" aria-selected="' + (i === S.experience.length - 1) + '" data-s="' + i + '">' + esc(s.company) + ' · ' + esc(s.short) + '</button>'; }).join('') +
        '</div><div id="job-panel" role="tabpanel"></div></div>';
    },
    projects: function () {
      return rowHead('projects', 'Projects', 'Select a project for the architecture and details', true) +
        '<div class="rail posters">' + S.projects.map(function (o, i) {
          return '<button class="poster" type="button" data-project="' + o.id + '" aria-label="' + esc(o.title) + ': open details">' + art(o.palette, o.motif, 'po' + i) +
            '<span class="badge"><i></i>PROJECT</span><span class="y">' + esc(o.status) + '</span>' +
            '<span class="p-txt"><span class="pt">' + esc(o.title) + '</span><span class="g">' + esc(o.category) + '</span></span></button>';
        }).join('') + '</div>';
    },
    results: function () {
      return rowHead('results', 'Key Results', 'Measured outcomes from production work', true) +
        '<div class="rail tops">' + S.results.map(function (t) {
          return '<div class="top"><div class="v">' + esc(t.value) + '</div><div class="l">' + esc(t.label) + '</div><div class="w">' + esc(t.where) + '</div></div>';
        }).join('') + '</div>';
    },
    skills: function () {
      return rowHead('skills', 'Skills', 'The toolchain, grouped the way I use it', false) +
        '<div class="genres">' + S.skills.map(function (g) {
          return '<div class="genre"><h3>' + esc(g.name) + '</h3><div class="chips">' + g.items.map(function (x) { return '<span>' + esc(x) + '</span>'; }).join('') + '</div></div>';
        }).join('') + '</div>';
    },
    credentials: function () {
      var card = function (x, cls) { return '<div class="credit"><div class="ic ' + cls + '">' + esc(x.badge) + '</div><div><b>' + esc(x.name) + '</b><span>' + esc(x.issuer) + ' · ' + esc(x.dates) + '</span></div></div>'; };
      return rowHead('credentials', 'Certifications & Education', '', false) + '<div class="credits">' +
        S.certifications.map(function (x) { return card(x, 'red'); }).concat(S.education.map(function (x) { return card(x, 'light'); })).join('') + '</div>';
    },
  };

  var currentJob = S.experience.length - 1;
  function renderJob(i) {
    currentJob = i;
    var s = S.experience[i], panel = $('#job-panel');
    if (!panel) return;
    panel.setAttribute('aria-labelledby', 'tab-s' + i);
    panel.innerHTML = '<div class="season-head"><h3>' + esc(s.company) + '</h3><p class="proj-name">' + esc(s.project) + '</p><p>' + esc(s.summary) + '</p>' +
      '<div class="who-when"><b>' + esc(s.role) + '</b>' + esc(s.years) + '</div></div>' +
      '<ol class="episodes">' + s.highlights.map(function (e, n) { return '<li class="ep"><span class="n">' + (n + 1) + '</span><div><b>' + esc(e.title) + '</b><p>' + esc(e.text) + '</p></div></li>'; }).join('') + '</ol>' +
      (s.tools ? '<div class="job-tools"><h4>Environment</h4><div class="chips">' + s.tools.map(function (x) { return '<span>' + esc(x) + '</span>'; }).join('') + '</div></div>' : '');
    document.querySelectorAll('.season-tabs button').forEach(function (b) { b.setAttribute('aria-selected', String(+b.dataset.s === i)); });
  }

  function renderRows() {
    $('#rows').innerHTML = S.order.map(function (k) { return '<section class="row" id="row-' + k + '" aria-labelledby="h-' + k + '">' + builders[k]() + '</section>'; }).join('');
    renderJob(currentJob);
  }

  /* ---------- Project overlay ---------- */
  var pd = $('#project-dialog');
  function openProject(id) {
    var o = projectById(id); if (!o) return;
    pd.innerHTML = '<div class="modal"><div class="hero-art">' + art(o.palette, o.motif, 'pd') + '<button class="close" type="button" aria-label="Close">' + ICON.close + '</button><h2 id="pd-title">' + esc(o.title) + '</h2></div>' +
      '<div class="body"><div><div class="meta" style="margin-bottom:14px"><span class="hot">' + esc(o.status) + '</span><span>' + esc(o.category) + '</span></div>' +
      '<p class="logline">' + esc(o.summary) + '</p><p>' + esc(o.detail) + '</p></div>' +
      '<div><h4>Key features</h4><ul>' + o.features.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul>' +
      '<h4 style="margin-top:18px">Tech stack</h4><div class="chips">' + o.stack.map(function (s) { return '<span>' + esc(s) + '</span>'; }).join('') + '</div></div>' +
      '<div class="flow" aria-label="Architecture flow">' + o.flow.map(function (f) { return '<span>' + esc(f) + '</span>'; }).join('<i>→</i>') + '</div></div></div>';
    pd.querySelector('.close').addEventListener('click', function () { pd.close(); });
    pd.showModal();
  }
  pd.addEventListener('click', function (e) { if (e.target === pd) pd.close(); });

  /* ---------- Events ---------- */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('.arrows button');
    if (a) { var rail = a.closest('.row').querySelector('.rail'); rail.scrollBy({ left: +a.dataset.dir * rail.clientWidth * 0.85, behavior: reduce ? 'auto' : 'smooth' }); return; }
    var t = e.target.closest('.season-tabs button'); if (t) { renderJob(+t.dataset.s); return; }
    var p = e.target.closest('[data-project]'); if (p) { openProject(p.dataset.project); return; }
    var c = e.target.closest('.cw-card');
    if (c && !c.dataset.project) { if (c.dataset.job != null) renderJob(+c.dataset.job); var row = $('#row-' + c.dataset.target); if (row) row.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }); }
  });

  var toastEl = $('#toast'), tt;
  function toast(m) { toastEl.textContent = m; toastEl.classList.add('on'); clearTimeout(tt); tt = setTimeout(function () { toastEl.classList.remove('on'); }, 1800); }
  $('#copy-email').addEventListener('click', function () {
    var t = $('#email').textContent;
    var sel = function () { var r = document.createRange(); r.selectNodeContents($('#email')); var s = getSelection(); s.removeAllRanges(); s.addRange(r); toast('Email selected. Press Ctrl+C to copy'); };
    try { navigator.clipboard.writeText(t).then(function () { toast('Email copied'); }, sel); } catch (err) { sel(); }
  });

  /* Nav: solid after the billboard, hides on scroll down. */
  var nav = $('#nav'), lastY = 0;
  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    nav.classList.toggle('solid', y > 40);
    nav.classList.toggle('hide', y > lastY && y > 400);
    lastY = y;
  }, { passive: true });

  /* ---------- Boot ---------- */
  renderRows();
})();

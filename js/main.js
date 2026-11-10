/* 天水风物志 · 全站交互
   1. 窄屏目录展开
   2. 食味页按味型筛选
   3. 复制邮箱 + 轻提示
*/

(function () {
  'use strict';

  var toastEl = document.getElementById('toast');
  var toastTimer = null;

  function toast(text) {
    if (!toastEl) return;
    toastEl.textContent = text;
    toastEl.classList.add('is-visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toastEl.classList.remove('is-visible');
    }, 2400);
  }

  /* ---------- 1. 窄屏目录 ---------- */
  var masthead = document.getElementById('masthead');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  if (masthead && toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = masthead.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? '收起' : '目录';
    });

    nav.addEventListener('click', function (event) {
      if (event.target.tagName === 'A' && masthead.classList.contains('is-open')) {
        masthead.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = '目录';
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && masthead.classList.contains('is-open')) {
        masthead.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = '目录';
        toggle.focus();
      }
    });
  }

  /* ---------- 2. 味型筛选 ---------- */
  var chips = Array.prototype.slice.call(document.querySelectorAll('.chip[data-filter]'));
  var cards = Array.prototype.slice.call(document.querySelectorAll('.food-card'));
  var empty = document.getElementById('food-empty');

  if (chips.length && cards.length) {
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var filter = chip.getAttribute('data-filter');

        chips.forEach(function (item) {
          var on = item === chip;
          item.classList.toggle('is-on', on);
          item.setAttribute('aria-pressed', on ? 'true' : 'false');
        });

        var shown = 0;
        cards.forEach(function (card) {
          var tastes = (card.getAttribute('data-taste') || '').split(/\s+/);
          var match = filter === 'all' || tastes.indexOf(filter) !== -1;
          card.hidden = !match;
          if (match) shown += 1;
        });

        if (empty) empty.style.display = shown ? 'none' : 'block';
      });
    });
  }

  /* ---------- 3. 复制邮箱 ---------- */
  var copyBtn = document.getElementById('copy-mail');

  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var mail = copyBtn.getAttribute('data-mail') || '';

      function done() {
        toast('邮箱已复制：' + mail);
      }

      function fallback() {
        var box = document.createElement('textarea');
        box.value = mail;
        box.setAttribute('readonly', '');
        box.style.position = 'fixed';
        box.style.opacity = '0';
        document.body.appendChild(box);
        box.select();
        try {
          document.execCommand('copy');
          done();
        } catch (err) {
          toast('复制失败，请手动选中邮箱地址');
        }
        document.body.removeChild(box);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(mail).then(done).catch(fallback);
      } else {
        fallback();
      }
    });
  }
})();

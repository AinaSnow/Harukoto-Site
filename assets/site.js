// 深浅色切换：默认跟随系统，点击后在浅色／深色之间切换并记住
(function () {
  var root = document.documentElement;
  var btn = document.querySelector('.theme');
  if (btn) {
    btn.addEventListener('click', function () {
      var cur = root.dataset.theme ||
        (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      var next = cur === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('hk-theme', next); } catch (e) {}
    });
  }

  // 首屏候选窗示意：在“晴空 Fluent”与“晴空胶囊”之间切换
  var cw = document.getElementById('hero-cw');
  var seg = document.querySelectorAll('.seg button');
  Array.prototype.forEach.call(seg, function (b) {
    b.addEventListener('click', function () {
      var style = b.getAttribute('data-style');
      cw.classList.remove('fluent', 'capsule');
      cw.classList.add(style);
      Array.prototype.forEach.call(seg, function (o) {
        o.setAttribute('aria-pressed', o === b ? 'true' : 'false');
      });
    });
  });
})();

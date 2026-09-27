// Theme toggle.
(function () {
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem('theme');
    if (saved) root.setAttribute('data-theme', saved);
  } catch (e) {}

  document.getElementById('theme').addEventListener('click', function () {
    var next = getComputedStyle(root).colorScheme.indexOf('dark') >= 0 ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
})();

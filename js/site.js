(function () {
  var root = document.documentElement;
  var toggle = document.querySelector('.theme-toggle');

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      localStorage.setItem('angrybong-theme', next);
    });
  }

  document.querySelectorAll('.article-content pre').forEach(function (pre) {
    var code = pre.querySelector('code');
    if (!code) return;

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'copy-code';
    button.textContent = '복사';
    button.setAttribute('aria-label', '코드 복사');
    button.addEventListener('click', function () {
      navigator.clipboard.writeText(code.innerText).then(function () {
        button.textContent = '완료';
        window.setTimeout(function () { button.textContent = '복사'; }, 1400);
      });
    });
    pre.appendChild(button);
  });

  document.querySelectorAll('.article-content table').forEach(function (table) {
    var wrapper = document.createElement('div');
    wrapper.className = 'table-wrap';
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });
}());

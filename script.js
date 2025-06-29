window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  const main = document.getElementById('main-content');
  loader.style.opacity = '0';
  setTimeout(() => {
    loader.style.display = 'none';
    if (main) main.style.display = '';
  }, 500);
});


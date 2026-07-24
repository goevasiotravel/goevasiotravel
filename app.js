document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.burger');
  var links = document.querySelector('.nav-links');
  if (burger && links) {
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-controls', 'nav-links');

    function setOpen(open) {
      links.classList.toggle('open', open);
      document.body.classList.toggle('no-scroll', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    burger.addEventListener('click', function () {
      setOpen(!links.classList.contains('open'));
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setOpen(false); });
    });
    // Referme le menu si l'écran repasse en mode bureau
    window.addEventListener('resize', function () {
      if (window.innerWidth > 680 && links.classList.contains('open')) {
        setOpen(false);
      }
    });
  }

  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var q = item.querySelector('.faq-q');
    q && q.addEventListener('click', function () { item.classList.toggle('open'); });
  });
});

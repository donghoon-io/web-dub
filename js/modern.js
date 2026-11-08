(() => {
  const toggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.site-navigation');
  if (!toggle || !navigation) return;
  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    navigation.classList.remove('is-open');
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    navigation.classList.toggle('is-open', open);
  });
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggle.focus();
    }
  });
  window.matchMedia('(min-width: 901px)').addEventListener('change', closeMenu);
})();

(() => {
  const carousel = document.querySelector('#dub-slideshow');
  if (!carousel) return;
  const slides = [...carousel.querySelectorAll('.hero-slide')];
  const dots = [...carousel.querySelectorAll('[data-slide]')];
  const playback = carousel.querySelector('.slideshow-playback');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0;
  let timer;
  let playing = false;
  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === current);
      slide.setAttribute('aria-hidden', String(i !== current));
      dots[i].setAttribute('aria-pressed', String(i === current));
    });
  }
  function setPlaying(value) {
    playing = value;
    clearInterval(timer);
    playback.setAttribute('aria-label', playing ? 'Pause slideshow' : 'Play slideshow');
    playback.firstElementChild.textContent = playing ? 'Ⅱ' : '▶';
    if (playing) timer = setInterval(() => {
      if (!document.hidden && !carousel.matches(':hover')) show(current + 1);
    }, 10000);
  }
  dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)));
  carousel.querySelector('.slideshow-previous').addEventListener('click', () => show(current - 1));
  carousel.querySelector('.slideshow-next').addEventListener('click', () => show(current + 1));
  playback.addEventListener('click', () => setPlaying(!playing));
  carousel.addEventListener('focusin', event => {
    // Keep the displayed slide stable while navigating its controls by keyboard.
    if (event.target !== playback) setPlaying(false);
  });
  carousel.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      setPlaying(false);
      show(current + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) setPlaying(false);
  });
  setPlaying(!reducedMotion.matches);
})();

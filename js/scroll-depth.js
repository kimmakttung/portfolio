'use strict';

(() => {
  const main = document.querySelector('main');
  if (!main || !('IntersectionObserver' in window) ||
      !CSS.supports('translate', '0 0') || !CSS.supports('rotate', 'x 1deg')) return;

  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const phone = matchMedia('(max-width: 760px)');
  const selector = [
    '.section-label', '.about-content', '.memory-section > h2', '.memory-lead',
    '.memory-heading', '.journey-card', '.journey-section > h2',
    '.journey-panel > h2', '.mind-source-title', '.section-heading', '.interest-card',
    '#planner-panel > .eyebrow', '#planner-title', '.planner-form', '.plan-result',
    '.contact-heading-layout h1', '.contact-email', '.social-section > h2',
    '.social-card', '.saved-project', '.project-empty',
    '.gallery-heading', '.gallery-empty', '.editor-page > h1'
  ].join(',');
  const seen = new WeakSet();
  const pending = new Set();
  const parallax = new Map();
  const activeParallax = new Set();
  let frame = 0;
  let backdrop = null;

  function reveal(element) {
    element.classList.add('is-depth-visible');
    pending.delete(element);
    revealObserver.unobserve(element);
  }

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) reveal(entry.target);
    });
  }, {rootMargin: '0px 0px -24px 0px', threshold: 0});

  function register(element) {
    if (seen.has(element)) return;
    seen.add(element);
    const siblings = [...element.parentElement.children].filter(child => child.matches(selector));
    element.style.setProperty('--depth-delay', Math.min(2, siblings.indexOf(element)) * 65 + 'ms');
    element.classList.add('depth-reveal');
    if (reduced.matches || element.contains(document.activeElement)) reveal(element);
    else {
      pending.add(element);
      revealObserver.observe(element);
    }
  }

  function scan(root) {
    if (root.matches?.(selector)) register(root);
    root.querySelectorAll(selector).forEach(register);
  }

  document.body.classList.add('has-scroll-depth');
  main.classList.add('depth-surface');
  main.querySelectorAll('.memory-grid,.journey-grid,.interest-grid,.social-grid,.planner-grid,#project-list')
    .forEach(group => group.classList.add('depth-perspective'));

  if (!document.body.classList.contains('home-page')) {
    backdrop = document.createElement('div');
    backdrop.className = 'scroll-depth-backdrop';
    backdrop.setAttribute('aria-hidden', 'true');
    ['depth-aura depth-aura-far', 'depth-aura depth-aura-near', 'depth-contour'].forEach(className => {
      const layer = document.createElement('span');
      layer.className = className;
      backdrop.append(layer);
    });
    main.prepend(backdrop);
  }

  const parallaxObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) activeParallax.add(entry.target);
      else activeParallax.delete(entry.target);
    });
    schedule();
  }, {rootMargin: '100px'});

  // Move each entire visual together; its internal orbit keeps its alignment.
  [['.connection-space', 40], ['.portrait-system', 24], ['.network-orbit', 22]].forEach(([query, amount]) => {
    const element = main.querySelector(query);
    if (!element) return;
    const anchor = element.parentElement;
    element.classList.add('depth-parallax');
    parallax.set(anchor, {element, amount});
    parallaxObserver.observe(anchor);
  });

  function render() {
    frame = 0;
    if (document.hidden) return;
    const quiet = reduced.matches;
    const strength = phone.matches ? .45 : 1;
    const viewport = innerHeight;
    // Read geometry before writing styles, and skip visuals outside the viewport.
    const mainBox = backdrop && !quiet ? main.getBoundingClientRect() : null;
    const visuals = quiet ? [] : [...activeParallax].map(anchor => ({
      ...parallax.get(anchor), box: anchor.getBoundingClientRect()
    }));
    if (backdrop) {
      const progress = mainBox ? Math.max(0, Math.min(1,
        (viewport - mainBox.top) / (viewport + mainBox.height))) - .5 : 0;
      backdrop.style.setProperty('--depth-scroll-far', (progress * 80 * strength).toFixed(2) + 'px');
      backdrop.style.setProperty('--depth-scroll-near', (progress * -160 * strength).toFixed(2) + 'px');
      backdrop.style.setProperty('--depth-scroll-turn', (progress * 8 * strength).toFixed(2) + 'deg');
    }
    if (quiet) parallax.forEach(({element}) => element.style.removeProperty('--depth-parallax-y'));
    else visuals.forEach(({element, amount, box}) => {
      const progress = Math.max(-1, Math.min(1, (viewport / 2 - box.top - box.height / 2) / viewport));
      element.style.setProperty('--depth-parallax-y', (progress * amount * strength).toFixed(2) + 'px');
    });
  }

  function schedule() {
    if (!frame && !document.hidden) frame = requestAnimationFrame(render);
  }

  scan(main);
  new MutationObserver(records => {
    // Project cards are rebuilt after saving, deleting, or changing language.
    records.forEach(record => record.addedNodes.forEach(node => {
      if (node.nodeType === Node.ELEMENT_NODE) scan(node);
    }));
    pending.forEach(element => {
      if (!element.isConnected) {
        revealObserver.unobserve(element);
        pending.delete(element);
      }
    });
    schedule();
  }).observe(main, {childList: true, subtree: true});

  // Pointer focus must not snap a moving card away between press and release.
  document.addEventListener('pointerdown', () => document.body.classList.add('depth-pointer-input'), {capture: true, passive: true});
  document.addEventListener('keydown', () => document.body.classList.remove('depth-pointer-input'), true);
  main.addEventListener('focusin', event => {
    let element = event.target.closest('.depth-reveal');
    while (element) {
      reveal(element);
      element = element.parentElement?.closest('.depth-reveal');
    }
  });
  reduced.addEventListener('change', () => {
    if (reduced.matches) pending.forEach(reveal);
    schedule();
  });
  addEventListener('scroll', schedule, {passive: true});
  addEventListener('resize', schedule);
  addEventListener('pageshow', schedule);
  document.addEventListener('visibilitychange', schedule);
  document.addEventListener('languagechange', schedule);
  render();
})();

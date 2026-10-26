'use strict';

(() => {
  const button = document.getElementById('profile-flip');
  const coin = button?.querySelector('.profile-coin');
  const front = coin?.querySelector('.profile-front');
  const back = coin?.querySelector('.profile-back');
  if (!button || !coin || !front || !back) return;

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const originalBackSource = back.getAttribute('src');
  let busy = false;
  let backVisible = false;
  let nextBackVisible = false;
  let angle = 0;
  let completionTimer = 0;
  let backReady;
  let animation = null;

  // Separate faces and tangent panels create a solid, photo-sided coin.
  [front, back].forEach((image, index) => {
    const face = document.createElement('span');
    face.className = 'profile-coin-face ' + (index ? 'profile-coin-back-face' : 'profile-coin-front-face');
    image.before(face);
    face.append(image);
  });
  const sideCount = 64;
  for (let index = 0; index < sideCount; index++) {
    const edge = document.createElement('span');
    edge.className = 'profile-coin-edge';
    edge.setAttribute('aria-hidden', 'true');
    edge.style.setProperty('--coin-edge-angle', index * 360 / sideCount + 'deg');
    coin.prepend(edge);
  }
  function resizeCoin() {
    const radius = button.clientWidth / 2;
    coin.style.setProperty('--coin-radius', radius + 'px');
    coin.style.setProperty('--coin-edge-width', (2 * radius * Math.tan(Math.PI / sideCount) + .4) + 'px');
  }
  if ('ResizeObserver' in window) new ResizeObserver(resizeCoin).observe(button);
  else addEventListener('resize', resizeCoin);
  resizeCoin();

  function publishSide() {
    button.setAttribute('aria-pressed', String(backVisible));
    button.dataset.profileSide = backVisible ? 'back' : 'front';
    front.setAttribute('aria-hidden', String(backVisible));
    back.setAttribute('aria-hidden', String(!backVisible));
  }

  function finishFlip() {
    clearTimeout(completionTimer);
    completionTimer = 0;
    backVisible = nextBackVisible;
    busy = false;
    button.classList.remove('is-profile-flipping');
    button.removeAttribute('aria-busy');
    const previous = animation;
    animation = null;
    previous?.cancel();
    publishSide();
  }

  function loadBack() {
    if (backReady) return backReady;
    backReady = new Promise((resolve, reject) => {
      let timeout = 0;
      const cleanup = () => {
        clearTimeout(timeout);
        back.removeEventListener('load', loaded);
        back.removeEventListener('error', failed);
      };
      const loaded = () => {
        cleanup();
        if (!back.naturalWidth) { reject(Error('Profile photo unavailable')); return; }
        if (typeof back.decode === 'function') {
          back.decode().then(resolve, () => {
            if (back.naturalWidth) resolve();
            else reject(Error('Profile photo unavailable'));
          });
        } else resolve();
      };
      const failed = () => { cleanup(); reject(Error('Profile photo unavailable')); };
      if (back.complete && back.naturalWidth) { loaded(); return; }
      back.addEventListener('load', loaded, {once: true});
      back.addEventListener('error', failed, {once: true});
      timeout = setTimeout(failed, 12000);
      if (back.complete && !back.naturalWidth) {
        // A failed connection must not permanently disable this interaction.
        const retry = new URL(originalBackSource, document.baseURI);
        retry.searchParams.set('retry', String(Date.now()));
        back.src = retry.href;
      }
    });
    return backReady;
  }

  button.addEventListener('click', async () => {
    if (busy) return;
    busy = true;
    button.setAttribute('aria-busy', 'true');
    try {
      if (!backVisible) await loadBack();
    } catch {
      backReady = undefined;
      busy = false;
      button.removeAttribute('aria-busy');
      button.classList.add('profile-flip-unavailable');
      return;
    }

    button.classList.remove('profile-flip-unavailable');
    nextBackVisible = !backVisible;
    const start = angle;
    angle += 540;
    coin.style.setProperty('--profile-turn', angle + 'deg');
    if (reducedMotion.matches || typeof coin.animate !== 'function') { finishFlip(); return; }
    button.classList.add('is-profile-flipping');
    animation = coin.animate([
      {transform: `translateY(0) rotateX(0deg) rotateY(${start}deg)`},
      {transform: `translateY(-8px) rotateX(-11deg) rotateY(${start + 115}deg)`, offset: .24},
      {transform: `translateY(-13px) rotateX(10deg) rotateY(${start + 340}deg)`, offset: .64},
      {transform: `translateY(0) rotateX(0deg) rotateY(${angle}deg)`}
    ], {duration: 1350, easing: 'cubic-bezier(.22,.65,.24,1)'});
    animation.finished.then(
      () => { if (button.classList.contains('is-profile-flipping')) finishFlip(); },
      () => { if (button.classList.contains('is-profile-flipping')) finishFlip(); }
    );
    completionTimer = setTimeout(finishFlip, 1700);
  });

  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches && button.classList.contains('is-profile-flipping')) finishFlip();
  });

  publishSide();
})();

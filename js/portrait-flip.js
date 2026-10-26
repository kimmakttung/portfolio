'use strict';

(() => {
  const button = document.getElementById('profile-flip');
  const coin = button?.querySelector('.profile-coin');
  const front = coin?.querySelector('.profile-front');
  const back = coin?.querySelector('.profile-back');
  if (!button || !coin || !front || !back) return;

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let busy = false;
  let backVisible = false;
  let nextBackVisible = false;
  let angle = 0;
  let completionTimer = 0;
  let backReady;

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
      if (back.complete) { loaded(); return; }
      back.addEventListener('load', loaded, {once: true});
      back.addEventListener('error', failed, {once: true});
      timeout = setTimeout(failed, 12000);
    });
    return backReady;
  }

  button.addEventListener('click', async () => {
    if (busy || button.getAttribute('aria-disabled') === 'true') return;
    busy = true;
    button.setAttribute('aria-busy', 'true');
    try {
      // Never turn the portrait over to an image that has failed to load.
      if (!backVisible) await loadBack();
    } catch {
      busy = false;
      button.removeAttribute('aria-busy');
      button.setAttribute('aria-disabled', 'true');
      button.classList.add('profile-flip-unavailable');
      return;
    }

    nextBackVisible = !backVisible;
    angle += 540;
    button.classList.add('is-profile-flipping');
    coin.style.setProperty('--profile-turn', angle + 'deg');
    if (reducedMotion.matches) { finishFlip(); return; }
    completionTimer = setTimeout(finishFlip, 1400);
  });

  coin.addEventListener('transitionend', event => {
    if (event.target === coin && event.propertyName === 'transform' &&
        button.classList.contains('is-profile-flipping')) finishFlip();
  });

  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches && button.classList.contains('is-profile-flipping')) finishFlip();
  });

  publishSide();
})();

'use strict';

(() => {
  const word = document.querySelector('.connection-word');
  const spin = word?.querySelector('.connection-word-spin');
  if (!spin || spin.querySelector('.word-solid-front')) return;

  const front = document.createElement('span');
  front.className = 'word-solid-front';
  // Keep the text node registered by i18n.js, so it continues to translate.
  while (spin.firstChild) front.append(spin.firstChild);
  const layers = [];
  const layerCount = 18;
  for (let index = 1; index <= layerCount; index++) {
    const layer = document.createElement('span');
    layer.className = 'word-solid-layer';
    if (index === layerCount) layer.classList.add('word-solid-back-cap');
    layer.setAttribute('aria-hidden', 'true');
    layer.style.setProperty('--solid-z', -(index * 1.55).toFixed(2) + 'px');
    // Light catches the front bevel; the rear planes remain a deeper burgundy.
    const lightness = 34 - index * .8;
    layer.style.setProperty('--solid-color', `hsl(345 59% ${lightness.toFixed(1)}%)`);
    spin.append(layer);
    layers.push(layer);
  }
  spin.append(front);
  word.classList.add('has-solid-word');

  function syncText() {
    const text = front.textContent;
    layers.forEach(layer => { layer.textContent = text; });
  }
  document.addEventListener('languagechange', syncText);
  syncText();
})();

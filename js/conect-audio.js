// Original, procedurally generated ambient atmosphere. No copyrighted audio assets.
export function installLaboAudio(button, hotspots = []) {
  let context = null;
  let master = null;
  let active = false;
  let lastHover = 0;
  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  const label = document.getElementById('sound-text');
  function draw() {
    button.setAttribute('aria-pressed', String(active));
    button.setAttribute('aria-label', active ? '연구실 사운드 끄기' : '연구실 사운드 켜기');
    if (label) label.textContent = active ? '사운드 끄기' : '사운드 켜기';
  }
  function initialize() {
    if (!AudioCtor || context) return;
    context = new AudioCtor();
    master = context.createGain();
    master.gain.value = 0;
    master.connect(context.destination);
    const notes = [110, 164.81, 220, 329.63];
    for (const [index, frequency] of notes.entries()) {
      const oscillator = context.createOscillator();
      oscillator.type = index === 0 ? 'sine' : 'triangle';
      oscillator.frequency.value = frequency;
      const volume = context.createGain();
      volume.gain.value = index === 0 ? 0.10 : 0.025;
      const low = context.createBiquadFilter();
      low.type = 'lowpass';
      low.frequency.value = 560;
      oscillator.connect(low).connect(volume).connect(master);
      oscillator.start();
    }
    // A subtle airy texture made in memory, not an audio file.
    const length = context.sampleRate * 2;
    const buffer = context.createBuffer(1, length, context.sampleRate);
    const samples = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < samples.length; i++) {
      last = (last + (Math.random() * 2 - 1) * 0.018) / 1.008;
      samples[i] = Math.max(-0.35, Math.min(0.35, last));
    }
    const noise = context.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;
    const noiseLow = context.createBiquadFilter();
    noiseLow.type = 'lowpass';
    noiseLow.frequency.value = 240;
    const noiseGain = context.createGain();
    noiseGain.gain.value = 0.12;
    noise.connect(noiseLow).connect(noiseGain).connect(master);
    noise.start();
  }
  function chime(frequency = 500, loudness = 0.07, length = 0.22) {
    if (!active || !context || context.state !== 'running') return;
    const at = context.currentTime;
    const osc = context.createOscillator();
    const envelope = context.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(frequency, at);
    osc.frequency.exponentialRampToValueAtTime(frequency * 1.15, at + length);
    envelope.gain.setValueAtTime(0.0001, at);
    envelope.gain.exponentialRampToValueAtTime(loudness, at + 0.02);
    envelope.gain.exponentialRampToValueAtTime(0.0001, at + length);
    osc.connect(envelope).connect(master);
    osc.start(at);
    osc.stop(at + length + 0.02);
  }
  async function toggle() {
    if (!AudioCtor) {
      button.textContent = '오디오 미지원';
      button.disabled = true;
      return;
    }
    try {
      initialize();
      await context.resume();
      active = !active;
      master.gain.cancelScheduledValues(context.currentTime);
      master.gain.setTargetAtTime(active ? 0.18 : 0, context.currentTime, 0.14);
      draw();
      if (active) chime(660, 0.08, 0.26);
    } catch (error) {
      console.warn('Audio unavailable:', error?.message);
      active = false;
      draw();
    }
  }
  button.addEventListener('click', toggle);
  hotspots.forEach(hotspot => {
    hotspot.addEventListener('pointerenter', () => {
      if (Date.now() - lastHover > 160) {
        lastHover = Date.now();
        chime(480, 0.025, 0.13);
      }
    });
    hotspot.addEventListener('focus', () => chime(480, 0.025, 0.13));
  });
  document.addEventListener('visibilitychange', () => {
    if (!context || !active) return;
    if (document.hidden) context.suspend().catch(() => {});
    else context.resume().catch(() => {});
  });
  window.addEventListener('pagehide', () => {
    const previous = context;
    context = null;
    master = null;
    active = false;
    draw();
    if (previous) previous.close().catch(() => {});
  });
  draw();
  return {
    click: () => chime(523, 0.1, 0.3),
    transition: () => chime(246.94, 0.12, 0.62),
    get active() { return active; }
  };
}

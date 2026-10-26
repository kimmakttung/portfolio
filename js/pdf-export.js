'use strict';

// A small, dependency-free PDF exporter. Browser fonts render every supported
// language; one reusable canvas keeps long documents from allocating many images.
const proposalPDF = (() => {
  const pageWidth = 1240;
  const pageHeight = 1754;
  const margin = 86;
  const bodyBottom = pageHeight - 116;
  const bodySize = 23;
  const bodyLeading = 36;
  const encoder = new TextEncoder();
  const labels = {
    ko: {proposal: '기획서', empty: '작성된 내용이 없습니다.'},
    ja: {proposal: '企画書', empty: '内容がありません。'},
    en: {proposal: 'Proposal', empty: 'No content has been added.'},
    vi: {proposal: 'Bản đề xuất', empty: 'Chưa có nội dung.'},
    'zh-CN': {proposal: '策划书', empty: '尚未填写内容。'}
  };
  let queue = Promise.resolve();

  const yieldToBrowser = () => new Promise(resolve => setTimeout(resolve, 0));

  function font(language, size, weight = 400) {
    const primary = {ko: 'Noto Sans CJK KR', ja: 'Noto Sans CJK JP', 'zh-CN': 'Noto Sans CJK SC'}[language] || 'Noto Sans';
    return `${weight} ${size}px "${primary}","Noto Sans CJK KR","Noto Sans CJK JP","Noto Sans CJK SC",Arial,sans-serif`;
  }

  function filename(title) {
    const characters = Array.from(title.replace(/[<>:"/\\|?*\u0000-\u001f\u007f]/g, '_').trim()).slice(0, 100);
    while (encoder.encode(characters.join('')).byteLength > 180) characters.pop();
    let safe = characters.join('').replace(/[. ]+$/, '');
    if (!safe) safe = 'proposal';
    if (/^(con|prn|aux|nul|com[0-9]|lpt[0-9])(?:\.|$)/i.test(safe)) safe = '_' + safe;
    return safe.replace(/\.pdf$/i, '') + '.pdf';
  }

  function* wrappedLines(context, text, maxWidth, language) {
    const words = typeof Intl.Segmenter === 'function'
      ? new Intl.Segmenter(language, {granularity: 'word'}).segment(text)
      : text.split(/(\s+)/).map(segment => ({segment}));
    let line = '';
    for (const {segment} of words) {
      if (line && context.measureText(line + segment).width > maxWidth) {
        yield line.trimEnd();
        line = '';
        if (!segment.trim()) continue;
      }
      if (context.measureText(segment).width <= maxWidth) {
        line += segment;
        continue;
      }
      const graphemes = typeof Intl.Segmenter === 'function'
        ? new Intl.Segmenter(language, {granularity: 'grapheme'}).segment(segment)
        : Array.from(segment).map(value => ({segment: value}));
      for (const part of graphemes) {
        if (line && context.measureText(line + part.segment).width > maxWidth) {
          yield line.trimEnd();
          line = '';
        }
        line += part.segment;
      }
    }
    if (line) yield line.trimEnd();
  }

  function fittedHeader(context, text, width) {
    if (context.measureText(text).width <= width) return text;
    const chars = Array.from(text);
    let low = 0;
    let high = chars.length;
    while (low < high) {
      const middle = Math.ceil((low + high) / 2);
      if (context.measureText(chars.slice(0, middle).join('') + '…').width <= width) low = middle;
      else high = middle - 1;
    }
    return chars.slice(0, low).join('') + '…';
  }

  async function layout(context, title, content, language) {
    const pages = [[]];
    let page = pages[0];
    let y = 170;
    let linesSinceYield = 0;
    function newPage() {
      page = [];
      pages.push(page);
      y = 170;
    }
    function addLine(text, size, weight, leading, color) {
      if (y + leading > bodyBottom) newPage();
      page.push({text, size, weight, color, y});
      y += leading;
    }
    context.font = font(language, 36, 700);
    for (const line of wrappedLines(context, title, pageWidth - margin * 2, language)) {
      addLine(line, 36, 700, 51, '#692139');
    }
    y += 24;
    const paragraphs = content.replace(/\r\n?/g, '\n').replace(/\t/g, '    ').replace(/\u0000/g, '').split('\n');
    // The document title is already printed in full above the body.
    if (paragraphs[0]?.replace(/^#{1,6}\s+/, '').trim() === title) paragraphs.shift();
    if (!paragraphs.some(line => line.trim())) paragraphs.push(labels[language].empty);
    for (const paragraph of paragraphs) {
      if (!paragraph.trim()) { y = Math.min(bodyBottom, y + 15); continue; }
      const heading = /^#{1,6}\s+/.test(paragraph) || (/^\d{1,2}[.)]\s+\S/.test(paragraph) && paragraph.length < 140);
      const text = paragraph.replace(/^#{1,6}\s+/, '');
      const size = heading ? 26 : bodySize;
      const weight = heading ? 700 : 400;
      const leading = heading ? 40 : bodyLeading;
      if (heading) {
        if (y + leading + bodyLeading * 2 > bodyBottom) newPage();
        else y += 9;
      }
      context.font = font(language, size, weight);
      for (const line of wrappedLines(context, text, pageWidth - margin * 2, language)) {
        addLine(line, size, weight, leading, heading ? '#692139' : '#252329');
        if (++linesSinceYield >= 100) { linesSinceYield = 0; await yieldToBrowser(); }
      }
    }
    return pages;
  }

  function canvasJPEG(canvas) {
    return new Promise((resolve, reject) => canvas.toBlob(blob => {
      if (blob) resolve(blob);
      else reject(Error('Could not render PDF page'));
    }, 'image/jpeg', .94));
  }

  async function createPDF(title, content, language) {
    if (document.fonts?.ready) await document.fonts.ready;
    const canvas = document.createElement('canvas');
    canvas.width = pageWidth;
    canvas.height = pageHeight;
    const context = canvas.getContext('2d', {alpha: false});
    if (!context) throw Error('Canvas is unavailable');
    try {
      const pages = await layout(context, title, content, language);
      const parts = [];
      const offsets = [0];
      let length = 0;
      const append = value => {
        const bytes = typeof value === 'string' ? encoder.encode(value) : value;
        parts.push(bytes);
        length += bytes.byteLength;
      };
      const object = (id, value) => {
        offsets[id] = length;
        append(`${id} 0 obj\n${value}\nendobj\n`);
      };
      append('%PDF-1.4\n%\u00e2\u00e3\u00cf\u00d3\n');
      object(1, '<< /Type /Catalog /Pages 2 0 R >>');
      object(2, `<< /Type /Pages /Count ${pages.length} /Kids [${pages.map((_, index) => `${3 + index * 3} 0 R`).join(' ')}] >>`);
      for (let index = 0; index < pages.length; index++) {
        context.fillStyle = '#ffffff';
        context.fillRect(0, 0, pageWidth, pageHeight);
        context.textBaseline = 'alphabetic';
        context.fillStyle = '#692139';
        context.font = font(language, 19, 700);
        context.fillText('KIM DOHYEON  /  ' + labels[language].proposal, margin, 73);
        context.strokeStyle = '#d9c6ce';
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(margin, 100);
        context.lineTo(pageWidth - margin, 100);
        context.stroke();
        if (index > 0) {
          context.fillStyle = '#746570';
          context.font = font(language, 16);
          context.fillText(fittedHeader(context, title, pageWidth - margin * 2), margin, 124);
        }
        for (const line of pages[index]) {
          context.fillStyle = line.color;
          context.font = font(language, line.size, line.weight);
          context.fillText(line.text, margin, line.y);
        }
        context.strokeStyle = '#e7dfe3';
        context.beginPath();
        context.moveTo(margin, pageHeight - 85);
        context.lineTo(pageWidth - margin, pageHeight - 85);
        context.stroke();
        context.fillStyle = '#746570';
        context.font = font(language, 16);
        context.fillText('PORTFOLIO', margin, pageHeight - 52);
        const counter = `${index + 1} / ${pages.length}`;
        context.fillText(counter, pageWidth - margin - context.measureText(counter).width, pageHeight - 52);
        const image = new Uint8Array(await (await canvasJPEG(canvas)).arrayBuffer());
        const pageID = 3 + index * 3;
        object(pageID, `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /XObject << /Im0 ${pageID + 2} 0 R >> >> /Contents ${pageID + 1} 0 R >>`);
        const commands = 'q\n595.28 0 0 841.89 0 0 cm\n/Im0 Do\nQ\n';
        object(pageID + 1, `<< /Length ${encoder.encode(commands).byteLength} >>\nstream\n${commands}endstream`);
        offsets[pageID + 2] = length;
        append(`${pageID + 2} 0 obj\n<< /Type /XObject /Subtype /Image /Width ${pageWidth} /Height ${pageHeight} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${image.byteLength} >>\nstream\n`);
        append(image);
        append('\nendstream\nendobj\n');
        await yieldToBrowser();
      }
      const crossReference = length;
      append(`xref\n0 ${offsets.length}\n0000000000 65535 f \n`);
      for (const offset of offsets.slice(1)) append(String(offset).padStart(10, '0') + ' 00000 n \n');
      append(`trailer\n<< /Size ${offsets.length} /Root 1 0 R >>\nstartxref\n${crossReference}\n%%EOF\n`);
      return new Blob(parts, {type: 'application/pdf'});
    } finally {
      canvas.width = canvas.height = 1;
    }
  }

  async function exportDocument({title, content, language} = {}) {
    const selected = Object.hasOwn(labels, language) ? language : 'ko';
    const documentTitle = String(title || labels[selected].proposal).trim() || labels[selected].proposal;
    const blob = await createPDF(documentTitle, String(content || ''), selected);
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename(documentTitle);
    link.hidden = true;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 30000);
  }

  function download(document) {
    const task = queue.then(() => exportDocument(document));
    queue = task.catch(() => {});
    return task;
  }

  return Object.freeze({download});
})();

// Exporta cada SVG de public/downloads/02_Logo para PDF vetorial e PNG transparente (512, 1024, 4096 px).
// Requer Playwright (npx playwright install chromium). EPS é gerado depois com `pdftops -eps` (poppler).
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..', 'public', 'downloads', '02_Logo');
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
(async () => {
  const svgs = walk(ROOT).filter((f) => f.endsWith('.svg'));
  const b = await chromium.launch();
  const p = await b.newPage();
  for (const f of svgs) {
    const svg = fs.readFileSync(f, 'utf8');
    const [, w, h] = svg.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/).map(Number);
    const base = f.replace(/\.svg$/, '');
    const html = (W) => `<!doctype html><html><head><style>html,body{margin:0;background:transparent}svg{display:block;width:${W}px;height:auto}</style></head><body>${svg}</body></html>`;
    for (const W of [512, 1024, 4096]) {
      const H = Math.ceil((W * h) / w);
      await p.setViewportSize({ width: W, height: H });
      await p.setContent(html(W));
      await p.screenshot({ path: `${base}_${W}px.png`, omitBackground: true, clip: { x: 0, y: 0, width: W, height: H } });
    }
    // PDF vetorial: página do tamanho exato do logo (1 unidade = 1/100 pol.)
    const pw = w / 100, ph = h / 100;
    await p.setContent(`<!doctype html><html><head><style>@page{size:${pw}in ${ph}in;margin:0}html,body{margin:0}svg{display:block;width:${pw}in;height:${ph}in}</style></head><body>${svg}</body></html>`);
    await p.pdf({ path: `${base}.pdf`, width: `${pw}in`, height: `${ph}in`, printBackground: false, pageRanges: '1' });
  }
  await b.close();
  console.log(svgs.length, 'logos exportados');
})();

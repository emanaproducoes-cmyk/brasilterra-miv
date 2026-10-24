"""Gera tokens de cor (CSS/JSON), paletas (.gpl/.ase), CSS tipográfico e textos de apoio."""
import json, os, re, struct
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DL = os.path.join(ROOT, 'public', 'downloads')
src = open(os.path.join(ROOT, 'lib', 'brand.ts'), encoding='utf-8').read()

def block(name):
    m = re.search(r'export const %s: Swatch\[\] = \[(.*?)\n\];' % name, src, re.S)
    items = re.findall(r"id: '([^']+)',\s*name: '([^']+)',\s*hex: '(#[0-9A-F]{6})',\s*role: '([^']+)'", m.group(1))
    pant = dict(re.findall(r"id: '([^']+)'.*?pantone: '([^']+)'", m.group(1), re.S))
    return [dict(id=i, name=n, hex=h, role=r, pantone=pant.get(i)) for i, n, h, r in items]

groups = {g: block(g) for g in ['primary', 'secondary', 'neutrals', 'functional', 'dataviz']}
PT = {'primary': 'primarias', 'secondary': 'secundarias', 'neutrals': 'neutros', 'functional': 'funcionais', 'dataviz': 'dados'}

def rgb(h): return [int(h[i:i + 2], 16) for i in (1, 3, 5)]
def cmyk(h):
    r, g, b = [v / 255 for v in rgb(h)]; k = 1 - max(r, g, b)
    if k >= 1: return [0, 0, 0, 100]
    return [round(v * 100) for v in ((1 - r - k) / (1 - k), (1 - g - k) / (1 - k), (1 - b - k) / (1 - k), k)]

os.makedirs(os.path.join(DL, '03_Cores'), exist_ok=True)
# tokens.json
tok = {PT[g]: {s['id']: {'nome': s['name'], 'hex': s['hex'], 'rgb': rgb(s['hex']), 'cmyk_aprox': cmyk(s['hex']),
                         'pantone_aprox': s['pantone'], 'funcao': s['role']} for s in v} for g, v in groups.items()}
tok['_aviso'] = 'CMYK por conversão matemática (sem perfil ICC) e Pantone por aproximação visual. Validar com prova de cor.'
json.dump(tok, open(os.path.join(DL, '03_Cores', 'tokens.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=2)
# tokens.css
css = ['/* Brasil Terra · tokens de cor · gerado a partir de lib/brand.ts */', ':root {']
for g, v in groups.items():
    css.append(f'  /* {PT[g]} */')
    for s in v: css.append(f'  --bt-{s["id"]}: {s["hex"]}; /* {s["name"]} */')
css.append('}')
open(os.path.join(DL, '03_Cores', 'tokens.css'), 'w', encoding='utf-8').write('\n'.join(css) + '\n')
# paleta.gpl (GIMP / Inkscape / Krita)
gpl = ['GIMP Palette', 'Name: Brasil Terra', 'Columns: 6', '#']
for g, v in groups.items():
    for s in v: r, gg, b = rgb(s['hex']); gpl.append(f'{r:3d} {gg:3d} {b:3d}\t{s["name"]}')
open(os.path.join(DL, '03_Cores', 'paleta.gpl'), 'w', encoding='utf-8').write('\n'.join(gpl) + '\n')
# paleta.ase (Adobe Swatch Exchange, especificação pública: grupos + cores RGB globais)
def ase_str(s):
    s = s + '\0'; return struct.pack('>H', len(s)) + s.encode('utf-16-be')
blocks = []
for g, v in groups.items():
    name = ase_str('Brasil Terra · ' + PT[g])
    blocks.append(struct.pack('>HI', 0xC001, len(name)) + name)
    for s in v:
        n = ase_str(s['name']); r, gg, b = [c / 255 for c in rgb(s['hex'])]
        body = n + b'RGB ' + struct.pack('>fffH', r, gg, b, 0)
        blocks.append(struct.pack('>HI', 0x0001, len(body)) + body)
    blocks.append(struct.pack('>HI', 0xC002, 0))
open(os.path.join(DL, '03_Cores', 'paleta.ase'), 'wb').write(b'ASEF' + struct.pack('>HHI', 1, 0, len(blocks)) + b''.join(blocks))

# 04 Tipografia
T = os.path.join(DL, '04_Tipografia'); os.makedirs(T, exist_ok=True)
open(os.path.join(T, 'tipografia.css'), 'w', encoding='utf-8').write('''/* Brasil Terra · sistema tipográfico
   Fontes: Montserrat (títulos, números) + Source Sans 3 (texto). Licença SIL OFL 1.1.
   Copie a pasta /fonts para o seu projeto ou use o Google Fonts (links em links_oficiais_das_fontes.txt). */
@font-face { font-family: 'Montserrat'; src: url('fonts/Montserrat-Medium.woff') format('woff'); font-weight: 500; font-display: swap; }
@font-face { font-family: 'Montserrat'; src: url('fonts/Montserrat-SemiBold.woff') format('woff'); font-weight: 600; font-display: swap; }
@font-face { font-family: 'Montserrat'; src: url('fonts/Montserrat-Bold.woff') format('woff'); font-weight: 700; font-display: swap; }
@font-face { font-family: 'Montserrat'; src: url('fonts/Montserrat-ExtraBold.woff') format('woff'); font-weight: 800; font-display: swap; }
@font-face { font-family: 'Source Sans 3'; src: url('fonts/SourceSans3-Light.woff') format('woff'); font-weight: 300; font-display: swap; }
@font-face { font-family: 'Source Sans 3'; src: url('fonts/SourceSans3-Regular.woff') format('woff'); font-weight: 400; font-display: swap; }
@font-face { font-family: 'Source Sans 3'; src: url('fonts/SourceSans3-It.woff') format('woff'); font-weight: 400; font-style: italic; font-display: swap; }
@font-face { font-family: 'Source Sans 3'; src: url('fonts/SourceSans3-Semibold.woff') format('woff'); font-weight: 600; font-display: swap; }
@font-face { font-family: 'Source Sans 3'; src: url('fonts/SourceSans3-Bold.woff') format('woff'); font-weight: 700; font-display: swap; }

:root {
  --bt-font-display: 'Montserrat', Arial, Helvetica, sans-serif;
  --bt-font-text: 'Source Sans 3', Calibri, 'Segoe UI', system-ui, sans-serif;
}
body        { font-family: var(--bt-font-text); font-size: 1.0625rem; line-height: 1.5; color: #262A33; }
h1, .bt-h1  { font-family: var(--bt-font-display); font-weight: 700; font-size: 3.5rem;  line-height: 1.05; letter-spacing: -0.01em; color: #000; }
h2, .bt-h2  { font-family: var(--bt-font-display); font-weight: 700; font-size: 2.25rem; line-height: 1.15; letter-spacing: -0.005em; color: #000; }
h3, .bt-h3  { font-family: var(--bt-font-display); font-weight: 600; font-size: 1.5rem;  line-height: 1.25; color: #063E9B; }
.bt-kicker  { font-family: var(--bt-font-display); font-weight: 600; font-size: .75rem; line-height: 1.3; letter-spacing: .12em; text-transform: uppercase; color: #063E9B; }
.bt-lead    { font-weight: 300; font-size: 1.375rem; line-height: 1.4; }
.bt-caption { font-size: .8125rem; line-height: 1.4; letter-spacing: .01em; color: #4B5260; }
blockquote, .bt-quote { font-style: italic; font-size: 1.5rem; line-height: 1.35; color: #063E9B; }
.bt-kpi     { font-family: var(--bt-font-display); font-weight: 800; font-size: 4rem; line-height: 1; letter-spacing: -0.02em; color: #063E9B; font-variant-numeric: tabular-nums; }
table, .bt-table { font-size: .875rem; line-height: 1.3; font-variant-numeric: tabular-nums lining-nums; }
.bt-button  { font-family: var(--bt-font-display); font-weight: 600; font-size: .9375rem; letter-spacing: .02em; }
.bt-footer  { font-size: .75rem; line-height: 1.4; letter-spacing: .02em; color: #4B5260; }
p { max-width: 72ch; margin: 0 0 .75em; }
''')
open(os.path.join(T, 'links_oficiais_das_fontes.txt'), 'w', encoding='utf-8').write('''Fontes oficiais Brasil Terra (gratuitas, licença SIL Open Font License 1.1, uso comercial permitido)

Montserrat (títulos, números de destaque, botões)
  Google Fonts: https://fonts.google.com/specimen/Montserrat
  Repositório oficial: https://github.com/JulietaUla/Montserrat

Source Sans 3 (texto corrido, tabelas, interfaces)
  Google Fonts: https://fonts.google.com/specimen/Source+Sans+3
  Repositório oficial: https://github.com/adobe-fonts/source-sans

Contingência (quando as fontes da marca não estiverem instaladas)
  Word / PowerPoint / Excel: Arial (títulos) + Calibri (texto)
  E-mail: Arial, Helvetica, sans-serif
  SharePoint / Teams: Segoe UI

A pasta fonts/ contém subconjuntos WOFF (latim + latim estendido) para uso web, com as licenças OFL.
Para instalar no computador (Word, PowerPoint), baixe os arquivos TTF/OTF pelos links acima.
''')
import shutil
shutil.copytree(os.path.join(ROOT, 'public', 'fonts'), os.path.join(T, 'fonts'), dirs_exist_ok=True)
print('ok')

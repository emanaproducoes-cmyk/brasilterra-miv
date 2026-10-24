"""Gera os SVGs oficiais do logo Brasil Terra a partir de lib/logoData.json.
Uso: python3 scripts/gerar_logos.py  →  public/downloads/02_Logo/<arranjo>/<versao>/*.svg
Os SVGs usam cores sólidas (sem variáveis CSS), prontos para Illustrator, Figma e gráficas."""
import json, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
D = json.load(open(os.path.join(ROOT, 'lib', 'logoData.json')))
OUT = os.path.join(ROOT, 'public', 'downloads', '02_Logo')

A, Y, K, W = '#063E9B', '#FEBF26', '#000000', '#FFFFFF'
SCHEMES = {
    'fullcolor':   dict(bar=Y, blue=A, yellow=Y, text=K),
    'negativa':    dict(bar=Y, blue=W, yellow=Y, text=W),
    'mono_preto':  dict(bar=K, blue=K, yellow=K, text=K),
    'mono_branco': dict(bar=W, blue=W, yellow=W, text=W),
    'mono_azul':   dict(bar=A, blue=A, yellow=A, text=A),
    'tons_cinza':  dict(bar='#8C8C8C', blue='#3D3D3D', yellow='#8C8C8C', text=K),
}
LET_L, WIDTH = 383.0, D['width']
LET_W = WIDTH - LET_L
LAYOUTS = {
    'horizontal': (WIDTH, 300, True), 'horizontal_sem_descritor': (WIDTH, 300, False),
    'vertical': (720, 660, True), 'vertical_sem_descritor': (720, 625, False),
    'simbolo': (320, 300, None),
}
FOLDER = {'horizontal': 'horizontal', 'horizontal_sem_descritor': 'horizontal', 'vertical': 'vertical',
          'vertical_sem_descritor': 'vertical', 'simbolo': 'simbolo'}

def build(layout, scheme):
    c = SCHEMES[scheme]; w, h, desc = LAYOUTS[layout]; s = D['symbol']
    sym = (f'<g id="simbolo"><path fill="{c["bar"]}" d="{s["bar"]}"/>'
           f'<path fill="{c["blue"]}" d="{s["blue"]}"/><path fill="{c["yellow"]}" d="{s["yellow"]}"/></g>')
    let = f'<g id="lettering" fill="{c["text"]}"><path d="{D["brasil"]}"/><path d="{D["terra"]}"/>'
    if desc: let += f'<path id="descritor" d="{D["descriptor"]}"/>'
    let += '</g>'
    if layout == 'simbolo': body = sym
    elif layout.startswith('vertical'):
        tx = (720 - LET_W) / 2 - LET_L
        body = f'<g transform="translate(200 0)">{sym}</g><g transform="translate({tx:.2f} 360)">{let}</g>'
    else: body = sym + let
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}">'
            f'<title>Brasil Terra — Consultoria e Projetos de Viabilidade</title>{body}</svg>')

if __name__ == '__main__':
    n = 0
    for lay in LAYOUTS:
        for sc in SCHEMES:
            d = os.path.join(OUT, FOLDER[lay], sc); os.makedirs(d, exist_ok=True)
            open(os.path.join(d, f'BrasilTerra_{lay}_{sc}.svg'), 'w').write(build(lay, sc)); n += 1
    os.makedirs(os.path.join(ROOT, 'public'), exist_ok=True)
    open(os.path.join(ROOT, 'public', 'favicon.svg'), 'w').write(build('simbolo', 'fullcolor'))
    print(n, 'SVGs gerados')

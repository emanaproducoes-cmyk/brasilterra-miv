import { Chapter, Page, Rules } from '../ui';
import Logo, { LogoInner, logoBox, type LogoLayout, type LogoScheme } from '../Logo';
import { Landscape } from '../mockups/Scenes';
import data from '../../lib/logoData.json';

function Protected({ layout, units }: { layout: LogoLayout; units: number }) {
  const b = logoBox(layout);
  const p = 60; // 3x
  return (
    <svg viewBox={`${-p - 20} ${-p - 20} ${b.w + 2 * p + 40} ${b.h + 2 * p + 40}`} className="protect" role="img" aria-label={`Área de proteção de 3x, versão ${layout}`}>
      <rect className="pz" x={-p} y={-p} width={b.w + 2 * p} height={b.h + 2 * p} />
      <rect className="pz-in" x={0} y={0} width={b.w} height={b.h} />
      <LogoInner layout={layout} />
      <g className="xmark">
        {[[-p, -p], [b.w, -p], [-p, b.h], [b.w, b.h]].map(([x, y], i) => (
          <g key={i}>
            <rect x={x} y={y} width={p} height={p} />
            <text x={x + p / 2} y={y + p / 2 + 1} textAnchor="middle" dominantBaseline="middle">
              3x
            </text>
          </g>
        ))}
      </g>
      <title>{units}</title>
    </svg>
  );
}

const SIZES = [
  ['Favicon', 'Símbolo', '32 px', '2 px', '6 px'],
  ['Avatar de redes', 'Símbolo', '60% do círculo', '—', 'centralizado'],
  ['Assinatura de e-mail', 'Horizontal sem descritor', '200 px', '3,9 px', '12 px'],
  ['Cartão de visita 90×50 mm', 'Horizontal', '50 mm', '0,98 mm', '2,9 mm'],
  ['Papel timbrado A4', 'Horizontal', '60 mm', '1,18 mm', '3,5 mm'],
  ['Pasta institucional', 'Vertical', '80 mm', '2,2 mm', '6,7 mm'],
  ['Uniforme (peito)', 'Horizontal sem descritor', '80 mm', '1,57 mm', '4,7 mm'],
  ['Placa de obra 3 × 2 m', 'Horizontal', '1,20 m', '2,35 cm', '7 cm'],
  ['Tenda 3 × 3 m (testeira)', 'Horizontal', '1,60 m', '3,1 cm', '9,4 cm'],
  ['Fachada / letreiro', 'Horizontal', '4,50 m', '8,8 cm', '26,5 cm'],
];

const FORMATS = [
  ['A4', 'a4', 'Margem 15 mm · logo 55 mm no canto superior esquerdo'],
  ['A3', 'a3', 'Margem 20 mm · logo 80 mm no canto superior esquerdo'],
  ['16:9', 'w169', 'Margem 5% · logo em 16% da largura, inferior esquerdo'],
  ['1:1', 'sq', 'Margem 7% · símbolo em 10% da largura, inferior direito'],
  ['9:16', 'st', 'Zona segura 14% topo e base · logo centralizado acima da base'],
];

export function S06() {
  return (
    <>
      <Chapter
        id="malha"
        n="06"
        title="Malha construtiva"
        text="Regras de espaço e de tamanho garantem que a marca seja sempre legível e respeitada, da assinatura de e-mail à fachada."
        items={['Área de proteção', 'Redução mínima', 'Tabela de proporções', 'Posicionamento por formato']}
      />
      <Page eyebrow="06 · Área de proteção" title="3x de espaço livre em todas as direções" lead="Nenhum texto, imagem, borda ou elemento gráfico pode invadir a área de proteção. Ela equivale ao respiro entre o símbolo e o lettering.">
        <div className="protects">
          <div className="rv wide-cell">
            <Protected layout="horizontal" units={51} />
            <p className="cap">Horizontal (principal)</p>
          </div>
          <div className="rv">
            <Protected layout="vertical" units={36} />
            <p className="cap">Vertical</p>
          </div>
          <div className="rv">
            <Protected layout="simbolo" units={16} />
            <p className="cap">Símbolo</p>
          </div>
        </div>
      </Page>

      <Page eyebrow="06 · Redução mínima" title="Até onde a marca pode diminuir" tone="white">
        <div className="mins">
          {[
            ['horizontal', 'Horizontal com descritor', '50 mm', '360 px', 180],
            ['horizontal-sem-descritor', 'Horizontal sem descritor', '25 mm', '120 px', 120],
            ['vertical', 'Vertical com descritor', '35 mm', '240 px', 120],
            ['simbolo', 'Símbolo isolado', '8 mm', '24 px (16 px favicon)', 40],
          ].map(([l, t, mm, px, w]) => (
            <div key={t as string} className="min rv">
              <div className="min-art">
                <Logo layout={l as LogoLayout} style={{ width: w as number }} />
              </div>
              <h4>{t}</h4>
              <p>
                <b>Impresso</b> {mm}
              </p>
              <p>
                <b>Digital</b> {px}
              </p>
            </div>
          ))}
        </div>
        <p className="note rv">
          Abaixo de 50 mm (ou 360 px) o descritor fica com caixa-alta menor que 0,9 mm e perde legibilidade: use a versão sem descritor. Em
          bordado, a redução mínima é de 60 mm para a versão sem descritor.
        </p>
      </Page>

      <Page eyebrow="06 · Proporções" title="Medidas para qualquer aplicação">
        <div className="table-wrap rv">
          <table className="spec wide">
            <thead>
              <tr>
                <th>Aplicação</th>
                <th>Versão</th>
                <th>Largura do logo</th>
                <th>Valor de x</th>
                <th>Área de proteção (3x)</th>
              </tr>
            </thead>
            <tbody>
              {SIZES.map((r) => (
                <tr key={r[0]}>
                  {r.map((c, i) => (
                    <td key={i}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="note rv">Fórmula: x = largura ÷ 51 (horizontal) · ÷ 36 (vertical) · ÷ 16 (símbolo).</p>
      </Page>

      <Page eyebrow="06 · Formatos" title="Posicionamento e ancoragem" tone="white">
        <div className="formats">
          {FORMATS.map(([t, cls, d]) => (
            <div key={t} className="format rv">
              <div className={`fmt ${cls}`}>
                <div className="fmt-margin" />
                <div className="fmt-logo">
                  <Logo layout={cls === 'sq' ? 'simbolo' : cls === 'st' ? 'vertical-sem-descritor' : 'horizontal-sem-descritor'} scheme={cls === 'st' || cls === 'w169' ? 'negativa' : 'full'} />
                </div>
              </div>
              <h4>{t}</h4>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </Page>
    </>
  );
}

const ARR: [LogoLayout, string][] = [
  ['horizontal', 'Horizontal · principal'],
  ['horizontal-sem-descritor', 'Horizontal sem descritor'],
  ['vertical', 'Vertical'],
  ['vertical-sem-descritor', 'Vertical sem descritor'],
  ['simbolo', 'Símbolo isolado'],
];

const CHROMA: [LogoScheme, string, string, string][] = [
  ['full', 'Full color · positiva', '#FFFFFF', 'Fundos claros: branco e Papel Terra.'],
  ['negativa', 'Negativa', '#031B47', 'Azul Profundo, Azul Meridiano, Preto Norte, fotos escuras.'],
  ['preto', 'Monocromática preta', '#FFFFFF', 'Carimbo, fax, jornal, gravação a laser.'],
  ['branco', 'Monocromática branca', '#063E9B', 'Serigrafia 1 cor, bordado, adesivo recortado.'],
  ['azul', 'Monocromática Azul Meridiano', '#F6F4EE', 'Impressão 1 cor especial (Pantone 293).'],
  ['cinza', 'Tons de cinza', '#FFFFFF', 'Impressão P&B com meio-tom.'],
];

const WRONG = [
  ['Distorcer', { transform: 'scale(1.3, 0.8)' }],
  ['Girar', { transform: 'rotate(-12deg)' }],
  ['Trocar cores', { filter: 'hue-rotate(150deg)' }],
  ['Aplicar sombra', { filter: 'drop-shadow(6px 6px 3px rgba(0,0,0,.55))' }],
  ['Aplicar contorno', { stroke: '#B3261E', strokeWidth: 8, paintOrder: 'stroke' }],
  ['Alterar proporção', 'prop'],
  ['Recompor elementos', 'recompose'],
  ['Fundo de baixo contraste', 'lowbg'],
  ['Reduzir abaixo do mínimo', 'tiny'],
  ['Aplicar degradê', 'gradient'],
  ['Cortar o logo', 'crop'],
  ['Usar “&” no descritor', 'amp'],
] as const;

function Wrong({ kind, style }: { kind: string; style?: React.CSSProperties }) {
  if (kind === 'prop')
    return (
      <svg viewBox="0 0 1020 300" className="logo">
        <g transform="translate(0 135) scale(0.55)">
          <LogoInner layout="simbolo" />
        </g>
        <g transform="translate(-180 0)">
          <LogoInnerTypeOnly />
        </g>
      </svg>
    );
  if (kind === 'recompose')
    return (
      <svg viewBox="0 0 1040 300" className="logo">
        <g transform="translate(-383 0)">
          <LogoInnerTypeOnly />
        </g>
        <g transform="translate(720 0)">
          <LogoInner layout="simbolo" />
        </g>
      </svg>
    );
  if (kind === 'lowbg') return <div className="wbg" style={{ background: '#063E9B' }}><Logo /></div>;
  if (kind === 'tiny') return <Logo style={{ width: 46 }} />;
  if (kind === 'gradient')
    return (
      <svg viewBox="0 0 1020 300" className="logo">
        <defs>
          <linearGradient id="wg" x1="0" x2="1">
            <stop offset="0" stopColor="#FEBF26" />
            <stop offset="1" stopColor="#063E9B" />
          </linearGradient>
        </defs>
        <g style={{ ['--lg-bar' as string]: 'url(#wg)', ['--lg-blue' as string]: 'url(#wg)', ['--lg-yellow' as string]: 'url(#wg)', ['--lg-text' as string]: 'url(#wg)' }}>
          <LogoInner />
        </g>
      </svg>
    );
  if (kind === 'crop') return <div className="wcrop"><Logo /></div>;
  if (kind === 'amp')
    return (
      <svg viewBox="0 0 1020 300" className="logo">
        <LogoInner layout="horizontal-sem-descritor" />
        <text x="393" y="298" textLength="626" lengthAdjust="spacingAndGlyphs" className="amp-txt">
          CONSULTORIA &amp; PROJETOS DE VIABILIDADE
        </text>
      </svg>
    );
  return <Logo style={style} />;
}

// apenas lettering (para os exemplos de uso incorreto)
function LogoInnerTypeOnly() {
  return (
    <g fill="#000">
      <path d={data.brasil} />
      <path d={data.terra} />
      <path d={data.descriptor} />
    </g>
  );
}

export function S07() {
  return (
    <>
      <Chapter
        id="versoes"
        n="07"
        title="Versões & fundos"
        text="Um sistema de arranjos e versões cromáticas para que a marca funcione em qualquer formato, técnica de impressão e fundo, sempre com as proporções originais."
        items={['Arranjos', 'Versões cromáticas', 'Fundos permitidos e proibidos', 'Usos incorretos', 'Fotografia e vídeo']}
      />
      <Page eyebrow="07 · Arranjos" title="Horizontal, vertical e símbolo">
        <div className="arrs">
          {ARR.map(([l, t]) => (
            <div key={l} className={['arr rv', l === 'horizontal' ? 'main' : ''].join(' ')}>
              <div className="arr-art">
                <Logo layout={l} />
              </div>
              <p>{t}</p>
            </div>
          ))}
        </div>
        <p className="note rv">
          A versão horizontal com descritor é a principal e deve ser preferida sempre que houver espaço. A vertical é derivada: mesmo símbolo,
          mesmo lettering, mesma escala, com respiro de 3x entre eles.
        </p>
      </Page>

      <Page eyebrow="07 · Versões cromáticas" title="Seis versões para cada técnica" tone="white">
        <div className="chromas">
          {CHROMA.map(([s, t, bg, d]) => (
            <div key={s} className="chroma rv">
              <div className="chroma-art" style={{ background: bg }}>
                <Logo scheme={s} />
              </div>
              <h4>{t}</h4>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </Page>

      <Page eyebrow="07 · Laboratório" title="Teste a marca sobre cada fundo" lead="Escolha o arranjo, a versão e o fundo. A recomendação aparece abaixo da área de teste." dark>
        <div className="lab rv" id="lab" data-layout="horizontal" data-scheme="full" data-bg="branco">
          <div className="lab-stage">
            <div className="lab-photo" aria-hidden="true">
              <Landscape />
            </div>
            <div className="lab-pattern" aria-hidden="true" />
            <div className="lab-logo l-horizontal">
              <Logo layout="horizontal" />
            </div>
            <div className="lab-logo l-vertical">
              <Logo layout="vertical" />
            </div>
            <div className="lab-logo l-simbolo">
              <Logo layout="simbolo" />
            </div>
          </div>
          <div className="lab-ctrl">
            <div role="group" aria-label="Arranjo">
              <span>Arranjo</span>
              {[['horizontal', 'Horizontal'], ['vertical', 'Vertical'], ['simbolo', 'Símbolo']].map(([v, t], i) => (
                <button key={v} data-set={`layout:${v}`} data-target="#lab" aria-pressed={i === 0 ? 'true' : 'false'}>
                  {t}
                </button>
              ))}
            </div>
            <div role="group" aria-label="Versão">
              <span>Versão</span>
              {[['full', 'Full color'], ['negativa', 'Negativa'], ['preto', 'Preta'], ['branco', 'Branca']].map(([v, t], i) => (
                <button key={v} data-set={`scheme:${v}`} data-target="#lab" aria-pressed={i === 0 ? 'true' : 'false'}>
                  {t}
                </button>
              ))}
            </div>
            <div role="group" aria-label="Fundo">
              <span>Fundo</span>
              {[
                ['branco', 'Branco'],
                ['papel', 'Papel Terra'],
                ['profundo', 'Azul Profundo'],
                ['meridiano', 'Meridiano'],
                ['safra', 'Safra'],
                ['foto', 'Foto escura'],
                ['padrao', 'Padrão'],
              ].map(([v, t], i) => (
                <button key={v} data-set={`bg:${v}`} data-target="#lab" aria-pressed={i === 0 ? 'true' : 'false'}>
                  {t}
                </button>
              ))}
            </div>
          </div>
          <p className="lab-verdict" aria-live="polite" />
        </div>
      </Page>

      <Page eyebrow="07 · Fundos" title="Permitidos e proibidos">
        <div className="bgs">
          {[
            ['#FFFFFF', 'full', 'Branco', true],
            ['#F6F4EE', 'full', 'Papel Terra', true],
            ['#031B47', 'negativa', 'Azul Profundo', true],
            ['#063E9B', 'negativa', 'Azul Meridiano', true],
            ['#FEBF26', 'preto', 'Amarelo Safra (versão preta)', true],
            ['#000000', 'negativa', 'Preto Norte', true],
            ['#063E9B', 'full', 'Full color sobre Meridiano', false],
            ['#FEBF26', 'full', 'Full color sobre Safra', false],
            ['#7DB3E8', 'negativa', 'Negativa sobre Céu Aberto', false],
            ['#B5532C', 'full', 'Full color sobre Terracota', false],
            ['#0E5A3C', 'full', 'Full color sobre Floresta', false],
            ['#9AA1AD', 'branco', 'Branca sobre Cinza Névoa', false],
          ].map(([bg, s, t, ok]) => (
            <div key={t as string} className={['bg-card rv', ok ? 'ok' : 'no'].join(' ')}>
              <div className="bg-art" style={{ background: bg as string }}>
                <Logo scheme={s as LogoScheme} />
              </div>
              <p>
                <b>{ok ? '✓' : '✕'}</b> {t}
              </p>
            </div>
          ))}
        </div>
      </Page>

      <Page eyebrow="07 · Usos incorretos" title="Doze erros que nunca devem acontecer" tone="white">
        <div className="wrongs">
          {WRONG.map(([t, s]) => (
            <div key={t} className="wrong rv">
              <div className="wrong-art">
                <Wrong kind={typeof s === 'string' ? s : 'style'} style={typeof s === 'string' ? undefined : (s as React.CSSProperties)} />
                <i aria-hidden="true" />
              </div>
              <p>
                <b>✕</b> {t}
              </p>
            </div>
          ))}
        </div>
      </Page>

      <Page eyebrow="07 · Fotografia e vídeo" title="O logo sobre imagem" dark>
        <div className="photo-rules">
          <figure className="photo-demo ok rv">
            <div className="pd-art">
              <Landscape />
              <div className="pd-shade" />
              <div className="pd-logo">
                <Logo layout="horizontal-sem-descritor" scheme="negativa" />
              </div>
            </div>
            <figcaption>✓ Área calma da imagem, véu de Azul Profundo a 60%, versão negativa.</figcaption>
          </figure>
          <figure className="photo-demo no rv">
            <div className="pd-art">
              <Landscape />
              <div className="pd-logo busy">
                <Logo layout="horizontal-sem-descritor" />
              </div>
            </div>
            <figcaption>✕ Full color sobre área clara e com textura: o lettering se perde.</figcaption>
          </figure>
          <div className="video-rules rv">
            <h4 className="h4">Vídeo</h4>
            <ul className="facts">
              <li>Assinatura de abertura: símbolo montado bloco a bloco (barra → bloco azul → bloco inferior) em até 1,2 s, seguido do nome.</li>
              <li>Marca d’água: símbolo branco a 70% de opacidade, canto inferior direito, largura de 6% do quadro.</li>
              <li>Encerramento: versão negativa sobre Azul Profundo, por no mínimo 2 s.</li>
              <li>Nunca animar o logo com distorção, rotação, rebote ou partículas.</li>
            </ul>
            <div className="anim-demo" aria-hidden="true">
              <Logo layout="simbolo" />
            </div>
          </div>
        </div>
        <Rules
          doList={['Escolher área de menor detalhe da foto', 'Aplicar véu escuro quando necessário (máx. 60%)', 'Usar a versão negativa sobre imagens escuras']}
          dontList={['Posicionar o logo sobre rostos ou pontos de interesse', 'Usar caixa branca “remendo” atrás do logo', 'Aplicar o logo full color sobre fotos médias']}
        />
      </Page>
    </>
  );
}

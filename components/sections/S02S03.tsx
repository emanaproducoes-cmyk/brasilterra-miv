import { Chapter, Page, Rules } from '../ui';
import Logo, { LogoInner } from '../Logo';

// Todas as cotas abaixo foram medidas no vetor (1x = 20 unidades = largura do canal de respiro).
const X = 20;

function Dim({ x1, y1, x2, y2, label, off = 0, vertical }: { x1: number; y1: number; x2: number; y2: number; label: string; off?: number; vertical?: boolean }) {
  if (vertical) {
    const x = x1 + off;
    return (
      <g className="dim">
        <line x1={x} y1={y1} x2={x} y2={y2} />
        <line x1={x - 6} y1={y1} x2={x + 6} y2={y1} />
        <line x1={x - 6} y1={y2} x2={x + 6} y2={y2} />
        <text x={x - 10} y={(y1 + y2) / 2} textAnchor="end" dominantBaseline="middle">
          {label}
        </text>
      </g>
    );
  }
  const y = y1 + off;
  return (
    <g className="dim">
      <line x1={x1} y1={y} x2={x2} y2={y} />
      <line x1={x1} y1={y - 6} x2={x1} y2={y + 6} />
      <line x1={x2} y1={y - 6} x2={x2} y2={y + 6} />
      <text x={(x1 + x2) / 2} y={y - 10} textAnchor="middle">
        {label}
      </text>
    </g>
  );
}

function SymbolGrid() {
  const cols = Array.from({ length: 17 }, (_, i) => i * X);
  const rows = Array.from({ length: 16 }, (_, i) => i * X);
  return (
    <svg className="gridsvg" id="gridsvg" viewBox="-90 -90 560 480" role="img" aria-label="Símbolo Brasil Terra sobre malha modular com cotas">
      <g className="g-grid">
        {cols.map((x) => (
          <line key={'c' + x} x1={x} y1={-20} x2={x} y2={320} />
        ))}
        {rows.map((y) => (
          <line key={'r' + y} x1={-20} y1={y} x2={340} y2={y} />
        ))}
      </g>
      <g className="g-sym">
        <LogoInner layout="simbolo" />
      </g>
      <g className="g-radius">
        <circle cx={266} cy={54} r={54} />
        <line x1={266} y1={54} x2={304.2} y2={15.8} />
        <text x={276} y={74}>r = 2,7x</text>
      </g>
      <g className="g-axis">
        <line x1={-50} y1={150} x2={340} y2={150} />
        <line x1={206} y1={-50} x2={206} y2={350} />
        <text x={-84} y={168}>eixo</text>
        <text x={212} y={-58}>eixo dos blocos</text>
      </g>
      <g className="g-dims">
        <Dim x1={0} y1={0} x2={72} y2={0} off={-30} label="3,6x" />
        <Dim x1={72} y1={0} x2={92} y2={0} off={-62} label="1x" />
        <Dim x1={92} y1={0} x2={320} y2={0} off={-30} label="11,4x" />
        <Dim x1={0} y1={300} x2={320} y2={300} off={40} label="16x" />
        <Dim x1={320} y1={0} x2={320} y2={140} vertical off={50} label="" />
        <text className="dimt" x={390} y={74}>7x</text>
        <Dim x1={320} y1={140} x2={320} y2={160} vertical off={50} label="" />
        <text className="dimt" x={390} y={155}>1x</text>
        <Dim x1={320} y1={160} x2={320} y2={300} vertical off={50} label="" />
        <text className="dimt" x={390} y={234}>7x</text>
        <Dim x1={0} y1={0} x2={0} y2={300} vertical off={-40} label="15x" />
      </g>
    </svg>
  );
}

function LogoAlign() {
  const lines = [
    [0, 'topo = caixa-alta de BRASIL', 0],
    [123.4, 'base · BRASIL', -6],
    [137.8, 'caixa-alta · TERRA', 10],
    [262.6, 'base · TERRA', -8],
    [280.7, 'caixa-alta · descritor', 4],
    [300, 'base do símbolo ≈ base do descritor', 18],
  ] as const;
  return (
    <svg className="alignsvg" viewBox="-30 -60 1440 440" role="img" aria-label="Alinhamentos entre símbolo, lettering e descritor">
      <LogoInner layout="horizontal" />
      {lines.map(([y, t, dy]) => (
        <g key={t} className="al-line">
          <line x1={-20} y1={y} x2={1040} y2={y} />
          <text x={1056} y={y + 6 + dy}>{t}</text>
        </g>
      ))}
      <g className="al-v">
        <line x1={320} y1={-40} x2={320} y2={310} />
        <line x1={383} y1={-40} x2={383} y2={310} />
        <text x={351.5} y={-46} textAnchor="middle">≈ 3x</text>
      </g>
      <Dim x1={0} y1={300} x2={1019.2} y2={300} off={52} label="51x de largura total × 15x de altura" />
    </svg>
  );
}

export function S02() {
  return (
    <>
      <Chapter
        id="gridline"
        n="02"
        title="Gridline"
        text="O símbolo é construído sobre uma unidade modular única. Toda medida é expressa em x, a largura do canal de respiro entre os blocos."
        items={['Unidade x e proporções', 'Cotas e raio', 'Eixos de construção', 'Alinhamento com o lettering']}
      />
      <Page eyebrow="02 · Gridline" title="Uma unidade, todas as medidas" lead={<>Medimos o logo aprovado, reconstruímos o vetor com formas geométricas verdadeiras e derivamos a unidade <b>x</b> do canal de respiro. O símbolo inteiro cabe em <b>16x × 15x</b>.</>}>
        <div className="grid-wrap">
          <div className="grid-stage rv" id="gridstage">
            <SymbolGrid />
            <div className="grid-tools" role="group" aria-label="Camadas da malha">
              <button data-toggle="hide-grid" data-target="#gridstage" aria-pressed="false">Malha</button>
              <button data-toggle="hide-dims" data-target="#gridstage" aria-pressed="false">Cotas</button>
              <button data-toggle="hide-axis" data-target="#gridstage" aria-pressed="false">Eixos</button>
              <button data-toggle="hide-radius" data-target="#gridstage" aria-pressed="false">Raio</button>
            </div>
          </div>
          <div className="grid-specs rv">
            <table className="spec">
              <tbody>
                <tr><th>Unidade x</th><td>largura do canal de respiro</td></tr>
                <tr><th>Símbolo</th><td>16x × 15x</td></tr>
                <tr><th>Barra vertical</th><td>3,6x × 15x · Amarelo Safra</td></tr>
                <tr><th>Bloco superior</th><td>11,4x × 7x · Azul Meridiano</td></tr>
                <tr><th>Canto arredondado</th><td>raio 2,7x · apenas superior direito</td></tr>
                <tr><th>Bloco inferior</th><td>11,4x × 7x · Amarelo Safra</td></tr>
                <tr><th>Canais</th><td>1x vertical · 1x horizontal</td></tr>
                <tr><th>Proporção blocos</th><td>superior = inferior (7x = 7x)</td></tr>
              </tbody>
            </table>
            <p className="note">
              Medição feita sobre o arquivo do logo (939 × 385 px), com x ≈ 16,4 px no original. Diferenças abaixo de 1 px foram
              normalizadas para múltiplos de x (≤ 0,6% de desvio).
            </p>
          </div>
        </div>
      </Page>
      <Page eyebrow="02 · Gridline" title="Símbolo, lettering e descritor em um só sistema" tone="white">
        <div className="fig rv wide">
          <LogoAlign />
        </div>
        <div className="cols3">
          <div className="rv">
            <h4 className="h4">Altura comum</h4>
            <p className="body">O bloco de lettering (BRASIL + TERRA + descritor) tem a mesma altura do símbolo: 15x. O topo do símbolo coincide com a caixa-alta de BRASIL.</p>
          </div>
          <div className="rv">
            <h4 className="h4">Entrelinhas</h4>
            <p className="body">BRASIL e TERRA têm caixa-alta de ≈ 6,2x e entrelinha de ≈ 0,7x. O descritor tem caixa-alta de ≈ 0,9x, separado por ≈ 0,9x.</p>
          </div>
          <div className="rv">
            <h4 className="h4">Respiro símbolo–nome</h4>
            <p className="body">A distância entre o símbolo e o lettering é de ≈ 3x. Esse respiro nunca pode ser reduzido ou ampliado.</p>
          </div>
        </div>
      </Page>
    </>
  );
}

const ANATOMY = [
  ['1', 'Barra vertical', 'Amarelo Safra. O eixo que sustenta: a coluna de um edifício, o marco de uma divisa.', 36, 60],
  ['2', 'Bloco superior', 'Azul Meridiano. Confiança e estrutura; a gleba principal, o pavimento de cima.', 200, 60],
  ['3', 'Canto arredondado', 'Único raio do símbolo. O gesto humano e próximo dentro de um sistema rigoroso.', 312, 12],
  ['4', 'Bloco inferior', 'Amarelo Safra. A base produtiva, a safra, o resultado do projeto.', 200, 230],
  ['5', 'Canais de respiro', 'Divisas entre talhões e juntas de construção. Organização e transparência.', 82, 230],
  ['6', 'Lettering', 'Sans-serif geométrica de alto peso, caixa-alta, duas linhas: solidez institucional.', 1040, 70],
  ['7', 'Descritor', 'Peso médio e tracking aberto: precisão técnica, leitura calma.', 1045, 290],
] as const;

export function S03() {
  return (
    <>
      <Chapter
        id="composicao"
        n="03"
        title="Composição"
        text="Cada forma do logo tem um motivo. Este capítulo explica o símbolo e o lettering elemento por elemento, do conceito à forma."
        items={['Anatomia do logo', 'Conceito → forma', 'Contraste de pesos', 'Prova de fidelidade do vetor']}
      />
      <Page eyebrow="03 · Composição" title="Anatomia do logo">
        <div className="anatomy">
          <div className="anatomy-art rv">
            <svg viewBox="-20 -40 1100 380" role="img" aria-label="Anatomia do logo com chamadas numeradas">
              <LogoInner layout="horizontal" />
              {ANATOMY.map(([n, , , x, y]) => (
                <g key={n} className="pin">
                  <circle cx={x} cy={y} r={24} />
                  <text x={x} y={y + 1} textAnchor="middle" dominantBaseline="middle">
                    {n}
                  </text>
                </g>
              ))}
            </svg>
          </div>
          <ol className="anatomy-list">
            {ANATOMY.map(([n, t, d]) => (
              <li key={n} className="rv">
                <b>{n}</b>
                <div>
                  <h4>{t}</h4>
                  <p>{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Page>
      <Page eyebrow="03 · Composição" title="Três leituras de um mesmo símbolo" tone="white">
        <div className="readings">
          <figure className="reading rv">
            <div className="reading-art r1">
              <Logo layout="simbolo" />
            </div>
            <figcaption>
              <b>Glebas vistas do alto.</b> Território organizado, demarcado e produtivo: a terra que o projeto transforma.
            </figcaption>
          </figure>
          <figure className="reading rv">
            <div className="reading-art r2">
              <Logo layout="simbolo" />
            </div>
            <figcaption>
              <b>Blocos construtivos.</b> Pavimentos de uma edificação, planta baixa, estrutura: viabilidade é engenharia.
            </figcaption>
          </figure>
          <figure className="reading rv">
            <div className="reading-art r3">
              <Logo layout="simbolo" />
              <span className="b-ghost" aria-hidden="true">B</span>
            </div>
            <figcaption>
              <b>Um “B” abstrato.</b> A haste e dois bojos simplificados: a inicial de Brasil, sem literalidade.
            </figcaption>
          </figure>
        </div>
        <div className="weights rv">
          <div>
            <p className="label">Contraste de pesos e hierarquia de leitura</p>
            <p className="body">
              O lettering em peso Bold e caixa-alta é lido primeiro e ancora o nome. O descritor, em peso médio e com tracking aberto, é
              lido em seguida e qualifica a oferta. A diferença de peso cria hierarquia sem precisar de cor: o símbolo carrega a cor; o
              nome carrega a autoridade.
            </p>
          </div>
          <ol className="read-order">
            <li><b>1</b> Símbolo (cor)</li>
            <li><b>2</b> BRASIL TERRA (peso)</li>
            <li><b>3</b> Descritor (precisão)</li>
          </ol>
        </div>
      </Page>
      <Page eyebrow="03 · Fidelidade" title="Prova de sobreposição: o vetor coincide com o original" dark>
        <div className="proof">
          <figure className="rv">
            <img src="/img/prova-sobreposicao.png" alt="Logo original com o contorno do vetor reconstruído sobreposto em magenta" />
            <figcaption>Original (raster) + contorno do vetor reconstruído em magenta.</figcaption>
          </figure>
          <div className="proof-text rv">
            <p className="body">
              O símbolo foi redesenhado com retângulos e um arco de raio medido, sem rastreio automático. O lettering foi reconstruído com
              <b> Montserrat Bold</b> (BRASIL TERRA) e <b>Montserrat Medium</b> (descritor), ajustados por busca de melhor encaixe de corpo,
              entreletra e posição, e convertidos em curvas.
            </p>
            <ul className="facts">
              <li>Correspondência do símbolo: bordas coincidentes dentro de 1 px do original</li>
              <li>Lettering: família mais próxima identificada; trata-se de aproximação declarada</li>
              <li>Descritor corrigido para “CONSULTORIA E PROJETOS DE VIABILIDADE”, sem “&”, conforme a assinatura oficial</li>
            </ul>
          </div>
        </div>
        <Rules
          doList={['Usar sempre os arquivos vetoriais oficiais', 'Manter o lettering em curvas, como arte-final', 'Reproduzir o símbolo apenas em escala uniforme']}
          dontList={['Redigitar o nome com a fonte Montserrat no lugar do logo', 'Trocar “e” por “&” no descritor', 'Arredondar outros cantos do símbolo']}
        />
      </Page>
    </>
  );
}

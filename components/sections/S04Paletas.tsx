import { Chapter, Page, SwatchCard, ContrastCell, Rules } from '../ui';
import { primary, secondary, neutrals, functional, dataviz, mix, contrast } from '../../lib/brand';

const TONES = [100, 80, 60, 40, 20, 10];
const BGS = ['#FFFFFF', '#F6F4EE', '#E4E7EC', '#7DB3E8', '#FEBF26', '#063E9B', '#031B47', '#000000'];
const FGS = ['#000000', '#262A33', '#4B5260', '#063E9B', '#FEBF26', '#FFFFFF', '#0E5A3C', '#B5532C'];
const BG_NAMES: Record<string, string> = {
  '#FFFFFF': 'Branco', '#F6F4EE': 'Papel Terra', '#E4E7EC': 'Bruma', '#7DB3E8': 'Céu Aberto', '#FEBF26': 'Amarelo Safra',
  '#063E9B': 'Azul Meridiano', '#031B47': 'Azul Profundo', '#000000': 'Preto Norte', '#262A33': 'Grafite Rio', '#4B5260': 'Grafite Claro',
  '#0E5A3C': 'Verde Floresta', '#B5532C': 'Terracota',
};

// Dados fictícios ilustrativos para demonstrar a paleta (não representam projeto real)
const FLUXO = [-420, -180, 60, 210, 320, 390, 430, 470];

function DataChart() {
  const w = 560, h = 240, pad = 36;
  const max = 500, min = -500;
  const y = (v: number) => pad + ((max - v) / (max - min)) * (h - pad * 2);
  const bw = (w - pad * 2) / FLUXO.length;
  let acc = 0;
  const cum = FLUXO.map((v) => (acc += v));
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="chart" role="img" aria-label="Exemplo de gráfico de fluxo de caixa com a paleta de dados">
      <line x1={pad} x2={w - pad} y1={y(0)} y2={y(0)} stroke="#9AA1AD" strokeWidth="1" />
      {FLUXO.map((v, i) => (
        <rect key={i} className="bar-g" style={{ ['--i' as string]: i }} x={pad + i * bw + 8} width={bw - 16} y={v >= 0 ? y(v) : y(0)} height={Math.abs(y(v) - y(0))} fill={v >= 0 ? '#063E9B' : '#B5532C'} rx="2" />
      ))}
      <polyline fill="none" stroke="#D9890B" strokeWidth="3" points={cum.map((c, i) => `${pad + i * bw + bw / 2},${y(c / 4)}`).join(' ')} />
      {cum.map((c, i) => (
        <circle key={i} cx={pad + i * bw + bw / 2} cy={y(c / 4)} r="4" fill="#fff" stroke="#D9890B" strokeWidth="2" />
      ))}
      {FLUXO.map((_, i) => (
        <text key={i} x={pad + i * bw + bw / 2} y={h - 10} textAnchor="middle" className="ax">
          Ano {i}
        </text>
      ))}
    </svg>
  );
}

export default function S04() {
  return (
    <>
      <Chapter
        id="paletas"
        n="04"
        title="Paletas"
        text="Azul e amarelo vêm do logo e remetem ao Brasil com sofisticação, sem copiar a bandeira. A paleta secundária amplia o repertório com a floresta, o solo, o céu e o campo."
        items={['Primárias e secundárias', 'Neutros e funcionais', 'Paleta de dados', 'Escalas, proporção e contraste WCAG']}
      />
      <Page eyebrow="04 · Paleta primária" title="As cores do logo" lead="Valores reamostrados do arquivo original e normalizados. Clique em uma cor para copiar o HEX.">
        <div className="swatches three">
          {primary.map((s) => (
            <SwatchCard key={s.id} {...s} big />
          ))}
        </div>
        <div className="ratio rv">
          <p className="label">Regra de proporção 60 · 30 · 10</p>
          <div className="ratio-bar">
            <span style={{ flex: 60, background: '#F6F4EE', color: '#000' }}>60% neutros (Papel Terra, Branco)</span>
            <span style={{ flex: 30, background: '#063E9B', color: '#fff' }}>30% Azul Meridiano / Azul Profundo</span>
            <span style={{ flex: 10, background: '#FEBF26', color: '#000' }}>10% Safra</span>
          </div>
          <p className="note">
            Preto Norte é reservado ao lettering e ao texto. A paleta secundária entra dentro dos 30%, nunca substituindo o Azul Meridiano como
            cor dominante.
          </p>
        </div>
      </Page>

      <Page eyebrow="04 · Paleta secundária" title="Território, solo, céu e campo" tone="white">
        <div className="swatches five">
          {secondary.map((s) => (
            <SwatchCard key={s.id} {...s} />
          ))}
        </div>
        <p className="note rv">
          Harmonia testada: todas as secundárias convivem com Azul Meridiano e Amarelo Safra sem vibração cromática. Verde e amarelo nunca são
          usados juntos em grandes áreas, para não reproduzir a bandeira nacional.
        </p>
      </Page>

      <Page eyebrow="04 · Neutros e funcionais" title="A base silenciosa do sistema">
        <div className="swatches six">
          {neutrals.map((s) => (
            <SwatchCard key={s.id} {...s} />
          ))}
        </div>
        <h3 className="h3 rv">Cores funcionais</h3>
        <p className="body rv">Para formulários, painéis e relatórios. Todas atingem no mínimo AA (4,5:1) como texto sobre branco e sobre Papel Terra.</p>
        <div className="swatches four">
          {functional.map((s) => (
            <SwatchCard key={s.id} {...s} />
          ))}
        </div>
        <div className="alerts rv">
          {functional.map((f) => (
            <div key={f.id} className="alert" style={{ borderColor: f.hex, background: mix(f.hex, 8) }}>
              <b style={{ color: f.hex }}>{f.name}</b>
              <span>
                {f.id === 'sucesso' && 'Indicadores de viabilidade dentro dos parâmetros do estudo.'}
                {f.id === 'alerta' && 'Certidão negativa pendente. Envie até sexta-feira.'}
                {f.id === 'erro' && 'TIR abaixo da taxa mínima de atratividade no cenário conservador.'}
                {f.id === 'info' && 'As condições de crédito são definidas pela instituição financeira.'}
              </span>
            </div>
          ))}
        </div>
      </Page>

      <Page eyebrow="04 · Paleta de dados" title="Gráficos de estudos de viabilidade" tone="white">
        <div className="dv">
          <div className="dv-list rv">
            {dataviz.map((d, i) => (
              <button key={d.id} className="dv-item" data-copy={d.hex}>
                <i style={{ background: d.hex }} />
                <b>{i + 1}</b>
                <span>
                  {d.name}
                  <em>{d.role}</em>
                </span>
                <code>{d.hex}</code>
              </button>
            ))}
          </div>
          <div className="dv-chart rv">
            <DataChart />
            <div className="legend">
              <span><i style={{ background: '#063E9B' }} /> Fluxo positivo</span>
              <span><i style={{ background: '#B5532C' }} /> Fluxo negativo (investimento)</span>
              <span><i style={{ background: '#D9890B' }} /> Saldo acumulado</span>
            </div>
            <p className="note">Dados fictícios, apenas para demonstrar a paleta.</p>
          </div>
        </div>
        <p className="note rv">
          Acessibilidade verificada por simulação de deuteranopia, protanopia e tritanopia: a menor diferença entre duas cores da paleta é ΔE
          16,2 (tritanopia, Meridiano × Floresta). Em gráficos com mais de 4 séries, combine cor com rótulo direto ou padrão de linha.
        </p>
      </Page>

      <Page eyebrow="04 · Escalas tonais" title="100 · 80 · 60 · 40 · 20 · 10%">
        <div className="tones rv">
          {[...primary.slice(0, 2), ...secondary].map((s) => (
            <div key={s.id} className="tone-row">
              <b>{s.name}</b>
              {TONES.map((t) => {
                const c = mix(s.hex, t);
                return (
                  <button key={t} data-copy={c} style={{ background: c, color: contrast(c, '#000') > contrast(c, '#fff') ? '#000' : '#fff' }}>
                    <span>{t}%</span>
                    <code>{c}</code>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
        <p className="note rv">Tons obtidos por mistura com branco. Usar tons abaixo de 40% apenas como fundo, nunca como cor de texto.</p>
      </Page>

      <Page eyebrow="04 · Contraste WCAG 2.1" title="Texto sobre cada fundo, razão calculada" tone="white">
        <div className="ctable-wrap rv">
          <table className="ctable">
            <thead>
              <tr>
                <th>Texto ↓ / Fundo →</th>
                {BGS.map((b) => (
                  <th key={b}>{BG_NAMES[b]}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FGS.map((f) => (
                <tr key={f}>
                  <th>{BG_NAMES[f]}</th>
                  {BGS.map((b) => (f === b ? <td key={b} className="cc same">—</td> : <ContrastCell key={b} fg={f} bg={b} />))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="note rv">
          AAA ≥ 7:1 · AA ≥ 4,5:1 (texto comum) · AA grande ≥ 3:1 (texto ≥ 18,66 px bold ou 24 px regular) · abaixo de 3:1 reprovado para
          texto.
        </p>
      </Page>

      <Page eyebrow="04 · Combinações" title="Permitidas e proibidas">
        <div className="combos">
          {[
            ['#031B47', '#FEBF26', 'Safra sobre Azul Profundo', true],
            ['#063E9B', '#FFFFFF', 'Branco sobre Meridiano', true],
            ['#F6F4EE', '#063E9B', 'Meridiano sobre Papel Terra', true],
            ['#FEBF26', '#000000', 'Preto sobre Safra', true],
            ['#0E5A3C', '#FFFFFF', 'Branco sobre Floresta', true],
            ['#FEBF26', '#FFFFFF', 'Branco sobre Safra', false],
            ['#063E9B', '#000000', 'Preto sobre Meridiano', false],
            ['#0E5A3C', '#FEBF26', 'Safra sobre Floresta (bandeira)', false],
            ['#B5532C', '#063E9B', 'Meridiano sobre Terracota', false],
            ['#7DB3E8', '#FFFFFF', 'Branco sobre Céu Aberto', false],
          ].map(([bg, fg, t, ok]) => (
            <div key={t as string} className={['combo rv', ok ? 'ok' : 'no'].join(' ')} style={{ background: bg as string, color: fg as string }}>
              <b>Aa</b>
              <span>{t}</span>
              <em>
                {ok ? '✓' : '✕'} {contrast(bg as string, fg as string).toFixed(2).replace('.', ',')}:1
              </em>
            </div>
          ))}
        </div>
        <Rules
          doList={['Azul Meridiano como cor dominante de marca', 'Amarelo Safra como acento pontual, até 10% da área', 'Papel Terra como fundo padrão de documentos']}
          dontList={['Combinar verde + amarelo + azul em grandes áreas (bandeira)', 'Usar Amarelo Safra para texto sobre branco', 'Criar degradês entre as cores do logo']}
        />
        <div className="print-note rv">
          <p className="label">Impressão: leia antes de enviar à gráfica</p>
          <p>
            Os valores CMYK deste manual são conversões matemáticas a partir do RGB e servem como ponto de partida. Perfil sugerido:{' '}
            <b>ISO Coated v2 (FOGRA39)</b> para papel couché e <b>PSO Uncoated (FOGRA47)</b> para papel não revestido. As referências Pantone
            são correspondências visuais aproximadas. Exija <b>prova de cor contratual</b> antes de qualquer tiragem.
          </p>
        </div>
      </Page>
    </>
  );
}

import data from '../lib/logoData.json';

// Vetor fiel do logo Brasil Terra (símbolo em geometria pura + lettering convertido em curvas).
// Unidade modular: 1x = 20 unidades do viewBox (largura do canal de respiro).
// NÃO editar as formas: qualquer ajuste visual deve ser feito por cor/escala, nunca por geometria.

export type LogoLayout = 'horizontal' | 'horizontal-sem-descritor' | 'vertical' | 'vertical-sem-descritor' | 'simbolo';
export type LogoScheme = 'full' | 'negativa' | 'preto' | 'branco' | 'azul' | 'cinza';

const C = { azul: '#063E9B', amarelo: '#FEBF26', preto: '#000000', branco: '#FFFFFF' };

export function logoColors(scheme: LogoScheme) {
  switch (scheme) {
    case 'negativa': return { bar: C.amarelo, blue: C.branco, yellow: C.amarelo, text: C.branco };
    case 'preto': return { bar: C.preto, blue: C.preto, yellow: C.preto, text: C.preto };
    case 'branco': return { bar: C.branco, blue: C.branco, yellow: C.branco, text: C.branco };
    case 'azul': return { bar: C.azul, blue: C.azul, yellow: C.azul, text: C.azul };
    case 'cinza': return { bar: '#8C8C8C', blue: '#3D3D3D', yellow: '#8C8C8C', text: '#000000' };
    default: return { bar: C.amarelo, blue: C.azul, yellow: C.amarelo, text: C.preto };
  }
}

// Caixa de cada arranjo (em unidades de viewBox)
const W = data.width; // 1019.2
// Lettering ocupa x ≈ [383,0 ; 1019,2] no arranjo horizontal (medido no vetor).
const LET_L = 383.0;
const LET_W = W - LET_L;

export function logoBox(layout: LogoLayout) {
  switch (layout) {
    case 'simbolo': return { w: 320, h: 300 };
    case 'horizontal-sem-descritor': return { w: W, h: 300 };
    case 'vertical': return { w: 720, h: 660 };
    case 'vertical-sem-descritor': return { w: 720, h: 625 };
    default: return { w: W, h: 300 };
  }
}

export function LogoInner({ layout = 'horizontal', scheme = 'full' }: { layout?: LogoLayout; scheme?: LogoScheme }) {
  const c = logoColors(scheme);
  const s = data.symbol;
  const symbol = (
    <g className="lg-sym">
      <path className="lg-bar" d={s.bar} fill={`var(--lg-bar, ${c.bar})`} />
      <path className="lg-blue" d={s.blue} fill={`var(--lg-blue, ${c.blue})`} />
      <path className="lg-yellow" d={s.yellow} fill={`var(--lg-yellow, ${c.yellow})`} />
    </g>
  );
  const withDesc = layout === 'horizontal' || layout === 'vertical';
  const lettering = (
    <g className="lg-type" fill={`var(--lg-text, ${c.text})`}>
      <path d={data.brasil} />
      <path d={data.terra} />
      {withDesc && <path className="lg-desc" d={data.descriptor} />}
    </g>
  );
  if (layout === 'simbolo') return symbol;
  if (layout.startsWith('vertical')) {
    // Empilhado: símbolo centralizado sobre o bloco de lettering, mesma escala do original.
    // Canal entre símbolo e lettering = 3x (60 un.).
    const tx = (720 - LET_W) / 2 - LET_L;
    return (
      <g>
        <g transform="translate(200 0)">{symbol}</g>
        <g transform={`translate(${tx} 360)`}>{lettering}</g>
      </g>
    );
  }
  return (
    <g>
      {symbol}
      {lettering}
    </g>
  );
}

export default function Logo({
  layout = 'horizontal',
  scheme = 'full',
  className,
  title = 'Brasil Terra — Consultoria e Projetos de Viabilidade',
  style,
}: {
  layout?: LogoLayout;
  scheme?: LogoScheme;
  className?: string;
  title?: string;
  style?: React.CSSProperties;
}) {
  const b = logoBox(layout);
  return (
    <svg
      className={['logo', className].filter(Boolean).join(' ')}
      viewBox={`0 0 ${b.w} ${b.h}`}
      role="img"
      aria-label={title}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <LogoInner layout={layout} scheme={scheme} />
    </svg>
  );
}

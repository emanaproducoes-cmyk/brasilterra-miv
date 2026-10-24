import Logo from '../Logo';

export const NAV = [
  { id: 'sumario', n: '01', t: 'Sumário & conceito' },
  { id: 'gridline', n: '02', t: 'Gridline' },
  { id: 'composicao', n: '03', t: 'Composição' },
  { id: 'paletas', n: '04', t: 'Paletas' },
  { id: 'tipografia', n: '05', t: 'Tipografia' },
  { id: 'malha', n: '06', t: 'Malha construtiva' },
  { id: 'versoes', n: '07', t: 'Versões & fundos' },
  { id: 'aplicacoes', n: '08', t: 'Aplicações' },
  { id: 'complementos', n: 'A–F', t: 'Linguagem & apoio' },
  { id: 'fechamento', n: '✓', t: 'Checklist & arquivos' },
];

export function Rail() {
  return (
    <>
      <div className="progress" aria-hidden="true">
        <span />
      </div>
      <button className="menu-btn" aria-label="Abrir sumário">
        <i />
        <i />
        <i />
      </button>
      <nav className="rail" aria-label="Sumário do manual">
        <a href="#capa" className="rail-logo" aria-label="Início">
          <Logo layout="simbolo" />
        </a>
        <ol>
          {NAV.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} data-nav={n.id}>
                <b>{n.n}</b>
                <span>{n.t}</span>
              </a>
            </li>
          ))}
        </ol>
        <p className="rail-foot">MIV v1.0 · 2026</p>
      </nav>
    </>
  );
}

export function Cover() {
  return (
    <header className="cover" id="capa">
      <div className="cover-grid" aria-hidden="true" />
      <div className="cover-glebas" aria-hidden="true" data-parallax="-0.15">
        {Array.from({ length: 14 }).map((_, i) => (
          <i key={i} style={{ ['--i' as string]: i }} />
        ))}
      </div>
      <div className="cover-in">
        <p className="cover-kicker">Manual de Identidade Visual · Branding · Linguagem</p>
        <div className="cover-logo">
          <Logo layout="horizontal" scheme="negativa" />
        </div>
        <div className="cover-meta">
          <p>
            <b>Versão 1.0</b>
            <span>Outubro de 2026</span>
          </p>
          <p>
            <b>Uso</b>
            <span>Equipe interna, gráficas, comunicação visual, uniformes e agências</span>
          </p>
          <p>
            <b>Abrangência</b>
            <span>Norte do Brasil · Amazônia Legal · impacto nacional e global</span>
          </p>
        </div>
        <a className="cover-cta" href="#sumario">
          Abrir o manual <span aria-hidden="true">↓</span>
        </a>
      </div>
    </header>
  );
}

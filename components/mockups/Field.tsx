import Logo, { LogoInner } from '../Logo';
import { Glebas, Landscape, MockLabel } from './Scenes';

export function Placas() {
  return (
    <figure className="mock rv">
      <div className="outdoor-scene">
        <Landscape />
        <div className="placa-obra">
          <div className="po-board">
            <div className="po-top">
              <Logo scheme="negativa" />
            </div>
            <div className="po-body">
              <span className="po-kick">Projeto em execução</span>
              <b>Ampliação da unidade de beneficiamento de frutas</b>
              <dl>
                <div>
                  <dt>Empreendimento</dt>
                  <dd>Agroindústria Exemplo Ltda.</dd>
                </div>
                <div>
                  <dt>Investimento</dt>
                  <dd>R$ 0.000.000,00</dd>
                </div>
                <div>
                  <dt>Projeto de viabilidade</dt>
                  <dd>Brasil Terra</dd>
                </div>
              </dl>
              <div className="po-fin">
                <span>Área reservada · logo do agente financeiro / fonte de recursos, conforme exigência do financiador</span>
              </div>
            </div>
            <i className="po-strip" />
          </div>
          <i className="pole l" />
          <i className="pole r" />
        </div>
        <div className="placa-id">
          <div className="pi-board">
            <Logo layout="vertical-sem-descritor" />
            <span>Projeto estruturado por Brasil Terra</span>
            <b>Irrigação e modernização · Lote 12</b>
          </div>
          <i className="pole c" />
        </div>
      </div>
      <p className="mock-label-row">
        <MockLabel group="Campo e obra" title="Placa de obra 3 × 2 m e placa de identificação de projeto 1 × 1,5 m" />
      </p>
      <figcaption className="mock-spec">
        Placa de obra: lona ou ACM 3 × 2 m, logo de 1,20 m no topo, título em Montserrat Bold com caixa-alta mínima de 10 cm (legível a ~30 m), área
        do financiador definida pelo manual de placas de cada instituição. Não inventar normas, numeração ou marcas de terceiros.
      </figcaption>
    </figure>
  );
}

function Shirt({ kind, color, children, collar }: { kind: 'tee' | 'polo' | 'social'; color: string; children?: React.ReactNode; collar?: string }) {
  const body = 'M60 20 L95 8 Q120 22 145 8 L180 20 L222 62 L196 90 L176 74 L176 230 L64 230 L64 74 L44 90 L18 62 Z';
  return (
    <svg viewBox="0 0 240 240" className="shirt" aria-hidden="true">
      <defs>
        <linearGradient id={`sh-${kind}`} x1="0" x2="1">
          <stop offset="0" stopColor="#000" stopOpacity="0.12" />
          <stop offset="0.3" stopColor="#000" stopOpacity="0" />
          <stop offset="0.75" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.16" />
        </linearGradient>
      </defs>
      <path d={body} fill={color} />
      <path d={body} fill={`url(#sh-${kind})`} />
      {kind === 'tee' && <path d="M95 8 Q120 30 145 8" fill="none" stroke="#000" strokeOpacity=".15" strokeWidth="5" />}
      {kind === 'polo' && (
        <g>
          <path d="M95 8 L120 30 L145 8 L140 4 L120 20 L100 4Z" fill={collar} />
          <path d="M120 30 V70" stroke="#000" strokeOpacity=".2" strokeWidth="2" />
          <circle cx="120" cy="44" r="2.2" fill="#fff" />
          <circle cx="120" cy="58" r="2.2" fill="#fff" />
          <path d="M44 90 L18 62 L24 56 L50 84Z M196 90 L222 62 L216 56 L190 84Z" fill={collar} />
        </g>
      )}
      {kind === 'social' && (
        <g>
          <path d="M95 8 L120 40 L145 8 L135 2 L120 22 L105 2Z" fill="#fff" stroke="#000" strokeOpacity=".15" />
          <path d="M120 40 V230" stroke="#000" strokeOpacity=".18" strokeWidth="1.5" />
          {[60, 90, 120, 150, 180, 210].map((y) => (
            <circle key={y} cx="124" cy={y} r="2" fill="#C9CDD4" />
          ))}
          <path d="M150 70 h20 v18 h-20z" fill="none" stroke="#000" strokeOpacity=".12" />
        </g>
      )}
      {children}
    </svg>
  );
}

export function Uniformes() {
  return (
    <figure className="mock rv">
      <div className="uniform-scene">
        <div className="uni">
          <Shirt kind="social" color="#F4F6FA">
            <g transform="translate(146 72) scale(0.03)">
              <LogoInner layout="horizontal-sem-descritor" />
            </g>
          </Shirt>
          <p>
            <b>Camisa social</b> branca ou Céu Aberto · bordado do logo sem descritor, 70 mm, no bolso esquerdo
          </p>
        </div>
        <div className="uni">
          <Shirt kind="polo" color="#063E9B" collar="#031B47">
            <g transform="translate(136 74) scale(0.036)">
              <LogoInner layout="horizontal-sem-descritor" scheme="negativa" />
            </g>
          </Shirt>
          <p>
            <b>Polo</b> piquet Azul Meridiano · bordado versão negativa, 80 mm, peito esquerdo · gola e punhos Azul Profundo
          </p>
        </div>
        <div className="uni">
          <Shirt kind="tee" color="#FFFFFF">
            <g transform="translate(138 64) scale(0.1)">
              <LogoInner layout="simbolo" />
            </g>

          </Shirt>
          <p>
            <b>Camiseta</b> de eventos, malha branca · serigrafia do símbolo 50 mm no peito esquerdo, tagline nas costas
          </p>
        </div>
        <div className="uni">
          <div className="badge">
            <i className="lanyard" />
            <div className="badge-card">
              <div className="badge-top">
                <Logo layout="horizontal-sem-descritor" scheme="negativa" />
              </div>
              <div className="badge-photo" />
              <b>Ana Ribeiro</b>
              <span>Consultora de Projetos</span>
              <i className="badge-bar">EQUIPE</i>
            </div>
          </div>
          <p>
            <b>Credencial</b> PVC 86 × 54 mm vertical · cordão Amarelo Safra com símbolo repetido
          </p>
        </div>
      </div>
      <MockLabel group="Uniformes e eventos" title="Camisa social, polo, camiseta e credencial" />
      <figcaption className="mock-spec">
        Bordado: versão monocromática ou negativa, até 6 cores de linha, sem descritor abaixo de 60 mm · Serigrafia: até 3 cores, Pantone 293 C e 123 C
        · Nunca aplicar o logo full color sobre tecido Azul Meridiano ou amarelo.
      </figcaption>
    </figure>
  );
}

export function Tenda() {
  return (
    <figure className="mock rv">
      <div className="event-scene">
        <div className="event-ground" />
        <svg viewBox="0 0 520 380" className="tenda" aria-hidden="true">
          <defs>
            <linearGradient id="roofF" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#0A4AB5" />
              <stop offset="1" stopColor="#063E9B" />
            </linearGradient>
          </defs>
          <ellipse cx="260" cy="346" rx="210" ry="14" fill="#000" opacity=".18" />
          {/* parede de fundo */}
          <rect x="138" y="150" width="244" height="160" fill="#031B47" />
          <g transform="translate(178 196) scale(0.16)">
            <LogoInner layout="horizontal" scheme="negativa" />
          </g>
          {/* pés traseiros e dianteiros */}
          <path d="M140 150 V312 M380 150 V312" stroke="#7A818C" strokeWidth="5" />
          <path d="M104 186 V342 M416 186 V342" stroke="#9AA1AD" strokeWidth="7" />
          {/* teto (face frontal + laterais em sombra) */}
          <path d="M260 52 L96 150 L424 150Z" fill="url(#roofF)" />
          <path d="M260 52 L96 150 L120 140Z" fill="#031B47" opacity=".5" />
          <path d="M260 52 L424 150 L400 140Z" fill="#031B47" opacity=".5" />
          {/* testeira frontal em Amarelo Safra com logo preto (escala uniforme) */}
          <rect x="96" y="150" width="328" height="40" fill="#FEBF26" />
          <g transform="translate(209 155) scale(0.1)">
            <LogoInner layout="horizontal-sem-descritor" scheme="preto" />
          </g>
          {/* balcão */}
          <rect x="196" y="262" width="128" height="74" fill="#F6F4EE" />
          <rect x="190" y="254" width="140" height="10" fill="#E4E7EC" />
          <rect x="196" y="320" width="128" height="6" fill="#FEBF26" />
          <g transform="translate(219 280) scale(0.08)">
            <LogoInner layout="horizontal-sem-descritor" />
          </g>
          {/* wind banners (pena), logo vertical sem rotação */}
          {[
            [40, 1, '#031B47', 'negativa'],
            [480, -1, '#FEBF26', 'preto'],
          ].map(([x, d, c, sc]) => (
            <g key={x as number} transform={`translate(${x} 60)`}>
              <path d="M0 0 V284" stroke="#4B5260" strokeWidth="3" />
              <path d={`M0 4 Q${(d as number) * 40} 8 ${(d as number) * 42} 60 L${(d as number) * 36} 236 L0 236Z`} fill={c as string} />
              <g transform={`translate(${(d as number) > 0 ? 4 : -38} 56) scale(0.047)`}>
                <LogoInner layout="vertical-sem-descritor" scheme={sc as 'preto'} />
              </g>
            </g>
          ))}
        </svg>
      </div>
      <MockLabel group="Eventos" title="Tenda 3 × 3 m, balcão e wind banners" />
      <figcaption className="mock-spec">
        Tenda sanfonada 3 × 3 m · teto Azul Meridiano, testeira em Amarelo Safra com logo preto (laterais: Azul Meridiano com logo negativo) · parede
        de fundo Azul Profundo · wind banner pena 3 m, logo vertical sempre na posição de leitura, sem rotação.
      </figcaption>
    </figure>
  );
}

export function EventMaterials() {
  return (
    <figure className="mock rv">
      <div className="backdrop-scene">
        <div className="backdrop">
          <div className="bd-grid">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i}>
                <Logo layout={i % 2 ? 'simbolo' : 'horizontal-sem-descritor'} scheme="negativa" />
              </span>
            ))}
          </div>
        </div>
        <div className="rollup">
          <Glebas tone="dark" scale={0.32} />
          <div className="ru-in">
            <Logo layout="vertical" scheme="negativa" />
            <b>Viabilidade que vira desenvolvimento.</b>
            <ul>
              <li>Estudos de viabilidade</li>
              <li>Projetos de crédito</li>
              <li>Projetos rurais e industriais</li>
            </ul>
            <span>brasilterra.com.br</span>
          </div>
          <i className="ru-foot" />
        </div>
        <div className="panel">
          <div className="panel-left">
            <div className="panel-logo">
              <Logo layout="horizontal-sem-descritor" scheme="negativa" />
            </div>
            <span className="post-kick">Nosso propósito</span>
            <b>Transformar projetos bem estruturados em desenvolvimento real.</b>
          </div>
          <div className="panel-right">
            <Glebas tone="yellow" scale={0.4} />
          </div>
        </div>
      </div>
      <MockLabel group="Eventos" title="Backdrop, roll-up e painel institucional" />
      <figcaption className="mock-spec">
        Backdrop 3 × 2 m em lona com grade alternada de logos (espaçamento 3x) · Roll-up 0,85 × 2 m, área útil acima de 1,80 m · Painel institucional
        em ACM 2,4 × 1,2 m. Conteúdo importante sempre acima de 90 cm do chão.
      </figcaption>
    </figure>
  );
}

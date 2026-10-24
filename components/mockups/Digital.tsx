import Logo from '../Logo';
import { Glebas, Phone, Browser, Laptop, MockLabel, Landscape } from './Scenes';
import { Icon } from '../Icons';

export function SocialProfile() {
  return (
    <figure className="mock rv">
      <div className="social-scene">
        <Browser url="linkedin.com/company/brasilterra" className="li">
          <div className="li-cover">
            <Glebas tone="dark" scale={0.5} />
            <div className="li-cover-txt">
              <b>Viabilidade que vira desenvolvimento.</b>
              <span>Estudos e projetos para acesso a crédito no Norte do Brasil</span>
            </div>
          </div>
          <div className="li-row">
            <div className="avatar">
              <Logo layout="simbolo" />
            </div>
            <div className="li-info">
              <b>Brasil Terra</b>
              <span>Consultoria e Projetos de Viabilidade · Belém, PA</span>
            </div>
            <span className="li-btn">+ Seguir</span>
          </div>
        </Browser>
        <div className="avatars">
          <div className="avatar a1">
            <Logo layout="simbolo" />
          </div>
          <div className="avatar a2">
            <Logo layout="simbolo" scheme="negativa" />
          </div>
          <div className="avatar a3">
            <Logo layout="simbolo" scheme="preto" />
          </div>
        </div>
      </div>
      <MockLabel group="Digital" title="Avatar e capa de redes sociais" />
      <figcaption className="mock-spec">
        Avatar 400 × 400 px, símbolo em 60% do diâmetro, fundo branco (principal), Azul Profundo ou Amarelo Safra · Capa LinkedIn 1128 × 191 px ·
        Instagram e WhatsApp Business usam o mesmo avatar.
      </figcaption>
    </figure>
  );
}

function Post({ variant }: { variant: 1 | 2 | 3 }) {
  if (variant === 1)
    return (
      <div className="post p1">
        <Glebas tone="dark" scale={0.35} />
        <div className="post-in">
          <span className="post-kick">Crédito com responsabilidade</span>
          <b>Projeto bem estruturado é o primeiro passo para o seu crédito.</b>
          <Logo layout="horizontal-sem-descritor" scheme="negativa" className="post-logo" />
        </div>
      </div>
    );
  if (variant === 2)
    return (
      <div className="post p2">
        <span className="post-kick dark">Você sabia?</span>
        <b>O FNO financia investimentos de produtores e empresas da região Norte.</b>
        <p>A Brasil Terra estrutura o projeto; a análise e a decisão de crédito são do banco operador.</p>
        <Logo layout="simbolo" scheme="preto" className="post-sym" />
      </div>
    );
  return (
    <div className="post p3">
      <div className="post-photo">
        <Landscape />
      </div>
      <div className="post-band">
        <b>Do campo à agroindústria</b>
        <span>Conheça nossos serviços</span>
      </div>
      <Logo layout="simbolo" scheme="branco" className="post-sym" />
    </div>
  );
}

export function Posts() {
  return (
    <figure className="mock rv">
      <div className="posts-scene">
        <div className="feed">
          <Post variant={1} />
          <Post variant={2} />
          <Post variant={3} />
        </div>
        <div className="carousel" data-carousel>
          <div className="car-track">
            {[
              ['01', 'Como funciona um estudo de viabilidade?', 'Arraste para o lado'],
              ['02', 'Diagnóstico', 'Entendemos o negócio, o investimento e a capacidade de pagamento.'],
              ['03', 'Projeções', 'Receitas, custos e fluxo de caixa em três cenários.'],
              ['04', 'Dossiê', 'Documentação organizada para a análise do banco.'],
            ].map(([n, t, d]) => (
              <div key={n} className={['slide', n === '01' ? 's-cover' : ''].join(' ')}>
                <span className="slide-n">{n}</span>
                <b>{t}</b>
                <p>{d}</p>
                <Logo layout="simbolo" scheme={n === '01' ? 'negativa' : 'full'} className="slide-sym" />
              </div>
            ))}
          </div>
          <div className="car-dots">
            <i className="on" />
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
      <MockLabel group="Digital" title="Post institucional e carrossel" />
      <figcaption className="mock-spec">
        1080 × 1350 px (4:5) ou 1080 × 1080 px · margem de 7% · símbolo no canto inferior direito, 10% da largura · título em Montserrat Bold 64–80 px,
        no máximo 12 palavras.
      </figcaption>
    </figure>
  );
}

export function Story() {
  return (
    <figure className="mock rv">
      <div className="story-scene">
        <Phone>
          <div className="story">
            <div className="story-bars">
              <i className="on" />
              <i />
              <i />
            </div>
            <Glebas tone="dark" scale={0.4} />
            <div className="story-in">
              <span className="post-kick">Agenda</span>
              <b>Estaremos na feira agropecuária da região. Venha conversar sobre o seu projeto.</b>
              <span className="story-btn">Saiba mais</span>
            </div>
            <div className="story-logo">
              <Logo layout="vertical-sem-descritor" scheme="negativa" />
            </div>
          </div>
        </Phone>
        <Phone className="tilt">
          <div className="story light">
            <div className="story-bars">
              <i />
              <i className="on" />
              <i />
            </div>
            <div className="story-in">
              <span className="post-kick dark">Dica do consultor</span>
              <b>Organize as notas fiscais dos últimos 12 meses antes da primeira reunião.</b>
            </div>
            <div className="story-highlights">
              {['Serviços', 'FNO', 'Cases', 'Equipe'].map((h) => (
                <span key={h}>
                  <i>
                    <Logo layout="simbolo" />
                  </i>
                  {h}
                </span>
              ))}
            </div>
          </div>
        </Phone>
      </div>
      <MockLabel group="Digital" title="Stories e capas de destaque" />
      <figcaption className="mock-spec">1080 × 1920 px · zonas seguras de 250 px no topo e na base · logo vertical sem descritor acima da zona inferior.</figcaption>
    </figure>
  );
}

export function Presentation() {
  return (
    <figure className="mock rv" data-tilt>
      <div className="pres-scene">
        <Laptop>
          <div className="slide169">
            <div className="s169-left">
              <span className="s169-kick">Apresentação institucional</span>
              <b>Projetos que transformam ambição em crédito analisável.</b>
              <span className="s169-meta">Outubro de 2026</span>
            </div>
            <div className="s169-right">
              <Glebas tone="yellow" scale={0.45} />
            </div>
            <div className="s169-logo">
              <Logo layout="horizontal-sem-descritor" scheme="negativa" />
            </div>
          </div>
        </Laptop>
      </div>
      <MockLabel group="Digital" title="Tela de apresentação 16:9" />
      <figcaption className="mock-spec">1920 × 1080 px · margem de 5% · capa em Azul Profundo, miolo em Papel Terra · logo em 16% da largura.</figcaption>
    </figure>
  );
}

export function WebHeader() {
  return (
    <figure className="mock rv">
      <Browser url="brasilterra.com.br" className="site">
        <header className="site-nav">
          <Logo layout="horizontal-sem-descritor" className="site-logo" />
          <nav>
            <span>Serviços</span>
            <span>Como trabalhamos</span>
            <span>Sobre</span>
            <span className="site-cta">Fale conosco</span>
          </nav>
        </header>
        <div className="site-hero">
          <div>
            <span className="post-kick">Consultoria e Projetos de Viabilidade</span>
            <h4>Seu investimento, estruturado para a análise de crédito.</h4>
            <p>Estudos técnico-financeiros para produtores, indústrias, cooperativas e empreendedores da Amazônia Legal.</p>
            <div className="site-btns">
              <span className="btn">Solicitar diagnóstico</span>
              <span className="btn ghost">Ver serviços</span>
            </div>
          </div>
          <div className="site-art">
            <Glebas tone="dark" scale={0.45} />
          </div>
        </div>
      </Browser>
      <div className="service-cards">
        {[
          ['viabilidade', 'Estudo de viabilidade', 'Análise técnica, econômica e financeira do investimento.'],
          ['credito', 'Projeto de crédito', 'Dossiê completo para submissão à instituição financeira.'],
          ['rural', 'Projetos rurais', 'Custeio, investimento e modernização da propriedade.'],
        ].map(([i, t, d]) => (
          <div key={t} className="svc">
            <Icon name={i} />
            <b>{t}</b>
            <p>{d}</p>
            <span>Saiba mais →</span>
          </div>
        ))}
      </div>
      <MockLabel group="Digital" title="Cabeçalho de site e cards de serviço" />
      <figcaption className="mock-spec">
        Cabeçalho de 80 px com logo sem descritor de 200 px · botão primário Azul Meridiano, secundário com contorno · cards com ícone de 32 px e raio
        de 12 px apenas no canto superior direito, ecoando o símbolo.
      </figcaption>
    </figure>
  );
}

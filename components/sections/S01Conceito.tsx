import { Chapter, Page } from '../ui';
import Logo from '../Logo';

const TOC = [
  ['01', 'Sumário & conceito', 'Carta, propósito, posicionamento, valores, personalidade, públicos, leitura do nome', 'sumario'],
  ['02', 'Gridline', 'Unidade modular x, eixos, cotas, raio e alinhamentos', 'gridline'],
  ['03', 'Composição', 'Anatomia do símbolo e do lettering, conceito → forma', 'composicao'],
  ['04', 'Paletas', 'Primárias, secundárias, neutros, funcionais, dados, escalas e WCAG', 'paletas'],
  ['05', 'Tipografia', 'Famílias, hierarquia, contingência e usos incorretos', 'tipografia'],
  ['06', 'Malha construtiva', 'Área de proteção, redução mínima, proporções e formatos', 'malha'],
  ['07', 'Versões & fundos', 'Arranjos, versões cromáticas, fundos e usos incorretos', 'versoes'],
  ['08', 'Aplicações', 'Papelaria, digital, campo, obra, eventos e ambiente corporativo', 'aplicacoes'],
  ['A–F', 'Linguagem & apoio', 'Voz e tom, grafismos, ícones, fotografia, redes e documentos', 'complementos'],
  ['✓', 'Checklist & arquivos', 'Checklist, limitações, premissas, próximos passos e downloads', 'fechamento'],
];

const VALORES = [
  ['Rigor técnico', 'Cada número tem origem, cada premissa é declarada.', 'Grade modular, medidas exatas, números tabulares e alinhamento rígido.'],
  ['Transparência', 'O cliente entende o que assina e o banco entende o que lê.', 'Alto contraste, hierarquia clara, nada importante em letra miúda.'],
  ['Proximidade', 'Vamos até o cliente, no campo, na obra, na indústria.', 'O único canto arredondado do símbolo; fotografia de pessoas reais; linguagem direta.'],
  ['Desenvolvimento', 'O projeto só faz sentido se gerar produção, emprego e renda.', 'Amarelo Safra como acento de crescimento; composições que avançam da esquerda para a direita.'],
  ['Orgulho regional', 'O Norte é ponto de partida, não limite.', 'Verde Floresta e Terracota Terra na paleta secundária; território real nas imagens.'],
];

const PERSONA = [
  ['Técnica', 'hermética'],
  ['Próxima', 'informal demais'],
  ['Ambiciosa', 'arrogante'],
  ['Moderna', 'modinha de fintech'],
  ['Sóbria', 'burocrática'],
  ['Regional', 'provinciana'],
  ['Pioneira', 'experimental'],
  ['Confiável', 'fria'],
];

const PUBLICOS = [
  ['Produtores rurais e agroempresários', 'Querem segurança para investir em máquinas, área, rebanho e irrigação.'],
  ['Indústrias e agroindústrias', 'Precisam de projeto robusto para ampliação, modernização e capital de giro.'],
  ['Comércio e serviços', 'Buscam crédito para expansão, estoque, reforma e tecnologia.'],
  ['Cooperativas e associações', 'Projetos coletivos, com governança e muitos interessados.'],
  ['Empreendedores em expansão', 'Têm o negócio na cabeça e precisam dele em números.'],
  ['Analistas e gerentes de crédito', 'Público secundário: leem o projeto e exigem clareza e consistência.'],
];

export default function S01() {
  return (
    <>
      <Chapter
        id="sumario"
        n="01"
        title="Sumário & conceito"
        text="Antes da forma, a razão de existir. Este capítulo reúne a estratégia que orienta cada decisão visual e verbal da Brasil Terra."
        items={['Carta de apresentação', 'Propósito, posicionamento e valores', 'Personalidade e públicos', 'Leitura do nome e do símbolo']}
      />

      <Page id="sumario-indice" eyebrow="01 · Sumário" title="O que você encontra neste manual">
        <ol className="toc">
          {TOC.map(([n, t, d, id]) => (
            <li key={n} className="rv">
              <a href={`#${id}`}>
                <b>{n}</b>
                <span>
                  <strong>{t}</strong>
                  <em>{d}</em>
                </span>
                <i aria-hidden="true">→</i>
              </a>
            </li>
          ))}
        </ol>
      </Page>

      <Page eyebrow="01 · Carta de apresentação" title="Uma marca nasce com uma promessa" tone="white">
        <div className="letter rv">
          <div className="letter-body">
            <p className="dropcap">
              A Brasil Terra nasce para encurtar a distância entre quem produz e o crédito de que precisa para crescer. No Norte do Brasil,
              essa distância raramente é falta de vontade: quase sempre é falta de um projeto bem estruturado, com números confiáveis e
              linguagem que a instituição financeira reconhece.
            </p>
            <p>
              Somos uma consultoria de estudos e projetos de viabilidade técnico-financeira. Trabalhamos lado a lado com produtores,
              empresas, indústrias, cooperativas e empreendedores para transformar uma intenção de investimento em um documento sólido,
              apto a ser analisado por linhas de crédito como as operadas pelo Banco da Amazônia com recursos do FNO.
            </p>
            <p>
              Este manual organiza a forma como a Brasil Terra aparece, fala e se comporta. Ele existe para que cada cartão, relatório,
              placa de obra ou publicação transmita a mesma coisa: rigor de quem entende de números e proximidade de quem conhece o chão.
            </p>
            <p className="sign">Diretoria Brasil Terra</p>
          </div>
          <aside className="letter-aside">
            <p className="quote">“Projeto bem estruturado é o primeiro tijolo do desenvolvimento.”</p>
            <p className="note">
              A Brasil Terra não aprova crédito: estrutura projetos para análise das instituições financeiras, a quem cabe a decisão.
            </p>
          </aside>
        </div>
      </Page>

      <Page eyebrow="01 · Estratégia" title="Propósito, posicionamento e promessa">
        <div className="strat">
          <article className="strat-card rv">
            <p className="label">Propósito</p>
            <p className="big">
              Transformar projetos bem estruturados em acesso a crédito e o crédito em <mark>desenvolvimento real</mark> para quem produz no
              Norte do Brasil.
            </p>
          </article>
          <article className="strat-card rv">
            <p className="label">Posicionamento</p>
            <p className="mid">
              Para quem produz e empreende na Amazônia Legal, a Brasil Terra é a consultoria que transforma ambição em projeto técnico e
              financeiramente viável, com o rigor que as instituições financeiras exigem e a proximidade que o cliente precisa.
            </p>
          </article>
          <article className="strat-card dark rv">
            <p className="label">Promessa implícita</p>
            <p className="mid">Do projeto bem feito ao crédito analisado; do crédito ao campo, à fábrica e à cidade em crescimento.</p>
          </article>
        </div>

        <h3 className="h3 rv">Assinatura e tagline</h3>
        <p className="body rv">
          O descritor oficial do logo permanece <b>“Consultoria e Projetos de Viabilidade”</b>. A tagline é uma camada opcional de
          comunicação, nunca integrada ao desenho do logo.
        </p>
        <div className="taglines">
          <div className="tl rv">
            <span>Opção A</span>
            <p>Do projeto ao desenvolvimento.</p>
          </div>
          <div className="tl rec rv">
            <span>Recomendada</span>
            <p>Viabilidade que vira desenvolvimento.</p>
            <em>
              Liga o que a empresa entrega (viabilidade) ao que o cliente quer (desenvolvimento), sem prometer aprovação de crédito. Funciona
              em placa de obra, proposta e redes sociais.
            </em>
          </div>
          <div className="tl rv">
            <span>Opção C</span>
            <p>Projetos que fazem a terra prosperar.</p>
          </div>
        </div>
      </Page>

      <Page eyebrow="01 · Valores" title="Cinco valores, cinco traduções visuais" tone="white">
        <div className="values">
          {VALORES.map(([t, d, v], i) => (
            <article key={t} className="value rv" style={{ ['--d' as string]: `${i * 70}ms` }}>
              <b className="value-n">0{i + 1}</b>
              <h4>{t}</h4>
              <p>{d}</p>
              <p className="value-vis">
                <span>Tradução visual</span>
                {v}
              </p>
            </article>
          ))}
        </div>
      </Page>

      <Page eyebrow="01 · Personalidade" title="Como a marca é, e como ela não é">
        <div className="persona">
          {PERSONA.map(([is, isnt]) => (
            <div key={is} className="persona-row rv">
              <b>{is}</b>
              <div className="persona-scale" aria-hidden="true">
                <i />
              </div>
              <span>sem ser {isnt}</span>
            </div>
          ))}
        </div>
        <div className="perceive rv">
          <p className="label">Como a marca deve ser percebida</p>
          <p>
            Como o escritório técnico mais organizado que o cliente já conheceu, com gente que fala a língua dele. Sobriedade bancária para
            gerar credibilidade; energia de prosperidade para gerar vontade de crescer.
          </p>
        </div>
      </Page>

      <Page eyebrow="01 · Públicos" title="Para quem falamos" tone="white">
        <div className="publics">
          {PUBLICOS.map(([t, d], i) => (
            <article key={t} className={['public rv', i === 5 ? 'secondary' : ''].join(' ')}>
              <h4>{t}</h4>
              <p>{d}</p>
            </article>
          ))}
        </div>
        <p className="body rv">
          Todos compartilham uma mesma necessidade: <b>confiar em quem cuida de uma decisão financeira de alto valor</b>. Por isso, o
          sistema visual privilegia clareza, previsibilidade e acabamento impecável.
        </p>
      </Page>

      <Page eyebrow="01 · Leitura do nome" title="Brasil + Terra" dark>
        <div className="name-read">
          <div className="name-col rv">
            <h3>Brasil</h3>
            <p>
              O país em sua grandeza, riqueza, diversidade e capacidade produtiva. Na marca, aparece como escala: os projetos nascem no Norte,
              mas falam a linguagem do sistema financeiro nacional.
            </p>
          </div>
          <div className="name-plus rv" aria-hidden="true">
            +
          </div>
          <div className="name-col rv">
            <h3>Terra</h3>
            <p>
              O solo que produz e o planeta que recebe o que é produzido. A atuação é local, o impacto é global: o que se financia aqui chega
              “aos quatro cantos da Terra”.
            </p>
          </div>
        </div>
        <div className="name-symbol rv">
          <div className="name-symbol-art">
            <Logo layout="simbolo" />
          </div>
          <p>
            O símbolo traduz o nome em geometria: <b>glebas vistas do alto</b> (território organizado e produtivo), <b>blocos construtivos</b>{' '}
            (estrutura, solidez, projeto) e um <b>“B” abstrato</b> que também se lê como planta baixa. O único canto arredondado é o gesto
            humano dentro do rigor.
          </p>
        </div>
      </Page>

      <Page eyebrow="01 · Como usar este manual" title="Regras claras para quem produz a marca" tone="white">
        <div className="howto">
          {[
            ['Consulte antes de criar', 'Toda peça nova deve partir das regras de logo, cor e tipografia deste manual.'],
            ['Use os arquivos oficiais', 'Nunca redesenhe ou extraia o logo de imagens. Use apenas os arquivos da pasta 02_Logo.'],
            ['Respeite as medidas', 'Área de proteção e redução mínima são inegociáveis, do favicon à fachada.'],
            ['Valide cor impressa', 'CMYK e Pantone são aproximados. Exija prova de cor antes de grandes tiragens.'],
            ['Em dúvida, simplifique', 'Menos elementos, mais respiro. A marca é forte o bastante sozinha.'],
            ['Fale com a marca', 'Casos não previstos devem ser aprovados pelo responsável de marca da Brasil Terra.'],
          ].map(([t, d], i) => (
            <div key={t} className="howto-item rv">
              <b>{String(i + 1).padStart(2, '0')}</b>
              <h4>{t}</h4>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </Page>
    </>
  );
}

import { Chapter, Page, Rules } from '../ui';
import Logo from '../Logo';
import { Glebas, Landscape } from '../mockups/Scenes';
import { Icon, ICONS } from '../Icons';

const CANAIS = [
  ['Proposta e relatório técnico', 5, 'Formal, preciso, impessoal na análise e pessoal na apresentação.'],
  ['E-mail com cliente', 4, 'Cordial, objetivo, frases curtas, sempre com próximo passo claro.'],
  ['LinkedIn', 3, 'Institucional e educativo; dados, bastidores técnicos, conquistas dos clientes.'],
  ['Instagram', 2, 'Próximo e didático; explica conceitos com exemplos do dia a dia do produtor.'],
  ['WhatsApp', 2, 'Direto e respeitoso; sem gírias, sem excesso de emojis, sem áudios longos.'],
];

const PALAVRAS_SIM = ['estruturar', 'viabilidade', 'projeto', 'análise', 'investimento', 'desenvolvimento', 'capacidade de pagamento', 'cenários', 'acompanhar', 'juntos'];
const PALAVRAS_NAO = ['crédito garantido', 'aprovação certa', 'dinheiro fácil', 'sem burocracia', 'parceiro oficial do banco', 'jeitinho', 'imperdível', 'agro é tudo'];

const ANTES_DEPOIS = [
  ['O empreendimento apresenta TIR superior à TMA, evidenciando atratividade.', 'O retorno esperado do investimento é maior que o mínimo exigido. Em outras palavras: o projeto se paga e sobra.'],
  ['Garantimos a liberação do seu financiamento pelo FNO.', 'Estruturamos o seu projeto para a análise do banco operador do FNO. A decisão de crédito é da instituição financeira.'],
  ['Prezado cliente, segue em anexo a documentação conforme solicitado anteriormente.', 'Olá, Carlos. Envio a documentação que combinamos. Falta só a certidão ambiental para fecharmos esta etapa.'],
];

export default function Extras() {
  return (
    <>
      <Chapter
        id="complementos"
        n="A–F"
        title="Linguagem & elementos de apoio"
        text="O que a marca diz e como ela se expressa além do logo: voz e tom, grafismos, ícones, fotografia, redes sociais e documentos de venda."
        items={['A · Voz e tom', 'B · Elementos gráficos', 'C · Iconografia', 'D · Direção fotográfica', 'E · Redes e digital', 'F · Documentos de venda']}
      />

      <Page id="voz" eyebrow="A · Voz e tom" title="Fala de especialista, com a clareza de quem está ao lado">
        <div className="voice">
          {[
            ['Clara antes de técnica', 'Traduzimos o “técniquês” financeiro sem perder a precisão. Se o termo técnico for necessário, explicamos na mesma frase.'],
            ['Responsável sempre', 'Nunca prometemos aprovação de crédito. Falamos de preparo, chances e próximos passos, não de garantias.'],
            ['Próxima, não íntima', 'Tratamos o cliente pelo nome, com respeito. “Você” no digital; “o senhor/a senhora” quando o cliente preferir.'],
            ['Orgulho com fato', 'Falamos do Norte com dados e exemplos concretos, nunca com adjetivos vazios.'],
          ].map(([t, d], i) => (
            <div key={t} className="voice-p rv">
              <b>0{i + 1}</b>
              <h4>{t}</h4>
              <p>{d}</p>
            </div>
          ))}
        </div>
        <h3 className="h3 rv">Escala de formalidade por canal</h3>
        <div className="formal rv">
          {CANAIS.map(([c, n, d]) => (
            <div key={c as string} className="formal-row">
              <b>{c}</b>
              <div className="formal-bar">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i} className={i < (n as number) ? 'on' : ''} />
                ))}
              </div>
              <span>{d}</span>
            </div>
          ))}
        </div>
      </Page>

      <Page eyebrow="A · Voz e tom" title="Vocabulário, exemplos e frases-modelo" tone="white">
        <div className="vocab">
          <div className="rv">
            <p className="label">Preferir</p>
            <div className="chips ok">
              {PALAVRAS_SIM.map((p) => (
                <span key={p}>{p}</span>
              ))}
            </div>
          </div>
          <div className="rv">
            <p className="label">Evitar</p>
            <div className="chips no">
              {PALAVRAS_NAO.map((p) => (
                <span key={p}>{p}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="ba">
          {ANTES_DEPOIS.map(([a, d]) => (
            <div key={a} className="ba-row rv">
              <p className="ba-a">
                <span>Antes</span>
                {a}
              </p>
              <p className="ba-d">
                <span>Depois</span>
                {d}
              </p>
            </div>
          ))}
        </div>
        <div className="phrases">
          <div className="rv">
            <h4 className="h4">Chamadas</h4>
            <ul className="facts">
              <li>Seu investimento merece um projeto à altura.</li>
              <li>Antes do crédito, a viabilidade.</li>
              <li>Do diagnóstico ao protocolo, ao seu lado.</li>
            </ul>
          </div>
          <div className="rv">
            <h4 className="h4">Texto institucional</h4>
            <p className="body">
              A Brasil Terra é uma consultoria de estudos e projetos de viabilidade técnico-financeira. Apoiamos produtores, empresas,
              cooperativas e empreendedores do Norte do Brasil a estruturar investimentos para a análise de instituições financeiras, com
              rigor técnico e acompanhamento próximo.
            </p>
          </div>
          <div className="rv">
            <h4 className="h4">E-mail: abertura e fechamento</h4>
            <ul className="facts">
              <li>Abertura: “Olá, [nome]. Tudo bem?” · “Bom dia, [nome].”</li>
              <li>Fechamento: “Fico à disposição para conversarmos.” · “Um abraço, [assinatura].”</li>
              <li>Evitar: “Prezado(a)”, “Sem mais para o momento”, “Atenciosamente” em mensagens curtas.</li>
            </ul>
          </div>
          <div className="rv">
            <h4 className="h4">Propostas comerciais</h4>
            <ul className="facts">
              <li>“Esta proposta descreve o escopo, as etapas e os prazos para a estruturação do seu projeto.”</li>
              <li>“O resultado é um dossiê técnico pronto para análise da instituição financeira escolhida.”</li>
            </ul>
          </div>
        </div>
        <div className="credit-box rv">
          <p className="label">Como falar de crédito, FNO e BASA</p>
          <ul className="facts">
            <li>Diga “estruturamos projetos para análise de linhas como as do FNO, operadas pelo Banco da Amazônia”.</li>
            <li>Nunca diga “somos parceiros do BASA”, “credenciados” ou “representantes”, salvo vínculo formal comprovado.</li>
            <li>Nunca use logotipos do BASA, do FNO ou do governo em peças da Brasil Terra sem autorização expressa.</li>
            <li>Toda peça que cite crédito deve trazer: “A análise e a aprovação do crédito são de responsabilidade exclusiva da instituição financeira.”</li>
          </ul>
        </div>
      </Page>

      <Page id="grafismos" eyebrow="B · Elementos gráficos" title="Padrões derivados das glebas" lead="Os grafismos nascem da mesma lógica do símbolo: blocos, canais de respiro de 1x e um único canto arredondado.">
        <div className="patterns">
          {[
            ['dark', 'Glebas · tom sobre tom', 'Capas, fundos de apresentação, envelopes. Contraste baixo para não competir com o texto.'],
            ['yellow', 'Glebas · Safra', 'Áreas de destaque pequenas: lateral de slide, faixa de painel. Máximo de 20% da peça.'],
            ['light', 'Glebas · Papel', 'Fundo de pastas e documentos internos. Quase invisível, cria textura.'],
            ['line', 'Glebas · contorno', 'Película jateada, gravação e aplicações em uma cor.'],
          ].map(([t, n, d]) => (
            <div key={t} className="pattern rv">
              <div className={`pattern-art p-${t}`}>
                <Glebas tone={t as 'dark'} scale={0.6} />
              </div>
              <h4>{n}</h4>
              <p>{d}</p>
            </div>
          ))}
        </div>
        <div className="aux rv">
          <div className="aux-item">
            <div className="aux-art">
              <span className="divider-bar" />
            </div>
            <p>
              <b>Divisor Safra</b> · fio de 4 px (1,5 pt) e 48 px de comprimento acima de títulos de capítulo.
            </p>
          </div>
          <div className="aux-item">
            <div className="aux-art">
              <span className="frame-corner" />
            </div>
            <p>
              <b>Moldura de canto</b> · retângulo com o canto superior direito arredondado (raio = 2,7x da unidade da peça) para fotos e cards.
            </p>
          </div>
          <div className="aux-item">
            <div className="aux-art">
              <span className="module-stack">
                <i />
                <i />
                <i />
              </span>
            </div>
            <p>
              <b>Módulos de dados</b> · blocos empilhados com canal de 1x para KPIs e etapas de processo.
            </p>
          </div>
        </div>
        <Rules
          doList={['Recortar o padrão por inteiro, sem distorcer', 'Usar um único padrão por peça', 'Manter o logo fora da área do padrão ou sobre área calma']}
          dontList={['Recolorir o padrão com cores fora da paleta', 'Usar o padrão atrás de textos longos', 'Transformar o padrão em logo alternativo']}
        />
      </Page>

      <Page id="icones" eyebrow="C · Iconografia" title="24 ícones, uma única gramática" tone="white" lead="Grade de 24 px, área útil de 20 px, traço de 1,75 px, terminais retos, cantos vivos e, no máximo, um canto arredondado por ícone.">
        <div className="icons">
          {Object.entries(ICONS).map(([k, v]) => (
            <div key={k} className="ic rv">
              <Icon name={k} size={40} />
              <span>{v.t}</span>
            </div>
          ))}
        </div>
        <div className="icon-grid rv">
          <svg viewBox="0 0 24 24" className="ig-big" aria-label="Grade de construção dos ícones">
            {Array.from({ length: 25 }).map((_, i) => (
              <g key={i}>
                <line x1={i} y1={0} x2={i} y2={24} />
                <line x1={0} y1={i} x2={24} y2={i} />
              </g>
            ))}
            <rect x="2" y="2" width="20" height="20" className="ig-safe" />
            <path d={ICONS.viabilidade.d} className="ig-path" />
          </svg>
          <ul className="facts">
            <li>Cor padrão: Azul Meridiano sobre claro; branco ou Amarelo Safra sobre escuro.</li>
            <li>Tamanhos: 16, 24, 32 e 48 px. Acima de 48 px, aumentar o traço proporcionalmente.</li>
            <li>Ícone nunca substitui texto em ações críticas: sempre acompanhado de rótulo.</li>
          </ul>
        </div>
      </Page>

      <Page id="fotografia" eyebrow="D · Direção fotográfica" title="Gente real, território real, luz natural" dark>
        <div className="photo-dir">
          {[
            ['Campo e território', 'Planos abertos, horizonte baixo, luz de início ou fim de dia. Áreas produtivas organizadas, rios e estradas como linhas de força.', 'p-field'],
            ['Pessoas', 'Clientes e consultores em situação real de trabalho: conversa na propriedade, leitura de documentos, aperto de mão sem pose.', 'p-people'],
            ['Obras e indústria', 'Estruturas em construção, máquinas, linhas de produção. Enquadramento frontal ou em diagonal, com escala humana.', 'p-work'],
            ['Escritório', 'Mesas organizadas, telas com gráficos da marca, reuniões. Luz natural, tons neutros com acentos de azul e amarelo.', 'p-office'],
          ].map(([t, d, c]) => (
            <div key={t} className="pd rv">
              <div className={`pd-img ${c}`}>
                <Landscape dusk={c === 'p-people' || c === 'p-office'} />
                <span className="pd-frame" />
              </div>
              <h4>{t}</h4>
              <p>{d}</p>
            </div>
          ))}
        </div>
        <div className="photo-specs">
          <div className="rv">
            <h4 className="h4">Tratamento</h4>
            <ul className="facts">
              <li>Cores naturais, leve aquecimento nos meios-tons, pretos profundos sem esmagar sombras.</li>
              <li>Saturação moderada: verdes e céus verdadeiros, nunca “neon”.</li>
              <li>Recorte com o canto superior direito arredondado quando a foto for card.</li>
            </ul>
          </div>
          <div className="rv">
            <h4 className="h4">Evitar</h4>
            <ul className="facts no">
              <li>Banco de imagens genérico (aperto de mão em fundo branco, executivos posados).</li>
              <li>Clichês: folha isolada, globo azul, mão segurando broto, bandeira literal.</li>
              <li>Dinheiro em espécie, setas de “sucesso” e imagens de ostentação.</li>
              <li>Imagens de terceiros sem licença ou sem autorização de uso de imagem.</li>
            </ul>
          </div>
          <div className="rv">
            <h4 className="h4">Briefing de produção</h4>
            <ul className="facts">
              <li>1 diária em propriedade rural de cliente (com termo de autorização).</li>
              <li>1 diária em agroindústria ou obra em andamento.</li>
              <li>Meia diária no escritório: retratos da equipe e reunião.</li>
              <li>Entrega: RAW + JPG tratado, 3:2 e 4:5, direitos de uso por prazo indeterminado.</li>
            </ul>
          </div>
        </div>
        <p className="note rv">As imagens desta seção são ilustrações vetoriais de referência, não fotografias. Nenhuma imagem de terceiros foi utilizada.</p>
      </Page>

      <Page id="redes" eyebrow="E · Redes sociais e digital" title="Especificações rápidas" tone="white">
        <div className="table-wrap rv">
          <table className="spec wide">
            <thead>
              <tr>
                <th>Peça</th>
                <th>Formato</th>
                <th>Logo</th>
                <th>Observação</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Avatar (Instagram, LinkedIn, WhatsApp)</td><td>400 × 400 px</td><td>Símbolo em 60%</td><td>Fundo branco; não usar o lettering</td></tr>
              <tr><td>Favicon</td><td>32 × 32 e 16 × 16 px</td><td>Símbolo</td><td>Arquivo SVG + PNG</td></tr>
              <tr><td>Capa LinkedIn</td><td>1128 × 191 px</td><td>Não repetir (já está no avatar)</td><td>Tagline + padrão glebas</td></tr>
              <tr><td>Post</td><td>1080 × 1350 px</td><td>Símbolo 10%, inferior direito</td><td>Título ≤ 12 palavras</td></tr>
              <tr><td>Carrossel</td><td>1080 × 1350 px · até 10 telas</td><td>Capa com logo; demais com símbolo</td><td>Numerar as telas</td></tr>
              <tr><td>Story</td><td>1080 × 1920 px</td><td>Vertical sem descritor</td><td>Zonas seguras de 250 px</td></tr>
              <tr><td>Capas de destaque</td><td>1080 × 1920 px · círculo central</td><td>Ícones oficiais</td><td>Fundo Azul Profundo</td></tr>
              <tr><td>Botões</td><td>Altura 48 px · raio só no canto superior direito</td><td>—</td><td>Primário Meridiano; secundário contorno</td></tr>
            </tbody>
          </table>
        </div>
        <div className="buttons rv">
          <span className="btn">Solicitar diagnóstico</span>
          <span className="btn ghost">Ver serviços</span>
          <span className="btn safra">Baixar material</span>
          <span className="btn disabled">Indisponível</span>
        </div>
      </Page>

      <Page id="documentos" eyebrow="F · Documentos de venda" title="Proposta comercial e relatório de viabilidade">
        <div className="docs">
          <div className="doc-flow rv">
            {[
              ['Capa', 'Azul Profundo, padrão glebas, título do projeto, cliente, data e versão.'],
              ['Sumário', 'Numerado, com divisores Safra. Máximo de dois níveis.'],
              ['Resumo executivo', 'Uma página: objetivo, investimento, indicadores-chave e parecer.'],
              ['Tabelas financeiras', 'Source Sans 3 tabular, valores à direita, negativos entre parênteses em Terracota.'],
              ['Gráficos', 'Paleta de dados na ordem oficial; fluxo de caixa em barras + linha de saldo acumulado.'],
              ['Parecer técnico', 'Caixa com fio Safra, conclusão objetiva e condicionantes.'],
              ['Anexos', 'Fundo Papel Terra, cabeçalho reduzido, numeração contínua.'],
            ].map(([t, d], i) => (
              <div key={t} className="df">
                <b>{String(i + 1).padStart(2, '0')}</b>
                <h4>{t}</h4>
                <p>{d}</p>
              </div>
            ))}
          </div>
          <div className="fin-table rv">
            <table className="tnum">
              <caption>Tabela 4 · Projeção de resultados (R$ mil) — valores ilustrativos</caption>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Ano 1</th>
                  <th>Ano 2</th>
                  <th>Ano 3</th>
                  <th>Ano 4</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Receita bruta</td><td>2.140,0</td><td>2.610,5</td><td>2.980,2</td><td>3.205,8</td></tr>
                <tr><td>Custos variáveis</td><td className="neg">(1.120,4)</td><td className="neg">(1.302,8)</td><td className="neg">(1.455,1)</td><td className="neg">(1.540,0)</td></tr>
                <tr><td>Custos fixos</td><td className="neg">(480,0)</td><td className="neg">(494,4)</td><td className="neg">(509,2)</td><td className="neg">(524,5)</td></tr>
                <tr className="tot"><td>Resultado operacional</td><td>539,6</td><td>813,3</td><td>1.015,9</td><td>1.141,3</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="kpi-row rv">
          <div>
            <b className="tnum" data-count="18.4" data-dec="1">18,4</b>
            <span>% TIR*</span>
          </div>
          <div>
            <b className="tnum" data-count="1.56" data-dec="2">1,56</b>
            <span>ICSD médio*</span>
          </div>
          <div>
            <b className="tnum" data-count="4.2" data-dec="1">4,2</b>
            <span>anos de payback*</span>
          </div>
          <div>
            <b className="tnum" data-count="36">36</b>
            <span>empregos diretos*</span>
          </div>
        </div>
        <p className="note rv">*Indicadores ilustrativos para demonstrar o estilo de dados. Modelos .docx, .pptx e .xlsx com os estilos da marca estão na pasta 05_Papelaria_Digital.</p>
        <div className="end-logo rv">
          <Logo />
        </div>
      </Page>
    </>
  );
}

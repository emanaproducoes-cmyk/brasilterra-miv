import { Page } from '../ui';
import Logo from '../Logo';

const CHECK = [
  'O logo usado é um arquivo oficial da pasta 02_Logo, sem redesenho.',
  'O descritor diz “Consultoria e Projetos de Viabilidade”, sem “&”.',
  'A área de proteção de 3x está livre.',
  'O tamanho respeita a redução mínima da versão escolhida.',
  'A versão cromática combina com o fundo (ver Laboratório, cap. 07).',
  'As cores vêm da paleta oficial, com prova de cor para impressos.',
  'Apenas Montserrat e Source Sans 3 (ou a contingência indicada).',
  'Textos revisados em português, sem promessa de aprovação de crédito.',
  'Nenhum logotipo de terceiros sem autorização; área do financiador como marcador.',
  'Contraste mínimo AA em todos os textos.',
];

const DL = [
  ['02_Logo', 'SVG, PDF vetorial, EPS e PNG (512, 1024 e 4096 px) de todas as versões', '/downloads/02_Logo.zip'],
  ['03_Cores', 'tokens.css, tokens.json, paleta.gpl, paleta.ase e folha de amostras', '/downloads/03_Cores.zip'],
  ['04_Tipografia', 'tipografia.css, links oficiais e licenças OFL', '/downloads/04_Tipografia.zip'],
  ['05_Papelaria_Digital', 'Assinatura de e-mail HTML e modelos .docx, .pptx e .xlsx', '/downloads/05_Papelaria_Digital.zip'],
  ['07_Redes_Sociais', 'Avatares 400 × 400 px e capa do LinkedIn', '/downloads/07_Redes_Sociais.zip'],
  ['08_Mockups', '18 mockups demonstrativos em PNG (2x)', '/downloads/08_Mockups.zip'],
];

export default function Closing() {
  return (
    <>
      <Page id="fechamento" eyebrow="Checklist" title="Antes de aprovar qualquer peça" dark>
        <ol className="checklist">
          {CHECK.map((c, i) => (
            <li key={c} className="rv">
              <label>
                <input type="checkbox" />
                <span className="box" aria-hidden="true" />
                <b>{String(i + 1).padStart(2, '0')}</b>
                {c}
              </label>
            </li>
          ))}
        </ol>
      </Page>

      <Page eyebrow="Transparência técnica" title="Limitações e premissas" tone="white">
        <div className="limits">
          <div className="rv">
            <h4 className="h4">Limitações</h4>
            <ul className="facts">
              <li>Lettering reconstruído com Montserrat Bold/Medium (aproximação declarada), convertido em curvas. Recomenda-se validar com o arquivo de origem do designer, se existir.</li>
              <li>Formato .AI nativo não foi gerado: são entregues SVG, PDF vetorial e EPS, compatíveis com Illustrator.</li>
              <li>CMYK por conversão matemática e Pantone por aproximação visual: exigem prova de cor.</li>
              <li>Mockups são ilustrações vetoriais, não fotomontagens; servem para demonstrar regras, não como projeto executivo.</li>
              <li>Paleta .ase gerada por script conforme a especificação pública do formato; testar a importação no Illustrator.</li>
              <li>A versão em PDF paginado (40–60 páginas) ainda não foi diagramada: este manual é entregue como site. A folha de impressão (Ctrl+P) gera um rascunho em 16:9.</li>
            </ul>
          </div>
          <div className="rv">
            <h4 className="h4">Premissas adotadas</h4>
            <ul className="facts">
              <li>Descritor corrigido de “&” para “E”, conforme a assinatura oficial informada no briefing.</li>
              <li>Unidade x = largura do canal de respiro; medidas arredondadas para décimos de x.</li>
              <li>Sede em Belém (PA), domínio brasilterra.com.br, nomes, telefones e projetos são marcadores ilustrativos.</li>
              <li>Tagline recomendada: “Viabilidade que vira desenvolvimento.” (opcional, nunca integrada ao logo).</li>
              <li>Azul Profundo incluído na paleta secundária como cor de fundo escuro do sistema.</li>
            </ul>
          </div>
          <div className="rv">
            <h4 className="h4">Próximos passos</h4>
            <ol className="steps">
              <li>Prova de cor contratual em gráfica para azul e amarelo (couché e offset).</li>
              <li>Pesquisa de anterioridade e pedido de registro da marca no INPI (classes de serviços de consultoria).</li>
              <li>Sessão de fotos conforme o briefing do capítulo D.</li>
              <li>Implantar modelos .docx/.pptx no SharePoint e treinar a equipe.</li>
              <li>Confirmar com cada instituição financeira as exigências para placas de obra.</li>
              <li>Revisar este manual após 6 meses de uso.</li>
            </ol>
          </div>
        </div>
      </Page>

      <Page id="arquivos" eyebrow="Arquivos" title="Pacote de entrega">
        <div className="downloads">
          {DL.map(([t, d, h]) => (
            <a key={t} className="dl rv" href={h}>
              <b>{t}</b>
              <span>{d}</span>
              <i aria-hidden="true">↗</i>
            </a>
          ))}
        </div>
      </Page>

      <footer className="end">
        <div className="end-in">
          <Logo layout="vertical" scheme="negativa" />
          <p>Manual de Identidade Visual · versão 1.0 · outubro de 2026</p>
          <p className="small">Uso restrito à Brasil Terra e a fornecedores autorizados. Fontes Montserrat e Source Sans 3 sob licença SIL Open Font License 1.1.</p>
        </div>
      </footer>
    </>
  );
}

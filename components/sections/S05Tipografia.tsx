import { Chapter, Page, Rules } from '../ui';

const SCALE = [
  ['Título H1', 'Montserrat', 'Bold 700', '40 pt', '56 px · 3,5 rem', '1,05', '-1%', 'Frase', 'Preto Norte / Azul Meridiano', 'h1'],
  ['Subtítulo H2', 'Montserrat', 'Bold 700', '26 pt', '36 px · 2,25 rem', '1,15', '-0,5%', 'Frase', 'Preto Norte', 'h2'],
  ['Subtítulo H3', 'Montserrat', 'SemiBold 600', '18 pt', '24 px · 1,5 rem', '1,25', '0', 'Frase', 'Azul Meridiano', 'h3'],
  ['Sobretítulo', 'Montserrat', 'SemiBold 600', '8 pt', '12 px · 0,75 rem', '1,3', '+12%', 'CAIXA-ALTA', 'Azul Meridiano / Âmbar', 'kick'],
  ['Chamada / lide', 'Source Sans 3', 'Light 300', '14 pt', '22 px · 1,375 rem', '1,4', '0', 'Frase', 'Grafite Rio', 'lead'],
  ['Corpo de texto', 'Source Sans 3', 'Regular 400', '10,5 pt', '17 px · 1,0625 rem', '1,5', '0', 'Frase', 'Grafite Rio', 'body'],
  ['Legenda', 'Source Sans 3', 'Regular 400', '8 pt', '13 px · 0,8125 rem', '1,4', '+1%', 'Frase', 'Grafite Claro', 'cap'],
  ['Citação', 'Source Sans 3', 'Italic 400', '16 pt', '24 px · 1,5 rem', '1,35', '0', 'Frase', 'Azul Meridiano', 'quote'],
  ['Números de destaque', 'Montserrat', 'ExtraBold 800', '48 pt', '64 px · 4 rem', '1', '-2%', 'Tabulares', 'Azul Meridiano', 'kpi'],
  ['Texto de tabela', 'Source Sans 3', 'Regular / Semibold', '8,5 pt', '14 px · 0,875 rem', '1,3', '0', 'Tabulares', 'Grafite Rio', 'tab'],
  ['Botões e links', 'Montserrat', 'SemiBold 600', '9 pt', '15 px · 0,9375 rem', '1', '+2%', 'Frase', 'Azul Meridiano', 'btn'],
  ['Rodapé', 'Source Sans 3', 'Regular 400', '7 pt', '12 px · 0,75 rem', '1,4', '+2%', 'Frase', 'Grafite Claro', 'foot'],
];

export default function S05() {
  return (
    <>
      <Chapter
        id="tipografia"
        n="05"
        title="Tipografia"
        text="Duas famílias livres (SIL Open Font License), com suporte completo ao português: uma geométrica que dialoga com o lettering do logo e uma humanista para leitura longa."
        items={['Famílias e pareamento', 'Escala hierárquica', 'Números tabulares', 'Contingência e usos incorretos']}
      />
      <Page eyebrow="05 · Famílias" title="Montserrat + Source Sans 3">
        <div className="families">
          <article className="family rv">
            <p className="label">Títulos, números e destaques</p>
            <p className="family-aa mont">Aa</p>
            <h3 className="mont">Montserrat</h3>
            <p className="weights-line mont">
              <span style={{ fontWeight: 500 }}>Medium</span> <span style={{ fontWeight: 600 }}>SemiBold</span> <span style={{ fontWeight: 700 }}>Bold</span>{' '}
              <span style={{ fontWeight: 800 }}>ExtraBold</span>
            </p>
            <p className="glyphs mont">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
              <br />
              abcdefghijklmnopqrstuvwxyz
              <br />
              ÁÂÃÀÇÉÊÍÓÔÕÚ áâãàçéêíóôõú
              <br />
              0123456789 R$ % ( ) / – —
            </p>
            <p className="body">Geométrica, da mesma família visual do lettering do logo. Usada em pesos 500 a 800. Licença SIL OFL 1.1.</p>
          </article>
          <article className="family rv">
            <p className="label">Texto corrido, tabelas e interfaces</p>
            <p className="family-aa ss">Aa</p>
            <h3 className="ss">Source Sans 3</h3>
            <p className="weights-line ss">
              <span style={{ fontWeight: 300 }}>Light</span> <span>Regular</span> <i>Italic</i> <span style={{ fontWeight: 600 }}>Semibold</span>{' '}
              <span style={{ fontWeight: 700 }}>Bold</span>
            </p>
            <p className="glyphs ss">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
              <br />
              abcdefghijklmnopqrstuvwxyz
              <br />
              ÁÂÃÀÇÉÊÍÓÔÕÚ áâãàçéêíóôõú
              <br />
              <span className="tnum">0123456789 R$ 1.250.000,00</span>
            </p>
            <p className="body">Humanista, desenhada para leitura longa, com algarismos tabulares nativos para tabelas financeiras. Licença SIL OFL 1.1.</p>
          </article>
        </div>
        <div className="pairings rv">
          <div className="pair chosen">
            <span>Escolhido</span>
            <b className="mont">Montserrat</b> + <b className="ss">Source Sans 3</b>
            <p>Mantém o DNA geométrico do logo nos títulos e ganha conforto e números tabulares no texto. Ambas gratuitas, com acentuação completa.</p>
          </div>
          <div className="pair">
            <span>Alternativa 1</span>
            <b>Montserrat + Inter</b>
            <p>Mais tecnológica e neutra; aproxima a marca de uma estética de fintech, que o briefing pede para evitar.</p>
          </div>
          <div className="pair">
            <span>Alternativa 2</span>
            <b>Sora + Source Serif 4</b>
            <p>Elegante e editorial, mas a serifa distancia do lettering do logo e pesa em relatórios longos.</p>
          </div>
        </div>
      </Page>

      <Page eyebrow="05 · Hierarquia" title="Escala tipográfica para impresso e digital" tone="white">
        <div className="scale-wrap rv">
          <table className="scale">
            <thead>
              <tr>
                <th>Estilo</th>
                <th>Família · peso</th>
                <th>Impresso</th>
                <th>Digital</th>
                <th>Entrelinha</th>
                <th>Tracking</th>
                <th>Caixa</th>
                <th>Cor</th>
              </tr>
            </thead>
            <tbody>
              {SCALE.map(([n, f, w, pt, px, lh, tr, cx, cor, cls]) => (
                <tr key={n}>
                  <td>
                    <span className={`ts ts-${cls}`}>{n}</span>
                  </td>
                  <td>
                    {f}
                    <br />
                    <small>{w}</small>
                  </td>
                  <td>{pt}</td>
                  <td>{px}</td>
                  <td>{lh}</td>
                  <td>{tr}</td>
                  <td>{cx}</td>
                  <td>{cor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="note rv">
          Parágrafo: coluna ideal de 60 a 75 caracteres, alinhado à esquerda (nunca justificado em telas), sem recuo de primeira linha,
          espaço entre parágrafos igual a 0,75 da entrelinha.
        </p>
      </Page>

      <Page eyebrow="05 · Em uso" title="Hierarquia aplicada">
        <div className="specimens">
          <article className="spec-page rv" data-tilt>
            <p className="ts-kick">Relatório · Projeto FNO</p>
            <h3 className="ts-h1s">Estudo de viabilidade técnico-financeira</h3>
            <p className="ts-lead">Ampliação de unidade de beneficiamento de açaí em Castanhal (PA).</p>
            <div className="kpis">
              <div>
                <b className="ts-kpi tnum" data-count="18.4" data-dec="1">18,4</b>
                <span>% TIR estimada*</span>
              </div>
              <div>
                <b className="ts-kpi tnum" data-count="4.2" data-dec="1">4,2</b>
                <span>anos de payback*</span>
              </div>
            </div>
            <p className="ts-body">
              O estudo avalia a capacidade de pagamento do empreendimento em três cenários, considerando sazonalidade da safra, custos logísticos e
              capital de giro necessário.
            </p>
            <table className="mini-table tnum">
              <tbody>
                <tr><td>Investimento fixo</td><td>R$ 1.250.000,00</td></tr>
                <tr><td>Capital de giro</td><td>R$ 310.400,00</td></tr>
                <tr><td>Recursos próprios</td><td>R$ 280.000,00</td></tr>
              </tbody>
            </table>
            <p className="ts-foot">*Valores ilustrativos. Brasil Terra · Consultoria e Projetos de Viabilidade · p. 4</p>
          </article>
          <article className="spec-card rv" data-tilt>
            <p className="ts-kick light">Serviço</p>
            <h3>Projeto de crédito para agroindústria</h3>
            <p>Estruturamos o estudo técnico, econômico e financeiro que a instituição analisa, do diagnóstico ao protocolo.</p>
            <a className="btn" href="#tipografia">
              Fale com um consultor
            </a>
          </article>
        </div>
      </Page>

      <Page eyebrow="05 · Contingência" title="Quando a fonte da marca não está disponível" tone="white">
        <div className="fallback">
          {[
            ['Word, Excel e PowerPoint', 'Montserrat e Source Sans 3 instaladas (preferencial). Na ausência: Arial Bold (títulos) + Calibri (texto).'],
            ['E-mail e assinatura', 'Arial, Helvetica, sans-serif. Fontes web não são confiáveis em clientes de e-mail.'],
            ['SharePoint e Teams', 'Tema com Segoe UI (padrão do sistema). Logo e cores garantem o reconhecimento.'],
            ['Sistemas e formulários', 'system-ui, -apple-system, Segoe UI, Roboto, Arial.'],
          ].map(([t, d]) => (
            <div key={t} className="fb rv">
              <h4>{t}</h4>
              <p>{d}</p>
            </div>
          ))}
        </div>
        <h3 className="h3 rv">Usos incorretos</h3>
        <div className="typo-wrong">
          <div className="tw rv">
            <p style={{ transform: 'scaleX(1.4)', transformOrigin: 'left' }}>Viabilidade</p>
            <span>Distorcer</span>
          </div>
          <div className="tw rv">
            <p style={{ letterSpacing: '0.5em' }}>Viabilidade</p>
            <span>Tracking exagerado</span>
          </div>
          <div className="tw rv">
            <p>
              <span style={{ fontFamily: 'Georgia, serif' }}>Via</span>
              <span style={{ fontFamily: 'Courier New, monospace' }}>bili</span>
              <span>dade</span>
            </p>
            <span>Mais de 2 famílias</span>
          </div>
          <div className="tw rv">
            <p className="small-caps">ESTE TEXTO LONGO EM CAIXA-ALTA CANSA A LEITURA E PARECE UM AVISO OFICIAL</p>
            <span>Texto longo em caixa-alta</span>
          </div>
          <div className="tw rv">
            <p style={{ color: '#C9CDD4' }}>Viabilidade</p>
            <span>Contraste insuficiente</span>
          </div>
          <div className="tw rv">
            <p style={{ textShadow: '3px 3px 0 #FEBF26', fontStyle: 'italic' }}>Viabilidade</p>
            <span>Efeitos e falso itálico</span>
          </div>
        </div>
      </Page>
    </>
  );
}

import Logo from '../Logo';
import { Glebas, MockLabel } from './Scenes';

const P = {
  nome: 'Ana Ribeiro',
  cargo: 'Consultora de Projetos de Viabilidade',
  tel: '+55 91 98000-0000',
  mail: 'ana.ribeiro@brasilterra.com.br',
  site: 'brasilterra.com.br',
  end: 'Av. Exemplo, 1000 · Sala 1201 · Belém · PA · 66000-000',
};

export function BusinessCards() {
  return (
    <figure className="mock desk rv" data-tilt>
      <div className="desk-scene cards-scene">
        <div className="card3d back-c">
          <div className="bcard back">
            <Glebas tone="dark" className="bcard-pat" scale={0.5} />
            <div className="bcard-back-in">
              <b>{P.nome}</b>
              <span>{P.cargo}</span>
              <ul>
                <li>{P.tel}</li>
                <li>{P.mail}</li>
                <li>{P.site}</li>
              </ul>
            </div>
            <i className="bcard-bar" />
          </div>
        </div>
        <div className="card3d front-c">
          <div className="bcard front">
            <Logo />
          </div>
        </div>
        <div className="card3d stack-c">
          <div className="bcard front" />
        </div>
      </div>
      <MockLabel group="Papelaria" title="Cartão de visita · frente e verso" />
      <figcaption className="mock-spec">
        90 × 50 mm + 3 mm de sangria · couché fosco 350 g · 4/4 cores · frente com laminação fosca e verniz localizado no símbolo · margem de
        segurança 4 mm.
      </figcaption>
    </figure>
  );
}

export function LetterSet() {
  return (
    <figure className="mock desk rv" data-tilt>
      <div className="desk-scene letter-scene">
        <div className="sheet a4 letterhead">
          <div className="lh-top">
            <Logo />
            <i className="lh-strip" />
          </div>
          <p className="lh-date">Belém, 23 de outubro de 2026</p>
          <p className="lh-to">
            À Cooperativa Agroextrativista Exemplo
            <br />
            A/C Diretoria Executiva
          </p>
          <p className="lh-subj">Assunto: proposta de estudo de viabilidade técnico-financeira</p>
          {Array.from({ length: 9 }).map((_, i) => (
            <i key={i} className="lh-line" style={{ width: `${[96, 92, 98, 70, 94, 97, 88, 60, 40][i]}%` }} />
          ))}
          <div className="lh-foot">
            <span>{P.end}</span>
            <span>{P.site}</span>
          </div>
        </div>
        <div className="envelope dl">
          <div className="env-logo">
            <Logo layout="horizontal-sem-descritor" />
          </div>
          <i className="env-bar" />
          <span className="env-addr">{P.end}</span>
        </div>
        <div className="envelope saco">
          <Glebas tone="dark" className="env-pat" scale={0.7} />
          <div className="env-logo neg">
            <Logo scheme="negativa" />
          </div>
        </div>
      </div>
      <MockLabel group="Papelaria" title="Papel timbrado A4, envelope DL e envelope saco A4" />
      <figcaption className="mock-spec">
        Timbrado: A4, offset 90 g, 4/0, logo 55 mm a 15 mm das margens · Envelope DL 110 × 220 mm, offset 90 g · Envelope saco 240 × 340 mm,
        offset 120 g, 4/0 com fundo Azul Profundo e padrão glebas.
      </figcaption>
    </figure>
  );
}

export function Folder() {
  return (
    <figure className="mock desk rv" data-tilt>
      <div className="desk-scene folder-scene">
        <div className="folder open">
          <div className="folder-left">
            <Glebas tone="light" className="folder-pat" scale={0.6} />
            <p className="folder-quote">
              Viabilidade que vira
              <br />
              desenvolvimento.
            </p>
          </div>
          <div className="folder-right">
            <div className="folder-pocket">
              <Logo layout="horizontal-sem-descritor" />
              <span>Slot para cartão de visita</span>
            </div>
            <div className="folder-doc">
              <b>Proposta comercial</b>
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
        <div className="folder closed">
          <Glebas tone="dark" className="folder-pat" scale={0.6} />
          <div className="folder-logo">
            <Logo layout="vertical" scheme="negativa" />
          </div>
        </div>
      </div>
      <MockLabel group="Papelaria" title="Pasta institucional com bolso" />
      <figcaption className="mock-spec">
        Formato fechado 230 × 315 mm, lombada 5 mm, bolso interno de 100 mm com corte para cartão · cartão triplex 300 g, 4/1 cores, laminação
        fosca externa · planificação com faca especial enviada pela gráfica.
      </figcaption>
    </figure>
  );
}

export function EmailSignature() {
  return (
    <figure className="mock rv">
      <div className="mail-client">
        <div className="mail-head">
          <span>
            <b>Para:</b> financeiro@cliente-exemplo.com.br
          </span>
          <span>
            <b>Assunto:</b> Cronograma do projeto FNO · próximos passos
          </span>
        </div>
        <div className="mail-body">
          <p>Olá, Carlos.</p>
          <p>Segue o cronograma atualizado com as etapas do estudo e a lista de documentos pendentes. Qualquer dúvida, estou à disposição.</p>
          <p>Um abraço,</p>
          <table className="sig" role="presentation">
            <tbody>
              <tr>
                <td className="sig-logo">
                  <Logo layout="simbolo" />
                </td>
                <td className="sig-txt">
                  <b>{P.nome}</b>
                  <span>{P.cargo}</span>
                  <span className="sig-brand">BRASIL TERRA · Consultoria e Projetos de Viabilidade</span>
                  <span>
                    {P.tel} · <a href="#aplicacoes">{P.site}</a>
                  </span>
                  <span>Belém · PA</span>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="sig-legal">
            Esta mensagem pode conter informação confidencial. Se você a recebeu por engano, avise o remetente e apague-a. A Brasil Terra não
            garante aprovação de crédito: a decisão cabe exclusivamente à instituição financeira.
          </p>
        </div>
      </div>
      <MockLabel group="Papelaria digital" title="Assinatura de e-mail (HTML em tabelas, Arial)" />
      <figcaption className="mock-spec">
        Largura fixa 520 px, símbolo PNG hospedado de 64 px (2x para telas retina), apenas Arial/Helvetica, cores em HEX inline. Arquivo
        pronto: <a href="/downloads/05_Papelaria_Digital/assinatura_email.html">assinatura_email.html</a>.
      </figcaption>
    </figure>
  );
}

export function ReportProposal() {
  return (
    <figure className="mock desk rv" data-tilt>
      <div className="desk-scene report-scene">
        <div className="sheet a4 report-cover">
          <Glebas tone="dark" className="rc-pat" scale={0.55} />
          <div className="rc-in">
            <p className="rc-kick">Relatório técnico · Projeto FNO</p>
            <h4>Estudo de viabilidade técnico-financeira</h4>
            <p className="rc-sub">Ampliação de unidade de beneficiamento de açaí</p>
            <p className="rc-meta">Castanhal · PA · outubro de 2026 · versão para análise</p>
          </div>
          <div className="rc-logo">
            <Logo scheme="negativa" />
          </div>
        </div>
        <div className="sheet a4 report-page">
          <p className="rp-kick">03 · Resumo executivo</p>
          <h5>O projeto em números</h5>
          <div className="rp-kpis">
            <div>
              <b>18,4%</b>
              <span>TIR*</span>
            </div>
            <div>
              <b>4,2</b>
              <span>anos payback*</span>
            </div>
            <div>
              <b>1,56</b>
              <span>ICSD médio*</span>
            </div>
          </div>
          <svg viewBox="0 0 200 70" className="rp-chart">
            {[-30, -12, 6, 16, 24, 30, 34, 37].map((v, i) => (
              <rect key={i} x={6 + i * 24} width="16" y={v >= 0 ? 40 - v : 40} height={Math.abs(v)} fill={v >= 0 ? '#063E9B' : '#B5532C'} />
            ))}
            <line x1="0" x2="200" y1="40" y2="40" stroke="#9AA1AD" strokeWidth="0.6" />
          </svg>
          <div className="rp-box">
            <b>Parecer técnico</b>
            <span>Projeto apto a ser submetido à análise da instituição financeira, condicionado à regularização ambiental.</span>
          </div>
          <p className="rp-foot">*Valores ilustrativos · Brasil Terra · p. 7</p>
        </div>
        <div className="sheet a4 proposal">
          <i className="pr-bar" />
          <div className="pr-logo">
            <Logo />
          </div>
          <p className="pr-kick">Proposta comercial nº 0042/2026</p>
          <h4>Estruturação de projeto de crédito rural</h4>
          <p className="pr-for">Preparada para: Fazenda Exemplo Ltda.</p>
          <ul className="pr-steps">
            <li><b>01</b> Diagnóstico</li>
            <li><b>02</b> Estudo de mercado</li>
            <li><b>03</b> Projeções financeiras</li>
            <li><b>04</b> Montagem do dossiê</li>
          </ul>
        </div>
      </div>
      <MockLabel group="Documentos" title="Relatório técnico e proposta comercial" />
      <figcaption className="mock-spec">
        A4 retrato · capa em Azul Profundo com padrão glebas · miolo em Papel Terra · tabelas em Source Sans 3 com algarismos tabulares · caixa
        de parecer técnico com fio Amarelo Safra de 1,5 pt.
      </figcaption>
    </figure>
  );
}

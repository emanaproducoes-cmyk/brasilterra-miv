import { Chapter, Page } from '../ui';
import { BusinessCards, LetterSet, Folder, EmailSignature, ReportProposal } from '../mockups/Stationery';
import { SocialProfile, Posts, Story, Presentation, WebHeader } from '../mockups/Digital';
import { Placas, Uniformes, Tenda, EventMaterials } from '../mockups/Field';
import { Reception, InstitutionalWall, Facade, Signage } from '../mockups/Office';

const DISCLAIMER =
  'Mockups demonstrativos, desenhados em vetor para mostrar escala, hierarquia e aplicação correta da marca. Não constituem projeto executivo, orçamento, especificação de fabricação ou de instalação.';

export default function S08() {
  return (
    <>
      <Chapter
        id="aplicacoes"
        n="08"
        title="Aplicações"
        text="A marca em uso: papelaria, documentos, canais digitais, campo, obra, eventos e ambiente corporativo. Cada aplicação traz diretrizes de medida, material e hierarquia."
        items={['Papelaria e documentos', 'Comunicação digital', 'Campo, obra e eventos', 'Ambiente corporativo']}
      />

      <Page id="papelaria" eyebrow="08 · Papelaria" title="Papelaria e documentos" lead={DISCLAIMER}>
        <div className="mocks">
          <BusinessCards />
          <LetterSet />
          <Folder />
          <ReportProposal />
          <EmailSignature />
        </div>
      </Page>

      <Page id="digital" eyebrow="08 · Comunicação digital" title="Redes sociais, apresentações e site" tone="white">
        <div className="mocks">
          <SocialProfile />
          <Posts />
          <Story />
          <Presentation />
          <WebHeader />
        </div>
      </Page>

      <Page id="campo" eyebrow="08 · Campo, obra e eventos" title="Onde o projeto vira realidade">
        <div className="mocks">
          <Placas />
          <Uniformes />
          <Tenda />
          <EventMaterials />
        </div>
        <div className="table-wrap rv">
          <table className="spec wide">
            <thead>
              <tr>
                <th>Peça</th>
                <th>Dimensão usual</th>
                <th>Material</th>
                <th>Versão do logo</th>
                <th>Legibilidade</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Placa de obra</td><td>3,0 × 2,0 m</td><td>Lona 440 g ou ACM 3 mm em estrutura metálica</td><td>Horizontal negativa sobre Azul Profundo</td><td>Título ≥ 10 cm de caixa-alta</td></tr>
              <tr><td>Placa de identificação</td><td>1,0 × 1,5 m</td><td>ACM 3 mm, impressão UV</td><td>Vertical sem descritor, full color</td><td>Texto ≥ 4 cm</td></tr>
              <tr><td>Tenda</td><td>3 × 3 m</td><td>Lona em poliéster com estrutura sanfonada</td><td>Negativa / preta conforme fundo</td><td>Logo de testeira ≥ 1,60 m</td></tr>
              <tr><td>Wind banner</td><td>Pena 3,0 m</td><td>Tecido oxford sublimado</td><td>Vertical sem descritor</td><td>Logo ≥ 40 cm de largura</td></tr>
              <tr><td>Roll-up</td><td>0,85 × 2,0 m</td><td>Lona front-light ou poliéster</td><td>Vertical negativa</td><td>Conteúdo acima de 0,90 m</td></tr>
              <tr><td>Uniformes</td><td>Peito esquerdo</td><td>Bordado ou serigrafia</td><td>Sem descritor, mono ou negativa</td><td>Logo 70–80 mm</td></tr>
            </tbody>
          </table>
        </div>
      </Page>

      <Page id="ambiente" eyebrow="08 · Ambiente corporativo" title="Recepção, fachada e sinalização" tone="white">
        <div className="mocks">
          <Reception />
          <InstitutionalWall />
          <Facade />
          <Signage />
        </div>
      </Page>
    </>
  );
}

import Logo from '../Logo';
import { Glebas, MockLabel } from './Scenes';
import { Icon } from '../Icons';

export function Reception() {
  return (
    <figure className="mock rv">
      <div className="room reception">
        <div className="room-wall">
          <Glebas tone="dark" scale={0.9} className="wall-pat" />
          <div className="wall-logo letters3d">
            <Logo scheme="negativa" />
          </div>
          <i className="wall-light" />
        </div>
        <div className="room-floor" />
        <div className="desk-rec">
          <i className="desk-top" />
          <div className="desk-front">
            <span className="desk-strip" />
          </div>
        </div>
        <div className="plant" />
      </div>
      <MockLabel group="Ambiente corporativo" title="Recepção com letreiro em letras-caixa" />
      <figcaption className="mock-spec">
        Parede em pintura Azul Profundo com padrão glebas em adesivo vinílico tom sobre tom · logo negativo em letras-caixa de ACM/acrílico com 30 mm de
        espessura, afastado 20 mm da parede, iluminação indireta branca neutra (4000 K) · balcão em MDF Papel Terra com faixa Amarelo Safra.
      </figcaption>
    </figure>
  );
}

export function InstitutionalWall() {
  return (
    <figure className="mock rv">
      <div className="room iwall">
        <div className="room-wall light">
          <div className="iw-grid">
            <div className="iw-block b1">
              <span>Propósito</span>
              <b>Transformar projetos bem estruturados em desenvolvimento real.</b>
            </div>
            <div className="iw-block b2">
              <Logo layout="simbolo" scheme="branco" />
            </div>
            <div className="iw-block b3">
              <span>Valores</span>
              <ul>
                <li>Rigor técnico</li>
                <li>Transparência</li>
                <li>Proximidade</li>
                <li>Desenvolvimento</li>
                <li>Orgulho regional</li>
              </ul>
            </div>
            <div className="iw-block b4" />
          </div>
        </div>
        <div className="room-floor wood" />
        <div className="bench" />
      </div>
      <MockLabel group="Ambiente corporativo" title="Parede institucional" />
      <figcaption className="mock-spec">
        Composição modular que reproduz a lógica do símbolo: blocos com canais de 1x e um único canto arredondado. Impressão UV em ACM ou adesivo sobre
        parede lisa; altura de leitura entre 1,10 e 1,90 m.
      </figcaption>
    </figure>
  );
}

export function Facade() {
  return (
    <figure className="mock rv">
      <div className="facade-scene">
        <div className="sky" />
        <div className="building">
          <div className="fa-band">
            <div className="fa-logo">
              <Logo scheme="negativa" />
            </div>
          </div>
          <div className="fa-glass">
            {Array.from({ length: 4 }).map((_, i) => (
              <i key={i} />
            ))}
          </div>
          <div className="fa-door">
            <span className="door-sym">
              <Logo layout="simbolo" />
            </span>
          </div>
        </div>
        <div className="totem">
          <div className="totem-in">
            <Logo layout="vertical-sem-descritor" scheme="negativa" />
            <span>Consultoria e Projetos de Viabilidade</span>
            <i />
          </div>
        </div>
        <div className="sidewalk" />
      </div>
      <MockLabel group="Ambiente corporativo" title="Fachada com letreiro e totem" />
      <figcaption className="mock-spec">
        Fachada: faixa em ACM Azul Profundo, logo negativo em letras-caixa com iluminação interna em LED (amarelo e branco) · Totem dupla face 0,8 × 2,4 m
        com logo vertical · Verificar legislação municipal de publicidade exterior antes da produção.
      </figcaption>
    </figure>
  );
}

export function Signage() {
  return (
    <figure className="mock rv">
      <div className="signage-scene">
        <div className="sign-door">
          <div className="plaque">
            <b>Sala Meridiano</b>
            <span>Reuniões · 8 lugares</span>
            <i />
          </div>
          <div className="door" />
        </div>
        <div className="sign-dir">
          {[
            ['consultoria', 'Atendimento', '→'],
            ['documento', 'Projetos e análise', '←'],
            ['banco', 'Diretoria', '↑'],
          ].map(([i, t, a]) => (
            <div key={t} className="dir-row">
              <Icon name={i} size={22} />
              <span>{t}</span>
              <b>{a}</b>
            </div>
          ))}
        </div>
        <div className="sign-meeting">
          <div className="glass">
            <Glebas tone="line" scale={0.5} className="frost" />
            <div className="frost-band" />
            <div className="tv">
              <div className="tv-in">
                <Logo scheme="negativa" />
              </div>
            </div>
            <i className="table" />
          </div>
        </div>
      </div>
      <MockLabel group="Ambiente corporativo" title="Sinalização interna e sala de reunião" />
      <figcaption className="mock-spec">
        Placas de porta em acrílico 200 × 80 mm com fio Amarelo Safra · direcional com ícones da família oficial · película jateada no vidro da sala de
        reunião entre 1,00 e 1,60 m de altura, com padrão glebas em contorno. Salas batizadas com nomes da paleta (Meridiano, Safra, Floresta).
      </figcaption>
    </figure>
  );
}

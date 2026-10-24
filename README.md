# Brasil Terra · Manual de Identidade Visual (Next.js)

Manual de Identidade Visual, branding e linguagem da **Brasil Terra — Consultoria e Projetos de Viabilidade**, entregue como site em Next.js 14 (App Router), com efeitos, HTML e CSS.

Estrutura de tópicos inspirada no MIV de referência (Tratorzin): divisores escuros com numeral gigante, módulos 01–08 e aplicações. Conteúdo, conceito e sistema visual são próprios da Brasil Terra, conforme o briefing.

## Como rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # exportação estática na pasta /out (pode ser publicada em qualquer hospedagem)
```

Requisitos: Node.js 18.17 ou superior. As fontes estão na pasta `public/fonts` (sem depender do Google Fonts).

## Estrutura

```text
app/
  layout.tsx           metadados, idioma pt-BR
  page.tsx             montagem do manual
  globals.css          todo o design do manual (tokens, layout, mockups, efeitos, impressão)
components/
  Logo.tsx             vetor oficial do logo (5 arranjos × 6 versões)
  Icons.tsx            família de 24 ícones
  Effects.tsx          componente cliente que liga os efeitos
  ui.tsx               capítulos, páginas, regras faça/não faça, amostras de cor
  sections/            Capa, 01–08, complementos A–F e fechamento
  mockups/             cenas vetoriais de papelaria, digital, campo/obra/eventos e ambiente
lib/
  brand.ts             paleta + conversões RGB/HSL/CMYK + contraste WCAG (calculados)
  logoData.json        geometria do logo (símbolo e lettering em curvas)
  effects.js           efeitos em JavaScript puro
scripts/               geradores dos arquivos de entrega (Python + Playwright)
public/downloads/      pacote de arquivos (veja abaixo)
```

## Efeitos e interações

- Montagem animada do símbolo na capa (barra → bloco azul → bloco inferior → nome).
- Revelação ao rolar, parallax nos divisores, barra de progresso e sumário lateral com capítulo ativo.
- Malha construtiva com camadas que se ligam e desligam (malha, cotas, eixos, raio).
- Laboratório de fundos: arranjo, versão e fundo, com veredito permitido/proibido segundo as regras do capítulo 07.
- Clique em qualquer cor para copiar o HEX.
- Contadores animados, gráfico com barras que crescem, carrossel automático e inclinação 3D nos mockups.
- Checklist marcável, menu em gaveta no celular, respeito a `prefers-reduced-motion`.

## Pacote de arquivos (`public/downloads`)

| Pasta | Conteúdo |
|---|---|
| `02_Logo` | 30 combinações (horizontal, horizontal sem descritor, vertical, vertical sem descritor, símbolo × fullcolor, negativa, mono preto, mono branco, mono azul, tons de cinza), cada uma em **SVG, PDF vetorial, EPS** e **PNG transparente 512/1024/4096 px** |
| `03_Cores` | `tokens.css`, `tokens.json`, `paleta.gpl`, `paleta.ase`, folhas de amostras, tabela WCAG, escalas e paleta de dados em PNG |
| `04_Tipografia` | `tipografia.css`, links oficiais, fontes WOFF + licenças OFL, espécimes em PNG |
| `05_Papelaria_Digital` | `assinatura_email.html` (tabelas, Arial), símbolo 128 px, `BrasilTerra_modelo_relatorio.docx`, `BrasilTerra_modelo_apresentacao.pptx`, `BrasilTerra_modelo_fluxo_de_caixa.xlsx` (com fórmulas de VPL e TIR) |
| `07_Redes_Sociais` | avatares 400 × 400 (branco, Azul Profundo, Amarelo Safra), capa LinkedIn 1128 × 191, referência de posts |
| `08_Mockups` | 18 mockups em PNG (2x): papelaria, digital, campo/obra/eventos, ambiente corporativo |

Cada pasta também está compactada em `.zip` para download direto pelo site.

## Decisões principais

- **Conceito:** “Viabilidade que vira desenvolvimento.” O símbolo é lido como glebas vistas do alto, blocos construtivos e um “B” abstrato.
- **Unidade x:** largura do canal de respiro. Símbolo = 16x × 15x; logo horizontal = 51x × 15x; área de proteção = 3x.
- **Paleta:** Azul Meridiano `#063E9B`, Amarelo Safra `#FEBF26`, Preto Norte `#000000`; secundárias Azul Profundo, Verde Floresta, Terracota Terra, Céu Aberto e Âmbar Campo; 6 neutros, 4 funcionais e 8 cores de dados (separação mínima ΔE 16,2 em simulação de daltonismo).
- **Tipografia:** Montserrat (títulos, números) + Source Sans 3 (texto, tabelas). Ambas SIL OFL 1.1.

## Premissas adotadas

- Descritor corrigido de “&” para “E”: **CONSULTORIA E PROJETOS DE VIABILIDADE**, conforme a assinatura oficial do briefing.
- Sede em Belém (PA), domínio `brasilterra.com.br`, nomes, telefones e projetos são **marcadores ilustrativos**.
- Azul Profundo `#031B47` foi incluído na paleta como cor de fundo escuro do sistema.
- Tagline recomendada (opcional, nunca integrada ao logo): “Viabilidade que vira desenvolvimento.”

## Limitações (honestidade técnica)

- **Lettering:** reconstruído com Montserrat Bold (BRASIL TERRA) e Montserrat Medium (descritor), ajustados por busca de melhor encaixe e convertidos em curvas. É aproximação declarada; o símbolo coincide com o original dentro de 1 px (ver “Prova de sobreposição”, capítulo 03).
- **Formato .AI nativo não foi gerado.** SVG, PDF vetorial e EPS abrem no Illustrator.
- **CMYK** por conversão matemática (sem perfil ICC) e **Pantone** por aproximação visual: exigir prova de cor. Perfis sugeridos: ISO Coated v2 (FOGRA39) e PSO Uncoated (FOGRA47).
- **Mockups** são ilustrações vetoriais demonstrativas, não fotomontagens, nem projeto executivo.
- **PDF paginado do manual (40–60 páginas) não foi entregue.** O manual é o site; a folha de impressão do navegador (Ctrl+P) gera apenas um rascunho em 16:9.
- `paleta.ase` foi gerada por script conforme a especificação pública e validada por leitura de volta; testar a importação no Illustrator.
- Nenhum logotipo de terceiros (BASA, FNO, governo) foi usado; a placa de obra traz área reservada como marcador.

## Próximos passos recomendados

1. Prova de cor contratual em gráfica (couché e offset) para azul e amarelo.
2. Pesquisa de anterioridade e pedido de registro da marca no INPI.
3. Sessão de fotos conforme o briefing do capítulo D.
4. Diagramar a versão PDF do manual para fornecedores.
5. Implantar os modelos .docx/.pptx/.xlsx no SharePoint e treinar a equipe.
6. Confirmar com cada instituição financeira as exigências para placas de obra.

## Licenças

Montserrat (Julieta Ulanovsky e colaboradores) e Source Sans 3 (Adobe) sob SIL Open Font License 1.1, licenças em `public/fonts`.

// Sistema cromático Brasil Terra — fonte única de verdade.
// Todas as conversões (RGB, HSL, CMYK) e razões de contraste são CALCULADAS aqui,
// nunca digitadas à mão. Pantone é correspondência visual aproximada (validar com prova).

export type Swatch = {
  id: string;
  name: string;
  hex: string;
  role: string;
  why?: string;
  pantone?: string;
  onColor?: string; // cor de texto recomendada sobre o swatch
};

export const primary: Swatch[] = [
  {
    id: 'azul-meridiano',
    name: 'Azul Meridiano',
    hex: '#063E9B',
    role: 'Cor institucional. Confiança, rigor técnico, linguagem bancária.',
    why: 'Meridiano é a linha que organiza o globo: medida, orientação e alcance global, como a “Terra” do nome.',
    pantone: 'PANTONE 293 C · 293 U (aprox.)',
    onColor: '#FFFFFF',
  },
  {
    id: 'amarelo-safra',
    name: 'Amarelo Safra',
    hex: '#FEBF26',
    role: 'Energia de prosperidade. Acentos, destaques, divisores e chamadas.',
    why: 'Safra é o resultado de um projeto bem plantado: o crédito que vira produção.',
    pantone: 'PANTONE 123 C · 115 U (aprox.)',
    onColor: '#000000',
  },
  {
    id: 'preto-norte',
    name: 'Preto Norte',
    hex: '#000000',
    role: 'Lettering do logo, textos e números. Solidez e autoridade.',
    why: 'O Norte é ponto de referência e também a região de origem da marca.',
    pantone: 'PANTONE Black 6 C · Process Black U (aprox.)',
    onColor: '#FFFFFF',
  },
];

export const secondary: Swatch[] = [
  {
    id: 'azul-profundo',
    name: 'Azul Profundo',
    hex: '#031B47',
    role: 'Fundos escuros, capas e divisores de capítulo.',
    why: 'Extensão grave do Azul Meridiano: dá sobriedade sem recorrer ao preto puro.',
    pantone: 'PANTONE 2768 C (aprox.)',
    onColor: '#FFFFFF',
  },
  {
    id: 'verde-floresta',
    name: 'Verde Floresta',
    hex: '#0E5A3C',
    role: 'Produtividade, sustentabilidade, indicadores positivos de projeto.',
    why: 'A floresta em pé e o campo produtivo da Amazônia Legal, num verde profundo e sem clichê de folha.',
    pantone: 'PANTONE 7729 C (aprox.)',
    onColor: '#FFFFFF',
  },
  {
    id: 'terracota-terra',
    name: 'Terracota Terra',
    hex: '#B5532C',
    role: 'O solo. Capas setoriais (rural, agroindústria), ilustração e dados.',
    why: 'É a “Terra” literal do nome: solo que produz, tijolo que constrói.',
    pantone: 'PANTONE 7592 C (aprox.)',
    onColor: '#FFFFFF',
  },
  {
    id: 'ceu-aberto',
    name: 'Céu Aberto',
    hex: '#7DB3E8',
    role: 'Fundos leves, gráficos, estados de informação, áreas de respiro.',
    why: 'Horizonte amplo, visão de futuro. Suaviza a densidade do Azul Meridiano.',
    pantone: 'PANTONE 284 C (aprox.)',
    onColor: '#031B47',
  },
  {
    id: 'ambar-campo',
    name: 'Âmbar Campo',
    hex: '#D9890B',
    role: 'Variante quente do Amarelo Safra para textos grandes, ícones e dados.',
    why: 'Luz de fim de tarde no campo. Mantém a energia do amarelo com mais peso visual.',
    pantone: 'PANTONE 7563 C (aprox.)',
    onColor: '#000000',
  },
];

export const neutrals: Swatch[] = [
  { id: 'grafite-rio', name: 'Grafite Rio', hex: '#262A33', role: 'Texto corrido em telas e documentos longos.', onColor: '#FFFFFF' },
  { id: 'grafite-claro', name: 'Grafite Claro', hex: '#4B5260', role: 'Texto secundário, legendas, rótulos.', onColor: '#FFFFFF' },
  { id: 'cinza-nevoa', name: 'Cinza Névoa', hex: '#9AA1AD', role: 'Linhas, eixos, elementos desabilitados. Nunca para texto.', onColor: '#000000' },
  { id: 'bruma', name: 'Bruma', hex: '#E4E7EC', role: 'Divisores, bordas, fundos de tabela zebrada.', onColor: '#000000' },
  { id: 'papel-terra', name: 'Papel Terra', hex: '#F6F4EE', role: 'FUNDO PADRÃO de documentos, relatórios e apresentações.', onColor: '#000000' },
  { id: 'branco', name: 'Branco', hex: '#FFFFFF', role: 'Fundo do logo full color, papelaria, formulários.', onColor: '#000000' },
];

export const functional: Swatch[] = [
  { id: 'sucesso', name: 'Sucesso', hex: '#1F7A4D', role: 'Indicador viável, etapa concluída, validação.', onColor: '#FFFFFF' },
  { id: 'alerta', name: 'Alerta', hex: '#A35F00', role: 'Atenção, pendência documental, risco moderado.', onColor: '#FFFFFF' },
  { id: 'erro', name: 'Erro', hex: '#B3261E', role: 'Inviável, erro de formulário, risco alto.', onColor: '#FFFFFF' },
  { id: 'info', name: 'Informação', hex: '#1F5FBF', role: 'Notas, dicas, links e avisos neutros.', onColor: '#FFFFFF' },
];

// Paleta de dados: ordem pensada para máxima distinção (matiz + luminância alternadas).
export const dataviz: Swatch[] = [
  { id: 'd1', name: 'Dado 1 · Meridiano', hex: '#063E9B', role: 'Série principal / cenário base' },
  { id: 'd2', name: 'Dado 2 · Âmbar', hex: '#D9890B', role: 'Série comparativa' },
  { id: 'd3', name: 'Dado 3 · Céu', hex: '#7DB3E8', role: 'Projeção / cenário otimista' },
  { id: 'd4', name: 'Dado 4 · Floresta', hex: '#0E5A3C', role: 'Receita / resultado' },
  { id: 'd5', name: 'Dado 5 · Terracota', hex: '#B5532C', role: 'Custo / despesa' },
  { id: 'd6', name: 'Dado 6 · Ametista', hex: '#8E5BA8', role: 'Série complementar' },
  { id: 'd7', name: 'Dado 7 · Ardósia', hex: '#5F6B7A', role: 'Referência / média do setor' },
  { id: 'd8', name: 'Dado 8 · Safra', hex: '#FEBF26', role: 'Destaque pontual (máx. 1 por gráfico)' },
];

// ---------- conversões ----------
export function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)) as [number, number, number];
}
export function rgbToHsl([r, g, b]: number[]): [number, number, number] {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
  }
  return [Math.round(h), Math.round(s * 100), Math.round(l * 100)];
}
// Conversão matemática RGB→CMYK (sem perfil ICC). Valores de partida para a gráfica.
export function rgbToCmyk([r, g, b]: number[]): [number, number, number, number] {
  const rr = r / 255, gg = g / 255, bb = b / 255;
  const k = 1 - Math.max(rr, gg, bb);
  if (k >= 1) return [0, 0, 0, 100];
  const c = (1 - rr - k) / (1 - k), m = (1 - gg - k) / (1 - k), y = (1 - bb - k) / (1 - k);
  return [c, m, y, k].map((v) => Math.round(v * 100)) as [number, number, number, number];
}
function lin(c: number) {
  c /= 255;
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}
export function luminance(hex: string) {
  const [r, g, b] = hexToRgb(hex);
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}
export function contrast(a: string, b: string) {
  const la = luminance(a), lb = luminance(b);
  const [hi, lo] = la > lb ? [la, lb] : [lb, la];
  return (hi + 0.05) / (lo + 0.05);
}
export function wcag(ratio: number) {
  if (ratio >= 7) return 'AAA';
  if (ratio >= 4.5) return 'AA';
  if (ratio >= 3) return 'AA grande';
  return 'Reprovado';
}
export function mix(hex: string, pct: number, base = '#FFFFFF') {
  const a = hexToRgb(hex), b = hexToRgb(base);
  const out = a.map((v, i) => Math.round(v * (pct / 100) + b[i] * (1 - pct / 100)));
  return '#' + out.map((v) => v.toString(16).padStart(2, '0')).join('').toUpperCase();
}
export function specs(hex: string) {
  const rgb = hexToRgb(hex);
  return { rgb, hsl: rgbToHsl(rgb), cmyk: rgbToCmyk(rgb) };
}

export const allSwatches = [...primary, ...secondary, ...neutrals, ...functional];

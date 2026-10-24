// Família de 24 ícones Brasil Terra
// Grade 24 × 24 px · área útil 20 × 20 (margem 2 px) · traço 1,75 px · terminais retos · cantos vivos,
// com no máximo um canto arredondado (r = 3) por ícone, ecoando o símbolo.

export const ICONS: Record<string, { t: string; d: string }> = {
  viabilidade: { t: 'Viabilidade', d: 'M3 21V12h4v9M10 21V8h4v13M17 21V3h1a3 3 0 0 1 3 3v15M2 21h20' },
  credito: { t: 'Crédito', d: 'M2 6h17a3 3 0 0 1 3 3v9H2zM2 10h20M6 14h4M15 14h3' },
  projeto: { t: 'Projeto', d: 'M4 3h10l5 5v13H4zM14 3v5h5M8 12h7M8 16h7' },
  rural: { t: 'Rural', d: 'M2 20h20M4 20V10l6-5 6 5v10M10 20v-5h3a3 3 0 0 1 3 3M18 20v-6h4v6' },
  industria: { t: 'Indústria', d: 'M2 21V10l5 3V10l5 3V10l5 3V3h3a2 2 0 0 1 2 2v16zM6 17h2M11 17h2M16 17h2' },
  agroindustria: { t: 'Agroindústria', d: 'M3 21V11h6v10M9 15l6-4v4l6-4v10H3M6 11V6a3 3 0 0 1 3-3h0M14 18h2M18 18h1' },
  comercio: { t: 'Comércio e serviços', d: 'M3 9l2-6h14l2 6M3 9h18v3a3 3 0 0 1-3 3H3zM5 15v6h14v-6M10 21v-4h4v4' },
  cooperativa: { t: 'Cooperativas', d: 'M8 8a3 3 0 1 0 0-.01M16 8a3 3 0 1 0 0-.01M2 20v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3M14 13h4a4 4 0 0 1 4 4v3' },
  empreendedor: { t: 'Empreendedor', d: 'M12 9a4 4 0 1 0 0-.01M4 21v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2M16 3l3-1v4' },
  banco: { t: 'Instituição financeira', d: 'M2 9l10-6 10 6zM4 9v9M9 9v9M15 9v9M20 9v9M2 21h20M2 18h20' },
  fluxo: { t: 'Fluxo de caixa', d: 'M3 7h15l-3-3M21 17H6l3 3M3 7v4M21 17v-4' },
  grafico: { t: 'Indicadores', d: 'M3 3v18h18M7 16l4-5 3 3 6-8M16 6h4v4' },
  calendario: { t: 'Cronograma', d: 'M3 5h15a3 3 0 0 1 3 3v13H3zM3 10h18M8 3v4M16 3v4M7 14h3M14 14h3M7 18h3' },
  documento: { t: 'Documentação', d: 'M6 2h9a3 3 0 0 1 3 3v17H6zM9 7h6M9 11h6M9 15h4M3 6v16h12' },
  contrato: { t: 'Contrato', d: 'M4 3h13v9M4 3v18h8M8 8h6M8 12h4M14 21l2-5 5-5 2 2-5 5z' },
  localizacao: { t: 'Localização', d: 'M12 22s7-7 7-12a7 7 0 0 0-14 0c0 5 7 12 7 12zM12 7v6M9 10h6' },
  territorio: { t: 'Território', d: 'M2 5l6-2 8 3 6-2v15l-6 2-8-3-6 2zM8 3v15M16 6v15' },
  sustentabilidade: { t: 'Sustentabilidade', d: 'M12 21V11M12 11c0-5 4-8 9-8 0 5-3 9-9 9zM12 15c0-3-3-6-8-6 0 4 3 7 8 7M5 21h14' },
  maquina: { t: 'Máquinas e equipamentos', d: 'M7 18a3 3 0 1 0 0-.01M18 18a2 2 0 1 0 0-.01M3 15V9h7l2 4h6a3 3 0 0 1 3 3M5 9V5h5v4M10 18h6' },
  obra: { t: 'Obra e construção', d: 'M3 21h18M5 21V9h6v12M11 13h8v8M8 13v2M15 17v2M3 9l5-6 5 6M17 13V6h3' },
  consultoria: { t: 'Consultoria', d: 'M3 4h13a3 3 0 0 1 3 3v6H9l-4 4v-4H3zM21 10v9h-2v3l-3-3h-5' },
  prazo: { t: 'Prazos', d: 'M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM12 9v4l3 2M9 2h6' },
  seguranca: { t: 'Segurança', d: 'M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5zM8.5 12l2.5 2.5 4.5-5' },
  crescimento: { t: 'Desenvolvimento', d: 'M3 21h18M5 21v-6h4v6M10 21V11h4v10M15 21V7h1a3 3 0 0 1 3 3v11M4 10l6-6 3 3 6-5' },
};

export function Icon({ name, size = 32, className }: { name: string; size?: number; className?: string }) {
  const i = ICONS[name];
  if (!i) return null;
  return (
    <svg className={['icon', className].filter(Boolean).join(' ')} viewBox="0 0 24 24" width={size} height={size} role="img" aria-label={i.t}>
      <path d={i.d} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  );
}

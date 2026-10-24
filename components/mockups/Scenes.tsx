import React from 'react';

let uid = 0;
const nid = (p: string) => `${p}${++uid}`;

// Paisagem vetorial (substitui fotografia nos mockups demonstrativos): céu, horizonte e talhões em perspectiva.
export function Landscape({ dusk }: { dusk?: boolean }) {
  const sky = nid('sky');
  const fld = nid('fld');
  return (
    <svg className="landscape" viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={sky} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={dusk ? '#1B2E5C' : '#5E93CF'} />
          <stop offset="0.65" stopColor={dusk ? '#E59A4A' : '#BFD8EE'} />
          <stop offset="1" stopColor={dusk ? '#F6C778' : '#E9EFE6'} />
        </linearGradient>
        <linearGradient id={fld} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5C7B3A" />
          <stop offset="1" stopColor="#2F4A1E" />
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill={`url(#${sky})`} />
      <ellipse cx="610" cy="250" rx="60" ry="60" fill={dusk ? '#FFD98A' : '#FFFFFF'} opacity={dusk ? 0.9 : 0.35} />
      <path d="M0 262 Q120 244 220 256 T430 250 T640 246 T800 254 V300 H0Z" fill="#3F5F35" opacity="0.75" />
      {Array.from({ length: 34 }).map((_, i) => (
        <ellipse key={i} cx={i * 25 + ((i * 37) % 13)} cy={258 - ((i * 53) % 9)} rx={14 + ((i * 7) % 8)} ry={10 + ((i * 11) % 7)} fill="#2E4A2A" opacity="0.9" />
      ))}
      <rect y="266" width="800" height="184" fill={`url(#${fld})`} />
      {Array.from({ length: 26 }).map((_, i) => {
        const x = -400 + i * 64;
        return <path key={i} d={`M${400 + (x - 400) * 0.08} 266 L${x} 450`} stroke="#8DA35B" strokeOpacity="0.35" strokeWidth="2" />;
      })}
      <path d="M0 300 L800 292 L800 296 L0 305Z" fill="#B5532C" opacity="0.5" />
      <path d="M330 450 L392 266 L408 266 L470 450Z" fill="#9C7A55" opacity="0.55" />
    </svg>
  );
}

// Padrão "glebas": derivado da modularidade do símbolo (blocos + canais + um único canto arredondado)
export function Glebas({ tone = 'dark', className, scale = 1 }: { tone?: 'dark' | 'light' | 'yellow' | 'line'; className?: string; scale?: number }) {
  const id = nid('gl');
  const C = {
    dark: ['#06286A', '#063E9B', '#0A3380'],
    light: ['#ECE8DE', '#E4E7EC', '#EFEBE2'],
    yellow: ['#FEBF26', '#F4B21A', '#FFD25E'],
    line: ['none', 'none', 'none'],
  }[tone];
  const st = tone === 'line' ? { stroke: '#FEBF26', strokeWidth: 1.5, strokeOpacity: 0.45 } : {};
  const s = 20 * scale;
  return (
    <svg className={['glebas', className].filter(Boolean).join(' ')} aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id={id} width={34 * s} height={32 * s} patternUnits="userSpaceOnUse">
          <g {...st}>
            <rect x={0} y={0} width={3.6 * s} height={15 * s} fill={C[0]} />
            <path d={`M${4.6 * s} 0 H${13.3 * s} A${2.7 * s} ${2.7 * s} 0 0 1 ${16 * s} ${2.7 * s} V${7 * s} H${4.6 * s}Z`} fill={C[1]} />
            <rect x={4.6 * s} y={8 * s} width={11.4 * s} height={7 * s} fill={C[2]} />
            <rect x={17 * s} y={0} width={11.4 * s} height={7 * s} fill={C[2]} />
            <rect x={29.4 * s} y={0} width={3.6 * s} height={15 * s} fill={C[1]} />
            <rect x={17 * s} y={8 * s} width={11.4 * s} height={7 * s} fill={C[0]} />
            <rect x={0} y={16 * s} width={11.4 * s} height={7 * s} fill={C[2]} />
            <rect x={12.4 * s} y={16 * s} width={3.6 * s} height={15 * s} fill={C[0]} />
            <rect x={0} y={24 * s} width={11.4 * s} height={7 * s} fill={C[1]} />
            <rect x={17 * s} y={16 * s} width={16 * s} height={7 * s} fill={C[1]} />
            <rect x={17 * s} y={24 * s} width={7.2 * s} height={7 * s} fill={C[0]} />
            <rect x={25.2 * s} y={24 * s} width={7.8 * s} height={7 * s} fill={C[2]} />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

export function Phone({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={['phone', className].filter(Boolean).join(' ')}>
      <div className="phone-notch" />
      <div className="phone-screen">{children}</div>
    </div>
  );
}

export function Browser({ url, children, className }: { url: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={['browser', className].filter(Boolean).join(' ')}>
      <div className="browser-bar">
        <i />
        <i />
        <i />
        <span>{url}</span>
      </div>
      <div className="browser-body">{children}</div>
    </div>
  );
}

export function Laptop({ children }: { children: React.ReactNode }) {
  return (
    <div className="laptop">
      <div className="laptop-screen">{children}</div>
      <div className="laptop-base" />
    </div>
  );
}

export function MockLabel({ group, title }: { group: string; title: string }) {
  return (
    <p className="mock-label">
      <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
        <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4.8 8.2l2.1 2 4.3-4.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
      <b>{group}</b>
      <span>{title}</span>
    </p>
  );
}

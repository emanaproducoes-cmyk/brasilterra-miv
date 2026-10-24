import React from 'react';
import { specs, contrast, wcag } from '../lib/brand';

type Kids = { children?: React.ReactNode };

// Página de abertura de capítulo (inspirada nos divisores escuros com numeral gigante)
export function Chapter({ id, n, title, text, items }: { id: string; n: string; title: string; text: string; items?: string[] }) {
  return (
    <section className="chapter" id={id} aria-labelledby={`${id}-t`}>
      <div className="chapter-pattern" aria-hidden="true" data-parallax="0.12" />
      <div className="chapter-in">
        <p className="chapter-kicker rv" id={`${id}-t`}>{title}</p>
        <div className="chapter-num rv" aria-hidden="true">
          {n}
          <span>.</span>
        </div>
        <p className="chapter-text rv">{text}</p>
        {items && (
          <ul className="chapter-items rv">
            {items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="chapter-bar" aria-hidden="true" />
    </section>
  );
}

// Página de conteúdo
export function Page({
  id,
  eyebrow,
  title,
  lead,
  dark,
  tone,
  children,
}: Kids & { id?: string; eyebrow: string; title: string; lead?: React.ReactNode; dark?: boolean; tone?: 'white' | 'blue' }) {
  return (
    <section className={['page', dark ? 'dark' : '', tone ? `tone-${tone}` : ''].join(' ')} id={id}>
      <div className="page-in">
        <header className="page-head rv">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          {lead && <p className="lead">{lead}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}

export function Rules({ doList, dontList }: { doList: string[]; dontList: string[] }) {
  return (
    <div className="rules rv">
      <div className="rule do">
        <h4>
          <Check /> Faça
        </h4>
        <ul>
          {doList.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>
      <div className="rule dont">
        <h4>
          <Cross /> Não faça
        </h4>
        <ul>
          {dontList.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Check() {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
      <rect width="20" height="20" rx="4" fill="#1F7A4D" />
      <path d="M5 10.5l3.2 3L15 6.8" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="square" />
    </svg>
  );
}
export function Cross() {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
      <rect width="20" height="20" rx="4" fill="#B3261E" />
      <path d="M6 6l8 8M14 6l-8 8" stroke="#fff" strokeWidth="2.2" strokeLinecap="square" />
    </svg>
  );
}

export function SwatchCard({
  name,
  hex,
  role,
  why,
  pantone,
  big,
}: {
  name: string;
  hex: string;
  role: string;
  why?: string;
  pantone?: string;
  big?: boolean;
}) {
  const s = specs(hex);
  const onW = contrast(hex, '#FFFFFF');
  const onK = contrast(hex, '#000000');
  const best = onW >= onK ? '#FFFFFF' : '#000000';
  return (
    <article className={['swatch rv', big ? 'big' : ''].join(' ')}>
      <button className="swatch-chip" style={{ background: hex, color: best }} data-copy={hex} aria-label={`Copiar ${hex}`}>
        <span className="swatch-name">{name}</span>
        <span className="swatch-hex">{hex}</span>
        <span className="swatch-copy">copiar</span>
      </button>
      <dl className="swatch-specs">
        <div>
          <dt>RGB</dt>
          <dd>{s.rgb.join(' · ')}</dd>
        </div>
        <div>
          <dt>HSL</dt>
          <dd>
            {s.hsl[0]}° · {s.hsl[1]}% · {s.hsl[2]}%
          </dd>
        </div>
        <div>
          <dt>CMYK*</dt>
          <dd>{s.cmyk.join(' · ')}</dd>
        </div>
        {pantone && (
          <div>
            <dt>Pantone*</dt>
            <dd>{pantone.replace('PANTONE ', '')}</dd>
          </div>
        )}
        <div>
          <dt>Contraste</dt>
          <dd>
            <span>branco {onW.toFixed(2).replace('.', ',')}:1</span>
            <span>preto {onK.toFixed(2).replace('.', ',')}:1</span>
          </dd>
        </div>
      </dl>
      <p className="swatch-role">{role}</p>
      {why && <p className="swatch-why">{why}</p>}
    </article>
  );
}

export function ContrastCell({ fg, bg }: { fg: string; bg: string }) {
  const r = contrast(fg, bg);
  const g = wcag(r);
  return (
    <td className={`cc ${g === 'Reprovado' ? 'bad' : g === 'AA grande' ? 'mid' : 'ok'}`} style={{ background: bg, color: fg }}>
      <b>Aa</b>
      <span>
        {r.toFixed(2).replace('.', ',')} · {g}
      </span>
    </td>
  );
}

export function Figure({ caption, children, className }: Kids & { caption?: string; className?: string }) {
  return (
    <figure className={['fig rv', className].filter(Boolean).join(' ')}>
      {children}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export function Tag({ children }: Kids) {
  return <span className="tag">{children}</span>;
}

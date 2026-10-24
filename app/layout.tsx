import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Brasil Terra · Manual de Identidade Visual',
  description: 'Manual de Identidade Visual, branding e linguagem da Brasil Terra — Consultoria e Projetos de Viabilidade.',
  icons: { icon: '/favicon.svg' },
};

export const viewport: Viewport = { themeColor: '#031B47' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

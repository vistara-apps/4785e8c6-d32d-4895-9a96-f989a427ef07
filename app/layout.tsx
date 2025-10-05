import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'PortfolioAI - Your Crypto Copilot',
  description: 'AI-powered crypto portfolio tracker and advisor for Base users',
  keywords: ['crypto', 'portfolio', 'AI', 'Base', 'DeFi', 'blockchain'],
  authors: [{ name: 'PortfolioAI Team' }],
  openGraph: {
    title: 'PortfolioAI',
    description: 'Your crypto copilot that makes smart portfolio decisions simple',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PortfolioAI',
    description: 'Your crypto copilot that makes smart portfolio decisions simple',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#ffd700',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

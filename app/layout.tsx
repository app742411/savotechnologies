import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'SavoTech | Enterprise Software & Cloud Infrastructure Solutions',
  description: 'Enterprise Solution Architects and Systems Engineering firm. We build high-performance software, scale databases, and deploy secure hybrid cloud networks.',
  metadataBase: new URL('https://savotech.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased text-slate-200 bg-slate-950 flex flex-col min-h-screen" suppressHydrationWarning>
        {/* Cinematic Preloader */}
        <Preloader />

        {/* Skip Navigation Link for WCAG Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2.5 focus:rounded-lg focus:outline-none"
        >
          Skip to content
        </a>

        {/* Global Navigation bar */}
        <Navbar />

        {/* Main Content Area */}
        <main id="main-content" className="flex-grow">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}

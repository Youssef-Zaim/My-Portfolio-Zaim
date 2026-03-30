import type {Metadata} from 'next';
import { Poppins, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css'; // Global styles

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Youssef Zaim | Graphic Designer & Social Media Manager',
  description: 'Portfolio of Youssef Zaim, Graphic Designer and Social Media Manager based in Morocco.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${poppins.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="bg-[#050505] text-white font-poppins antialiased selection:bg-indigo-500/30" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

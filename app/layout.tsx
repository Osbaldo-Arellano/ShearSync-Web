// app/layout.tsx
import './globals.css';
import { inter, roboto, merriweather } from '@/fonts/font';

export const metadata = { title: 'ShearSync Builder' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto.variable} ${merriweather.variable}`}
    >
      <body className="bg-neutral-950 text-white">{children}</body>
    </html>
  );
}

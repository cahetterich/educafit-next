// app/layout.jsx
import './globals.css';
import Navbar from '../components/layout/Navbar';
import ConditionalFooter from '../components/layout/ConditionalFooter';
import LocaleProvider from '../components/providers/LocaleProvider';
import { cookies } from 'next/headers';

export const metadata = {
  title: 'EducaFit',
  description: 'Movimento, jogo e aprendizado para escolas',
};

export default function RootLayout({ children }) {
  const cookieStore = cookies();
  const initialLocale = cookieStore.get('eduLocale')?.value || 'pt-BR';
  const initialTheme = cookieStore.get('eduTheme')?.value === 'dark' ? 'dark' : 'light';

  return (
    <html lang={initialLocale === 'en' ? 'en' : 'pt-BR'} className={initialTheme === 'dark' ? 'dark' : ''}>
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1F6FEB" />
      </head>
      <body>
        <LocaleProvider initialLocale={initialLocale}>
          <Navbar />
          <main className="container-edu py-4">{children}</main>
          <ConditionalFooter />
        </LocaleProvider>
      </body>
    </html>
  );
}

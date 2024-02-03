import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import './globals.css';
const roboto_mono = Roboto_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WellGithub',
  description: "The search engine for Github's users",
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png'],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto_mono.className}>{children}</body>
    </html>
  );
}

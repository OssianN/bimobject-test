import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BIMobject for manufacturers | BIMobject',
  description:
    'Join the global marketplace for building products - Reach, influence, and understand the world of building designers on bimobject.com.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} p-8 md:p-24`}>{children}</body>
    </html>
  );
}

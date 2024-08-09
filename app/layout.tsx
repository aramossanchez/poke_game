import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import '../styles/variables.css';

const poppins = Poppins({ 
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "PokeApp",
  description: "Poke API Gamified!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}

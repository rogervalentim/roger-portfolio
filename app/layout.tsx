import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Roger valentim",
  description: "Portfólio profissional"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable}  antialiased bg-[#000319]`}>
        {children}
      </body>
    </html>
  );
}

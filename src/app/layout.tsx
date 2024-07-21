import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

export const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fausto Fedele",
  description: "Fausto Fedele portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={nunito.className}>{children}</body>
    </html>
  );
}

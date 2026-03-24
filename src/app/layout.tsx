import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import { Navbar } from "../cross-site/ui/Navbar";
import "./globals.css";
import { ServerProviders } from "../cross-site/providers/ServerProviders";
import { ClientProviders } from "../cross-site/providers/ClientProviders";
import { cn } from "@/lib/utils";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fausto Fedele",
  description: "Fausto Fedele's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", figtree.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ServerProviders>
          <ClientProviders>
            <Navbar />
            {children}
          </ClientProviders>
        </ServerProviders>
      </body>
    </html>
  );
}

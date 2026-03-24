import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Navbar } from "../cross-site/ui/Navbar";
import "./globals.css";
import { ServerProviders } from "../cross-site/providers/ServerProviders";
import { ClientProviders } from "../cross-site/providers/ClientProviders";
import { cn } from "@/lib/utils";
import { MobileSettingsButton } from "@/cross-site/ui/Navbar/Mobile/MobileSettingsButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

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
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
      suppressHydrationWarning
    >
      <body className="flex flex-col justify-center items-center">
        <ServerProviders>
          <ClientProviders>
            <Navbar />
            <MobileSettingsButton />
            <main className="mb-(--mobile-nav-height) sm:mb-[unset] p-3 max-w-7xl">
              {children}
            </main>
          </ClientProviders>
        </ServerProviders>
      </body>
    </html>
  );
}

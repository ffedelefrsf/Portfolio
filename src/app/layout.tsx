import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { ClientProviders } from "@/cross-site/providers/ClientProviders";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

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
      <body
        className={cn(
          "flex",
          "flex-col",
          "justify-start",
          "items-center",
          "min-h-full",
        )}
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://faustofedele.com"),
  title: {
    default: "Fausto Fedele",
    template: "%s | Fausto Fedele",
  },
  description:
    "Senior Software Engineer with 7+ years of experience shipping products across fintech, health, sports and more.",
  authors: [{ name: "Fausto Fedele" }],
  creator: "Fausto Fedele",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Fausto Fedele",
    title: "Fausto Fedele — Senior Software Engineer",
    description:
      "Senior Software Engineer with 7+ years of experience shipping products across fintech, health, sports and more.",
    locale: "en_US",
    alternateLocale: ["es_AR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fausto Fedele — Senior Software Engineer",
    description:
      "Senior Software Engineer with 7+ years of experience shipping products across fintech, health, sports and more.",
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
};

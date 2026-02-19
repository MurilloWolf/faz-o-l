import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://fazol.news";
const siteName = "Faz o L News";
const siteDescription =
  "Acompanhe as principais notícias sobre política brasileira, economia e os escândalos do governo federal. Análises e reportagens atualizadas diariamente.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} – Notícias sobre política brasileira`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "política brasileira",
    "notícias brasil",
    "governo federal",
    "PT",
    "Lula",
    "Banco Master",
    "STF",
    "escândalo político",
    "economia brasil",
    "corrupção",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1 },
  },
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    locale: "pt_BR",
    siteName,
    title: `${siteName} – Notícias sobre política brasileira`,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} – Notícias sobre política brasileira`,
    description: siteDescription,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsMediaOrganization",
  name: siteName,
  url: siteUrl,
  description: siteDescription,
  inLanguage: "pt-BR",
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}

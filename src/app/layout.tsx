import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Faz o L filho da puta!",
  description:
    "Um site desenhado para expor todos os impostos e taxas que o Lula e o Haddad criaram.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG || ""} />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANLITYC || ""} />
      <body className={"bg-slate-50 " + inter.className}>{children}</body>
    </html>
  );
}

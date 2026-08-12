import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { I18nProvider } from "@/i18n/context";
import { WebsiteJsonLd } from "@/components/JsonLd";
import "./globals.css";

const GA_ID = "G-GRL00BF75N";

const SITE_URL = "https://legalredflag.org";

export const metadata: Metadata = {
  title: {
    default: "Legal Red Flags: 36 Warning Signs of Bad Lawyers & Legal Traps",
    template: "%s — Legal Red Flags",
  },
  description:
    "Spot the real warning signs of attorney traps — from personal account payments to ghosting. Non-profit database based on real cases, not theory.",
  keywords: [
    "legal red flags",
    "lawyer red flags",
    "bad lawyer warning signs",
    "lawyer fraud",
    "legal scam prevention",
    "legal checklist",
    "attorney misconduct",
    "法律防骗",
    "律师欺诈",
    "法律维权",
    "弁護士 詐欺",
  ],
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN", "ja_JP"],
    siteName: "Legal Red Flags",
    title: "Legal Red Flags: 36 Warning Signs of Bad Lawyers & Legal Traps",
    description:
      "Spot the real warning signs of attorney traps — from personal account payments to ghosting. Non-profit database based on real cases, not theory.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Red Flags: 36 Warning Signs of Bad Lawyers & Legal Traps",
    description:
      "Spot the real warning signs of attorney traps — from personal account payments to ghosting. Non-profit database based on real cases, not theory.",
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
      </head>
      <body className="min-h-full">
        <WebsiteJsonLd />
        <I18nProvider>{children}</I18nProvider>
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { I18nProvider } from "@/i18n/context";
import { WebsiteJsonLd } from "@/components/JsonLd";
import "./globals.css";

const SITE_URL = "https://legalredflag.org";

export const metadata: Metadata = {
  title: {
    default: "Legal Red Flags — 法律防骗指南",
    template: "%s — Legal Red Flags",
  },
  description:
    "A structured knowledge platform helping ordinary people spot red flags in legal disputes. 帮助普通人识别法律纠纷中危险信号的结构化知识平台。",
  keywords: [
    "legal red flags",
    "lawyer fraud",
    "legal scam prevention",
    "legal checklist",
    "法律防骗",
    "律师欺诈",
    "法律维权",
    "法律检查清单",
  ],
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN", "ja_JP"],
    siteName: "Legal Red Flags",
    title: "Legal Red Flags — 法律防骗指南",
    description:
      "36 structured warning signals from real cases — spot fraud in legal disputes. 36条结构化预警信号，来自真实案例。",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Red Flags — 法律防骗指南",
    description:
      "36 structured warning signals from real cases — spot fraud in legal disputes. 36条结构化预警信号，来自真实案例。",
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
      <body className="min-h-full">
        <WebsiteJsonLd />
        <I18nProvider>{children}</I18nProvider>
        <Analytics />
      </body>
    </html>
  );
}

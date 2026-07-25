import type { Metadata } from "next";
import { I18nProvider } from "@/i18n/context";
import "./globals.css";

export const metadata: Metadata = {
  title: "Legal Red Flags — 法律防骗指南",
  description:
    "帮助普通人识别法律纠纷中危险信号的结构化知识平台。所有内容来自有证据支撑的真实案例。",
  keywords: [
    "法律防骗",
    "律师欺诈",
    "legal red flags",
    "lawyer fraud",
    "法律维权",
    "法律检查清单",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}

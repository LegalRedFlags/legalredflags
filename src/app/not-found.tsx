"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n/context";

export default function NotFound() {
  const { t } = useI18n();

  return (
    <>
      <Navbar />
      <section className="max-w-[960px] mx-auto px-7 py-32 text-center">
        <div className="font-serif text-[72px] font-bold text-[var(--red)] mb-4">
          404
        </div>
        <h1 className="font-serif text-[24px] font-bold mb-3">
          {t({ zh: "页面未找到", en: "Page Not Found", ja: "ページが見つかりません" })}
        </h1>
        <p className="text-[16px] text-[var(--grey)] mb-8 max-w-[400px] mx-auto">
          {t({
            zh: "你访问的页面不存在或已被移动。",
            en: "The page you're looking for doesn't exist or has been moved.",
            ja: "お探しのページは存在しないか、移動された可能性があります。",
          })}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/"
            className="px-6 py-2.5 bg-[var(--ink)] text-[var(--ground)] text-[14px] font-semibold no-underline hover:opacity-90 transition-opacity"
          >
            {t({ zh: "返回首页", en: "Back to Home", ja: "ホームに戻る" })}
          </Link>
          <Link
            href="/flags"
            className="px-6 py-2.5 border border-[var(--rule)] text-[var(--ink-soft)] text-[14px] font-semibold no-underline hover:border-[var(--grey)] transition-colors"
          >
            {t({ zh: "查看危险信号", en: "View Red Flags", ja: "危険信号を見る" })}
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}

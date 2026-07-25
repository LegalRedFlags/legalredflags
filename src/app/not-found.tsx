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
          {t("页面未找到", "Page Not Found")}
        </h1>
        <p className="text-[16px] text-[var(--grey)] mb-8 max-w-[400px] mx-auto">
          {t(
            "你访问的页面不存在或已被移动。",
            "The page you're looking for doesn't exist or has been moved."
          )}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/"
            className="px-6 py-2.5 bg-[var(--ink)] text-[var(--ground)] text-[14px] font-semibold no-underline hover:opacity-90 transition-opacity"
          >
            {t("返回首页", "Back to Home")}
          </Link>
          <Link
            href="/flags"
            className="px-6 py-2.5 border border-[var(--rule)] text-[var(--ink-soft)] text-[14px] font-semibold no-underline hover:border-[var(--grey)] transition-colors"
          >
            {t("查看危险信号", "View Red Flags")}
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}

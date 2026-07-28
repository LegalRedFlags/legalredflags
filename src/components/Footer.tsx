"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/context";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="max-w-[960px] mx-auto px-7 pt-16 pb-12">
      <div className="border-t border-[var(--rule)] pt-8 flex justify-between items-start flex-wrap gap-6">
        <div>
          <div className="font-serif text-[15px] font-bold text-[var(--ink)] mb-2">
            Legal Red Flags
          </div>
          <div className="text-[12.5px] text-[var(--grey-light)] leading-relaxed max-w-[400px]">
            {t(
              "本网站仅提供教育性信息，不构成法律建议。所有案例均已匿名化处理。如需针对具体情况的法律建议，请咨询您所在司法管辖区的执业律师。",
              "This website provides educational information only and does not constitute legal advice. All cases have been anonymized. For advice on your specific situation, consult a licensed attorney in your jurisdiction."
            )}
          </div>
        </div>
        <div className="flex gap-8">
          <div>
            <h4 className="text-[11px] tracking-wider uppercase text-[var(--grey-light)] mb-3">
              {t("内容", "Content")}
            </h4>
            {[
              ["/flags", t("危险信号", "Red Flags")],
              ["/cases", t("真实案例", "Cases")],
              ["/checklist", t("检查清单", "Checklist")],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="block text-[13.5px] text-[var(--grey)] no-underline mb-2 hover:text-[var(--ink)]"
              >
                {label}
              </Link>
            ))}
          </div>
          <div>
            <h4 className="text-[11px] tracking-wider uppercase text-[var(--grey-light)] mb-3">
              {t("关于", "About")}
            </h4>
            {[
              ["/about", t("我们的故事", "Our Story")],
              ["/submit", t("提交你的经历", "Share Your Story")],
              ["/contact", t("联系方式", "Contact")],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="block text-[13.5px] text-[var(--grey)] no-underline mb-2 hover:text-[var(--ink)]"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 pt-5 border-t border-[var(--rule-light)] text-xs text-[var(--grey-light)]">
        &copy; 2026 Legal Red Flags &middot; legalredflag.org &middot;{" "}
        {t("本项目为公益性质，不以营利为目的", "A public interest project, not for profit")}
      </div>
    </footer>
  );
}

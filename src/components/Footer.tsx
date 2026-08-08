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
            {t({
              zh: "本网站仅提供教育性信息，不构成法律建议。所有案例均已匿名化处理。如需针对具体情况的法律建议，请咨询您所在司法管辖区的执业律师。",
              en: "This website provides educational information only and does not constitute legal advice. All cases have been anonymized. For advice on your specific situation, consult a licensed attorney in your jurisdiction.",
              ja: "本ウェブサイトは教育目的の情報のみを提供しており、法的助言を構成するものではありません。すべての事例は匿名化されています。具体的な状況に関する法的助言については、管轄区域の資格を持つ弁護士にご相談ください。",
            })}
          </div>
        </div>
        <div className="flex gap-8">
          <div>
            <h4 className="text-[11px] tracking-wider uppercase text-[var(--grey-light)] mb-3">
              {t({ zh: "内容", en: "Content", ja: "コンテンツ" })}
            </h4>
            {[
              ["/flags", t({ zh: "危险信号", en: "Red Flags", ja: "危険信号" })],
              ["/cases", t({ zh: "真实案例", en: "Cases", ja: "事例" })],
              ["/checklist", t({ zh: "检查清单", en: "Checklist", ja: "チェックリスト" })],
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
              {t({ zh: "关于", en: "About", ja: "概要" })}
            </h4>
            {[
              ["/about", t({ zh: "我们的故事", en: "Our Story", ja: "私たちのストーリー" })],
              ["/submit", t({ zh: "提交你的经历", en: "Share Your Story", ja: "体験を投稿" })],
              ["/contact", t({ zh: "联系方式", en: "Contact", ja: "お問い合わせ" })],
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
        {t({ zh: "本项目为公益性质，不以营利为目的", en: "A public interest project, not for profit", ja: "公益プロジェクト、営利目的ではありません" })}
      </div>
    </footer>
  );
}

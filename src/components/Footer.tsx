import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-[960px] mx-auto px-7 pt-16 pb-12">
      <div className="border-t border-[var(--rule)] pt-8 flex justify-between items-start flex-wrap gap-6">
        <div>
          <div className="font-serif text-[15px] font-bold text-[var(--ink)] mb-2">
            Legal Red Flags
          </div>
          <div className="text-[12.5px] text-[var(--grey-light)] leading-relaxed max-w-[400px]">
            本网站仅提供教育性信息，不构成法律建议。所有案例均已匿名化处理。如需针对具体情况的法律建议，请咨询您所在司法管辖区的执业律师。
          </div>
        </div>
        <div className="flex gap-8">
          <div>
            <h4 className="text-[11px] tracking-wider uppercase text-[var(--grey-light)] mb-3">
              内容
            </h4>
            {[
              ["/flags", "危险信号"],
              ["/cases", "真实案例"],
              ["/checklist", "检查清单"],
              ["/guides", "各国指南"],
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
              关于
            </h4>
            {[
              ["/about", "我们的故事"],
              ["/submit", "提交你的经历"],
              ["/donate", "支持我们"],
              ["/contact", "联系方式"],
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
        &copy; 2026 Legal Red Flags &middot; legalredflags.org &middot; 本项目为公益性质，不以营利为目的
      </div>
    </footer>
  );
}

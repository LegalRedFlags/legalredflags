import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="max-w-[960px] mx-auto px-7 pt-7 flex justify-between items-center">
      <Link href="/" className="flex items-center gap-2.5 no-underline text-[var(--ink)]">
        <div className="w-7 h-5 relative">
          <div className="absolute left-0.5 top-0 w-0.5 h-5 bg-[var(--grey)] rounded-sm" />
          <div className="absolute left-1 top-px w-4 h-[11px] bg-[var(--red)] rounded-r" />
        </div>
        <span className="font-serif text-[17px] font-bold tracking-tight">
          Legal Red Flags
        </span>
      </Link>
      <ul className="flex gap-7 list-none">
        {[
          ["/flags", "危险信号"],
          ["/cases", "真实案例"],
          ["/checker", "风险自测"],
          ["/checklist", "检查清单"],
          ["/about", "关于我们"],
        ].map(([href, label]) => (
          <li key={href}>
            <Link
              href={href}
              className="text-sm text-[var(--grey)] no-underline hover:text-[var(--ink)] transition-colors"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

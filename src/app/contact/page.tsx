import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "联系我们 — Legal Red Flags",
  description: "联系 Legal Red Flags 团队：内容纠错、合作建议、媒体咨询。",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <section className="max-w-[960px] mx-auto px-7 pt-20 pb-16">
        <h1 className="font-serif text-[clamp(28px,5vw,38px)] font-bold leading-tight mb-4">
          联系我们
        </h1>
        <p className="text-[17px] text-[var(--grey)] leading-relaxed max-w-[600px] mb-12">
          无论是内容纠错、专业建议、合作提议还是媒体咨询，我们都欢迎你的来信。
        </p>

        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6 mb-12">
          {[
            {
              title: "提交经历",
              desc: "分享你的法律维权经历，帮助更多人识别风险。",
              email: "submit@legalredflags.org",
              link: "/submit",
              linkText: "了解提交流程 →",
            },
            {
              title: "内容纠错",
              desc: "发现内容有误或不准确？请告诉我们，我们重视每一条反馈。",
              email: "feedback@legalredflags.org",
            },
            {
              title: "专业合作",
              desc: "法律专业人士、学者、记者——你的专业知识可以让这个平台更准确。",
              email: "collaborate@legalredflags.org",
            },
            {
              title: "其他事务",
              desc: "任何其他问题或建议。",
              email: "hello@legalredflags.org",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[var(--surface)] border border-[var(--rule)] p-7"
            >
              <h3 className="font-serif text-[17px] font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-[14px] text-[var(--grey)] leading-relaxed mb-4">
                {item.desc}
              </p>
              <a
                href={`mailto:${item.email}`}
                className="text-[14px] text-[var(--green)] no-underline hover:underline font-medium"
              >
                {item.email}
              </a>
              {item.link && (
                <div className="mt-2">
                  <Link
                    href={item.link}
                    className="text-[13px] text-[var(--grey-light)] no-underline hover:text-[var(--ink)] transition-colors"
                  >
                    {item.linkText}
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-[var(--ground-warm)] border border-[var(--rule)] p-7 text-[14px] text-[var(--grey)] leading-relaxed">
          <strong className="text-[var(--ink-soft)]">请注意：</strong>
          我们不是法律服务机构，无法提供具体的法律建议。如果你正在遭遇法律纠纷，请咨询当地的执业律师。我们能做的是帮你了解该注意什么。
        </div>
      </section>
      <Footer />
    </>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n/context";

export default function ContactPage() {
  const { t, locale } = useI18n();
  const isZh = locale === "zh";
  const isJa = locale === "ja";

  const [form, setForm] = useState({
    type: "",
    message: "",
    contact: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const typeOptions = [
    { zh: "内容纠错", en: "Content Correction", ja: "内容の訂正", email: "feedback@legalredflag.org" },
    { zh: "专业合作", en: "Professional Collaboration", ja: "専門家との連携", email: "collaborate@legalredflag.org" },
    { zh: "媒体咨询", en: "Media Inquiry", ja: "メディアのお問い合わせ", email: "hello@legalredflag.org" },
    { zh: "其他", en: "Other", ja: "その他", email: "hello@legalredflag.org" },
  ];

  function handleSubmit() {
    const selected = typeOptions.find(
      (o) => (isZh ? o.zh : isJa ? o.ja : o.en) === form.type
    );
    const toEmail = selected?.email || "hello@legalredflag.org";

    const labelType = isZh ? "类型" : isJa ? "種類" : "Type";
    const labelMessage = isZh ? "内容" : isJa ? "内容" : "Message";
    const labelContact = isZh ? "联系方式" : isJa ? "連絡先" : "Contact";
    const anonymousLabel = isZh ? "匿名" : isJa ? "匿名" : "Anonymous";

    const body = [
      `【${labelType}】${form.type}`,
      "",
      `【${labelMessage}】`,
      form.message,
      "",
      `【${labelContact}】${form.contact || anonymousLabel}`,
    ].join("\n");

    const subject = encodeURIComponent(
      `[Legal Red Flags] ${form.type}`
    );
    const mailBody = encodeURIComponent(body);
    window.location.href = `mailto:${toEmail}?subject=${subject}&body=${mailBody}`;
    setSubmitted(true);
  }

  const inputClass =
    "w-full p-4 bg-[var(--ground)] border border-[var(--rule)] text-[15px] text-[var(--ink)] placeholder:text-[var(--grey-light)] focus:outline-none focus:border-[var(--green)] transition-colors";
  const labelClass = "block text-[15px] font-semibold text-[var(--ink)] mb-2";

  return (
    <>
      <Navbar />
      <section className="max-w-[960px] mx-auto px-7 pt-20 pb-16">
        <h1 className="font-serif text-[clamp(28px,5vw,38px)] font-bold leading-tight mb-4">
          {t({ zh: "联系我们", en: "Contact Us", ja: "お問い合わせ" })}
        </h1>
        <p className="text-[17px] text-[var(--grey)] leading-relaxed max-w-[600px] mb-12">
          {t({
            zh: "无论是内容纠错、专业建议、合作提议还是媒体咨询，我们都欢迎你的来信。",
            en: "Whether it's a content correction, professional advice, collaboration, or media inquiry — we welcome your message.",
            ja: "内容の訂正、専門的なアドバイス、協力の提案、メディアのお問い合わせなど、どのようなご連絡も歓迎いたします。",
          })}
        </p>

        {/* Quick links */}
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6 mb-12">
          {[
            {
              title: t({ zh: "提交经历", en: "Share Your Story", ja: "体験を投稿" }),
              desc: t({ zh: "分享你的法律维权经历，帮助更多人识别风险。", en: "Share your legal experience to help others identify risks.", ja: "あなたの法的な体験を共有し、他の人がリスクを見極める手助けをしましょう。" }),
              email: "submit@legalredflag.org",
              link: "/submit",
              linkText: t({ zh: "前往提交页面 →", en: "Go to submission page →", ja: "投稿ページへ →" }),
            },
            {
              title: t({ zh: "内容纠错", en: "Content Corrections", ja: "内容の訂正" }),
              desc: t({ zh: "发现内容有误或不准确？请告诉我们，我们重视每一条反馈。", en: "Found something inaccurate? Let us know — we value every piece of feedback.", ja: "不正確な内容を見つけましたか？お知らせください。すべてのフィードバックを大切にしています。" }),
              email: "feedback@legalredflag.org",
            },
            {
              title: t({ zh: "专业合作", en: "Professional Collaboration", ja: "専門家との連携" }),
              desc: t({ zh: "法律专业人士、学者、记者——你的专业知识可以让这个平台更准确。", en: "Legal professionals, academics, journalists — your expertise can make this platform more accurate.", ja: "法律の専門家、学者、ジャーナリストの方々――あなたの専門知識がこのプラットフォームをより正確にします。" }),
              email: "collaborate@legalredflag.org",
            },
            {
              title: t({ zh: "其他事务", en: "General Inquiries", ja: "その他のお問い合わせ" }),
              desc: t({ zh: "任何其他问题或建议。", en: "Any other questions or suggestions.", ja: "その他のご質問やご提案。" }),
              email: "hello@legalredflag.org",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[var(--surface)] border border-[var(--rule)] p-7"
            >
              <h3 className="font-serif text-[17px] font-bold mb-2">{item.title}</h3>
              <p className="text-[14px] text-[var(--grey)] leading-relaxed mb-4">{item.desc}</p>
              <a
                href={`mailto:${item.email}`}
                className="text-[14px] text-[var(--green)] no-underline hover:underline font-medium"
              >
                {item.email}
              </a>
              {item.link && (
                <div className="mt-2">
                  <Link href={item.link} className="text-[13px] text-[var(--grey-light)] no-underline hover:text-[var(--ink)] transition-colors">
                    {item.linkText}
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact form */}
        <div className="mb-12">
          <h2 className="font-serif text-[22px] font-bold mb-6">
            {t({ zh: "在线留言", en: "Send a Message", ja: "メッセージを送る" })}
          </h2>

          {submitted ? (
            <div className="bg-[var(--surface)] border border-[var(--green)] p-12 text-center">
              <div className="text-[48px] mb-4">✉️</div>
              <h3 className="font-serif text-[20px] font-bold mb-3">
                {t({ zh: "感谢你的留言", en: "Thank You", ja: "ありがとうございます" })}
              </h3>
              <p className="text-[15px] text-[var(--grey)] mb-6 max-w-[480px] mx-auto">
                {t({
                  zh: "你的邮件客户端应该已经打开了。如果没有，请直接发送邮件到对应邮箱。",
                  en: "Your email client should have opened. If not, please send your message directly to the relevant email address above.",
                  ja: "メールクライアントが開いたはずです。開かない場合は、上記の該当メールアドレスに直接メッセージをお送りください。",
                })}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-[var(--green)] text-sm underline cursor-pointer bg-transparent border-none"
              >
                {t({ zh: "再发一条", en: "Send another", ja: "もう一通送る" })}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <label className={labelClass}>
                  {t({ zh: "留言类型", en: "Message type", ja: "メッセージの種類" })}
                  <span className="text-[var(--red)] ml-1">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {typeOptions.map((o) => {
                    const label = isZh ? o.zh : isJa ? o.ja : o.en;
                    const selected = form.type === label;
                    return (
                      <button
                        key={o.en}
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, type: label }))}
                        className={`px-4 py-2.5 text-[14px] border cursor-pointer transition-all ${
                          selected
                            ? "border-[var(--green)] bg-[var(--green-pale)] text-[var(--ink)] font-semibold"
                            : "border-[var(--rule)] bg-[var(--ground)] text-[var(--ink-soft)] hover:border-[var(--grey)]"
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className={labelClass}>
                  {t({ zh: "留言内容", en: "Your message", ja: "メッセージ内容" })}
                  <span className="text-[var(--red)] ml-1">*</span>
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                  rows={6}
                  placeholder={t({
                    zh: "请描述你想说的内容……",
                    en: "Tell us what's on your mind...",
                    ja: "お伝えしたい内容をご記入ください……",
                  })}
                  className={inputClass + " resize-y"}
                />
              </div>

              <div>
                <label className={labelClass}>
                  {t({ zh: "联系方式（选填）", en: "Contact info (optional)", ja: "連絡先（任意）" })}
                </label>
                <input
                  type="text"
                  value={form.contact}
                  onChange={(e) => setForm((prev) => ({ ...prev, contact: e.target.value }))}
                  placeholder={t({ zh: "邮箱、微信或其他", en: "Email, WeChat, or other", ja: "メールアドレス、LINE、その他" })}
                  className={inputClass}
                />
              </div>

              <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-4 pt-4 border-t border-[var(--rule)]">
                <p className="text-[13px] text-[var(--grey-light)] max-w-[400px]">
                  {t({
                    zh: "点击发送后会打开你的邮件客户端，内容已自动填入。",
                    en: "Clicking send will open your email client with the message pre-filled.",
                    ja: "送信をクリックするとメールクライアントが開き、内容が自動入力されます。",
                  })}
                </p>
                <button
                  onClick={handleSubmit}
                  disabled={!form.type || !form.message}
                  className="px-8 py-3.5 bg-[var(--green)] text-white text-[15px] font-semibold cursor-pointer border-none hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                >
                  {t({ zh: "发送留言", en: "Send Message", ja: "メッセージを送信" })}
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="bg-[var(--ground-warm)] border border-[var(--rule)] p-7 text-[14px] text-[var(--grey)] leading-relaxed">
          <strong className="text-[var(--ink-soft)]">{t({ zh: "请注意：", en: "Please note: ", ja: "ご注意：" })}</strong>
          {t({
            zh: "我们不是法律服务机构，无法提供具体的法律建议。如果你正在遭遇法律纠纷，请咨询当地的执业律师。我们能做的是帮你了解该注意什么。",
            en: "We are not a legal service provider and cannot offer specific legal advice. If you're facing a legal dispute, consult a licensed attorney in your area. What we can do is help you know what to watch for.",
            ja: "私たちは法律サービス機関ではなく、具体的な法的助言を提供することはできません。法的紛争に直面している場合は、お住まいの地域の弁護士にご相談ください。私たちにできるのは、何に注意すべきかを知る手助けです。",
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}

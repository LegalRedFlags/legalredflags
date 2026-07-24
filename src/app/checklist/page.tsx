import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "检查清单 — Legal Red Flags",
  description: "聘请律师前、签合同前、诉讼进行中的自查清单。照着做，不遗漏。",
};

const checklists = [
  {
    title: "聘请律师前",
    eyebrow: "第一阶段",
    desc: "在决定委托律师之前，完成以下检查。这是防范风险最有效的窗口期。",
    items: [
      {
        text: "在当地司法局或律师协会官网查询律师的执业证号和状态",
        why: "确认律师有合法执业资格，没有被处分或注销。",
      },
      {
        text: "确认律师不是由对手方或关联方介绍的",
        why: "介绍人与对方有利益关系时，律师可能不会真正站在你的立场。",
      },
      {
        text: "同时咨询 2-3 位律师，对比他们的专业判断",
        why: "不同律师的意见差异可以帮你发现不合理的建议。",
      },
      {
        text: "调查律师过往的代理案例和口碑",
        why: "通过裁判文书网或其他渠道了解律师的真实能力。",
      },
      {
        text: "确认律师是否有处理类似案件的专业经验",
        why: "法律领域很细分，专业对口的律师更有效。",
      },
    ],
  },
  {
    title: "签合同前",
    eyebrow: "第二阶段",
    desc: "在签署委托合同和付费之前，逐一确认以下事项。签字之后再发现问题就被动了。",
    items: [
      {
        text: "确认必须签正式的书面委托合同",
        why: "口头约定和微信约定在投诉和诉讼中效力有限。",
      },
      {
        text: "确认收款账户是律所对公账户，不是律师个人账户",
        why: "个人账户收费是最常见的违规行为，也是后续维权的最大障碍。",
      },
      {
        text: "确认合同中有明确的退费条款",
        why: "没有退费条款，服务不满意时你无法追回已付费用。",
      },
      {
        text: "确认合同上的律师就是实际负责你案件的律师",
        why: "防止「资深律师签约、实习生干活」的挂名代理。",
      },
      {
        text: "确认合同中明确了服务范围和律师义务",
        why: "模糊的服务描述给律师留下了不作为的空间。",
      },
      {
        text: "要求律师提供正式发票并核对内容",
        why: "发票是证明正规收费的关键凭证。",
      },
      {
        text: "仔细阅读合同中的每一个条款，不理解的就问",
        why: "法律术语可能暗藏对你不利的条件。",
      },
    ],
  },
  {
    title: "代理过程中",
    eyebrow: "第三阶段",
    desc: "委托律师之后，持续关注以下事项。不要付完钱就放手不管。",
    items: [
      {
        text: "定期要求律师汇报案件进展（至少每两周一次）",
        why: "长期不汇报可能意味着律师没有在处理你的案件。",
      },
      {
        text: "记录律师给出的每一条重要建议",
        why: "如果律师的建议后来被证明有问题，这些记录是投诉的依据。",
      },
      {
        text: "律师建议撤诉或放弃时，要求书面法律意见",
        why: "正当的专业建议不怕写在纸上。",
      },
      {
        text: "关注律师的建议是否客观上更有利于对方",
        why: "这可能是利益冲突的信号。",
      },
      {
        text: "拒绝律师以「打点关系」为名的任何额外收费",
        why: "这种收费 100% 是违法的，也几乎 100% 是骗局。",
      },
      {
        text: "保留与律师的所有沟通记录",
        why: "微信、邮件、电话录音都是后续可能需要的证据。",
      },
    ],
  },
  {
    title: "签署合同或担保时",
    eyebrow: "特别注意",
    desc: "涉及签署商业合同或担保文件时，以下事项关乎你的全部财产安全。",
    items: [
      {
        text: "绝不在未经独立律师审查的情况下签署任何合同",
        why: "对方起草的合同天然保护对方利益。",
      },
      {
        text: "理解「连带担保责任」的含义再决定是否签署",
        why: "个人担保意味着你用全部个人财产为债务负责。",
      },
      {
        text: "不要被对方催促签字的压力所迫",
        why: "合理的商业行为会给你足够的审阅时间。催促本身就是一个警告。",
      },
      {
        text: "注意合同中的管辖条款和争议解决方式",
        why: "不利的管辖条款可能让你在对方的地盘打官司。",
      },
      {
        text: "保留合同原件和所有附件的副本",
        why: "一旦发生纠纷，合同是最核心的证据。",
      },
    ],
  },
];

export default function ChecklistPage() {
  return (
    <>
      <Navbar />
      <section className="max-w-[960px] mx-auto px-7 pt-20 pb-16">
        <h1 className="font-serif text-[clamp(28px,5vw,38px)] font-bold leading-tight mb-4">
          检查清单
        </h1>
        <p className="text-[17px] text-[var(--grey)] leading-relaxed max-w-[600px] mb-4">
          从找律师到签合同，每个阶段都有你必须确认的事项。照着做，不遗漏。
        </p>
        <p className="text-[13px] text-[var(--grey-light)] mb-12">
          提示：你可以截图保存这个清单，在实际操作时逐项核对。
        </p>

        {checklists.map((list, li) => (
          <div key={li} className="mb-14">
            <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--grey-light)] mb-2">
              {list.eyebrow}
            </div>
            <h2 className="font-serif text-[22px] font-bold mb-2">
              {list.title}
            </h2>
            <p className="text-[15px] text-[var(--grey)] max-w-[540px] leading-relaxed mb-6">
              {list.desc}
            </p>
            <div className="border border-[var(--rule)]">
              {list.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 px-6 py-5 bg-[var(--surface)] border-b border-[var(--rule-light)] last:border-b-0"
                >
                  <div className="w-[20px] h-[20px] border-2 border-[var(--rule)] rounded-[3px] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[15px] font-semibold text-[var(--ink)] leading-snug mb-1">
                      {item.text}
                    </div>
                    <div className="text-[13px] text-[var(--grey-light)] leading-relaxed">
                      {item.why}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
}

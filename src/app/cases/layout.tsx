import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "真实案例 Real Cases",
  description:
    "来自当事人亲历的真实法律案例，匿名化处理后呈现。Real legal cases from firsthand experience, presented after anonymization.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

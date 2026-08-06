import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Cases — 真实案例",
  description:
    "Real legal cases from firsthand experience, presented after anonymization. 来自当事人亲历的真实法律案例，匿名化处理后呈现。",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

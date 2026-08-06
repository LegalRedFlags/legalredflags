import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Red Flags — 危险信号",
  description:
    "36 structured warning signals from evidence-backed real cases. Classified across five stages of a legal dispute. 36条结构化法律预警信号，按纠纷五阶段分类。",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

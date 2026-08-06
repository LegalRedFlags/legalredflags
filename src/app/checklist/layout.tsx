import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checklist — 检查清单",
  description:
    "A four-stage legal dispute prevention checklist. Follow step by step — miss nothing. 法律纠纷四阶段防骗检查清单。",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

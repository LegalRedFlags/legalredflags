import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "检查清单 Checklist",
  description:
    "法律纠纷四阶段防骗检查清单。A four-stage legal dispute prevention checklist.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

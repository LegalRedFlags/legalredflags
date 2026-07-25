import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "危险信号 Red Flags",
  description:
    "20条结构化法律预警信号，按纠纷阶段分类。20 structured legal red flags classified by dispute stage.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

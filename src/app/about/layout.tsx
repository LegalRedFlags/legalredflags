import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我们 About",
  description:
    "Legal Red Flags 的创建背景和使命。The story and mission behind Legal Red Flags.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

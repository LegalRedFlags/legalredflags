import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — 关于我们",
  description:
    "The story and mission behind Legal Red Flags. Legal Red Flags 的创建背景和使命。",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

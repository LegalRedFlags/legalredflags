import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Risk Checker — 风险自测",
  description:
    "12 questions to quickly assess your legal risk. 12道问题快速评估你的法律风险。",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

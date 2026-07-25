import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "风险自测 Risk Checker",
  description:
    "12道问题快速评估你的法律风险。12 questions to quickly assess your legal risk.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

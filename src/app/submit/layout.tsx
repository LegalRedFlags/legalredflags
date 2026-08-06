import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit Your Story — 提交经历",
  description:
    "Submit your legal dispute experience anonymously to help others. 匿名提交你的法律纠纷经历，帮助更多人。",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

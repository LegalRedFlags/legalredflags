import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "提交经历 Submit Your Story",
  description:
    "匿名提交你的法律纠纷经历，帮助更多人。Submit your legal dispute experience anonymously to help others.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

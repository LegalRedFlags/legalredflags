import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Scripts & Guides: How to Deal with Lawyer Misconduct",
  description:
    "Practical word-for-word scripts and step-by-step guides — refuse personal account payments, demand refunds, and file bar complaints.",
};

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

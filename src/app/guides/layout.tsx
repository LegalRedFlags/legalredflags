import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "沟通话术与投诉指南 Scripts & Complaint Guide",
  description:
    "Practical scripts and step-by-step guides for dealing with lawyer misconduct — from refusing personal account payments to filing bar complaints.",
};

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

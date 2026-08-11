import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Legal Red Flags: Real Experience, Not Legal Advice",
  description:
    "Documenting real attorney warning signs from years of litigation. Not written by lawyers — built from real cases, not theory.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

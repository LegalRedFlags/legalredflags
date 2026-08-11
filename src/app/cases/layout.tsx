import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Cases: Attorney Fraud & Legal Traps Exposed",
  description:
    "Read anonymized real cases of attorney fraud, ghosting, overbilling, and hidden traps. Full-process retrospectives from real people.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

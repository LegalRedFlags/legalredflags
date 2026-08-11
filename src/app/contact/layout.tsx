import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Legal Red Flags",
  description:
    "Report translation issues, share your story, or suggest new red flags. We read every message.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

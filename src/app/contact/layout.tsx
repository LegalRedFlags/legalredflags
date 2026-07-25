import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "联系我们 Contact",
  description:
    "联系 Legal Red Flags 团队。Get in touch with the Legal Red Flags team.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — 联系我们",
  description:
    "Get in touch with the Legal Red Flags team. 联系 Legal Red Flags 团队。",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

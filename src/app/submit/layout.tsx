import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Share Your Legal Experience (100% Anonymous)",
  description:
    "Share your story anonymously to protect others. Help build our non-profit database of lawyer red flags and hidden billing traps.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lawyer Red Flag Checker: Free Tool to Test Your Attorney",
  description:
    "Is your attorney ghosting you or overcharging? Use our free, non-profit tool to check if your lawyer's behavior is a major warning sign.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

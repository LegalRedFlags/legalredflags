import { notFound } from "next/navigation";
import { cases, getCaseBySlug } from "@/data/cases";
import CaseDetail from "@/components/CaseDetail";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) return {};
  return {
    title: `案例 #${c.num} ${c.title}`,
    description: c.summary.substring(0, 160),
  };
}

export default async function CaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) notFound();

  return <CaseDetail c={c} />;
}

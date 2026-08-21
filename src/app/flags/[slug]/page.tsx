import { notFound } from "next/navigation";
import { flags, getFlagBySlug } from "@/data/flags";
import { FAQJsonLd } from "@/components/JsonLd";
import FlagDetail from "@/components/FlagDetail";

export function generateStaticParams() {
  return flags.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const flag = getFlagBySlug(slug);
  if (!flag) return {};
  return {
    title: `Red Flag #${flag.num}: ${flag.signalEn}`,
    description: `${flag.descriptionEn.substring(0, 155)}`,
  };
}

export default async function FlagDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const flag = getFlagBySlug(slug);
  if (!flag) notFound();

  const currentIndex = flags.findIndex((f) => f.slug === slug);
  const prev = currentIndex > 0 ? flags[currentIndex - 1] : null;
  const next = currentIndex < flags.length - 1 ? flags[currentIndex + 1] : null;

  const faqItems = [
    {
      question: flag.signalEn,
      answer: `${flag.descriptionEn} Advice: ${flag.adviceEn.join(". ")}.`,
    },
  ];

  return (
    <>
      <FAQJsonLd items={faqItems} />
      <FlagDetail flag={flag} prev={prev} next={next} />
    </>
  );
}

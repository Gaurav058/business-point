import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBrokerBySlug, getBrokers } from "@/services";
import BrokerDetail from "@/components/content/BrokerDetail";
import { buildBrokerMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const brokers = await getBrokers();
  return brokers.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const broker = await getBrokerBySlug(slug);
  if (!broker) {
    return { title: "Broker Not Found" };
  }
  return buildBrokerMetadata(broker);
}

export default async function BrokerDetailPage({ params }: Props) {
  const { slug } = await params;
  const broker = await getBrokerBySlug(slug);

  if (!broker) {
    notFound();
  }

  return <BrokerDetail broker={broker} />;
}
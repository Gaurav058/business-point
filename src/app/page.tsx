import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/seo";
import Hero             from "@/components/home/Hero";
import MarketTicker     from "@/components/home/MarketTicker";
import NewsSection      from "@/components/home/NewsSection";
import AnalysisSection  from "@/components/home/AnalysisSection";
import BrokerSection    from "@/components/home/BrokerSection";
import ToolsSection     from "@/components/home/ToolsSection";
import Newsletter       from "@/components/home/Newsletter";

const description =
  "Your trusted hub for forex intelligence. Daily insights, broker comparisons, and proven strategies for traders and investors.";

export const metadata: Metadata = {
  title: { absolute: SITE_NAME },
  description,
  openGraph: { title: SITE_NAME, description, type: "website" },
  twitter: { card: "summary_large_image", title: SITE_NAME, description },
};

export default function Home() {
  return (
    <>
      <Hero />
      <MarketTicker />
      <NewsSection />
      <AnalysisSection />
      <BrokerSection />
      <ToolsSection />
      <Newsletter />
    </>
  );
}
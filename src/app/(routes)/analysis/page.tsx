import type { Metadata } from "next";

const description =
  "In-depth market analysis, technical breakdowns, and expert commentary to help you make informed investment decisions.";

export const metadata: Metadata = {
  title: "Analysis",
  description,
  openGraph: {
    title: "Market Analysis | Business Point",
    description,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Market Analysis | Business Point",
    description,
  },
};

export default function AnalysisPage() {
  return (
    <main>
      <h1>Analysis</h1>
    </main>
  );
}
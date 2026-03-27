import type { Metadata } from "next";

const description =
  "The latest financial news, market updates, economic data releases, and breaking stories for investors and traders.";

export const metadata: Metadata = {
  title: "News",
  description,
  openGraph: {
    title: "Financial News | Business Point",
    description,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Financial News | Business Point",
    description,
  },
};

export default function NewsPage() {
  return (
    <main>
      <h1>News</h1>
    </main>
  );
}
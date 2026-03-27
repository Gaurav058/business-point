import type { Metadata } from "next";

const description =
  "Investment guides, trading strategies, and educational articles to help beginners and experienced investors grow their knowledge.";

export const metadata: Metadata = {
  title: "Blog",
  description,
  openGraph: {
    title: "Investment Blog | Business Point",
    description,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Investment Blog | Business Point",
    description,
  },
};

export default function BlogPage() {
  return (
    <main>
      <h1>Blog</h1>
    </main>
  );
}
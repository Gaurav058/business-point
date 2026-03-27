import type { Article } from "@/types";

export const mockArticles: Article[] = [
  {
    id: "1",
    slug: "fed-holds-rates-amid-inflation-concerns",
    title: "Fed Holds Rates Amid Ongoing Inflation Concerns",
    summary:
      "The Federal Reserve kept interest rates unchanged at its latest meeting, signalling a cautious approach as inflation remains above the 2% target.",
    content:
      "The Federal Reserve voted unanimously to hold the federal funds rate steady at its May meeting. Officials cited persistent services inflation and a resilient labour market as key factors behind the decision. Chair Jerome Powell indicated that rate cuts remain on the table but will require greater confidence that inflation is durably moving toward target.",
    author: "Sarah Mitchell",
    category: "news",
    tags: ["Federal Reserve", "interest rates", "inflation", "monetary policy"],
    publishedAt: "2024-05-01T10:00:00Z",
    updatedAt: "2024-05-01T12:30:00Z",
    coverImage: "/images/articles/fed-rates.jpg",
  },
  {
    id: "2",
    slug: "sp500-technical-outlook-q2-2024",
    title: "S&P 500 Technical Outlook: Key Levels to Watch in Q2 2024",
    summary:
      "A deep-dive into the S&P 500 chart structure heading into Q2, identifying critical support and resistance zones for traders and investors.",
    content:
      "The S&P 500 has consolidated just below its all-time highs, forming a symmetrical triangle on the weekly chart. A decisive break above 5,300 would open the door to an extension toward 5,600, while a failure at current levels could see a retest of the 5,000 psychological support. RSI on the monthly timeframe remains in bullish territory but is approaching overbought conditions, suggesting momentum may moderate in the near term.",
    author: "David Okafor",
    category: "analysis",
    tags: ["S&P 500", "technical analysis", "equities", "Q2 2024"],
    publishedAt: "2024-04-15T08:00:00Z",
    updatedAt: "2024-04-16T09:00:00Z",
    coverImage: "/images/articles/sp500-outlook.jpg",
  },
  {
    id: "3",
    slug: "how-to-read-a-balance-sheet",
    title: "How to Read a Balance Sheet: A Beginner Guide",
    summary:
      "Understanding a company balance sheet is one of the most valuable skills for any investor. This guide walks you through the essentials.",
    content:
      "A balance sheet is a snapshot of a company financial position at a specific point in time. It is divided into three sections: assets, liabilities, and shareholders equity. Assets represent everything the company owns, from cash and receivables to property and intangibles. Liabilities are what the company owes, including loans, accounts payable, and deferred revenue. The difference between assets and liabilities equals the book value of the business.",
    author: "Emma Clarke",
    category: "blog",
    tags: ["investing", "fundamentals", "accounting", "beginners"],
    publishedAt: "2024-03-20T14:00:00Z",
    updatedAt: "2024-03-21T10:00:00Z",
    coverImage: "/images/articles/balance-sheet.jpg",
  },
  {
    id: "4",
    slug: "bitcoin-halving-market-impact",
    title: "Bitcoin Halving 2024: What It Means for Markets",
    summary:
      "With the fourth Bitcoin halving now behind us, analysts are divided on the short and long-term price implications for the broader crypto market.",
    content:
      "The Bitcoin network completed its fourth halving event in April 2024, reducing the block reward from 6.25 BTC to 3.125 BTC. Historically, halving events have preceded significant bull runs, though the timing and magnitude have varied considerably. On-chain data shows long-term holders are accumulating, while exchange reserves sit near multi-year lows, both traditionally bullish signals. However, macro headwinds, including elevated real yields, could dampen the extent of any rally.",
    author: "James Fernandez",
    category: "analysis",
    tags: ["Bitcoin", "halving", "crypto", "on-chain analysis"],
    publishedAt: "2024-04-22T16:00:00Z",
    updatedAt: "2024-04-23T08:00:00Z",
    coverImage: "/images/articles/bitcoin-halving.jpg",
  },
  {
    id: "5",
    slug: "ecb-signals-june-rate-cut",
    title: "ECB Signals June Rate Cut as Euro Zone Inflation Eases",
    summary:
      "European Central Bank officials have strongly hinted at a rate cut in June after inflation in the euro zone fell closer to the 2% target.",
    content:
      "ECB President Christine Lagarde confirmed that the governing council is gaining confidence that inflation is on a sustainable path back to 2%. Several policymakers have explicitly referenced June as the likely starting point for easing, barring any major upside surprises in the data. Markets are now fully pricing a 25 basis point cut at the June meeting, with two to three additional cuts expected by year-end.",
    author: "Sarah Mitchell",
    category: "news",
    tags: ["ECB", "interest rates", "euro zone", "inflation"],
    publishedAt: "2024-05-08T11:00:00Z",
    updatedAt: "2024-05-08T13:00:00Z",
    coverImage: "/images/articles/ecb-cut.jpg",
  },
];
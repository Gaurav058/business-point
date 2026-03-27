export interface MarketQuote {
  symbol: string;
  price: string;
  change: string;
  positive: boolean;
}

export const marketQuotes: MarketQuote[] = [
  { symbol: "EUR/USD",  price: "1.0850",   change: "+0.12%", positive: true  },
  { symbol: "Gold",     price: "$2,034",   change: "+0.45%", positive: true  },
  { symbol: "BTC",      price: "$62,500",  change: "-1.20%", positive: false },
  { symbol: "Oil (WTI)",price: "$78.00",   change: "+0.30%", positive: true  },
];
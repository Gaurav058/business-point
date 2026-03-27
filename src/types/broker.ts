export type AssetClass =
  | "Forex"
  | "Stocks"
  | "Crypto"
  | "Commodities"
  | "Indices";

export interface Broker {
  id: string;
  slug: string;
  name: string;
  description: string;
  website: string;
  rating: number;
  regulators: string[];
  minDeposit: number;
  spread: string;
  leverage: string;
  founded: number;
  headquarters: string;
  assets: AssetClass[];
  logo: string;
}
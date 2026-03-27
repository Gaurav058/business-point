import type { ToolMeta } from "@/types";

export const tools: ToolMeta[] = [
  {
    id: "pip-calculator",
    title: "Pip Calculator",
    description:
      "Calculate the monetary value of one pip for any currency pair and lot size.",
    href: "/tools/pip-calculator",
  },
  {
    id: "position-size",
    title: "Position Size Tool",
    description:
      "Find the optimal position size based on your account balance and risk parameters.",
    href: "/tools/position-size",
  },
  {
    id: "economic-calendar",
    title: "Economic Calendar",
    description:
      "Track key economic events, data releases, and market-moving announcements.",
    href: "/tools/economic-calendar",
  },
  {
    id: "currency-converter",
    title: "Currency Converter",
    description:
      "Convert between major currency pairs and get real-time exchange rate guidance.",
    href: "/tools/currency-converter",
  },
];
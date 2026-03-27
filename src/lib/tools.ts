import type { ToolMeta } from "@/types";

export const tools: ToolMeta[] = [
  {
    id: "pip-calculator",
    title: "Pip Calculator",
    description:
      "Calculate the monetary value of one pip for any currency pair and lot size in your account currency.",
    href: "/tools/pip-calculator",
  },
  {
    id: "position-size",
    title: "Position Size Calculator",
    description:
      "Find the optimal position size based on your account balance, risk tolerance, and stop-loss distance.",
    href: "/tools/position-size",
  },
];
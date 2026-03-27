// ---------------------------------------------------------------------------
// Tool registry
// ---------------------------------------------------------------------------

export interface ToolMeta {
  id: string;
  title: string;
  description: string;
  href: string;
}

// ---------------------------------------------------------------------------
// Pip Calculator
// ---------------------------------------------------------------------------

export interface PipCalculatorInput {
  currencyPair: string;
  lotSize: number;
  accountCurrency: string;
}

export interface PipCalculatorResult {
  pipValue: number;
  currency: string;
}

// ---------------------------------------------------------------------------
// Position Size Calculator
// ---------------------------------------------------------------------------

export interface PositionSizeInput {
  accountBalance: number;
  riskPercent: number;
  stopLossPips: number;
  pipValue: number;
}

export interface PositionSizeResult {
  positionSize: number;
  riskAmount: number;
  lots: number;
}
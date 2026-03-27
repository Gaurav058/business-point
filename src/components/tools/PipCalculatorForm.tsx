"use client";

import { useState } from "react";
import type { PipCalculatorInput, PipCalculatorResult } from "@/types";
import { calculatePipValue } from "@/utils/calculations";
import ToolInput from "./ToolInput";
import ToolResult from "./ToolResult";

const INITIAL_INPUT: PipCalculatorInput = {
  currencyPair: "",
  lotSize: 1,
  accountCurrency: "USD",
};

export default function PipCalculatorForm() {
  const [input, setInput] = useState<PipCalculatorInput>(INITIAL_INPUT);
  const [result, setResult] = useState<PipCalculatorResult | null>(null);

  function handleChange(field: keyof PipCalculatorInput) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value;
      setInput((prev) => ({
        ...prev,
        [field]: field === "lotSize" ? parseFloat(raw) || 0 : raw,
      }));
    };
  }

  function handleCalculate() {
    setResult(calculatePipValue(input));
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ToolInput
          id="currencyPair"
          label="Currency Pair"
          placeholder="e.g. EUR/USD"
          value={input.currencyPair}
          onChange={handleChange("currencyPair")}
        />
        <ToolInput
          id="lotSize"
          label="Lot Size"
          type="number"
          min={0.01}
          step={0.01}
          placeholder="e.g. 1.00"
          value={input.lotSize}
          onChange={handleChange("lotSize")}
          hint="Standard lot = 1.00"
        />
        <ToolInput
          id="accountCurrency"
          label="Account Currency"
          placeholder="e.g. USD"
          value={input.accountCurrency}
          onChange={handleChange("accountCurrency")}
        />
      </div>

      <button
        type="button"
        onClick={handleCalculate}
        className="mt-6 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
      >
        Calculate
      </button>

      <ToolResult
        isReady={result !== null}
        rows={
          result
            ? [
                {
                  label: "Pip Value",
                  value: `${result.pipValue.toFixed(2)} ${result.currency}`,
                  accent: true,
                },
              ]
            : []
        }
      />
    </div>
  );
}
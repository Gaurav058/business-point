"use client";

import { useState } from "react";
import type { PositionSizeInput, PositionSizeResult } from "@/types";
import { calculatePositionSize } from "@/utils/calculations";
import ToolInput from "./ToolInput";
import ToolResult from "./ToolResult";

const INITIAL_INPUT: PositionSizeInput = {
  accountBalance: 0,
  riskPercent: 1,
  stopLossPips: 0,
  pipValue: 0,
};

export default function PositionSizeForm() {
  const [input, setInput] = useState<PositionSizeInput>(INITIAL_INPUT);
  const [result, setResult] = useState<PositionSizeResult | null>(null);

  function handleChange(field: keyof PositionSizeInput) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput((prev) => ({
        ...prev,
        [field]: parseFloat(e.target.value) || 0,
      }));
    };
  }

  function handleCalculate() {
    setResult(calculatePositionSize(input));
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ToolInput
          id="accountBalance"
          label="Account Balance ($)"
          type="number"
          min={0}
          step={100}
          placeholder="e.g. 10000"
          value={input.accountBalance || ""}
          onChange={handleChange("accountBalance")}
          hint="In your account currency"
        />
        <ToolInput
          id="riskPercent"
          label="Risk (%)"
          type="number"
          min={0.1}
          max={100}
          step={0.1}
          placeholder="e.g. 1"
          value={input.riskPercent || ""}
          onChange={handleChange("riskPercent")}
          hint="Percentage of balance to risk per trade"
        />
        <ToolInput
          id="stopLossPips"
          label="Stop Loss (pips)"
          type="number"
          min={0}
          step={1}
          placeholder="e.g. 20"
          value={input.stopLossPips || ""}
          onChange={handleChange("stopLossPips")}
        />
        <ToolInput
          id="pipValue"
          label="Pip Value ($)"
          type="number"
          min={0}
          step={0.01}
          placeholder="e.g. 10"
          value={input.pipValue || ""}
          onChange={handleChange("pipValue")}
          hint="Value per pip in account currency"
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
                  label: "Position Size",
                  value: `${result.positionSize.toFixed(2)} lots`,
                  accent: true,
                },
                {
                  label: "Risk Amount",
                  value: `$${result.riskAmount.toFixed(2)}`,
                },
                {
                  label: "Lots",
                  value: result.lots.toFixed(4),
                },
              ]
            : []
        }
      />
    </div>
  );
}
"use client";

import type { InputHTMLAttributes } from "react";

interface ToolInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  hint?: string;
}

export default function ToolInput({
  label,
  id,
  hint,
  className,
  ...props
}: ToolInputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
      >
        {label}
      </label>
      <input
        id={id}
        className={`rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-900 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-500 dark:focus:ring-white ${className ?? ""}`}
        {...props}
      />
      {hint && (
        <p className="text-xs text-zinc-400 dark:text-zinc-500">{hint}</p>
      )}
    </div>
  );
}
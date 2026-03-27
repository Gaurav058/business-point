interface ResultRow {
  label: string;
  value: string;
  accent?: boolean;
}

interface ToolResultProps {
  rows: ResultRow[];
  isReady: boolean;
}

export default function ToolResult({ rows, isReady }: ToolResultProps) {
  return (
    <div className="mt-6 rounded-lg border border-zinc-100 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
        Result
      </p>
      {!isReady ? (
        <p className="text-sm text-zinc-400 dark:text-zinc-500">
          Fill in the fields above and press Calculate.
        </p>
      ) : (
        <dl className="space-y-2">
          {rows.map((row) => (
            <div key={row.label} className="flex items-center justify-between">
              <dt className="text-sm text-zinc-600 dark:text-zinc-400">
                {row.label}
              </dt>
              <dd
                className={`text-sm font-semibold ${
                  row.accent
                    ? "text-zinc-900 dark:text-white"
                    : "text-zinc-700 dark:text-zinc-300"
                }`}
              >
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
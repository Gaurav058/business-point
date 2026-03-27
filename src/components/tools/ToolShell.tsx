interface ToolShellProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function ToolShell({
  title,
  description,
  children,
}: ToolShellProps) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950 sm:p-8">
      <div className="mb-6 border-b border-zinc-100 pb-6 dark:border-zinc-800">
        <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
          {title}
        </h2>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          {description}
        </p>
      </div>
      {children}
    </div>
  );
}
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-[#1F2933] bg-[#0D1117] p-5 transition-colors duration-200 hover:border-slate-600 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
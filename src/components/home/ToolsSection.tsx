import Link from "next/link";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { tools } from "@/lib/tools";

const TOOL_ICONS: Record<string, string> = {
  "pip-calculator":    "◈",
  "position-size":     "◎",
  "economic-calendar": "◷",
  "currency-converter":"◉",
};

export default function ToolsSection() {
  return (
    <section className="bg-[#0D1117] py-14">
      <Container>
        <div className="mb-7 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#E6EDF3]">Trading Tools</h2>
          <Link
            href="/tools"
            className="text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
          >
            View all &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {tools.map((tool) => (
            <Link key={tool.id} href={tool.href} className="group block">
              <Card className="flex flex-col items-center gap-3 py-8 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl text-blue-400 transition-colors group-hover:bg-blue-500/20">
                  {TOOL_ICONS[tool.id] ?? "◆"}
                </span>
                <span className="text-sm font-semibold text-[#E6EDF3] transition-colors group-hover:text-blue-300">
                  {tool.title}
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
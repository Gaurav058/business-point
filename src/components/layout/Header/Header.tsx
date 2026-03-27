import Link from "next/link";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1F2933] bg-[#0B0F14]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-[#E6EDF3] transition-colors hover:text-blue-400"
        >
          Business Point
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
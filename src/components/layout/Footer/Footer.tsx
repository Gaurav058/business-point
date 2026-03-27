import Link from "next/link";

const footerLinks = [
  { label: "News",     href: "/news"     },
  { label: "Analysis", href: "/analysis" },
  { label: "Brokers",  href: "/brokers"  },
  { label: "Blog",     href: "/blog"     },
  { label: "Tools",    href: "/tools"    },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#1F2933] bg-[#0B0F14]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <span className="text-base font-bold text-[#E6EDF3]">
            Business Point
          </span>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-500 transition-colors hover:text-[#E6EDF3]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-8 text-center text-xs text-slate-600">
          &copy; {new Date().getFullYear()} Business Point. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/types";

export default function NavLink({ label, href }: NavItem) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors duration-150 ${
        isActive
          ? "text-[#E6EDF3]"
          : "text-slate-400 hover:text-[#E6EDF3]"
      }`}
    >
      {label}
    </Link>
  );
}
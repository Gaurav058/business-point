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
          ? "text-zinc-900 dark:text-white"
          : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      }`}
    >
      {label}
    </Link>
  );
}

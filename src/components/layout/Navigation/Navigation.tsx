import { navItems } from "@/lib/navigation";
import NavLink from "./NavLink";

export default function Navigation() {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-6">
        {navItems.map((item) => (
          <li key={item.href}>
            <NavLink href={item.href} label={item.label} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

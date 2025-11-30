import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Header() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/research", label: "Research" },
  ];

  return (
    <header className="border-b border-[#262626]">
      <nav className="max-w-[640px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-foreground font-medium hover:text-foreground/80 transition-colors"
          >
            Portfolio
          </Link>
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-muted hover:text-foreground transition-colors",
                    "text-sm"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}


import Link from "next/link"
import { NavItem } from "@/types"
import LocaleSwitcher from "./locale-switcher"

export default function DesktopNav({ navItems }: { navItems: NavItem[] }) {
  return (
    <div className="hidden xl:flex items-center gap-7 text-primary">
      {navItems.map((navItem) => (
        <Link
          key={navItem.label}
          href={navItem.href}
          target={navItem.target ? "_blank" : undefined}
          rel={navItem.target ? "noopener noreferrer" : undefined}
          className="transition-colors hover:text-foreground/80 text-foreground/60 text-sm"
        >
          {navItem.label}
        </Link>
      ))}
      <LocaleSwitcher className="w-full px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground cursor-pointer rounded-sm outline-none" />
    </div>
  )
}

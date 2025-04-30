import { NavItem } from "@/types"
import LocaleSwitcher from "./locale-switcher"
import { cn } from "@/lib/utils"
import { NavLink } from "./nav-link"

type DesktopNavbarProps = {
  className?: string
  navItems: NavItem[]
}

// TODO get the actual hight h-[115px] lg:h-[120px]

export const DesktopNav = ({ className, navItems }: DesktopNavbarProps) => {
  return (
    <nav className={cn("", className)}>
      {navItems.map((navItem, i) => (
        <NavLink key={navItem.label + " " + i} href={navItem.href}>
          {navItem.label}
        </NavLink>
      ))}
      {/* TODO Contact Button */}
      <LocaleSwitcher className="w-full px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground cursor-pointer rounded-sm outline-none" />
    </nav>
  )
}

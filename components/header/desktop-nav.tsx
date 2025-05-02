import { NavItem } from "@/types"
import LocaleSwitcher from "./locale-switcher"
import { cn } from "@/lib/utils"
import { NavLink } from "./nav-link"

type DesktopNavbarProps = {
  className?: string
  navItems: NavItem[]
}

export const DesktopNav = ({ className, navItems }: DesktopNavbarProps) => {
  return (
    <nav className={cn("", className)}>
      {navItems.map((navItem, i) => (
        <NavLink key={navItem.label + " " + i} href={navItem.href}>
          {navItem.label}
        </NavLink>
      ))}
      {/* TODO Contact Button */}
      <LocaleSwitcher variant="short" />
    </nav>
  )
}

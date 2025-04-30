"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { NavItem } from "@/types"
import Logo from "@/components/logo"
import { useEffect, useState } from "react"
import LocaleSwitcher from "./locale-switcher"
import { AlignRight } from "lucide-react"
import { NavLink } from "./nav-link"
import { usePathname } from "next/navigation"

export default function MobileNav({
  navItems,
  className,
}: {
  navItems: NavItem[]
  className?: string
}) {
  const [open, setOpen] = useState(false)
  const path = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [path])

  return (
    <div className={className}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            aria-label="Open Menu"
            className="size-10 focus-visible:ring-1 focus-visible:ring-offset-1 flex items-center justify-center"
          >
            <AlignRight className="size-10" />
            <span className="sr-only">Open Menu</span>
          </button>
        </SheetTrigger>
        <SheetContent className="overflow-y-auto max-sm:w-full pt-16">
          <SheetHeader>
            <SheetTitle>
              <Logo className="mx-auto" />
            </SheetTitle>
          </SheetHeader>
          <nav className="pt-10 pb-20 flex flex-col gap-6 items-center">
            {navItems.map((item, i) => (
              <NavLink key={item.label + i} href={item.href}>
                {item.label}
              </NavLink>
            ))}
            <LocaleSwitcher className="h-10 hover:text-decoration-none hover:opacity-50 text-lg" />
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}

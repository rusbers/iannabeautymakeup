"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const NavLink = ({
  href,
  className,
  children,
  onClick,
}: {
  href: string
  className?: string
  children: React.ReactNode
  onClick?: () => void
}) => {
  const pathname = usePathname()
  const isCurrentPathname = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        "px-3 flex items-center justify-center gap-2 transition-all duration-300 transform w-full uppercase py-3 hover:text-accent-foreground",
        isCurrentPathname && "text-accent-foreground",
        className
      )}
      onClick={() => onClick?.()}
    >
      {children}
    </Link>
  )
}

"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { i18n, type Locale } from "@/i18n-config"
import { Globe } from "lucide-react"
import { cn } from "@/lib/utils"

const LANGUAGE_MAP: Record<Locale, { label: string }> = {
  en: { label: "English" },
  ro: { label: "Română" },
}

export default function LocaleSwitcher({
  className,
  variant = "long",
}: {
  className?: string
  variant: "long" | "short"
}) {
  const pathname = usePathname()

  const getCurrentLocale = (): Locale => {
    if (!pathname) return i18n.defaultLocale
    const segments = pathname.split("/")
    return i18n.locales.includes(segments[1] as Locale)
      ? (segments[1] as Locale)
      : i18n.defaultLocale
  }

  const currentLocale = getCurrentLocale()

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/"
    const segments = pathname.split("/")
    segments[1] = locale
    return segments.join("/")
  }

  return (
    <div className="flex flex-col w-full">
      {i18n.locales
        .filter((locale) => locale !== currentLocale)
        .map((locale) => (
          <Link
            key={locale}
            href={redirectedPathname(locale)}
            className={cn(
              "flex gap-2 items-center justify-center uppercase py-3 lg:py-1.5 px-3 bg-accent hover:text-accent-foreground cursor-pointer max-w-[80%] lg:max-w-none mx-auto w-full transition-colors delay-150",
              className
            )}
          >
            <Globe className="size-4 shrink-0" />
            {variant === "short"
              ? LANGUAGE_MAP[locale].label.slice(0, 2)
              : LANGUAGE_MAP[locale].label}
          </Link>
        ))}
    </div>
  )
}

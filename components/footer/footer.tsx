"use client"

import { usePathname } from "next/navigation"

import type { QueryFooterDataResult } from "@/sanity.types"
import type { getDictionary } from "@/get-dictionary"
import { cn } from "@/lib/utils"
import { Copy } from "./copy"
import Logo from "../logo"
import { SanityIcon } from "../sanity-icon"
import Link from "next/link"
import type { Locale } from "@/i18n-config"

interface FooterProps {
  data: NonNullable<QueryFooterDataResult>
  dictionary: Awaited<ReturnType<typeof getDictionary>>
  language: Locale
}

export const Footer = ({ data, dictionary, language }: FooterProps) => {
  const pathname = usePathname()
  const isHomepage = pathname === `/${language}`
  const isContactPage = pathname === `/${language}/contact`

  return isContactPage ? (
    <Copy dictionary={dictionary} as="footer" className="container py-10" />
  ) : (
    <footer className={cn("pt-20", !isHomepage && "bg-white/5")}>
      <div className="logo-lines">
        <Logo className="mb-4 shrink-0" />
      </div>
      <div className="container">
        <div className="pb-6 flex flex-col items-center">
          <p className="max-w-[18.75rem] text-center mb-6">{data.tagline}</p>
          {data.socialMediaLinks && (
            <ul className="flex flex-wrap gap-4 items-center">
              {data.socialMediaLinks.map(({ name, label, url, icon, _id }, index) => (
                <li key={_id + " " + name + " " + index}>
                  <Link
                    href={url || "#"}
                    target="_blank"
                    prefetch={false}
                    rel="noopener noreferrer"
                    className="block p-3 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors delay-150"
                  >
                    <SanityIcon icon={icon} className="size-6 shrink-0 text-accent-foreground" />
                    <span className="sr-only">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <Copy dictionary={dictionary} as="div" />
      </div>
    </footer>
  )
}

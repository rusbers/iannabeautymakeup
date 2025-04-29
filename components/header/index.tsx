import Link from "next/link"
import Logo from "@/components/logo"
import MobileNav from "@/components/header/mobile-nav"
import DesktopNav from "@/components/header/desktop-nav"
import { getDictionary } from "@/get-dictionary"
import { Locale } from "@/i18n-config"
import { getNavItems } from "@/lib/nav-items"

export const LANGUAGE_LABELS = {
  en: (dictionary: Awaited<ReturnType<typeof getDictionary>>) => dictionary.global.english,
  ro: (dictionary: Awaited<ReturnType<typeof getDictionary>>) => dictionary.global.romanian,
} as const

export default function Header({
  lang,
  dictionary,
}: {
  lang: Locale
  dictionary: Awaited<ReturnType<typeof getDictionary>>
}) {
  const navItems = getNavItems(lang, dictionary)

  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-background/95 backdrop-blur-lg py-6 border-b">
      <div className="container max-w-screen-2xl flex items-center justify-between gap-4">
        <Link href="/" aria-label="Home Page">
          <Logo className="w-[250px] lg:w-[250px] h-auto" />
        </Link>
        <div className="hidden xl:flex gap-7 items-center justify-between">
          <DesktopNav navItems={navItems} />
        </div>
        <div className="flex items-center xl:hidden">
          <MobileNav navItems={navItems} dictionary={dictionary} lang={lang} />
        </div>
      </div>
    </header>
  )
}

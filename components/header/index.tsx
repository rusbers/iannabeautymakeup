import Link from "next/link"
import Logo from "@/components/logo"
import MobileNav from "@/components/header/mobile-nav"
import { DesktopNav } from "@/components/header/desktop-nav"
import { getDictionary } from "@/get-dictionary"
import { Locale } from "@/i18n-config"
import { getNavItems } from "@/lib/nav-items"

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
        <Link href={`/${lang}`} aria-label="Home Page">
          <Logo className="w-[250px] h-auto" />
        </Link>

        <DesktopNav className="hidden lg:flex items-center gap-6" navItems={navItems} />

        <MobileNav className="lg:hidden" navItems={navItems} />
      </div>
    </header>
  )
}

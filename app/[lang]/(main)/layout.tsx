import Header from "@/components/header"
import { DisableDraftMode } from "@/components/disable-draft-mode"
import { VisualEditing } from "next-sanity"
import { draftMode } from "next/headers"
import { SanityLive } from "@/sanity/lib/live"
import { getDictionary } from "@/get-dictionary"
import { Locale } from "@/i18n-config"
import { Suspense } from "react"
import { FooterSkeleton } from "@/components/footer/skeleton"
import { FooterServer } from "@/components/footer/footer-server"

export default async function MainLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return (
    <>
      <Header lang={lang} dictionary={dictionary} />
      <main>{children}</main>
      <SanityLive />
      {(await draftMode()).isEnabled && (
        <>
          <DisableDraftMode />
          <VisualEditing />
        </>
      )}
      <Suspense fallback={<FooterSkeleton />}>
        <FooterServer language={lang} dictionary={dictionary} />
      </Suspense>
    </>
  )
}

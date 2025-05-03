import { sanityFetch } from "@/sanity/lib/live"
import { queryFooterData } from "@/sanity/queries/footer"
import { Copy } from "./copy"
import type { Locale } from "@/i18n-config"
import { Footer } from "./footer"
import { getDictionary } from "@/get-dictionary"

export async function FooterServer({
  language,
  dictionary,
}: {
  language: Locale
  dictionary: Awaited<ReturnType<typeof getDictionary>>
}) {
  const footerData = await sanityFetch({
    query: queryFooterData,
    params: { language },
  })

  if (!footerData?.data) return <Copy dictionary={dictionary} as="footer" />

  return <Footer data={footerData.data} dictionary={dictionary} language={language} />
}

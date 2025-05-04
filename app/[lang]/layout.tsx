import type { Metadata } from "next"
import { Montserrat, Playfair_Display } from "next/font/google"
import "../globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { i18n, type Locale } from "@/i18n-config"
import { preconnect, prefetchDNS } from "react-dom"

const isProduction = process.env.NEXT_PUBLIC_SITE_ENV === "production"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  title: {
    template: "%s",
    default: "Permanent Makeup Services in Dublin and Edenderry",
  },
  keywords: [
    "permanent makeup Dublin",
    "micropigmentation Dublin",
    "brows micropigmentation",
    "lips micropigmentation",
    "permanent makeup specialist",
    "eyebrow lamination Dublin",
    "lash lamination Dublin",
    "brow lamination Dublin",
    "lip blush Dublin",
    "semi-permanent makeup Dublin",
    "micropigmentation Dublin 15",
    "permanent makeup Dublin 15",
    "brow lamination Dublin 15",
    "micropigmentation Edenderry",
    "permanent makeup Edenderry",
    "brow lamination Edenderry",
    "beauty salon Dublin 15",
    "beauty salon Edenderry",
    "micropigmentare Dublin",
    "laminarea genelor in Dublin",
    "laminarea sprincenelor in Dublin",
    "micropigmentarea buzelor in Dublin",
    "micropigmentarea sprincenelow in Dublin",
  ],
  openGraph: {
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/og-image.png`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    countryName: "Ireland",
    type: "website",
  },
  robots: !isProduction ? "noindex, nofollow" : "index, follow",
}

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
})

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  preconnect("https://cdn.sanity.io")
  prefetchDNS("https://cdn.sanity.io")
  return (
    <html lang={lang} suppressHydrationWarning>
      <link rel="icon" href="/favicon.ico" />
      <body
        className={cn(
          playfairDisplay.variable,
          montserrat.variable,
          "min-h-screen bg-background antialiased overscroll-none font-montserrat"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

import { PAGE_QUERYResult } from "@/sanity.types"
import { Locale } from "@/i18n-config"
import Hero2 from "@/components/blocks/hero/hero-2"
import { TestimonialsBlock } from "@/components/blocks/testimonials"
import { HeroBlock } from "./hero"
import { FeaturedServicesWithIconBlock } from "./featured-services-with-icon"
import { AboutMeBlock } from "./about-me"
import { GridGalleryBlock } from "./grid-gallery"
import { PriceListBlock } from "./price-list"

type Block = NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number]

const componentMap: {
  [K in Block["_type"]]: React.ComponentType<Extract<Block, { _type: K }>>
} = {
  hero: HeroBlock,
  featuredServicesWithIcon: FeaturedServicesWithIconBlock,
  aboutMe: AboutMeBlock,
  imageGridGallery: GridGalleryBlock,
  priceList: PriceListBlock,
  testimonials: TestimonialsBlock,
  // Not Used
  "hero-2": Hero2,
}

export default function Blocks({ blocks, lang }: { blocks?: Block[]; lang: Locale }) {
  return (
    <>
      {blocks?.map((block) => {
        const Component = componentMap[block._type]
        if (!Component) {
          // Fallback for development/debugging of new component types
          console.warn(`No component implemented for block type: ${block._type}`)
          return <div data-type={block._type} key={block._key} />
        }
        return <Component {...(block as any)} key={block._key} lang={lang} />
      })}
    </>
  )
}

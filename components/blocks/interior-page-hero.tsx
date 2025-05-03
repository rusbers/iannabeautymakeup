import { RichPageSubtitle } from "../rich-page-subtitle"
import { RichText } from "../rich-text"
import { SanityImage } from "../sanity-image"
import { Title } from "../title"
import type { PAGE_QUERYResult } from "@/sanity.types"

type InteriorPageHeroBlockProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number],
  { _type: "interiorPageHero" }
>

export const InteriorPageHeroBlock = ({
  title,
  richSubtitle,
  richText,
  image,
}: InteriorPageHeroBlockProps) => {
  return (
    <section className="relative flex items-center py-28">
      <div className="container relative z-10">
        <div className="flex flex-col items-center gap-y-4">
          <Title variant="centered" as="h1">
            {title}
          </Title>
          <RichPageSubtitle richText={richSubtitle} className="max-w-4xl text-center mb-6" />
          <RichText richText={richText} className="max-w-3xl text-center" />
        </div>
      </div>

      {image && (
        <>
          <SanityImage
            className="z-0 object-cover select-none absolute inset-0 object-right"
            asset={image}
            quality={100}
            fill
            alt="Background image"
            sizes="100vw"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90"></div>
        </>
      )}
    </section>
  )
}

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
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.8), rgba(0,0,0,0.9))",
            }}
          />
        </>
      )}
    </section>
  )
}

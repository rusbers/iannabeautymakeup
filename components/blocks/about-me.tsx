import { RichSubtitle } from "../rich-subtitle"
import { RichText } from "../rich-text"
import { SanityButtons } from "../sanity-buttons"
import { SanityImage } from "../sanity-image"
import type { PAGE_QUERYResult } from "@/sanity.types"
import { Title } from "../title"

type AboutMeBlockProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number],
  { _type: "aboutMe" }
>

export const AboutMeBlock = ({
  title,
  richSubtitle,
  richText,
  buttons,
  image,
}: AboutMeBlockProps) => {
  return (
    <section className="py-20 container">
      <div className="grid lg:grid-cols-[400px_auto] gap-12 items-center">
        {/* H2 */}
        {title && (
          <Title as="h2" className="lg:hidden" variant="responsive">
            {title}
          </Title>
        )}

        {/* Left Column - Image */}
        {image && (
          <div className="relative mx-auto p-2 lg:p-0">
            <div className="absolute inset-0 border-2 border-gold-800 lg:transform lg:-translate-x-2 lg:-translate-y-2 -z-10"></div>
            {/* TODO add sizes */}
            <SanityImage
              asset={image}
              width={400}
              height={400}
              sizes="(min-width: 500px) 400px, calc(86.67vw - 16px)"
            />
          </div>
        )}

        {/* Right Column - Content */}
        <div>
          {title && (
            <Title aria-hidden as="span" className="hidden lg:flex mb-6" variant="responsive">
              {title}
            </Title>
          )}

          {richSubtitle && (
            <RichSubtitle className="mb-8 text-center lg:text-left" richText={richSubtitle} />
          )}

          {richText && (
            <RichText
              className="space-y-4 font-light text-center lg:text-left text-gray-300"
              richText={richText}
            />
          )}

          {/* TODO add button icon <ChevronRight className="w-5 h-5" /> */}
          {buttons && (
            <SanityButtons
              size="lg"
              className="mt-9 justify-center lg:justify-start"
              buttons={buttons}
            />
          )}
        </div>
      </div>
    </section>
  )
}

import { RichHeroTitle } from "../rich-hero-title"
import { RichText } from "../rich-text"
import { SanityButtons } from "../sanity-buttons"

import { SanityIcon } from "../sanity-icon"
import { SanityImage } from "../sanity-image"
import type { PAGE_QUERYResult } from "@/sanity.types"

type HeroBlockProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number],
  { _type: "hero" }
>

export function HeroBlock({
  _type,
  richHeroTitle,
  icon,
  services,
  richText,
  buttons,
  image: background,
}: HeroBlockProps) {
  return (
    <section
      id={_type || "hero"}
      className="relative min-h-[calc(100vh-115px)] lg:min-h-[calc(100dvh-115px)] flex items-center py-10"
    >
      {/* Content Container */}
      <div className="container relative z-10">
        {/* Main Heading */}
        <RichHeroTitle
          className="mb-10 max-w-3xl animate-fade-up [animation-delay:100ms]"
          richText={richHeroTitle}
        />

        {/* Services List */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-10 md:mb-6 animate-fade-up [animation-delay:200ms]">
          {services?.map((service) => (
            <div key={service} className="flex items-center gap-2 group">
              <SanityIcon icon={icon} className="size-4 text-gold-500" />
              <p className="text-foreground">{service}</p>
            </div>
          ))}
        </div>

        {/* Description */}
        <RichText
          className="max-w-2xl mb-10 animate-fade-up [animation-delay:300ms]"
          richText={richText}
        />

        {/* CTAs */}
        <SanityButtons
          buttons={buttons}
          buttonClassName="w-full sm:w-auto"
          size="lg"
          className="w-full sm:w-fit grid gap-2 sm:grid-flow-col lg:justify-start animate-fade-up [animation-delay:400ms]"
        />
      </div>

      {/* Background Image with Overlay */}
      {background && (
        <>
          <SanityImage
            aria-hidden
            priority
            asset={background}
            fill
            className="z-0 object-cover select-none absolute inset-0 object-right"
            sizes="(min-width: 640px) 99.24vw, (min-width: 520px) calc(-37vw + 1079px), (min-width: 360px) calc(-67.86vw + 1225px), calc(-82.5vw + 1361px)"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90"></div>
        </>
      )}
    </section>
  )
}

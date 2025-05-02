import type { PAGE_QUERYResult } from "@/sanity.types"
import { SanityImage } from "../sanity-image"
import { SanityButtons } from "../sanity-buttons"
import { Title } from "../title"
import { RichSubtitle } from "../rich-subtitle"

type PriceListBlockProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number],
  { _type: "priceList" }
>

export function PriceListBlock({
  title,
  richSubtitle,
  prices,
  buttons,
  image,
}: PriceListBlockProps) {
  return (
    <section id="pricing-list-block" className="py-20 bg-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-14 items-center lg:container">
        <div className="max-lg:container lg:pr-0">
          <Title variant="responsive" className="mb-4">
            {title}
          </Title>
          <RichSubtitle richText={richSubtitle} className="mb-12 text-center lg:text-left" />
          {prices && (
            <div className="max-w-3xl">
              <ul className="grid grid-cols-1 gap-6">
                {prices.map((categories) => {
                  return (
                    categories.services &&
                    categories.services.map((service, i) => (
                      <li key={i} className="group flex items-center justify-between gap-4 text-lg">
                        <div className="flex-1 flex items-center gap-2">
                          <h3 className="font-montserrat font-light lg:text-xl">{service.name}</h3>
                          <div className="flex-1 border-b border-dashed border-gray-700 mx-4" />
                        </div>
                        <span className="font-medium text-secondary-foreground">
                          €{service.price}
                        </span>
                      </li>
                    ))
                  )
                })}
              </ul>
            </div>
          )}

          {buttons && (
            <SanityButtons className="mt-12 mx-auto lg:mx-0" size="lg" buttons={buttons} />
          )}
        </div>
        {image && (
          <div className="relative size-full">
            <div className="absolute inset-0 bg-black/15 z-10"></div>
            {/* TODO it doesn't have the overlay applied because the darkener layer has a higher z-index */}
            <SanityImage
              className="w-full h-full object-cover object-right sm:hidden lg:inline-block"
              fill
              asset={image}
            />
          </div>
        )}
      </div>
    </section>
  )
}

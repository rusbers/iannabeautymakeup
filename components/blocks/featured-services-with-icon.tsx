import type { PAGE_QUERYResult } from "@/sanity.types"
import { SanityIcon } from "../sanity-icon"
import { Heading, Text } from "../typography"
import { SanityButtons } from "../sanity-buttons"

type FeaturedServicesWithIconBlockProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number],
  { _type: "featuredServicesWithIcon" }
>

export function FeaturedServicesWithIconBlock({
  title,
  items,
}: FeaturedServicesWithIconBlockProps) {
  return (
    <section className="py-20 bg-white/5">
      <h2 className="sr-only">{title}</h2>
      <div className="container">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items?.map((service, i) => (
            <li key={i} className="flex items-start gap-4">
              <SanityIcon className="shrink-0 size-[3rem] text-amber-300" icon={service.svgIcon} />
              <div className="flex flex-col h-full">
                <Heading className="text-xl sm:text-2xl leading-snug mb-2" as="h3">
                  {service.title}
                </Heading>
                <Text className="max-w-sm text-gray-300 mb-auto">{service.description}</Text>
                <SanityButtons
                  className="items-start"
                  buttonClassName="min-w-auto"
                  buttons={service.buttons}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

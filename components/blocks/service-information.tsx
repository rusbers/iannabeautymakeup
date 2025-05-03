import { cn } from "@/lib/utils"
import { stegaClean } from "next-sanity"

import type { SanityImageProps } from "@/types"
import type { PAGE_QUERYResult } from "@/sanity.types"

import { RichText } from "../rich-text"
import { SanityButtons } from "../sanity-buttons"
import { SanityIcon } from "../sanity-icon"
import { SanityImage } from "../sanity-image"
import { Heading } from "../typography"

type ServiceInfoBlockProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number],
  { _type: "serviceInformation" }
>

const MAX_HEALING_IMGS = 8
const MAX_PRESENTATIVE_IMGS = 2

const ServiceImagesContainer = ({
  gallery,
  isHealingProcess = false,
}: {
  gallery: { image: SanityImageProps; caption: string | null }[] | null
  isHealingProcess?: boolean | null
}) => {
  const maxImages = isHealingProcess ? MAX_HEALING_IMGS : MAX_PRESENTATIVE_IMGS
  const slicedImages = gallery?.slice(0, maxImages)

  if (!gallery?.length) return null

  if (!isHealingProcess) {
    return (
      <div className="max-lg:flex gap-4 lg:flex-col">
        {slicedImages?.map((image, i) => (
          <div
            key={i}
            className="mb-8 lg:mb-0 relative max-lg:w-full lg:max-w-[60%] lg:even:justify-self-end lg:even:-mt-20 shadow-lg"
          >
            <SanityImage
              className="object-cover w-full"
              asset={image.image}
              sizes="(min-width: 1360px) 284px, (min-width: 1040px) calc(19vw + 29px), calc(48.89vw - 21px)"
              width={480}
              height={640}
            />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex max-lg:overflow-x-auto gap-4 snap-x lg:grid lg:grid-cols-2 lg:gap-6 h-fit pb-4  mb-4 lg:mb-0">
      {slicedImages?.map((image, i) => (
        <figure
          className="flex-shrink-0 flex flex-col items-center gap-2 w-[220px] snap-start lg:w-full"
          key={i}
        >
          <div className="w-full lg:min-w-[180px] lg:max-w-[250px] lg:mx-auto">
            <SanityImage
              asset={image.image}
              width={400}
              height={400}
              className="object-cover aspect-square w-full"
              sizes="(min-width: 1380px) 224px, (min-width: 1040px) calc(13.75vw + 37px), 220px"
            />
          </div>
          <figcaption className="text-sm text-center">{image.caption}</figcaption>
        </figure>
      ))}
    </div>
  )
}

export const ServiceInfoBlock = (props: ServiceInfoBlockProps) => {
  const {
    title,
    id,
    introduction,
    service,
    treatmentProcess,
    isHealingProcess,
    gallery,
    buttons,
    renderImageFirstOnDesktop,
    useLighterBg,
  } = props

  return (
    <section
      id={stegaClean(id) || ""}
      className={cn("py-12 md:py-20", useLighterBg && "bg-white/5 backdrop-blur-sm")}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className={cn(
            "grid lg:grid-cols-[2fr_1.3fr] gap-8 items-start",
            !isHealingProcess && "items-center",
            renderImageFirstOnDesktop && "lg:grid-cols-[1.3fr_2fr]"
          )}
        >
          <div className="space-y-6">
            <div className="max-w-xl mb-4 space-y-6">
              <Heading as="h2" className="text-3xl md:text-4xl tracking-wide text-gold-500">
                {title}
              </Heading>
              <RichText richText={introduction} />
            </div>

            {service && (
              <div className="flex flex-col items-start gap-4">
                {service.map((serv, i) => (
                  <div key={i} className="lg:max-w-prose">
                    <div className="space-y-2">
                      <h2 className="font-montserrat text-pretty text-foreground font-medium text-lg leading-[1.2]">
                        {serv.serviceName}
                      </h2>
                      <RichText className="text-gray-300 space-y-1" richText={serv.description} />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {treatmentProcess &&
              treatmentProcess.map((step, i) => (
                <div key={i} className="flex items-start gap-2">
                  <SanityIcon className="size-5 text-amber-300 shrink-0" icon={step.icon} />

                  <div className="lg:max-w-prose space-y-2">
                    <h3 className="font-montserrat text-pretty text-foreground font-medium text-lg leading-[1.2]">
                      {step.title}
                    </h3>
                    <RichText className="text-gray-300 space-y-1" richText={step.description} />
                  </div>
                </div>
              ))}

            <SanityButtons className="lg:block hidden pt-4 lg:pl-7" size="lg" buttons={buttons} />
          </div>
          <div
            className={cn("max-lg:overflow-x-auto", renderImageFirstOnDesktop && "lg:order-first")}
          >
            {gallery && (
              <ServiceImagesContainer
                // @ts-ignore
                gallery={gallery}
                isHealingProcess={isHealingProcess}
              />
            )}

            <SanityButtons buttons={buttons} className="lg:hidden" size="lg" />
          </div>
        </div>
      </div>
    </section>
  )
}

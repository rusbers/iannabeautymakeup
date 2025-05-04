import Link from "next/link"
import { RichText } from "../rich-text"
import { RichTitle } from "../rich-title"
import { SanityImage } from "../sanity-image"
import type { PAGE_QUERYResult } from "@/sanity.types"
import { SanityIcon } from "../sanity-icon"

type ContactBlockProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number],
  { _type: "contact" }
>

export const ContactBlock = ({
  richTitle,
  richText,
  locationsBlock,
  image,
  socialMediaLinks,
}: ContactBlockProps) => {
  return (
    <section className="container max-w-screen-xl py-10 lg:py-20 grid lg:grid-cols-[auto_1fr] gap-8">
      <div className="lg:order-last">
        <div className="space-y-4 text-center lg:text-left max-w-prose mx-auto">
          <RichTitle className="text-center mb-8 lg:text-start" richText={richTitle} />
          <RichText className="space-y-4" richText={richText} />
          {socialMediaLinks && (
            <ul className="flex justify-center lg:justify-start flex-wrap gap-4 items-center">
              {socialMediaLinks.map(({ name, label, url, icon, _id }, index) => (
                <li key={_id + " " + name + " " + index}>
                  <Link
                    href={url || "#"}
                    target="_blank"
                    prefetch={false}
                    rel="noopener noreferrer"
                    className="block p-3 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors delay-150"
                  >
                    <SanityIcon icon={icon} className="size-6 shrink-0 text-accent-foreground" />
                    <span className="sr-only">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {locationsBlock?.locations && locationsBlock.title && (
            <>
              <h2 className="mb-2 text-lg">{locationsBlock?.title}</h2>
              <ul className="font-montserrat text-pretty text-gray-300 text-base flex items-center max-lg:justify-center">
                {locationsBlock?.locations?.map((location, index) => (
                  <li key={location.name} className="flex items-center">
                    {location.name}
                    {locationsBlock.locations && index < locationsBlock.locations.length - 1 && (
                      <span className="mx-4 size-2 rounded-full bg-foreground/50"></span>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
      {image && (
        <div className="relative mx-auto p-2 lg:p-0 self-start">
          <div className="absolute inset-0 border-2 border-gold-800 lg:transform lg:-translate-x-2 lg:-translate-y-2  -z-10"></div>
          <SanityImage
            asset={image}
            width={400}
            height={400}
            sizes="(min-width: 500px) 400px, calc(86.67vw - 16px)"
          />
        </div>
      )}
    </section>
  )
}

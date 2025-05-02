import { cn } from "@/lib/utils"
import { SanityImage } from "../sanity-image"
import type { PAGE_QUERYResult } from "@/sanity.types"

const MAX_IMAGES = 7

type ImagesGridLinkProps = {
  children: React.ReactNode
  link: string | null
  className?: string
}

const ImagesGridLink = ({ children, link, className }: ImagesGridLinkProps) => (
  <a
    // TODO add aria label field
    aria-label=""
    href={link || "#"}
    target="_blank"
    rel="noopener noreferrer"
    className={cn("relative group overflow-hidden", className)}
  >
    <div className="relative aspect-square">{children}</div>
  </a>
)

type GridGalleryBlockProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number],
  { _type: "imageGridGallery" }
>

export const GridGalleryBlock = ({ title, link, images }: GridGalleryBlockProps) => {
  if (images?.length === 0) {
    return null
  }
  return (
    <section className="lg:max-w-screen-2xl mx-auto lg:px-8">
      <h2 className="sr-only">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {images?.slice(0, MAX_IMAGES).map((image, index) => (
          <ImagesGridLink
            key={image.image._key + index}
            link={link}
            className={cn(index === 2 && " col-span-2 row-span-2")}
          >
            <SanityImage
              asset={image.image}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </ImagesGridLink>
        ))}
      </div>
    </section>
  )
}

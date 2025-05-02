import { getImageDimensions } from "@sanity/asset-utils"
import Image, { type ImageProps as NextImageProps } from "next/image"
import type { SanityImageProps } from "@/types"
import { urlFor } from "@/sanity/lib/image"
import { cn } from "@/lib/utils"

type ImageProps = {
  asset: SanityImageProps
  alt?: string
} & Omit<NextImageProps, "alt" | "src">

function getBlurDataURL(asset: SanityImageProps) {
  if (asset?.blurData) {
    return {
      blurDataURL: asset.blurData,
      placeholder: "blur" as const,
    }
  }
  return {}
}

export function SanityImage({
  asset,
  alt,
  width,
  height,
  className,
  quality = 75,
  fill,
  ...props
}: ImageProps) {
  if (!asset?.asset) return null
  const dimensions = getImageDimensions(asset.asset)

  const url = urlFor({ ...asset, _id: asset?.asset?._ref })
    .size(Number(width ?? dimensions.width), Number(height ?? dimensions.height))
    .dpr(2)
    .auto("format")
    .quality(Number(quality))
    .url()

  // Base image props
  const imageProps = {
    alt: alt ?? asset.imageDescription ?? "Image",
    "aria-label": alt ?? asset.imageDescription ?? "Image",
    src: url,
    className: cn(className),
    sizes: "(max-width: 640px) 75vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw",
    ...getBlurDataURL(asset),
    ...props,
  }

  // Add width and height only if fill is not true
  if (!fill) {
    return (
      <Image
        {...imageProps}
        width={width ?? dimensions.width}
        height={height ?? dimensions.height}
      />
    )
  }

  return <Image {...imageProps} fill={fill} />
}

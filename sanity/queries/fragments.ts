export const imageFragment = /* groq */ `
  image{
    ...,
    "alt": imageDescription,
    "blurData": asset->metadata.lqip,
    "dominantColor": asset->metadata.palette.dominant.background,
  }
`

export const imagesFragment = /* groq */ `
  images[]{
    "image": {
      ...,
      "alt": coalesce(asset->altText, asset->originalFilename, "Image-Broken"),
      "blurData": asset->metadata.lqip,
      "dominantColor": asset->metadata.palette.dominant.background,
    },
  }
`
export const sanityImgFragment = /* groq */ `
  image{
    ...,
    "preview": asset->metadata.lqip,
    "dominantColor": asset->metadata.palette.dominant.background,
    "id": asset._ref,
    hotspot { 
      x, 
      y 
    },
    crop {
      bottom,
      left,
      right,
      top,
    }
  }
`

export const buttonsFragment = /* groq */ `
  buttons[]{
    text,
    variant,
    _key,
    _type,
    "openInNewTab": url.openInNewTab,
    "anchor": url.anchor->idItem,
    "href": select(
      url.type == "internal" => url.internal->slug.current,
      url.type == "external" => url.external,
      url.href
    ),
  }
`

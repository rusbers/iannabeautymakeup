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
      "alt": imageDescription,
      "blurData": asset->metadata.lqip,
      "dominantColor": asset->metadata.palette.dominant.background,
    },
  }
`

export const buttonsFragment = /* groq */ `
  buttons[] {
    text,
    variant,
    _key,
    _type,
    "openInNewTab": url.openInNewTab,
    "anchor": url.anchor->idItem,
    "href": select(
      url.type == "internal" && defined(url.anchor->idItem) && url.internal->slug.current != "index" =>
        "/" + $language + "/" + url.internal->slug.current + "#" + url.anchor->idItem,
      url.type == "internal" && defined(url.anchor->idItem) && url.internal->slug.current == "index" =>
        "/" + $language + "#" + url.anchor->idItem,
      url.type == "internal" && url.internal->slug.current == "index" =>
        "/" + $language,
      url.type == "internal" =>
        "/" + $language + "/" + url.internal->slug.current,
      url.type == "external" =>
        url.external
    )
  }
`

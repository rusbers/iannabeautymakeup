import { imagesFragment } from "./fragments"

// @sanity-typegen-ignore
export const imageGridGalleryBlockQuery = /* groq */ `
  _type == "imageGridGallery" => {
    _type,
    _key,
    title,
    ${imagesFragment},
    link,
  }
`

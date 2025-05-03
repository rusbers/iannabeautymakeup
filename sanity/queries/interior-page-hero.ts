import { imageFragment } from "./fragments"

// @sanity-typegen-ignore
export const interiorPageHeroBlockQuery = /* groq */ `
  _type == "interiorPageHero" => {
    _type,
    _key,
    title,
    richSubtitle,
    richText,
    ${imageFragment},
  }
`

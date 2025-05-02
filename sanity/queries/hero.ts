import { buttonsFragment, imageFragment } from "./fragments"

// @sanity-typegen-ignore
export const heroBlockQuery = /* groq */ `
  _type == "hero" => {
    _type,
    _key,
    richHeroTitle,
    richText,
    icon,
    services,
    ${buttonsFragment},
    ${imageFragment},
  }
`

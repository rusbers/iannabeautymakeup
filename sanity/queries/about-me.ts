import { buttonsFragment, imageFragment } from "./fragments"

// @sanity-typegen-ignore
export const aboutMeBlockQuery = /* groq */ `
  _type == "aboutMe" => {
    _type,
    _key,
    title,
    richSubtitle,
    richText,
    ${buttonsFragment},
    ${imageFragment},
  }
`

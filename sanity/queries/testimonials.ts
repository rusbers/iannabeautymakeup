import { groq } from "next-sanity"
import { buttonsFragment } from "./fragments"

// @sanity-typegen-ignore
export const testimonialsBlockQuery = groq`
  _type == "testimonials" => {
    _type,
    _key,
    title,
    richSubtitle,
    testimonials[]->{
      username,
      richText,
    },
    ${buttonsFragment},
  }
`

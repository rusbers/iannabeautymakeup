import { buttonsFragment } from "./fragments"

// @sanity-typegen-ignore
export const featuredServicesBlockQuery = /* groq */ `
  _type == "featuredServicesWithIcon" => {
    _type,
    _key,
    title,
    items[]{
      _type,
      _key,
      title,
      svgIcon,
      description,
      ${buttonsFragment},
    }
  }
`

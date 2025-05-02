import { buttonsFragment, imageFragment } from "./fragments"

// @sanity-typegen-ignore
export const priceListBlockQuery = /* groq */ `
  _type == "priceList" => {
    _type,
    _key,
    title,
    richSubtitle,
    prices[]->{
      _id,
      category,
      services[]{
        name,
        price,
      }
    },
    ${buttonsFragment},
    ${imageFragment},
  }
`

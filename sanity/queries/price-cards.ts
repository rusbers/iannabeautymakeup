import { buttonsFragment } from "./fragments"

// sanity/queries/hero.ts
export const priceCardsBlockQuery = /* groq */ `
  _type == "priceCards" => {
    _type,
    _key,
    title,
    prices[]->{
      _id,
      category,
      services[]{
        name,
        price,
        touchUps[]{
          timeframe,
          price
        }
      }
    },
    ${buttonsFragment},
  }
`

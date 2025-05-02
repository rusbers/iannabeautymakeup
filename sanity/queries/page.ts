import { groq } from "next-sanity"
import { hero2Query } from "./hero/hero-2"
import { carousel2Query } from "./carousel/carousel-2"
import { heroBlockQuery } from "./hero"
import { featuredServicesBlockQuery } from "./featured-services-with-icon"

export const PAGE_QUERY = groq`
  *[_type == "page" && slug.current == $slug && language == $language][0]{
    blocks[]{
      ${heroBlockQuery},
      ${featuredServicesBlockQuery},
      ${hero2Query},
      ${carousel2Query},
    },
    meta_title,
    meta_description,
    noindex,
    ogImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          }
        }
      },
    }
  }
`

export const PAGES_SLUGS_QUERY = groq`*[_type == "page" && defined(slug) && language == $language]{slug}`

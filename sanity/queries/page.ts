import { groq } from "next-sanity"
import { heroBlockQuery } from "./hero"
import { featuredServicesBlockQuery } from "./featured-services-with-icon"
import { aboutMeBlockQuery } from "./about-me"
import { imageGridGalleryBlockQuery } from "./image-grid-gallery"
import { priceListBlockQuery } from "./price-list"
import { testimonialsBlockQuery } from "./testimonials"
import { interiorPageHeroBlockQuery } from "./interior-page-hero"
import { serviceInformationBlock } from "./service-information"
import { priceCardsBlockQuery } from "./price-cards"

export const PAGE_QUERY = groq`
  *[_type == "page" && slug.current == $slug && language == $language][0]{
    blocks[]{
      ${heroBlockQuery},
      ${featuredServicesBlockQuery},
      ${aboutMeBlockQuery},
      ${imageGridGalleryBlockQuery},
      ${priceListBlockQuery},
      ${testimonialsBlockQuery},
      ${interiorPageHeroBlockQuery},
      ${serviceInformationBlock},
      ${priceCardsBlockQuery},
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

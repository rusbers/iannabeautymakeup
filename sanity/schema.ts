import { type SchemaTypeDefinition } from "sanity"
// documents
import { page } from "./schemas/documents/page"
import { testimonial } from "./schemas/documents/testimonial"
import { price } from "./schemas/documents/price"
import { socialMedia } from "./schemas/documents/social-media"
import { settings } from "./schemas/documents/settings"

// Schema UI shared objects
import { customUrl } from "./schemas/blocks/shared/custom-url"
import { button } from "./schemas/blocks/shared/button"
import { richHeroTitle, richSubtitle, richText } from "./schemas/blocks/shared/rich-text"

// Schema UI objects
import { hero } from "./schemas/blocks/hero"
import { featuredServicesWithIcon } from "./schemas/blocks/featured-services-with-icon"
import { aboutMe } from "./schemas/blocks/about-me"
import { priceList } from "./schemas/blocks/price-list"
import { testimonials } from "./schemas/blocks/testimonials"
import { imageGridGallery } from "./schemas/blocks/image-grid-gallery"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // documents
    page,
    price,
    testimonial,
    settings,
    socialMedia,
    // shared objects
    customUrl,
    button,
    richHeroTitle,
    richText,
    richSubtitle,
    // blocks
    hero,
    featuredServicesWithIcon,
    aboutMe,
    priceList,
    testimonials,
    imageGridGallery,
  ],
}

import { type SchemaTypeDefinition } from "sanity"
// documents
import { page } from "./schemas/documents/page"
import { testimonial } from "./schemas/documents/testimonial"
import { price } from "./schemas/documents/price"
import { socialMedia } from "./schemas/documents/social-media"
import { settings } from "./schemas/documents/settings"
import { idEntry } from "./schemas/documents/id-entry"

// Schema UI shared objects
import { customUrl } from "./schemas/blocks/shared/objects/custom-url"
import { button } from "./schemas/blocks/shared/objects/button"
import {
  richHeroTitle,
  richSubtitle,
  richText,
  richTitle,
} from "./schemas/blocks/shared/objects/rich-text"

// Schema UI objects
import { hero } from "./schemas/blocks/hero"
import { featuredServicesWithIcon } from "./schemas/blocks/featured-services-with-icon"
import { aboutMe } from "./schemas/blocks/about-me"
import { priceList } from "./schemas/blocks/price-list"
import { testimonials } from "./schemas/blocks/testimonials"
import { imageGridGallery } from "./schemas/blocks/image-grid-gallery"
import { interiorPageHero } from "./schemas/blocks/interior-page-hero"
import { serviceInformation } from "./schemas/blocks/service-information"
import { priceCards } from "./schemas/blocks/price-cards"
import { contact } from "./schemas/blocks/contact"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // documents
    page,
    price,
    testimonial,
    settings,
    socialMedia,
    idEntry,
    // shared objects
    customUrl,
    button,
    richHeroTitle,
    richText,
    richSubtitle,
    richTitle,
    // blocks
    hero,
    featuredServicesWithIcon,
    aboutMe,
    priceList,
    testimonials,
    imageGridGallery,
    interiorPageHero,
    serviceInformation,
    priceCards,
    contact,
  ],
}

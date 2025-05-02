import { type SchemaTypeDefinition } from "sanity"
// documents
import page from "./schemas/documents/page"
import testimonial from "./schemas/documents/testimonial"
import { price } from "./schemas/documents/price"

// Schema UI shared objects
import blockContent from "./schemas/blocks/shared/block-content"
import link from "./schemas/blocks/shared/link"
import { colorVariant } from "./schemas/blocks/shared/color-variant"
import { buttonVariant } from "./schemas/blocks/shared/button-variant"
import sectionPadding from "./schemas/blocks/shared/section-padding"
// Schema UI objects
import hero2 from "./schemas/blocks/hero/hero-2"
import { testimonials } from "./schemas/blocks/testimonials"
import { settings } from "./schemas/documents/settings"
import { socialMedia } from "./schemas/documents/social-media"
import { richHeroTitle, richSubtitle, richText } from "./schemas/blocks/shared/rich-text"
import { hero } from "./schemas/blocks/hero/hero"
import { button } from "./schemas/blocks/shared/button"
import { customUrl } from "./schemas/blocks/shared/custom-url"
import { featuredServicesWithIcon } from "./schemas/blocks/featured-services-with-icon"
import { aboutMe } from "./schemas/blocks/about-me"
import { imageGridGallery } from "./schemas/blocks/image-grid-gallery"
import { priceList } from "./schemas/blocks/price-list"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // documents
    page,
    price,
    testimonial,
    settings,
    socialMedia,
    // shared objects
    blockContent,
    link,
    colorVariant,
    buttonVariant,
    sectionPadding,
    customUrl,
    button,
    richHeroTitle,
    richText,
    richSubtitle,
    // blocks
    hero,
    featuredServicesWithIcon,
    aboutMe,
    imageGridGallery,
    priceList,
    testimonials,
    // not used
    hero2,
  ],
}

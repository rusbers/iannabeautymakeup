import { type SchemaTypeDefinition } from "sanity"
// documents
import page from "./schemas/documents/page"
import testimonial from "./schemas/documents/testimonial"

// Schema UI shared objects
import blockContent from "./schemas/blocks/shared/block-content"
import link from "./schemas/blocks/shared/link"
import { colorVariant } from "./schemas/blocks/shared/color-variant"
import { buttonVariant } from "./schemas/blocks/shared/button-variant"
import sectionPadding from "./schemas/blocks/shared/section-padding"
// Schema UI objects
import hero2 from "./schemas/blocks/hero/hero-2"
import carousel2 from "./schemas/blocks/carousel/carousel-2"
import { settings } from "./schemas/documents/settings"
import { socialMedia } from "./schemas/documents/social-media"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // documents
    page,
    testimonial,
    settings,
    socialMedia,
    // shared objects
    blockContent,
    link,
    colorVariant,
    buttonVariant,
    sectionPadding,
    // blocks
    hero2,
    carousel2,
  ],
}

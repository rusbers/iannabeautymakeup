import { Grid3x3 } from "lucide-react"
import { defineField, defineType } from "sanity"
import { galleryField, titleField } from "./shared/common"

export const imageGridGallery = defineType({
  name: "imageGridGallery",
  title: "Image Gallery",
  icon: Grid3x3,
  type: "object",
  fields: [
    {
      ...titleField,
      description: "This title will be hidden on the website, but it is needed for SEO.",
      validation: (Rule) => Rule.required(),
    },
    {
      ...galleryField,
      description:
        "You must provide exactly 7 images. The fourth images will be rendered bigger than others.",
      validation: (Rule) =>
        Rule.required().min(7).max(7).error("You must provide exactly 7 images."),
    },
    defineField({
      name: "link",
      title: "Link",
      type: "url",
      description:
        "Clicking any of images will redirect users to this link. It is recommended to use the link to your Instagram or TikTok account.",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "images.0.asset",
    },
    prepare({ media }) {
      return {
        title: "Images Grid",
        subtitle: "Grid of 7 images",
        media,
      }
    },
  },
})

import { Star } from "lucide-react"
import { defineType } from "sanity"
import { imageField, richSubtitleField, richTextField, titleField } from "./shared/common-fields"

export const interiorPageHero = defineType({
  name: "interiorPageHero",
  title: "Interior Page Intro",
  icon: Star,
  type: "object",
  fields: [
    { ...titleField, validation: (Rule) => Rule.required() },
    { ...richSubtitleField, validation: (Rule) => Rule.required() },
    { ...richTextField, validation: (Rule) => Rule.required() },
    { ...imageField, title: "Background" },
  ],
  preview: {
    select: {
      image: "image",
    },
    prepare: ({ image }) => ({
      title: "Interior Page Intro",
      media: image,
    }),
  },
})

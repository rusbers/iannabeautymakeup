import { defineField, defineType } from "sanity"
import { Quote } from "lucide-react"
import { buttonsField, richSubtitleField, titleField } from "./shared/common"

export const testimonials = defineType({
  name: "testimonials",
  type: "object",
  title: "Testimonials",
  icon: Quote,
  fields: [
    titleField,
    richSubtitleField,
    defineField({
      name: "testimonials",
      type: "array",
      of: [
        {
          name: "testimonial",
          type: "reference",
          to: [{ type: "testimonial" }],
          options: {
            filter: ({ document }) => ({
              filter: "language == $lang",
              params: { lang: document.language },
            }),
          },
        },
      ],
    }),
    buttonsField,
  ],
  preview: {
    select: {
      title: "testimonial.0.name",
    },
    prepare({ title }) {
      return {
        title: "Testimonials Carousel",
        subtitle: title,
      }
    },
  },
})

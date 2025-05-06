import { defineField, defineType } from "sanity"
import { Quote } from "lucide-react"
import { buttonsField, richSubtitleField, titleField } from "./shared/common-fields"

export const testimonials = defineType({
  name: "testimonials",
  type: "object",
  title: "Testimonials",
  icon: Quote,
  fields: [
    { ...titleField, validation: (Rule) => Rule.required() },
    { ...richSubtitleField, validation: (Rule) => Rule.required() },
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
      validation: (Rule) => Rule.required(),
    }),
    {
      ...buttonsField,
      description: "Add only one button",
      validation: (Rule) => Rule.required().max(1),
    },
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

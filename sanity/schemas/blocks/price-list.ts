import { List } from "lucide-react"
import { defineArrayMember, defineField, defineType } from "sanity"
import { buttonsField, imageField, richSubtitleField, titleField } from "./shared/common-fields"

export const priceList = defineType({
  name: "priceList",
  title: "Price List",
  icon: List,
  type: "object",
  fields: [
    { ...titleField, validation: (Rule) => Rule.required() },
    { ...richSubtitleField, validation: (Rule) => Rule.required() },
    defineField({
      name: "prices",
      title: "Prices",
      description: "Choose which pricing categories to display.",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "price" }],
          options: {
            disableNew: true,
          },
        }),
      ],
      validation: (Rule) => Rule.required().min(1).unique(),
    }),
    {
      ...buttonsField,
      description: "Add only one button",
      validation: (Rule) => Rule.required().max(1),
    },
    { ...imageField, validation: (Rule) => Rule.required() },
  ],
  preview: {
    select: {
      image: "image",
    },
    prepare: ({ image }) => ({
      title: "Price List",
      media: image,
    }),
  },
})

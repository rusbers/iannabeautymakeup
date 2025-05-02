import { List } from "lucide-react"
import { defineArrayMember, defineField, defineType } from "sanity"
import { buttonsField, imageField, richSubtitleField, titleField } from "./shared/common"

export const priceList = defineType({
  name: "priceList",
  title: "Price List",
  icon: List,
  type: "object",
  fields: [
    titleField,
    richSubtitleField,
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
    buttonsField,
    imageField,
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

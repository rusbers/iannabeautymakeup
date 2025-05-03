import { StickyNote } from "lucide-react"
import { defineArrayMember, defineField, defineType } from "sanity"
import { buttonsField, titleField } from "./shared/common-fields"

export const priceCards = defineType({
  name: "priceCards",
  title: "Price Cards",
  icon: StickyNote,
  type: "object",
  fields: [
    {
      ...titleField,
      description: "Will be visually hidden on website, but it is important for SEO",
    },
    defineField({
      name: "touchUpTitle",
      title: "Touch-Up Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "prices",
      title: "Prices",
      description: "Choose which pricing categories to display in this section of the website.",
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
  ],
  preview: {
    prepare: () => ({
      title: "Price Cards",
      subtitle: "Displays cards with full prices including touch-ups",
    }),
  },
})

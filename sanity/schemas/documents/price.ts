import { orderRankField } from "@sanity/orderable-document-list"
import { Euro } from "lucide-react"
import { defineArrayMember, defineField, defineType } from "sanity"

export const price = defineType({
  name: "price",
  title: "Price",
  icon: Euro,
  type: "document",
  fields: [
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: false,
      initialValue: "en",
      options: {
        list: [
          { title: "English", value: "en" },
          { title: "Romanian", value: "ro" },
        ],
      },
    }),
    defineField({
      name: "category",
      title: "Category",
      description: "The category of the service, e.g., Brows, Lips, etc.",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "services",
      title: "Services",
      description: "List of services offered under this category, e.g. Brows Powder, etc.",
      type: "array",
      validation: (Rule) => Rule.required().min(1),
      of: [
        defineArrayMember({
          type: "object",
          title: "Service",
          icon: Euro,
          fields: [
            defineField({
              name: "name",
              title: "Service Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "price",
              title: "Price",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "touchUps",
              title: "Tocuh-Up Options",
              type: "array",
              of: [
                defineArrayMember({
                  type: "object",
                  title: "Touch-Up Option",
                  icon: Euro,
                  fields: [
                    defineField({
                      name: "timeframe",
                      title: "Timeframe",
                      type: "string",
                      description: "e.g. '6-8 weeks'",
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: "price",
                      title: "Maintenance Price",
                      type: "string",
                      validation: (Rule) => Rule.required().min(0),
                    }),
                  ],
                  preview: {
                    select: {
                      title: "timeframe",
                      price: "price",
                    },
                    prepare({ title, price }) {
                      const formattedPrice = price ? price : "N/A"
                      return {
                        title: `${title || "Untitled Service"}`,
                        subtitle: `Price: ${formattedPrice}`,
                      }
                    },
                  },
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: "name",
              price: "price",
            },
            prepare({ title, price }) {
              const formattedPrice = price ? price : "N/A"
              return {
                title: `${title || "Untitled Service"}`,
                subtitle: `Price: ${formattedPrice}`,
              }
            },
          },
        }),
      ],
    }),
    orderRankField({ type: "price" }),
  ],
  preview: {
    select: {
      title: "category",
      language: "language",
    },
    prepare(selection) {
      const { title, language } = selection
      return {
        title,
        subtitle: `${language}`,
      }
    },
  },
})

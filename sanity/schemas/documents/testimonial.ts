import { defineField, defineType } from "sanity"
import { orderRankField } from "@sanity/orderable-document-list"
import { richTextField } from "../blocks/shared/common-fields"
import { Star } from "lucide-react"

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  icon: Star,
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
      name: "username",
      type: "string",
      title: "Username",
      description: "The instagram username of the client",
      validation: (Rule) => Rule.required().error("Username is required"),
    }),
    { ...richTextField, title: "Content" },
    orderRankField({ type: "testimonial" }),
  ],

  preview: {
    select: {
      title: "username",
      language: "language",
      content: "richText",
    },
    prepare({ title, language, content }) {
      // @ts-ignore
      const plainText = content?.[0]?.children?.map((child) => child.text).join("") || ""
      return {
        title,
        subtitle: `${language}: "${plainText}"`,
      }
    },
  },
})

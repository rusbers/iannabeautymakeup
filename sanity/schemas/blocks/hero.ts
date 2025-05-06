import { Star } from "lucide-react"
import { defineArrayMember, defineField, defineType } from "sanity"
import { buttonsField, iconPickerField, imageField, richTextField } from "./shared/common-fields"

export const hero = defineType({
  name: "hero",
  title: "Website Intro",
  icon: Star,
  type: "object",
  fieldsets: [
    {
      name: "featuredServices",
      title: "Featured Services",
      description:
        "Highlight up to 3 key services with icons. These will be shown prominently in the website intro section.",
    },
  ],
  fields: [
    defineField({
      name: "richHeroTitle",
      title: "Title",
      type: "richHeroTitle",
      description: "The main headline that welcomes visitors to your site.",
      validation: (Rule) => Rule.required(),
    }),
    {
      ...richTextField,
      description: "A brief introductory message or supporting text below the headline.",
      validation: (Rule) => Rule.required(),
    },
    {
      ...iconPickerField,
      fieldset: "featuredServices",
      description: "Choose an icon to represent the featured services section.",
      validation: (Rule) => Rule.required(),
    },
    defineField({
      name: "services",
      title: "Service Titles",
      type: "array",
      fieldset: "featuredServices",
      of: [defineArrayMember({ type: "string" })],
      description: "List up to 3 services you want to highlight.",
      validation: (Rule) => Rule.required().max(3),
    }),
    {
      ...buttonsField,
      description: "Add one or more call-to-action buttons.",
      validation: (Rule) => Rule.required().min(1).max(2),
    },
    {
      ...imageField,
      title: "Background image",
      description: "Optional image for the intro section (e.g., hero background or illustration).",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      image: "image",
      richText: "richText",
    },
    prepare: ({ image, richText }) => {
      // Extract plain text from first block of portable text
      const plainText = richText?.[0]?.children
        // @ts-ignore
        ?.filter((child) => typeof child.text === "string")
        // @ts-ignore
        .map((child) => child.text)
        .join("")

      return {
        title: "Website Intro",
        subtitle: plainText || "Intro content not available",
        media: image,
      }
    },
  },
})

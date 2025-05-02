import { Star } from "lucide-react"
import { defineArrayMember, defineField, defineType } from "sanity"
import { buttonsField, richHeroTitleField, richTextField } from "../shared/common"

export const hero = defineType({
  name: "hero",
  title: "Website Intro",
  icon: Star,
  type: "object",
  fieldsets: [
    {
      name: "featuredServices",
      title: "Featrued Services",
      description:
        "Add up to 3 favorite service titles that you want to be displayed in the website intro and the icon them",
    },
  ],
  fields: [
    { ...richHeroTitleField, title: "Title" },
    { ...richTextField, title: "Text" },
    defineField({
      name: "icon",
      title: "Icon",
      options: {
        storeSvg: true,
        providers: ["fi"],
      },
      type: "iconPicker",
      description: "Choose a small picture symbol to highlight the services",
      validation: (Rule) => Rule.required(),
      fieldset: "featuredServices",
    }),
    defineField({
      name: "services",
      fieldset: "featuredServices",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (Rule) => Rule.required().max(3),
    }),
    buttonsField,
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      fields: [
        defineField({
          name: "imageDescription",
          title: "Alternative Text",
          type: "string",
          description: "Describe the image for accessibility and SEO.",
        }),
      ],
      options: {
        hotspot: true,
        aiAssist: {
          imageDescriptionField: "imageDescription",
        },
      },
    }),
  ],
  preview: {
    select: {
      image: "image",
    },
    prepare: ({ image }) => ({
      title: "Website Intro",
      subtitle: "The first section people see. It shows the website’s main message.",
      media: image,
    }),
  },
})

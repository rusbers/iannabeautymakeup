import { Star } from "lucide-react"
import { defineArrayMember, defineField, defineType } from "sanity"
import { buttonsField, iconPickerField, imageField, richTextField } from "./shared/common"

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
    defineField({
      name: "richHeroTitle",
      title: "Title",
      type: "richHeroTitle",
    }),
    richTextField,
    { ...iconPickerField, fieldset: "featuredServices" },
    defineField({
      name: "services",
      fieldset: "featuredServices",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (Rule) => Rule.required().max(3),
    }),
    buttonsField,
    imageField,
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

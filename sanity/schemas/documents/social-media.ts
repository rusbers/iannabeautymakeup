import { Link } from "lucide-react"
import { defineField, defineType } from "sanity"
import { preview } from "sanity-plugin-icon-picker"
import { iconPickerField } from "../blocks/shared/common-fields"

export const socialMedia = defineType({
  name: "socialMedia",
  type: "document",
  title: "Social Media Links",
  icon: Link,
  fields: [
    {
      ...iconPickerField,
      title: "Icon",
      description: "Pick an icon relevant for this social media network",
      validation: (Rule) => Rule.required(),
    },
    defineField({
      name: "name",
      title: "Social Media Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "label",
      title: "Label",
      type: "internationalizedArrayString",
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      icon: "icon",
      title: "name",
      subtitle: "url",
    },
    prepare({ title, subtitle, icon }) {
      return {
        title,
        subtitle,
        media: preview(icon),
      }
    },
  },
})

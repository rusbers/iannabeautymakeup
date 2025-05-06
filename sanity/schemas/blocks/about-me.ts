import { UserRound } from "lucide-react"
import { defineType } from "sanity"
import {
  buttonsField,
  imageField,
  richSubtitleField,
  richTextField,
  titleField,
} from "./shared/common-fields"

export const aboutMe = defineType({
  name: "aboutMe",
  title: "About Me",
  icon: UserRound,
  type: "object",
  fields: [
    { ...titleField, validation: (Rule) => Rule.required() },
    { ...richSubtitleField, validation: (Rule) => Rule.required() },
    { ...richTextField, validation: (Rule) => Rule.required() },
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
      title: "About Me",
      media: image,
    }),
  },
})

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
  fields: [titleField, richSubtitleField, richTextField, buttonsField, imageField],
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

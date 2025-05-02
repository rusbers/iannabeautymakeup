import { defineField } from "sanity"

export const richTextField = defineField({
  name: "richText",
  type: "richText",
})

export const richSubtitleField = defineField({
  name: "richSubtitle",
  type: "richSubtitle",
})

export const richTitleField = defineField({
  name: "richTitle",
  type: "richTitle",
})

export const richHeroTitleField = defineField({
  name: "richHeroTitle",
  type: "richHeroTitle",
})

export const buttonsField = defineField({
  name: "buttons",
  type: "array",
  of: [{ type: "button" }],
  description: "Add one or more clickable buttons that visitors can use to navigate your website",
})

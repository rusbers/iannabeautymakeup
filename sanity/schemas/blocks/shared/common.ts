import { defineField } from "sanity"

// START RICH TEXT FIELDS

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
  title: "Text",
  type: "richTitle",
})

// END RICH TEXT FIELDS

export const buttonsField = defineField({
  name: "buttons",
  type: "array",
  of: [{ type: "button" }],
  description: "Add one or more clickable buttons that visitors can use to navigate your website",
})

export const iconPickerField = defineField({
  name: "icon",
  title: "Icon",
  options: {
    storeSvg: true,
    providers: ["fi"],
  },
  type: "iconPicker",
  validation: (Rule) => Rule.required(),
})

export const imageField = defineField({
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
})

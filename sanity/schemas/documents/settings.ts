import { CogIcon } from "lucide-react"
import { defineField, defineType } from "sanity"

export const settings = defineType({
  name: "settings",
  type: "document",
  title: "Settings",
  description: "Global settings and configuration for your website",
  icon: CogIcon,
  fields: [
    defineField({
      name: "logo",
      type: "image",
      title: "Site Logo",
      readOnly: true,
    }),
    defineField({
      name: "tagline",
      title: "Site Tagline",
      description:
        "A short sentence or motto displayed at the bottom of the site. Use up to 12 words.",
      type: "internationalizedArrayString",
      validation: (rule) =>
        rule.custom<{ value: string; _type: string; _key: string }[]>((value) => {
          if (!value) {
            return "Tagline is required"
          }

          const invalidItems = value.filter((item) => item.value.split(" ").length > 12)

          if (invalidItems.length) {
            return invalidItems.map((item) => ({
              message: `Tagline is too long. Must be 12 words or fewer.`,
              path: [{ _key: item._key }, "value"],
            }))
          }

          return true
        }),
    }),
    defineField({
      name: "socialMediaLinks",
      title: "Social Media Links",
      description:
        "Select 3 to 4 existing social media profiles to show at the bottom of the site and in other sections where social links appear. These must already exist in the Social Media collection.",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "socialMedia" }],
          options: {
            disableNew: true,
          },
        },
      ],
      validation: (Rule) => Rule.required().min(3).max(4),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Site Settings",
        media: CogIcon,
      }
    },
  },
})

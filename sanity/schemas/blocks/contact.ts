import { PhoneCall } from "lucide-react"
import { defineField, defineType } from "sanity"
import { imageField, richTextField, richTitleField } from "./shared/common-fields"

export const contact = defineType({
  name: "contact",
  title: "Contact Me",
  icon: PhoneCall,
  type: "object",
  fields: [
    richTitleField,
    richTextField,
    defineField({
      name: "locationsBlock",
      title: "Locations",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Block Title",
          type: "string",
          description: "Title for the locations section, e.g. 'My Locations'",
        }),
        defineField({
          name: "locations",
          title: "Locations List",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "name",
                  title: "Location Name",
                  type: "string",
                },
              ],
            },
          ],
        }),
      ],
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
    imageField,
  ],

  preview: {
    select: {
      image: "image",
    },
    prepare: ({ image }) => ({
      title: "Contact Me",
      media: image,
    }),
  },
})

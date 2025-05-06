import { BadgeInfo, HandHelping } from "lucide-react"
import { defineArrayMember, defineField, defineType } from "sanity"
import { preview } from "sanity-plugin-icon-picker"
import {
  buttonsField,
  iconPickerField,
  imageField,
  richTextField,
  titleField,
} from "./shared/common-fields"

export const serviceInformation = defineType({
  name: "serviceInformation",
  title: "Service Information",
  icon: BadgeInfo,
  type: "object",
  groups: [
    { name: "main", title: "Main Information", default: true },
    { name: "images", title: "Image Gallery" },
    { name: "button", title: "Button" },
    { name: "settings", title: "Settings" },
  ],
  fields: [
    { ...titleField, title: "Section Title", group: "main", validation: (Rule) => Rule.required() },
    defineField({
      name: "idReference",
      title: "Create ID",
      description:
        "Create a unique ID for this section by using the section title (e.g., 'The Eyebrows' will have the folowind id: 'the-eyebrows'). This ID will be used for linking to this section.",
      type: "reference",
      to: [{ type: "idEntry" }],
      group: "main",
      validation: (Rule) => Rule.warning("It's highly recommended to create an ID for linking."),
    }),
    {
      ...richTextField,
      title: "Short Introduction",
      name: "introduction",
      group: "main",
    },
    defineField({
      name: "service",
      type: "array",
      title: "Services",
      description:
        "Select the services offered under this category, if you want to add description for them.",
      group: "main",
      of: [
        defineArrayMember({
          type: "object",
          name: "serviceWithDescription",
          title: "Service with Description",
          icon: HandHelping,
          fields: [
            defineField({
              name: "serviceName",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            {
              ...richTextField,
              title: "Description",
              name: "description",
              description:
                "Custom Description. If left empty, the default description of the service will be used.",
            },
          ],
          preview: {
            select: {
              serviceName: "serviceName",
              description: "description",
            },
            prepare({ serviceName, description }) {
              const plainDescription =
                Array.isArray(description) && description.length > 0
                  ? // @ts-ignore
                    description[0].children?.map((child) => child.text).join("")
                  : ""

              return {
                title: serviceName || "No service selected",
                subtitle: plainDescription || "No description",
              }
            },
          },
        }),
      ],
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      name: "treatmentProcess",
      title: "Treatment Process",
      description: "A detailed guide for the client about the treatment",
      type: "array",
      group: "main",
      of: [
        defineArrayMember({
          name: "featureCardIcon",
          type: "object",
          fields: [
            iconPickerField,
            titleField,
            { ...richTextField, title: "Description", name: "description" },
          ],
          preview: {
            select: {
              title: "title",
              icon: "icon",
            },
            prepare: ({ title, icon }) => {
              return {
                title: `${title ?? "Untitled"}`,
                media: icon ? preview(icon) : null,
              }
            },
          },
        }),
      ],
    }),
    defineField({
      name: "isHealingProcess",
      title: "Do the pictures bellow show dayly healing process?",
      description:
        "If checked, you can upload up to 8 images with the healing process. If unchecked it means that only 2 representative images can be uploaded.",
      type: "boolean",
      initialValue: true,
      validation: (Rule) => Rule.required(),
      group: "images",
    }),
    defineField({
      name: "renderImageFirstOnDesktop",
      title: "Do you want the images to be rendered first?",
      description:
        "If checked, the images will be rendered on the left, and text on the right on desktop, on the mobile will be no difference.",
      type: "boolean",
      initialValue: false,
      validation: (Rule) => Rule.required(),
      group: "images",
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      description:
        "Healing process allows up to 8 images. Otherwise, up to 2 representative images can be uploaded.",
      type: "array",
      group: "images",
      of: [
        defineArrayMember({
          type: "object",
          name: "imageWithCaption",
          fields: [
            imageField,
            defineField({
              name: "caption",
              type: "string",
              title: "Day Number",
              description: "The day number of the image is this image shows the healing process.",
            }),
          ],
          preview: {
            select: {
              media: "image",
              title: "caption",
            },
            prepare({ media, title }) {
              return {
                title: title || "No caption",
                media,
              }
            },
          },
        }),
      ],
      validation: (Rule) =>
        Rule.custom((images, context) => {
          // @ts-ignore
          const isHealingProcess = context.parent?.isHealingProcess

          if (!Array.isArray(images)) return true

          if (isHealingProcess && images.length > 8) {
            return "You can upload a maximum of 8 images for a healing process."
          }

          if (!isHealingProcess && images.length > 2) {
            return "You can upload a maximum of 2 representative images."
          }

          return true
        }),
    }),

    { ...buttonsField, group: "button" },
    defineField({
      name: "useLighterBg",
      title: "Use lighter Background",
      description: "If checked, the background of the section will be lighter.",
      type: "boolean",
      initialValue: false,
      validation: (Rule) => Rule.required(),
      group: "settings",
    }),
  ],
  preview: {
    select: {
      category: "category.0.name",
      customCategoryName: "title",
      useCategoryAsTitle: "useCategoryAsTitle",
    },
    prepare({ category, customCategoryName, useCategoryAsTitle }) {
      const title = useCategoryAsTitle ? category : customCategoryName
      return {
        title: title || "No title",
      }
    },
  },
})

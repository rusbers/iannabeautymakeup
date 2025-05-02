import { InlineSvgPreviewItem } from "@focus-reactive/sanity-plugin-inline-svg-input"
import { Link } from "lucide-react"
import { defineArrayMember, defineField, defineType } from "sanity"
import { buttonsField } from "./shared/common"

export const featuredServicesWithIcon = defineType({
  name: "featuredServicesWithIcon",
  title: "Featured Services",
  type: "object",
  icon: Link,
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      description: "This title will not be visible on the website, but it is important for the SEO",
      type: "string",
    }),
    defineField({
      name: "items",
      title: "Services",
      description: "Add up to 3 services you want to feature on this section",
      type: "array",
      of: [
        defineArrayMember({
          name: "serviceLinkItem",
          title: "Service Link Item",
          type: "object",
          fields: [
            defineField({
              name: "svgIcon",
              title: "SVG Icon",
              type: "inlineSvg",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Short Description",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            {
              ...buttonsField,
              title: "Link",
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              icon: "svgIcon",
              title: "title",
              subtitle: "description",
            },
          },
          components: {
            // @ts-ignore
            preview: ({ icon, title, subtitle }) => {
              return <InlineSvgPreviewItem icon={icon} title={title} subtitle={subtitle} />
            },
          },
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    prepare: () => ({
      title: "Featured Services",
    }),
  },
})

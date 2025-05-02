import { createRadioListLayout, isValidUrl } from "@/sanity/lib/helpers"
import { defineField, defineType } from "sanity"

export const customUrl = defineType({
  name: "customUrl",
  type: "object",
  fields: [
    defineField({
      name: "type",
      type: "string",
      options: createRadioListLayout(["internal", "external"]),
      initialValue: () => "internal",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "openInNewTab",
      title: "Open in new tab",
      type: "boolean",
      description: "If checked, the link will open in a new tab.",
      initialValue: () => false,
    }),
    defineField({
      name: "external",
      type: "string",
      title: "URL",
      hidden: ({ parent }) => parent?.type !== "external",
      validation: (Rule) => [
        Rule.custom((value, { parent }) => {
          const type = (parent as { type?: string })?.type
          if (type === "external") {
            if (!value) return "Url can't be empty"
            const isValid = isValidUrl(value)
            if (!isValid) return "Invalid URL"
          }
          return true
        }),
      ],
    }),
    defineField({
      name: "href",
      type: "string",
      initialValue: () => "#",
      hidden: true,
      readOnly: true,
    }),
    defineField({
      name: "internal",
      type: "reference",
      options: {
        disableNew: true,
        filter: ({ document }) => ({
          filter: "language == $lang",
          params: { lang: document.language },
        }),
      },
      hidden: ({ parent }) => parent?.type !== "internal",
      to: [{ type: "page" }],
      validation: (rule) => [
        rule.custom((value, { parent }) => {
          const type = (parent as { type?: string })?.type
          if (type === "internal" && !value?._ref) return "internal can't be empty"
          return true
        }),
      ],
    }),
    // defineField({
    //   name: "anchor",
    //   type: "reference",
    //   description:
    //     "Select the ID of the section on the selected page, which you want this button to link to (e.g. /services#the-eyebrows will lead to 'The Eyebrows' section of the /services page)",
    //   options: { disableNew: true },
    //   hidden: ({ parent }) => parent?.type !== "internal",
    //   to: [{ type: "idEntry" }],
    // }),
  ],
  preview: {
    select: {
      externalUrl: "external",
      urlType: "type",
      internalUrl: "internal.slug.current",
      openInNewTab: "openInNewTab",
      // anchor: "anchor",
    },
    prepare({ externalUrl, urlType, internalUrl, openInNewTab }) {
      const url = urlType === "external" ? externalUrl : `/${internalUrl}`
      const newTabIndicator = openInNewTab ? " ↗" : ""
      const truncatedUrl = url?.length > 30 ? `${url.substring(0, 30)}...` : url
      // const subtitle = anchor
      //   ? `${truncatedUrl}${newTabIndicator} (anchor link)`
      //   : `${truncatedUrl}${newTabIndicator}`

      return {
        title: `${urlType === "external" ? "External" : "Internal"} Link`,
        subtitle: "subtitle",
      }
    },
  },
})

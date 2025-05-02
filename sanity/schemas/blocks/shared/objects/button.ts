import { capitalize, createRadioListLayout } from "@/sanity/lib/helpers"
import { Command } from "lucide-react"
import { defineField, defineType } from "sanity"

const buttonVariants = ["default", "secondary", "link"]

export const button = defineType({
  name: "button",
  title: "Button",
  type: "object",
  icon: Command,
  fields: [
    defineField({
      name: "variant",
      type: "string",
      initialValue: () => "default",
      options: createRadioListLayout(buttonVariants, {
        direction: "horizontal",
      }),
    }),
    defineField({
      name: "text",
      title: "Button Text",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "Url",
      type: "customUrl",
    }),
  ],
  preview: {
    select: {
      title: "text",
      variant: "variant",
      externalUrl: "url.external",
      urlType: "url.type",
      internalUrl: "url.internal.slug.current",
      openInNewTab: "url.openInNewTab",
      anchor: "url.anchor",
    },
    prepare: ({ title, variant, externalUrl, urlType, internalUrl, openInNewTab, anchor }) => {
      const url = urlType === "external" ? externalUrl : internalUrl
      const newTabIndicator = openInNewTab ? " ↗" : ""
      const truncatedUrl = url?.length > 30 ? `${url.substring(0, 30)}...` : url

      const hasAnchor = Boolean(anchor)
      const subtitle = hasAnchor
        ? `${capitalize(variant ?? "default")} • ${truncatedUrl}${newTabIndicator} (anchor link)`
        : `${capitalize(variant ?? "default")} • ${truncatedUrl}${newTabIndicator}`

      return {
        title: title || "Untitled Button",
        subtitle,
      }
    },
  },
})

import { defineField, defineType } from "sanity"
import { Files } from "lucide-react"
import { orderRankField } from "@sanity/orderable-document-list"
import { isUniqueOtherThanLanguage } from "@/lib/is-unique-lang"

export const page = defineType({
  name: "page",
  type: "document",
  title: "Page",
  icon: Files,
  groups: [
    {
      name: "content",
      title: "Content",
      default: true,
    },
    {
      name: "seo",
      title: "SEO",
    },
    {
      name: "settings",
      title: "Settings",
    },
  ],
  fields: [
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      group: "settings",
      hidden: false,
      initialValue: "en",
      options: {
        list: [
          { title: "English", value: "en" },
          { title: "Romanian", value: "ro" },
        ],
      },
    }),
    defineField({ name: "title", type: "string", group: "content" }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "settings",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: isUniqueOtherThanLanguage,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "blocks",
      description: "The sections used in this web page.",
      type: "array",
      group: "content",
      of: [
        { type: "hero" },
        { type: "featuredServicesWithIcon" },
        { type: "aboutMe" },
        { type: "imageGridGallery" },
        { type: "priceList" },
        { type: "testimonials" },
        { type: "interiorPageHero" },
        { type: "serviceInformation" },
        { type: "priceCards" },
        { type: "contact" },
      ],
      options: {
        insertMenu: {
          views: [
            {
              name: "grid",
              previewImageUrl: (schemaType) =>
                `https://res.cloudinary.com/dscmfusfp/image/upload/v1746287479/${schemaType}.webp`,
            },
          ],
          groups: [
            { name: "Intro", of: ["hero", "interiorPageHero"] },
            { name: "Price", of: ["priceList", "priceCards"] },
          ],
        },
      },
    }),
    defineField({
      name: "meta_title",
      title: "Meta Title",
      description:
        "This is the title that shows up in Google search results. Try to keep it short, clear, and helpful — like a book title that tells people what the page is about.",
      type: "string",
      group: "seo",
    }),
    defineField({
      name: "meta_description",
      title: "Meta Description",
      description:
        "This is the little description that shows up under your page title in Google. Use it to explain what the page is about and why someone should click.",
      type: "text",
      group: "seo",
    }),
    defineField({
      name: "noindex",
      title: "No Index",
      description: "Turn this ON if you don’t want this page to show up on Google",
      type: "boolean",
      initialValue: false,
      group: "seo",
    }),
    defineField({
      name: "ogImage",
      title: "Open Graph Image - [1200x630]",
      description:
        "This is the image that shows when you share the page on social media. It should be nice, relevant, and ideally 1200x630 pixels.",
      type: "image",
      group: "seo",
    }),
    orderRankField({ type: "page" }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "language",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle,
      }
    },
  },
})

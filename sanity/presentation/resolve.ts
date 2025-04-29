import { defineLocations, defineDocuments, PresentationPluginOptions } from "sanity/presentation"

export const resolve: PresentationPluginOptions["resolve"] = {
  locations: {
    // Add more locations for other post types
    post: defineLocations({
      select: {
        title: "title",
        slug: "slug.current",
        language: "language",
      },
      resolve: (doc) => ({
        locations: [],
      }),
    }),
  },
  mainDocuments: defineDocuments([
    {
      route: "/en",
      filter: `_type == 'page' && slug.current == 'index' && language == 'en'`,
    },
    {
      route: "/ro",
      filter: `_type == 'page' && slug.current == 'index' && language == 'ro'`,
    },
    {
      route: "/:lang/:slug",
      filter: `_type == 'page' && slug.current == $slug && language == $lang`,
    },
  ]),
}

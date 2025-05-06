"use client"

/**
 * This configuration is used to for the Sanity Studio that's mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision"
import { defineConfig, isDev, PluginOptions } from "sanity"
import { structureTool } from "sanity/structure"
import { presentationTool } from "sanity/presentation"

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env"
import { schema } from "./sanity/schema"
import { resolve } from "@/sanity/presentation/resolve"
import { structure } from "./sanity/structure"
import { documentInternationalization } from "@sanity/document-internationalization"
import { internationalizedArray } from "sanity-plugin-internationalized-array"
import { assist } from "@sanity/assist"
import { codeInput } from "@sanity/code-input"
import { iconPicker } from "sanity-plugin-icon-picker"
import { inlineSvgInput } from "@focus-reactive/sanity-plugin-inline-svg-input"
import { SquareLogo } from "./components/square-logo"

const editorTools: PluginOptions[] = [
  structureTool({ structure, title: "Content" }),
  presentationTool({
    title: "Visual Editor",
    previewUrl: {
      draftMode: {
        enable: "/api/draft-mode/enable",
      },
    },
    resolve,
  }),
]
const devTools: PluginOptions[] = [visionTool({ defaultApiVersion: apiVersion })]

const documentTools: PluginOptions[] = [
  documentInternationalization({
    supportedLanguages: [
      { id: "en", title: "English" },
      { id: "ro", title: "Romanian" },
    ],
    schemaTypes: ["page", "testimonial", "price"],
  }),
  internationalizedArray({
    languages: [
      { id: "en", title: "English" },
      { id: "ro", title: "Romanian" },
    ],
    defaultLanguages: ["en"],
    fieldTypes: ["string"],
    buttonLocations: ["field"],
  }),
  assist({
    translate: {
      document: {
        languageField: "language",
        documentTypes: ["page", "testimonial", "price"],
      },
      field: {
        documentTypes: ["settings", "socialMedia"],
        languages: [
          { id: "en", title: "English" },
          { id: "ro", title: "Romanian" },
        ],
      },
    },
  }),
  codeInput(),
  iconPicker(),
  inlineSvgInput(),
]

export default defineConfig({
  basePath: "/studio",
  title: "Studio | Ianna Beauty",
  projectId,
  dataset,
  icon: SquareLogo,
  schema,
  plugins: isDev
    ? [...editorTools, ...devTools, ...documentTools]
    : [...editorTools, ...documentTools],
})

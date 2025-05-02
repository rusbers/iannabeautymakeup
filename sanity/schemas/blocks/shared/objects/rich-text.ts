import { defineArrayMember, defineType } from "sanity"

import {
  AccentColorText,
  AccentColorTextIcon,
  HeroTitle,
  Subtitle,
} from "../../../previews/richtext-decorators"

// 1. RICH TEXT (General-purpose rich text)

const richTextMembers = [
  defineArrayMember({
    name: "block",
    type: "block",
    styles: [{ title: "Normal", value: "normal" }],
    lists: [{ title: "List", value: "bullet" }],
    marks: {
      annotations: [],
      decorators: [
        {
          title: "Accent Color",
          value: "accentColor",
          component: AccentColorText,
          icon: AccentColorTextIcon,
        },
        {
          title: "Strong",
          value: "strong",
        },
        { title: "Italic", value: "em" },
      ],
    },
  }),
]

export const richText = defineType({
  name: "richText",
  type: "array",
  of: richTextMembers,
})

// 2. RICH TITLE (Multi-level headings)

const richTitleBlock = defineArrayMember({
  name: "block",
  type: "block",
  styles: [
    { title: "H1", value: "h1" },
    { title: "H2", value: "h2" },
    { title: "H3", value: "h3" },
    { title: "H4", value: "normal" },
  ],
  lists: [],
  marks: {
    decorators: [
      {
        title: "Accent Color",
        value: "accentColor",
        component: AccentColorText,
        icon: AccentColorTextIcon,
      },
    ],
    annotations: [],
  },
})

export const richTitle = defineType({
  name: "richTitle",
  type: "array",
  of: [richTitleBlock],
})

// 3. RICH HERO TITLE (Hero-specific H1 with animation support)

const richHeroTitleBlock = defineArrayMember({
  name: "block",
  type: "block",
  styles: [{ title: "H1", value: "normal", component: HeroTitle }],
  lists: [],
  marks: {
    decorators: [
      {
        title: "Animated Text",
        value: "animatedText",
        icon: AccentColorTextIcon,
        component: AccentColorText,
      },
    ],
    annotations: [],
  },
})

export const richHeroTitle = defineType({
  name: "richHeroTitle",
  type: "array",
  of: [richHeroTitleBlock],
})

// 4. RICH SUBTITLE (Subtitle component style)

const richSubtitleBlock = defineArrayMember({
  name: "block",
  type: "block",
  styles: [{ title: "Normal", value: "normal", component: Subtitle }],
  lists: [],
  marks: {
    decorators: [
      {
        title: "Accent Color",
        value: "accentColor",
        component: AccentColorText,
        icon: AccentColorTextIcon,
      },
    ],
    annotations: [],
  },
})

export const richSubtitle = defineType({
  name: "richSubtitle",
  type: "array",
  of: [richSubtitleBlock],
})

// 5. RICH PAGE SUBTITLE (Subtitle styled like hero heading)

const richPageSubtitleBlock = defineArrayMember({
  name: "block",
  type: "block",
  styles: [{ title: "Normal", value: "normal", component: HeroTitle }],
  lists: [],
  marks: {
    decorators: [
      {
        title: "Accent Color",
        value: "accentColor",
        component: AccentColorText,
        icon: AccentColorTextIcon,
      },
    ],
    annotations: [],
  },
})

export const richPageSubtitle = defineType({
  name: "richPageSubtitle",
  type: "array",
  of: [richPageSubtitleBlock],
})

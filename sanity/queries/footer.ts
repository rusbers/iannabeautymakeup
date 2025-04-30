import { groq } from "next-sanity"

export const queryFooterData = groq`
  *[_type == "settings" && _id == "settings"][0]{
    "tagline": tagline[_key == $language][0].value,
    socialMediaLinks[]->{
      _id,
      name,
      url,
      "icon": icon.svg,
      "label": label[_key == $language][0].value,
    }
  }
`

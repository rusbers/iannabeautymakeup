import { imageFragment } from "./fragments"

export const contactBlockQuery = /* groq */ `
  _type == "contact" => {
    _type,
    _key,
    richTitle,
    richText,
    socialMediaLinks[]->{
      _id,
      name,
      url,
      "icon": icon.svg,
      "label": label[_key == $language][0].value,
    },
    locationsBlock {
      title,
      locations[] {
        name
      }
    },
    ${imageFragment},
  }
`

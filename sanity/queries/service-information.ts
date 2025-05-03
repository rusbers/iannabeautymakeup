import { buttonsFragment, imageFragment } from "./fragments"

// @sanity-typegen-ignore
export const serviceInformationBlock = /* groq */ `
  _type == "serviceInformation" => {
    _type,
    _key,
    title,
    "id": idReference->idItem,
    introduction,
    service[]{
      serviceName,
      description,
    },
    treatmentProcess[]{
      _key,
      icon,
      title,
      description,
    },
    isHealingProcess,
    renderImageFirstOnDesktop,
    gallery[]{
      ${imageFragment},
      caption,
    },
    ${buttonsFragment},
    useLighterBg,
  }
`

import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list"
import { Files, Link, Quote, Settings } from "lucide-react"

// const createSingleTon = ({ S, type, title, icon }: CreateSingleTon) => {
//   const newTitle = title ?? getTitleCase(type)
//   return S.listItem()
//     .title(newTitle)
//     .icon(icon ?? File)
//     .child(S.document().schemaType(type).documentId(type))
// }

// const createList = ({ S, type, icon, title, id }: CreateList) => {
//   const newTitle = title ?? getTitleCase(type)
//   return S.documentTypeListItem(type)
//     .id(id ?? type)
//     .title(newTitle)
//     .icon(icon ?? File)
// }

export const structure = (S: any, context: any) =>
  S.list()
    .title("Content")
    .items([
      orderableDocumentListDeskItem({
        type: "page",
        title: "Pages",
        icon: Files,
        S,
        context,
      }),
      orderableDocumentListDeskItem({
        type: "testimonial",
        title: "Testimonials",
        icon: Quote,
        S,
        context,
      }),
      S.listItem()
        .title("Settings")
        .icon(Settings)
        .child(S.document().schemaType("settings").documentId("settings")),
      S.documentTypeListItem("socialMedia")
        .id("socialMedia")
        .title("Social Media Links")
        .icon(Link),
    ])

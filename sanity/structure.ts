import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list"
import { Euro, Files, IdCard, Link, Quote, Settings } from "lucide-react"

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
      S.divider(),
      S.documentTypeListItem("price").id("price").title("Prices").icon(Euro),
      orderableDocumentListDeskItem({
        type: "testimonial",
        title: "Testimonials",
        icon: Quote,
        S,
        context,
      }),
      S.documentTypeListItem("socialMedia")
        .id("socialMedia")
        .title("Social Media Links")
        .icon(Link),
      S.divider(),
      S.listItem()
        .title("Settings")
        .icon(Settings)
        .child(S.document().schemaType("settings").documentId("settings")),
      S.documentTypeListItem("idEntry").id("idEntry").title("ID's").icon(IdCard),
    ])

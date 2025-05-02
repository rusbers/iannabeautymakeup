import { PAGE_QUERYResult } from "@/sanity.types"

// TODO update the type
export type NavItem = {
  label: string
  href: string
  target: boolean
}

type SanityImageProps = NonNullable<
  Extract<NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number], { _type: "hero" }>["image"]
>

type SanityButtonProps = NonNullable<
  Extract<
    NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number],
    { _type: "hero" }
  >["buttons"]
>[number]

import { cn } from "@/lib/utils"
import { PortableText, type PortableTextBlock, type PortableTextReactComponents } from "next-sanity"

import { Heading } from "./typography"

const components: Partial<PortableTextReactComponents> = {
  block: {
    h1: ({ children }) => {
      return (
        <Heading as="h1" className="text-4xl md:text-5xl tracking-wide">
          {children}
        </Heading>
      )
    },
    h2: ({ children }) => {
      return (
        <Heading as="h2" className="text-3xl md:text-4xl tracking-wide">
          {children}
        </Heading>
      )
    },
    h3: ({ children }) => {
      return (
        <Heading as="h3" className="text-xl sm:text-2xl leading-snug">
          {children}
        </Heading>
      )
    },
    normal: ({ children }) => {
      return <Heading as="h4">{children}</Heading>
    },
  },
  marks: {
    accentColor: ({ children }) => <span className="text-gold-500">{children}</span>,
  },
  hardBreak: () => <br />,
}

export function RichTitle<T>({ richText, className }: { richText?: T | null; className?: string }) {
  if (!richText) return null

  return (
    <div className={cn(className)}>
      <PortableText
        value={richText as unknown as PortableTextBlock[]}
        components={components}
        onMissingComponent={(_, { nodeType, type }) =>
          console.log("missing component", nodeType, type)
        }
      />
    </div>
  )
}

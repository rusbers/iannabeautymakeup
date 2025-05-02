import { cn } from "@/lib/utils"
import { PortableText, type PortableTextBlock, type PortableTextReactComponents } from "next-sanity"

import { Text } from "./typography"

const components: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => <Text>{children}</Text>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-4">{children}</ul>,
  },
  marks: {
    accentColor: ({ children }) => <span className="text-gold-500">{children}</span>,
    strong: ({ children }) => <span className="font-medium">{children}</span>,
  },
  hardBreak: () => <br />,
}

export function RichText<T>({ richText, className }: { richText?: T | null; className?: string }) {
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

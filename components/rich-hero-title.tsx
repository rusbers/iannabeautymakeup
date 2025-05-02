import { cn } from "@/lib/utils"
import {
  PortableText,
  type PortableTextBlock,
  type PortableTextReactComponents,
  stegaClean,
} from "next-sanity"

import { Heading } from "./typography"
import { TextShimmer } from "./motion-primitives/text-shimmer"

const components: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => {
      return (
        <Heading as="h1" className="text-4xl md:text-5xl tracking-wide">
          {children}
        </Heading>
      )
    },
  },
  marks: {
    animatedText: ({ children }) => (
      <TextShimmer className="inline !leading-[1.2]" as="span">
        {stegaClean(children?.toString()) as string}
      </TextShimmer>
    ),
  },
  hardBreak: () => <br />,
}

export function RichHeroTitle<T>({
  richText,
  className,
}: {
  richText?: T | null
  className?: string
}) {
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

import { cn } from "@/lib/utils"
import {
  PortableText,
  type PortableTextBlock,
  type PortableTextReactComponents,
} from "next-sanity";

import { Heading } from "./typography";

const components: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => {
      return (
        <Heading as="p" className="text-3xl md:text-4xl tracking-wide">
          {children}
        </Heading>
      );
    },
  },
  marks: {
    accentColor: ({ children }) => (
      <span className="text-gold-500">{children}</span>
    ),
  },
  hardBreak: () => <br />,
};

export function RichSubtitle<T>({
  richText,
  className,
}: {
  richText?: T | null;
  className?: string;
}) {
  if (!richText) return null;

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
  );
}

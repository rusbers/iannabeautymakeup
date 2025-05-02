import { cn } from "@/lib/utils"

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
  className?: string
  children: React.ReactNode
  id?: string
}

export const Heading = ({ as: H = "h2", children, className, id }: HeadingProps) => {
  return (
    <H id={id} className={cn("font-playfair text-balance text-foreground", className)}>
      {children}
    </H>
  )
}

type TextProps = {
  className?: string
  children: React.ReactNode
  as?: "p" | "span"
}

export const Text = ({ className, as: Tag = "p", children }: TextProps) => (
  <Tag className={cn("font-montserrat text-pretty", className)}>{children}</Tag>
)

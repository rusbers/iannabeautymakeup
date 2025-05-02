import { cn } from "@/lib/utils"

type TitleProps = {
  className?: string
  children: React.ReactNode
  variant?: "default" | "centered" | "responsive"
  as?: "h1" | "h2" | "span"
}

export const Title = ({ className, children, variant = "default", as: Tag = "h2" }: TitleProps) => (
  <div
    className={cn(
      "flex items-center gap-2",
      variant === "default" && "justify-start",
      variant === "centered" && "justify-center",
      variant === "responsive" && "justify-center lg:justify-start",
      className
    )}
  >
    <div className="h-px w-12 bg-gold-500"></div>
    <Tag className="text-gold-500 uppercase tracking-[0.2em] text-sm">{children}</Tag>
    {variant === "centered" && <div className="h-px w-12 bg-gold-500"></div>}
    {variant === "responsive" && <div className="h-px w-12 bg-gold-500 lg:hidden"></div>}
  </div>
)

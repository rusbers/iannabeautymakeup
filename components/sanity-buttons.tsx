import Link from "next/link"
import { stegaClean } from "next-sanity"
import type { ComponentProps } from "react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { SanityButtonProps } from "@/types"

type SanityButtonsProps = {
  buttons: SanityButtonProps[] | null
  className?: string
  buttonClassName?: string
  size?: "sm" | "lg" | "default" | "icon" | null | undefined
}

export function SanityButton({
  text,
  href,
  variant = "default",
  openInNewTab,
  anchor,
  className,
  size = "lg",
  ...props
}: SanityButtonProps & ComponentProps<typeof Button>) {
  if (!href) {
    console.log("Link Broken", { text, href, variant, openInNewTab })
    return <Button>Link Broken</Button>
  }

  return (
    <Button
      variant={variant}
      {...props}
      size={size}
      asChild
      className={cn("min-w-[11.25rem]", className)}
    >
      <Link
        href={stegaClean(href) || "#"}
        target={openInNewTab ? "_blank" : "_self"}
        aria-label={`Navigate to ${stegaClean(text)}`}
        title={`Click to visit ${stegaClean(text)}`}
      >
        {text}
      </Link>
    </Button>
  )
}

export function SanityButtons({
  buttons,
  className,
  buttonClassName,
  size = "default",
}: SanityButtonsProps) {
  if (!buttons?.length) return null

  return (
    <div className={cn("flex flex-col sm:flex-row gap-4", className)}>
      {buttons.map((button) => (
        <SanityButton
          key={`button-${button._key}`}
          size={size}
          {...button}
          className={buttonClassName}
        />
      ))}
    </div>
  )
}

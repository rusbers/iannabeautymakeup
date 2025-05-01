import { cn } from "@/lib/utils"
import type { getDictionary } from "@/get-dictionary"

type CopyProps = {
  as?: "footer" | "div"
  dictionary: Awaited<ReturnType<typeof getDictionary>>
  className?: string
}

export function Copy({ as: Tag = "footer", dictionary, className }: CopyProps) {
  return (
    <Tag
      className={cn(
        "flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gold-900 py-6 text-gray-300",
        className
      )}
    >
      <small>{`© ${new Date().getFullYear()} ${dictionary.global["copy"]}`}</small>
      <small>
        {dictionary.global["built-by"]} <span className="text-gold-600">@web01studio</span>
      </small>
    </Tag>
  )
}

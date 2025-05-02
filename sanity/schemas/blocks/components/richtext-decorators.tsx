import { LetterText } from "lucide-react"

export const AccentColorText = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: "gold" }}>{children}</span>
)

export const HeroTitle = ({ children }: { children: React.ReactNode }) => (
  <span style={{ fontSize: "2rem" }}>{children}</span>
)

export const Subtitle = ({ children }: { children: React.ReactNode }) => (
  <span style={{ fontSize: "1.5rem" }}>{children}</span>
)

export const AccentColorTextIcon = () => (
  <LetterText width={16} height={16} style={{ color: "gold" }} />
)

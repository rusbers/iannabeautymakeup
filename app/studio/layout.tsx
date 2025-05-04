export const metadata = {
  title: "Studio | Ianna Beauty",
  description: "Content management for Ianna Beauty Website",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

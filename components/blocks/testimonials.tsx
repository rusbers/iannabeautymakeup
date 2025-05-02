import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { PAGE_QUERYResult } from "@/sanity.types"
import { Title } from "../title"
import { RichSubtitle } from "../rich-subtitle"
import { RichText } from "../rich-text"
import { SanityButtons } from "../sanity-buttons"

type TestimonialsBlockProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number],
  { _type: "testimonials" }
>

export function TestimonialsBlock({
  title,
  richSubtitle,
  testimonials,
  buttons,
}: TestimonialsBlockProps) {
  return (
    <section className="py-20 container">
      <Title className="mb-4" variant="centered">
        {title}
      </Title>
      <RichSubtitle richText={richSubtitle} className="mb-12 text-center" />

      <Carousel>
        <CarouselContent>
          {testimonials?.map((item, i) => (
            <CarouselItem key={i} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="h-full">
                <CardContent className="flex flex-col justify-between p-4 h-full">
                  <div className="p-4 bg-white/5 border border-gold-900 backdrop-blur-sm h-full flex flex-col">
                    <div className="text-gold-500 text-sm mb-4">{item.username}</div>
                    <RichText
                      className="text-secondary-foreground font-light"
                      richText={item.richText}
                    />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="secondary" className="-left-3 md:-left-8 xl:-left-12" />
        <CarouselNext variant="secondary" className="-right-3 md:-right-8 xl:-right-12" />
      </Carousel>
      <SanityButtons className="justify-center" buttons={buttons} />
    </section>
  )
}

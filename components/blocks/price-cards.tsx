import { Euro } from "lucide-react"

import { SanityButtons } from "../sanity-buttons"
import type { PAGE_QUERYResult } from "@/sanity.types"

type PriceCardsBlockProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number],
  { _type: "priceCards" }
>

export const PriceCardsBlock = ({ title, prices, buttons, touchUpTitle }: PriceCardsBlockProps) => (
  <section className="py-20">
    <h2 className="sr-only">{title}</h2>
    <div className="container">
      <div className="grid gap-10 lg:grid-cols-3">
        {prices?.map((price) => (
          <div
            key={price._id}
            className="bg-white/5 border border-amber-300/10 p-10  backdrop-blur-sm transition-colors duration-500 hover:border-amber-300/30 rounded-xl"
          >
            <h3 className="font-playfair text-3xl mb-8 text-gold-500">{price.category}</h3>
            <div className="space-y-8">
              {price.services?.map(({ name, price, touchUps }, i) => (
                <div key={`${name}-${i}`} className="space-y-4  ">
                  <div className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <p className="font-medium text-lg">{name}</p>
                      <div className="flex items-baseline gap-1 text-gold">
                        <span className="text-2xl font-playfair">{price}</span>
                        <Euro className="size-4" />
                      </div>
                    </div>
                  </div>
                  {touchUps && (
                    <>
                      <h4 className="text-base uppercase tracking-wider text-gray-400">
                        {touchUpTitle}
                      </h4>
                      <ul className="space-y-2">
                        {touchUps.map((touchUp) => (
                          <div
                            key={touchUp.timeframe}
                            className="flex justify-between items-center"
                          >
                            <p className="text-base">{touchUp.timeframe}</p>
                            <div className="flex items-baseline gap-1">
                              <span>{touchUp.price}</span>
                              <Euro className="size-4" />
                            </div>
                          </div>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {buttons && (
        <SanityButtons className="mt-12 justify-center lg:mx-0" buttons={buttons} size="lg" />
      )}
    </div>
  </section>
)

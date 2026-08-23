"use client"

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

type ImageCarouselProps = {
  srcs: string[]
}

// export function ImageCarousel({ srcs }: ImageCarouselProps) {
//   console.log("IMAGE CAROUSEL SRCS:", srcs)

//   return (
//     <div>
//       {srcs.map((src, index) => (
//         <div key={index}>
//           <p>{index}</p>
//           <p>{src}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

export function ImageCarousel({ srcs }: ImageCarouselProps) {
  return (
    <Carousel className="max-w-md p-0 mx-auto mts-10" dir={"ltr"}>
      <CarouselContent>
        {srcs.map((src, index) => (
          <CarouselItem key={`${src}-${index}`}>
            <div className="p-0">
              <Card className="w-full h-full p-0">
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <Image
                    src={src}
                    alt={`Image ${index + 1}`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
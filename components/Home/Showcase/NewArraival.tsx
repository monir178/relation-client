import Image from "next/image"
import { Button } from "@/components/ui/button"

interface ArrivalProps {
  src: string
  alt: string
  title: string
}

const Arrival = ({ src, alt, title }: ArrivalProps) => (
  <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh]">
    <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover object-top" sizes="100vw" priority />
    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="text-center mt-20 space-y-5">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white ">{title}</h2>
        <Button
          variant="outline"
          size="lg"
          className="bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors duration-300"
        >
          Discover
        </Button>
      </div>
    </div>
  </div>
)

export default function NewArrivals() {
  return (
    <section className="w-full">
      <div className="grid md:grid-cols-2">
        <Arrival src="/new1.jpg" alt="New Arrivals for Her" title="New Arrivals for Her" />
        <Arrival src="/ts3.jpg" alt="New Arrivals for Him" title="New Arrivals for Him" />
      </div>
    </section>
  )
}


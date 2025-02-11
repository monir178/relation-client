interface ProductInfoProps {
    name: string
 
  }
  
  export function ProductInfo({ name, }: ProductInfoProps) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl md:text-3xl font-semibold">{name}</h1>
      
        <div className="text-sm text-muted-foreground">
          <p>All-day comfort meeting versatile styling</p>
          <p className="mt-2">
            Highlighted by ICFT-enhanced metal studs, this premium sandal features quilted leather uppers, made from
            full-grain finished cow leather, optimal padding and style through every step.
          </p>
        </div>
      </div>
    )
  }
  
  
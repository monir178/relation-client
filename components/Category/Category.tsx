"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import Filter from "./Filter";
import MessageModal from "../Payment/MassageModal";


import { RelatedProducts } from "../Product/RelatedProduct";

// Sample product data - in a real app this would come from an API or database
const category = [
  {
    id: 1,
    name: "Burgundy Leather Loafer",
    price: "$295",
    imageUrl: "/bag.jpg",
    category: "Loafers",
  },
  {
    id: 2,
    name: "Classic Black Loafer",
    price: "$275",
    imageUrl: "/bag.jpg",
    category: "Loafers",
  },
  {
    id: 3,
    name: "Olive Penny Loafer",
    price: "$285",
    imageUrl: "/ts1.jpg",
    category: "Loafers",
  },
  {
    id: 4,
    name: "Cream Canvas Sneaker",
    price: "$195",
    imageUrl: "/bag.jpg",
    category: "Sneakers",
  },
  {
    id: 5,
    name: "Navy Blue Derby",
    price: "$310",
    imageUrl: "/bag.jpg",
    category: "Derby",
  },
  {
    id: 6,
    name: "Brown Chelsea Boot",
    price: "$350",
    imageUrl: "/bag.jpg",
    category: "Boots",
  },
  {
    id: 7,
    name: "Suede Desert Boot",
    price: "$275",
    imageUrl: "/ts1.jpg",
    category: "Boots",
  },
  {
    id: 8,
    name: "Black Oxford Shoe",
    price: "$325",
    imageUrl: "/bag.jpg",
    category: "Oxford",
  },
  {
    id: 9,
    name: "Tan Brogue Shoe",
    price: "$290",
    imageUrl: "/bag.jpg",
    category: "Brogue",
  },
  {
    id: 10,
    name: "Gray Running Sneaker",
    price: "$180",
    imageUrl: "/bag.jpg",
    category: "Sneakers",
  },
  {
    id: 11,
    name: "White Low-Top Sneaker",
    price: "$210",
    imageUrl: "/bag.jpg",
    category: "Sneakers",
  },
  {
    id: 12,
    name: "Black High-Top Sneaker",
    price: "$230",
    imageUrl: "/bag.jpg",
    category: "Sneakers",
  },
  {
    id: 13,
    name: "Beige Slip-On Loafer",
    price: "$265",
    imageUrl: "/bag.jpg",
    category: "Loafers",
  },
  {
    id: 14,
    name: "Red Leather Moccasin",
    price: "$240",
    imageUrl: "/bag.jpg",
    category: "Moccasins",
  },
  {
    id: 15,
    name: "Dark Green Hiking Boot",
    price: "$370",
    imageUrl: "/bag.jpg",
    category: "Boots",
  },
  {
    id: 16,
    name: "Khaki Chukka Boot",
    price: "$310",
    imageUrl: "/bag.jpg",
    category: "Boots",
  },
  {
    id: 17,
    name: "Blue Leather Slip-On",
    price: "$280",
    imageUrl: "/bag.jpg",
    category: "Slip-Ons",
  },
  {
    id: 18,
    name: "Camel Suede Loafer",
    price: "$295",
    imageUrl: "/bag.jpg",
    category: "Loafers",
  },
  {
    id: 19,
    name: "Black Monk Strap Shoe",
    price: "$320",
    imageUrl: "/bag.jpg",
    category: "Monk Straps",
  },
  {
    id: 20,
    name: "White Espadrille",
    price: "$200",
    imageUrl: "/ts1.jpg",
    category: "Espadrilles",
  },
];

export default function Category() {
  const router = useRouter();

  const handleImageClick = (categoryId: number, category: string) => {
    router.push(
      `/category/${categoryId}?category=${encodeURIComponent(category)}`
    );
  };

  return (
   <div>
     <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8">Featured Category</h1>

      <Filter
        onCategoryChange={() => {
          throw new Error("Function not implemented.");
        }}
        onLineChange={() => {
          throw new Error("Function not implemented.");
        }}
        onSortChange={() => {
          throw new Error("Function not implemented.");
        }}
        selectedSort={""}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {category.map((product) => (
          <Card key={product.id} className="group relative">
            <CardContent className="p-0">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.imageUrl || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  onClick={() => handleImageClick(product.id, product.category)}
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    
      <MessageModal />
    </div>
    <div className="mt-16">
            <h2 className="text-4xl font-semibold mb-6 text-center">You May Also Like</h2>
            <RelatedProducts />
          </div>
   </div>
  );
}

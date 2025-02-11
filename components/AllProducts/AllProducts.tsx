"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import Link from "next/link";
import { RelatedProducts } from "../Product/RelatedProduct";
import Filter from "../Category/Filter";

const products = [
  {
    id: 1,
    name: "Jeans",
    price: "$295",
    imageUrl: "/bag.jpg",
    category: "Jeans",
  },
  {
    id: 2,
    name: "Polo",
    price: "$275",
    imageUrl: "/bag.jpg",
    category: "Polo",
  },
  {
    id: 3,
    name: "T-shirt",
    price: "$285",
    imageUrl: "/bag.jpg",
    category: "T-shirt",
  },
  {
    id: 4,
    name: "Jersey",
    price: "$195",
    imageUrl: "/bag.jpg",
    category: "Jersey",
  },
  {
    id: 5,
    name: "Hoodie",
    price: "$320",
    imageUrl: "/bag.jpg",
    category: "Hoodie",
  },
  {
    id: 6,
    name: "Sweater",
    price: "$250",
    imageUrl: "/bag.jpg",
    category: "Sweater",
  },
  {
    id: 7,
    name: "Joggers",
    price: "$230",
    imageUrl: "/bag.jpg",
    category: "Joggers",
  },
  {
    id: 8,
    name: "Shorts",
    price: "$180",
    imageUrl: "/bag.jpg",
    category: "Shorts",
  },
  {
    id: 9,
    name: "Cap",
    price: "$90",
    imageUrl: "/bag.jpg",
    category: "Accessories",
  },
  {
    id: 10,
    name: "Sneakers",
    price: "$350",
    imageUrl: "/bag.jpg",
    category: "Shoes",
  },
  {
    id: 11,
    name: "Backpack",
    price: "$210",
    imageUrl: "/bag.jpg",
    category: "Accessories",
  },
  {
    id: 12,
    name: "Socks",
    price: "$45",
    imageUrl: "/bag.jpg",
    category: "Accessories",
  },
  {
    id: 13,
    name: "Formal Shirt",
    price: "$320",
    imageUrl: "/bag.jpg",
    category: "Shirt",
  },
  {
    id: 14,
    name: "Casual Shirt",
    price: "$280",
    imageUrl: "/bag.jpg",
    category: "Shirt",
  },
  {
    id: 15,
    name: "Leather Jacket",
    price: "$500",
    imageUrl: "/bag.jpg",
    category: "Jackets",
  },
  {
    id: 16,
    name: "Denim Jacket",
    price: "$450",
    imageUrl: "/bag.jpg",
    category: "Jackets",
  },
  {
    id: 17,
    name: "Blazer",
    price: "$600",
    imageUrl: "/bag.jpg",
    category: "Formal Wear",
  },
  {
    id: 18,
    name: "Tie",
    price: "$55",
    imageUrl: "/bag.jpg",
    category: "Accessories",
  },
  {
    id: 19,
    name: "Suit",
    price: "$900",
    imageUrl: "/bag.jpg",
    category: "Formal Wear",
  },
  {
    id: 20,
    name: "Trench Coat",
    price: "$750",
    imageUrl: "/bag.jpg",
    category: "Outerwear",
  },
  {
    id: 21,
    name: "Scarf",
    price: "$120",
    imageUrl: "/bag.jpg",
    category: "Accessories",
  },
  {
    id: 22,
    name: "Gloves",
    price: "$80",
    imageUrl: "/bag.jpg",
    category: "Accessories",
  },
  {
    id: 23,
    name: "Sunglasses",
    price: "$200",
    imageUrl: "/bag.jpg",
    category: "Accessories",
  },
  {
    id: 24,
    name: "Loafers",
    price: "$300",
    imageUrl: "/bag.jpg",
    category: "Shoes",
  },
];

export default function AllProducts() {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredProducts(
        products.filter((p) => p.category === selectedCategory)
      );
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function setCategory(category: string): void {
    throw new Error("Function not implemented.");
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function setLine(line: string): void {
    throw new Error("Function not implemented.");
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function setSort(sort: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-3xl font-bold mb-8 text-center">
          {selectedCategory || "All Products"}
        </h1>

        <Filter
          onCategoryChange={setCategory}
          onLineChange={setLine}
          onSortChange={setSort}
          selectedSort={""}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group">
              <CardContent className="p-0">
                <Link href={`/products/${product.id}`}>
                  <div className="relative aspect-square overflow-hidden cursor-pointer">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-lg">{product.name}</h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        setFavorites((prevFavorites) =>
                          prevFavorites.includes(product.id)
                            ? prevFavorites.filter((id) => id !== product.id)
                            : [...prevFavorites, product.id]
                        )
                      }
                    >
                      <Heart
                        className={`h-5 w-5 transition-all duration-300 ${
                          favorites.includes(product.id)
                            ? "fill-red-500 text-red-500"
                            : "text-gray-600"
                        }`}
                      />
                    </Button>
                  </div>
                  <p className="text-gray-600">{product.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Related products */}

      {selectedCategory && (
        <div className="mt-16">
          <h2 className="text-4xl font-semibold mb-6 text-center">
            You May Also Like
          </h2>
          <RelatedProducts />
        </div>
      )}
    </div>
  );
}

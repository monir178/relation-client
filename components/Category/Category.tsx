"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  { id: 1, name: "Jeans", imageUrl: "/bag.jpg" },
  { id: 2, name: "Polo", imageUrl: "/bag.jpg" },
  { id: 3, name: "T-shirt", imageUrl: "/bag.jpg" },
  { id: 4, name: "Jersey", imageUrl: "/bag.jpg" },
  { id: 5, name: "Hoodie", imageUrl: "/bag.jpg" },
  { id: 6, name: "Sweater", imageUrl: "/bag.jpg" },
  { id: 7, name: "Joggers", imageUrl: "/bag.jpg" },
  { id: 8, name: "Shorts", imageUrl: "/bag.jpg" },
  { id: 9, name: "Accessories", imageUrl: "/bag.jpg" },
  { id: 10, name: "Shoes", imageUrl: "/bag.jpg" },
  { id: 11, name: "Shirts", imageUrl: "/bag.jpg" },
  { id: 12, name: "Jackets", imageUrl: "/bag.jpg" },
  { id: 13, name: "Formal Wear", imageUrl: "/bag.jpg" },
  { id: 14, name: "Outerwear", imageUrl: "/bag.jpg" },
];

export default function Category() {
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    router.push(`/products?category=${encodeURIComponent(category)}`);
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8">Featured Categories</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Card key={cat.id} className="cursor-pointer" onClick={() => handleCategoryClick(cat.name)}>
            <CardContent className="p-0">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={cat.imageUrl}
                  alt={cat.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg">{cat.name}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

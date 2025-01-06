"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const categories = [
  {
    name: "Fruits",
    image:
      "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&q=80&w=1920",
    description: "Fresh and seasonal fruits",
  },
  {
    name: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&q=80&w=1920",
    description: "Organic vegetables",
  },
];

export function Categories() {
  return (
    <section className="">
      <h2 className="text-3xl font-bold mb-8">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="relative h-[300px] rounded-lg overflow-hidden group"
          >
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
              <h3 className="text-3xl font-bold mb-2">{category.name}</h3>
              <p className="mb-4">{category.description}</p>
              <Button variant="secondary">Browse {category.name}</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

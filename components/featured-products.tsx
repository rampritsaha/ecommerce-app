"use client";

import { Product } from "@/types";
import { ProductCard } from "@/components/product-card";

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Organic Strawberries",
    description: "Sweet and juicy organic strawberries",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=500",
    category: "fruits",
    seasonal: true,
  },
  {
    id: "2",
    name: "Fresh Spinach",
    description: "Locally grown organic spinach",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=500",
    category: "vegetables",
    seasonal: true,
  },
  {
    id: "3",
    name: "Ripe Avocados",
    description: "Premium Hass avocados",
    price: 13.49,
    image:
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=500",
    category: "fruits",
    seasonal: false,
  },
  {
    id: "4",
    name: "Cherry Tomatoes",
    description: "Sweet and ripe cherry tomatoes",
    price: 13.99,
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&q=80&w=500",
    category: "vegetables",
    seasonal: true,
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-4">
      <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

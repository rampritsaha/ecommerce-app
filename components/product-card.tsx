"use client";

import Image from "next/image";
import { useState } from "react";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useCart } from "@/components/cart-provider";
import { Heart, Share2, ShoppingCart, Maximize2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <>
      <div
        className="group relative rounded-lg shadow-md overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-square relative">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
          {isHovered && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-2">
              <Button variant="secondary" size="icon" onClick={handleAddToCart}>
                <ShoppingCart className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                onClick={() => setShowQuickView(true)}
              >
                <Maximize2 className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
        </div>
      </div>

      <Dialog open={showQuickView} onOpenChange={setShowQuickView}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{product.name}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="aspect-square relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <p>{product.description}</p>
            <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
            <Button onClick={handleAddToCart}>Add to Cart</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

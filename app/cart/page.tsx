'use client';

import { ShoppingCart } from 'lucide-react';
import { CartItemCard } from '@/components/cart/cart-item';
import { CartSummary } from '@/components/cart/cart-summary';
import { useCart } from '@/components/cart-provider';
import { Container } from '@/components/layout/Container';

export default function CartPage() {
  const { items, updateQuantity, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <Container className="py-10">
        <div className="flex items-center gap-2 mb-6">
          <ShoppingCart className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
        </div>
        <p className="text-muted-foreground">Your cart is empty.</p>
      </Container>
    );
  }

  return (
    <Container className="py-10">
      <div className="flex items-center gap-2 mb-6">
        <ShoppingCart className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
      </div>
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          {items.map((item) => (
            <CartItemCard
              key={item.id}
              item={item}
              onUpdateQuantity={updateQuantity}
              onRemove={removeItem}
            />
          ))}
        </div>
        <div className="lg:col-span-4">
          <CartSummary items={items} />
        </div>
      </div>
    </Container>
  );
}
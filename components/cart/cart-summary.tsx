"use client";

import { CartItem } from "@/types";
import { formatIndianPrice } from "@/lib/utils";
import { CheckoutButton } from "@/components/checkout/CheckoutButton";

interface CartSummaryProps {
  items: CartItem[];
}

export function CartSummary({ items }: CartSummaryProps) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const gst = subtotal * 0.18; // 18% GST
  const total = subtotal + gst;

  return (
    <div className="rounded-lg border bg-card p-6">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{formatIndianPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>GST (18%)</span>
          <span>{formatIndianPrice(gst)}</span>
        </div>
        <div className="border-t pt-2 mt-2">
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>{formatIndianPrice(total)}</span>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <CheckoutButton />
      </div>
    </div>
  );
}

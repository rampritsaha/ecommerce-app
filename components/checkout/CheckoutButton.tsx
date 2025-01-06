"use client";

import { Button } from "@/components/ui/button";
import { useCheckout } from "@/hooks/use-checkout";

export function CheckoutButton() {
  const { handleCheckout, loading, isDisabled } = useCheckout();

  return (
    <Button onClick={handleCheckout} disabled={isDisabled} className="w-full">
      {loading ? "Processing..." : "Proceed to Checkout"}
    </Button>
  );
}

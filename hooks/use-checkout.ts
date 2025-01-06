'use client';

import { useState } from 'react';
import { useCart } from '@/components/cart-provider';
import { getStripe } from '@/lib/stripe/client';

export function useCheckout() {
  const [loading, setLoading] = useState(false);
  const { items } = useCart();

  const handleCheckout = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      });

      const { sessionId, error } = await response.json();
      if (error) throw new Error(error);

      const stripe = await getStripe();
      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      console.error('Checkout error:', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleCheckout,
    loading,
    isDisabled: loading || items.length === 0,
  };
}
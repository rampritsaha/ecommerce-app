import { STRIPE_SETTINGS } from '@/lib/constants';

export const stripeConfig = {
  currency: STRIPE_SETTINGS.currency,
  payment_method_types: STRIPE_SETTINGS.payment_method_types,
  mode: STRIPE_SETTINGS.mode,
  submit_type: STRIPE_SETTINGS.submit_type,
  success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
  cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cart`,
} as const;
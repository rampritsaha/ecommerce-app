export const COLORS = {
  primary: '#4CAF50',
  secondary: '#FF8F00',
  accent: '#E8F5E9',
  background: '#FFFFFF',
  text: '#2E2E2E',
  error: '#D32F2F',
  success: '#388E3C',
} as const;

export const STRIPE_SETTINGS = {
  currency: 'inr',
  mode: 'payment',
  submit_type: 'pay',
  payment_method_types: ['card'],
} as const;
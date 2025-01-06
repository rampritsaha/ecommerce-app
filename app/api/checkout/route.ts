import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe/server";
import { stripeConfig } from "@/lib/stripe/config";
import { CartItem } from "@/types";

export async function POST(req: Request) {
  try {
    const { items } = (await req.json()) as { items: CartItem[] };

    if (!items?.length) {
      return NextResponse.json({ error: "No items provided" }, { status: 400 });
    }

    // Calculate total amount
    const totalAmount = items.reduce(
      (total, item) => total + Math.round(item.price * item.quantity * 100),
      0
    );

    // Check if total amount is at least 30 pence (3000 in cents)
    if (totalAmount < 3000) {
      return NextResponse.json(
        { error: "Total amount must be at least 30 pence" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      ...stripeConfig,
      line_items: items.map((item) => ({
        price_data: {
          currency: stripeConfig.currency,
          product_data: {
            name: item.name,
            images: [item.image],
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      payment_method_types: ["card"],
      metadata: {
        cart_items: JSON.stringify(
          items.map((item) => ({
            id: item.id,
            name: item.name,
            quantity: item.quantity,
          }))
        ),
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

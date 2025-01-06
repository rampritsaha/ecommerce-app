"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get("session_id");
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sessionId) {
      router.push("/"); // Redirect if no session_id is found
      return;
    }

    // Fetch session details from your API
    const fetchSession = async () => {
      try {
        const response = await fetch(`/api/stripe?session_id=${sessionId}`);
        const data = await response.json();
        setSession(data);
      } catch (error) {
        console.error("Error fetching session:", error);
        // router.push("/"); // Redirect on error
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, [sessionId, router]);

  if (loading) {
    return (
      <Container className="py-12">
        <div className="text-center">Loading...</div>
      </Container>
    );
  }

  if (!session) {
    return null; // Don't render anything if session is not available
  }

  return (
    <Container className="py-12">
      <div className="max-w-md mx-auto text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Thank you for your order!</h1>
        <p className="text-muted-foreground mb-4">
          Your payment was successful. We'll send you an email confirmation
          shortly.
        </p>
        <p className="text-sm text-muted-foreground">
          Order ID:{" "}
          {typeof session.payment_intent === "string"
            ? session.payment_intent
            : session.payment_intent?.id || "N/A"}
        </p>
      </div>
    </Container>
  );
}

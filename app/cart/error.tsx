'use client';

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function CartError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Container className="py-10">
      <div className="max-w-md mx-auto text-center">
        <AlertCircle className="h-10 w-10 text-destructive mx-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">Something went wrong!</h2>
        <p className="text-muted-foreground mb-4">{error.message}</p>
        <Button onClick={reset}>Try again</Button>
      </div>
    </Container>
  );
}
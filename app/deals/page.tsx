import { Tag } from 'lucide-react';

export default function DealsPage() {
  return (
    <div className="container py-10">
      <div className="flex items-center gap-2 mb-6">
        <Tag className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Special Deals</h1>
      </div>
      <p className="text-muted-foreground">
        Special deals and offers will appear here.
      </p>
    </div>
  );
}

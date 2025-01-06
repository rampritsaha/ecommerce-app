import { Apple } from "lucide-react"

export default function FruitsPage() {
  return (
    <div className="container py-10">
      <div className="flex items-center gap-2 mb-6">
        <Apple className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Fruits</h1>
      </div>
      <p className="text-muted-foreground">Fresh fruits collection will appear here.</p>
    </div>
  )
}
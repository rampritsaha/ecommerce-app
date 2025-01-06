import { Salad } from "lucide-react"

export default function VegetablesPage() {
  return (
    <div className="container py-10">
      <div className="flex items-center gap-2 mb-6">
        <Salad className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Vegetables</h1>
      </div>
      <p className="text-muted-foreground">Fresh vegetables collection will appear here.</p>
    </div>
  )
}
import { CalendarDays } from "lucide-react"

export default function SeasonalPage() {
  return (
    <div className="container py-10">
      <div className="flex items-center gap-2 mb-6">
        <CalendarDays className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Seasonal Products</h1>
      </div>
      <p className="text-muted-foreground">Seasonal products will appear here.</p>
    </div>
  )
}
import { Search } from "lucide-react"

export default function SearchPage() {
  return (
    <div className="container py-10">
      <div className="flex items-center gap-2 mb-6">
        <Search className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Search Products</h1>
      </div>
      <p className="text-muted-foreground">Search results will appear here.</p>
    </div>
  )
}
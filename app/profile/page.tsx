import { User } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="container py-10">
      <div className="flex items-center gap-2 mb-6">
        <User className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Profile</h1>
      </div>
      <p className="text-muted-foreground">Your profile information will appear here.</p>
    </div>
  )
}
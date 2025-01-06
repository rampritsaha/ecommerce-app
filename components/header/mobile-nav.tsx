"use client"

import { Home, Search, ShoppingCart, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import Link from "next/link"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72">
          <nav className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 py-2" onClick={() => setOpen(false)}>
              <Home className="h-5 w-5" />
              Home
            </Link>
            <Link href="/search" className="flex items-center gap-2 py-2" onClick={() => setOpen(false)}>
              <Search className="h-5 w-5" />
              Search
            </Link>
            <Link href="/cart" className="flex items-center gap-2 py-2" onClick={() => setOpen(false)}>
              <ShoppingCart className="h-5 w-5" />
              Cart
            </Link>
            <Link href="/profile" className="flex items-center gap-2 py-2" onClick={() => setOpen(false)}>
              <User className="h-5 w-5" />
              Profile
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
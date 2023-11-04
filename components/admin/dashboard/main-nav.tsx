"use client"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useModal } from "@/hooks/use-modal-store"
import { useRouter } from "next/navigation"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const router = useRouter();
  const onClick = () => {
    router.push("/admin/form")
  }
  const {onOpen, data} = useModal(); 
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        href="/admin/patients"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Customers
      </Link>

      <Button onClick={() => onOpen("createPatient")} className=" px-3 py-2 text-sm cursor-pointer" variant="outline">
        <Plus className="rounded-full h-6 w-6"/> New Lead
      </Button>
    </nav>
  )
}
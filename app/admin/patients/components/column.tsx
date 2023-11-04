"use client"

import { ColumnDef } from "@tanstack/react-table"
import { LeadStatus } from "@prisma/client"


export type LeadCloumn = {
  id: string
  email: string | null
  createdAt: string
  status: LeadStatus
}

export const columns: ColumnDef<LeadCloumn>[] = [
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },

];
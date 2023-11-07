"use client"

import { ColumnDef } from "@tanstack/react-table"
import { LeadStatus } from "@prisma/client"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CellAction } from "./cell-action"



export type LeadCloumn = {
  id: string
  name: string | null
  email: string | null
  address: string | null
  age: number | null
  dood: string | null
  doad: string | null
  ipdReg: number | null 
  bill : number | null 
  status: LeadStatus
}

export const columns: ColumnDef<LeadCloumn>[] = [
    
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "age",
    header: "age",
  },
  {
    accessorKey: "doad",
    header: "doad",
  },
  {
    accessorKey: "dood",
    header: "dood",
  },
  {
    accessorKey: "dx",
    header: "description",
  },
  {
    accessorKey: "surgery",
    header: "surgery",
  },
  {
    accessorKey: "side",
    header: "side",
  },
  
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "actions",
    cell : ({row}) => <CellAction data={row.original}/>
  }
   

];
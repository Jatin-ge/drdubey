"use client"

import { ColumnDef } from "@tanstack/react-table"
import { GenderType, LeadStatus } from "@prisma/client"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CellAction } from "./cell-action"



export type LeadCloumn = {
  id: string
  name: string
  address: string | null
  age: number | null
  gender: GenderType
  doad: string | null
  dood: string | null
  dx : string | null
  surgery: string | null
  remark: string | null
  status: LeadStatus
}

export const columns: ColumnDef<LeadCloumn>[] = [
    
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "gender",
    header: "Sex",
  },
  
  {
    accessorKey: "doad",
    header: "D.O.AD",
  },
  {
    accessorKey: "dood",
    header: "D.O.OP",
  },
  {
    accessorKey: "dx",
    header: "Description",
  },
  {
    accessorKey: "surgery",
    header: "Surgery",
  },
  {
    accessorKey: "side",
    header: "Side",
  },
  {
    accessorKey: "remark",
    header: "Remark",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "phone",
    header: "Phone",
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
"use client"

import { ColumnDef, FilterFn } from "@tanstack/react-table"
import { GenderType, Side, TPA } from "@prisma/client"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CellAction } from "./cell-action"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select"




export type LeadCloumn = {
  id: string
  name: string
  address: string | null
  age: number | null
  gender: GenderType
  doad: string | null
  phone: string | null
  dood: string | null
  dx : string | null
  surgery: string | null
  remark: string | null
  ipdReg: number | null
  bill: number | null
  implant : string | null
  side : Side
  patientStatus: string | null
  tpa: TPA  
}



const selectFilterFn : FilterFn<any> = (row, columnId, value, addMeta) => {
  if (value === undefined || value.length === 0) {
    return false;
  } else {
    const { someProp, otherProp } = mapOrConvertBackLabel(value);
    return someProp.includes(row.original.status?.someProp) && otherProp .includes(row.original.status?.otherProp );
  }
};
export const columns: ColumnDef<LeadCloumn>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
    
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
    accessorKey: "implant",
    header: "implant",
    
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
    accessorKey: "patientStatus",
    header: "Patient Status",
    
  },
  {
    accessorKey: "tpa",
    header: "TPA",
    
  },
  {
    accessorKey: "ipdReg",
    header: "IPD Reg",
    
  },
  {
    accessorKey: "bill",
    header: "Bill",
    
  },
  
  
 
  {
    id: "actions",
    cell : ({row}) => <CellAction data={row.original}/>
  }
   

];

function mapOrConvertBackLabel(value: any): { someProp: any; otherProp: any } {
  throw new Error("Function not implemented.")
}

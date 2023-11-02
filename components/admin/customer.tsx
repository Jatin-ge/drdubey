"use client"
import axios from "axios"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { ScrollArea } from "@/components/ui/scroll-area"

import { db } from "@/lib/db"
import { Button } from "../ui/button"
import { use, useState } from "react"
import { cn } from "@/lib/utils"

interface TableProps{
  patients:{
    NAME: string | null
    AGE: Number | null
    ADDRESS: string | null
    SEX: string | null
  }
}

export const TableDemo = async() => {
  const [currentRow, setCurrentRow] = useState(false)
  const patients = await db.patients.findMany(
    {
      orderBy:{
        NAME: "asc"
      }
    }
  )
  
  return (
   
      <ScrollArea>
      <h2 className="text-3xl font-semibold mb-10 mx-10">Patients</h2>
        <Table className="mx-4">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>NAME</TableHead>
              <TableHead>AGE</TableHead>
              <TableHead className="text-right">SEX</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient) => (
        
              <TableRow key={patient.id} onMouseEnter={() => setCurrentRow(true)}>
                <TableCell className="font-medium">{patient.id}</TableCell>
                  <TableCell>{patient.NAME}</TableCell>
                <TableCell>{patient.AGE}</TableCell>
                <TableCell className="text-right">{patient.SEX}</TableCell>
                <TableCell className="text-center">{patient.ADDRESS}</TableCell>
                <Button className={cn(
                  "hidden",
                  currentRow && ""
                )}>
                  Edit
                </Button>
              </TableRow>
              
            ))}
        
          </TableBody>
        </Table>
      </ScrollArea>

    
  )
}

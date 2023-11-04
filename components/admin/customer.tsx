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
import { Button } from "@/components/ui/button"
import { ActionTooltip } from "@/components/action-tooltip"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

interface TableProps{
  leads:{
    NAME: String
    AGE: Number 
    ADDRESS: string 
    SEX: string
  }
}

export const TableDemo = async() => {
  const leads = await db.lead.findMany(
    {
      orderBy:{
        name: "asc"
      }
    }
  )
  
  return (
   
      <ScrollArea>
      <h2 className="text-3xl font-semibold mb-10 mx-10">leads</h2>
        <Table className="ml-4">
          <TableHeader>
            <TableRow>
              {/* <TableHead className="w-[100px]">ID</TableHead> */}
              <TableHead>NAME</TableHead>
              <TableHead className="text-left">AGE</TableHead>
              <TableHead className="text-left">SEX</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.map((lead) => (
        
              <TableRow key={lead.id} >
                {/* <TableCell className="font-medium">{lead.id}</TableCell> */}
                  <TableCell>{lead.name}</TableCell>
                <TableCell className="text-left">{lead.address}</TableCell>
                <TableCell className="">{lead.gender}</TableCell>
                <TableCell className="">{lead.address}</TableCell>
               <Button variant="outline" className="ml-auto">
               <MoreHorizontal className="ml-2 h-4 w-4" />
            </Button>
         
        </TableRow>

              
              
              
            ))}
        
          </TableBody>
        </Table>
      </ScrollArea>

    
  )
}

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
import { Edit, Trash } from "lucide-react"

interface TableProps{
  leads:{
    NAME: string | null
    AGE: Number | null
    ADDRESS: string | null
    SEX: string | null
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
                <TableCell className="text-left">{lead.age}</TableCell>
                <TableCell className="">{lead.gender}</TableCell>
            <div className="hidden group-hover:flex items-center gap-x-2 absolute p-1 -top-2 right-5 bg-white dark:bg-zinc-800 border rounded-sm">
          
            <ActionTooltip label="Edit">
              <Edit
                className="cursor-pointer ml-auto w-4 h-4 text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition"
              />
            </ActionTooltip>
          <ActionTooltip label="Delete">
            <Trash
              className="cursor-pointer ml-auto w-4 h-4 text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition"
            />
          </ActionTooltip>
        </div>
        </TableRow>

              
              
              
            ))}
        
          </TableBody>
        </Table>
      </ScrollArea>

    
  )
}

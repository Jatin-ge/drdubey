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

import { db } from "@/lib/db"


export const TableDemo = async() => {
  const patients = await db.patients.findMany()
  
  return (

    <Table>
    <Command className="overflow-scroll">
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
    <CommandGroup>
    
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>NAME</TableHead>
          <TableHead>AGE</TableHead>
          <TableHead>SEX</TableHead>
          <TableHead className="text-center">ADDRESS</TableHead>
        </TableRow>
      </TableHeader>
     
      <TableBody>
        
        {patients.map((patient) => (
                
          <TableRow key={patient.id}>
            <TableCell className="font-medium">{patient.id}</TableCell>  
            <CommandItem key={patient.id} className="max-w-max">        
              <TableCell>{patient.NAME}</TableCell>   
            </CommandItem>      
            <TableCell>{patient.AGE}</TableCell>
            <TableCell className="text-right">{patient.SEX}</TableCell>
            <TableCell className="text-center">{patient.ADDRESS}</TableCell>
          </TableRow>
        
        
        ))}
      
      </TableBody>
    
    </CommandGroup>
    </CommandList>
    </Command>
    </Table>

    
  )
}

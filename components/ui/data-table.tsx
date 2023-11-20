"use client"

import { Button } from "@/components/ui/button"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  SortingState,
  getSortedRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
  ColumnFiltersState,

} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import axios from "axios"
import { useModal } from "@/hooks/use-modal-store"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]

}


export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [rowSelection, setRowSelection] = React.useState({})
  const [isLoading, setIsLoading] = useState(false)
  const { onOpen } = useModal();

  const header = {
   "headers":{
    Authorization: "Bearer EAAEf4LMZAyZA8BO4tHBZBePIoauTjxZAvBkZAZAEzxZBsNg3Xbq0JTcLvZAk21X74bp0izDHpZBL5RposTMqbZBGlMO8tqbWSZAKrZBci8JE1TfxVlcZBZADN9WNcPVpgRHIYqRvYNqBfbTiSSCLeg1ZAfhkIq356wYH35SmpXbPOpo0sFchjoVyZA4MOcReSHHc17HiZAjrEOhAZCWUKJZAv6RiSNQ2scZD",
    Accept: "application/json"
    
   } 
  }

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
    
  })

  const onSubmit = async() => {
  setIsLoading(true) 
  try {
    for (const number of table.getFilteredSelectedRowModel().rows) {
      console.log(number)
      const body = {
        messaging_product: "whatsapp",
        recipient_type: "individual",
        //@ts-ignore
        to: number.original?.phone,
        type: "template",
        template: {
          name: "hello_world",
          language: {
            code: "en_US"
          },
        }
      };  
      
      await axios.post("https://graph.facebook.com/v17.0/177309328798172/messages", body, header);
      console.log("done")
    }
    setIsLoading(false)
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div>
      <div className="flex flex-row ">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>

        <Button
            className={cn("bg-green-500 flex flex-col text-white text-md",table.getFilteredSelectedRowModel().rows.length > 0 ? "" : "hidden")}
            variant="outline"
            size="lg"
            onClick={() => onOpen("sendBulkMessage",{template : table.getFilteredSelectedRowModel().rows}) }
            disabled={isLoading}
            
          >
            Send Whatsapp message
          </Button>
      </div>
        <div className="flex items-center py-4">
        <Input
          placeholder="Filter names..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
        
      </div>
      
    </div>
  )
}

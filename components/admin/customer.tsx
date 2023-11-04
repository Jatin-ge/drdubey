import axios from "axios";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
} from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";

import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { ActionTooltip } from "@/components/action-tooltip";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

interface TableProps {
  leads: {
    NAME: String;
    AGE: Number;
    ADDRESS: string;
    SEX: string;
  };
}

export const TableDemo = async () => {
  const leads = await db.lead.findMany({
    orderBy: {
      name: "asc",
    },
  });

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
            <TableRow key={lead.id}>
              {/* <TableCell className="font-medium">{lead.id}</TableCell> */}
              <TableCell>{lead.name}</TableCell>
              <TableCell className="text-left">{lead.address}</TableCell>
              <TableCell className="">{lead.gender}</TableCell>
              <TableCell className="">{lead.address}</TableCell>
              <Button variant="outline" className="ml-auto">
                <div class="w-6 h-6 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 3a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2h8z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 17l2-2m0 0l2-2m-2 2l-2-2m2 2l2-2"
                    ></path>
                  </svg>
                </div>

                {/* <MoreHorizontal className="ml-2 h-4 w-4" /> */}
              </Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  );
};

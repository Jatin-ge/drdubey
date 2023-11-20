"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";


import { columns, AppointMentCloumn } from "./column";
import { DataTable } from "@/components/ui/data-table";

interface BillboardClientProps {
  data: AppointMentCloumn[];
}

export const BillboardClient: React.FC<BillboardClientProps> = ({
  data
}) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Appointments (${data.length})`} description="Manage your Appointments" />
        <Button onClick={() => router.push(`/admin/addpatient`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data}
      />

    </>
  );
};
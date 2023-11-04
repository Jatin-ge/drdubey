import { format } from "date-fns";

import { db } from "@/lib/db";

import { LeadCloumn } from "./components/column"
import { BillboardClient } from "./components/client";
import { LeadStatus } from "@prisma/client";

const BillboardsPage = async ({
  params
}: {
  params: { storeId: string }
}) => {
  const billboards = await db.lead.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  });

  const formattedLeadCloumn: LeadCloumn[] = billboards.map((item) => ({
    id: item.id,
    name: item.name,
    email: item.email,
    address: item.address,
    age: item.age,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
    status: item.status
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={formattedLeadCloumn} />
      </div>
    </div>
  );
};

export default BillboardsPage;
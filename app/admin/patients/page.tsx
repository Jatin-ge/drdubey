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

  const formattedBillboards: LeadCloumn[] = billboards.map((item) => ({
    id: item.id,
    email: item.email,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
    status: item.status
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={formattedBillboards} />
      </div>
    </div>
  );
};

export default BillboardsPage;
import { db } from "@/lib/db";

import Addpatient from "../../../addpatient/page";

const BillboardPage = async ({
  params
}: {
  params: { appointmentId: string }
}) => {
  const lead = await db.appointment.findUnique({
    where: {
      id: params.appointmentId
    }
  });

  return ( 
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Addpatient initialData={lead} />
      </div>
    </div>
  );
}

export default BillboardPage;
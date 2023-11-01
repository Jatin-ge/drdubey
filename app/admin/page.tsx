import { DashboardPage } from "@/components/admin/dashboard/dashboard";
import { TableDemo } from "@/components/admin/customer";
import { db } from "@/lib/db";
const AdminPage = async() => {
  const patients = await db.patients.findMany()
  return ( 
    <>
      <DashboardPage/>
      <TableDemo />
    </>
   );
}
 
export default AdminPage;
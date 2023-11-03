
import { DashboardPage } from "@/components/admin/dashboard/dashboard";
import { TableDemo } from "@/components/admin/customer";
import { db } from "@/lib/db";
const AdminPage = async() => {
  return ( 
    <>
      <DashboardPage/>
    </>
   );
}
 
export default AdminPage;
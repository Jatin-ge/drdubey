import { db } from "@/lib/db";

import Appointment from "@/components/ui/appointment-form";
import { currentProfile } from "@/lib/current-profile";
import { redirect, useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation"

const BillboardPage = async () => {
  const profile = await currentProfile();

  if(!profile){
    return redirect("/sign-in");
  }

  return ( 
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        
        <Appointment name={profile.name} email={profile.email} userId={profile.userId}/>
        
      </div>
    </div>
  );
}

export default BillboardPage;
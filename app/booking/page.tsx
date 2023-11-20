import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { InitialProfile } from "@/lib/initial-profile";

const SetupPage = async () => {
  const profile = await InitialProfile();

    if (!profile) {
        return redirect("/sign-in");
    }
 

 
    return redirect(`/booking/appointment`);

}
 
export default SetupPage;
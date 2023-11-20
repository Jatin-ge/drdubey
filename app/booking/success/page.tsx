import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const BookingSuccess = async() => {

    const profile = await currentProfile();
    if(!profile) {
        return redirect("/sign-in");
    }

    const bookings = await db.profile.findUnique({
        where:{
            userId: profile.userId,
            },
        
        include:{
            appointments: {
                orderBy:{
                    createdAt: "asc"
                }
            },

        }
    })
    if(!bookings){
        return redirect("/booking");
    }

    console.log(bookings)

    return ( <div>
        Success
    </div> );
}
 
export default BookingSuccess;
import { UserAvatar } from "@/components/ui/user-avatar"
import { db } from "@/lib/db"
import { User } from "@clerk/nextjs/server"

export const RecentSales = async() => {
  const appointments  = await db.appointment.findMany({
    include:{
      user:{
        select:{
          email:true,
          imageUrl: true
        }
      
      }
    },
    orderBy:{
      createdAt:"desc"
    }
    
  }
  
  )
  return (
    <div className="space-y-8">
        {appointments.slice(0,5).map((appointment) => (
               <div className="flex items-center" key={appointment.id}>
                <UserAvatar src={appointment.user.imageUrl} className="flex-shrink-0 h-10 w-10 rounded-full" />
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">{appointment.name}</p>
          <p className="text-sm text-muted-foreground">
            {appointment.user.email}
          </p>
        </div>
        <div className="ml-auto font-medium">{appointment.date}</div>
      </div>

          ))}

        
        
      </div>
  )
}
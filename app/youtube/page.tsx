import { YoutubePlayer } from "@/components/ui/video";
import { db } from "@/lib/db";

const Youtube = async() => {
    const youtube  = await db.youTube.findMany({
    })
    return ( 
         <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Youtube videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {youtube.map((item) => {
          return <YoutubePlayer key={item.id} url={item.link} />;
        })}
      </div>
    </div>
     );
}
 
export default Youtube;
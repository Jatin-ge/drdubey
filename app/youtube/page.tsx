import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/navbar";
import { YoutubePlayer } from "@/components/ui/video";
import { db } from "@/lib/db";
import GTM from "@/utils/GTM";

const Youtube = async () => {
  const youtube = await db.youTube.findMany({});
  return (
    <>
      <head>
        <GTM gtmId="GTM-MDF4W4JT" />

        <title>Dr. Dubay</title>
        <meta
          name="description"
          content="Dr. Dheeraj Dubay, Joint and Hip Replacement Surgeon in Rajasthan"
        />

        {/* Favicon for branding */}
        <link rel="icon" href="/assets/images/logonew.png" />
      </head>
      <Navbar />
      <div className="p-4 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {youtube.map((item) => {
            return <YoutubePlayer key={item.id} url={item.link} />;
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Youtube;

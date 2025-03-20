import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar/navbar";

const Events = () => {
  return (
    <>
      <Navbar />
      <div className="w-[85%] mx-auto py-10">
        <h1 className="text-4xl font-bold text-center mb-8">Upcoming Events</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Event Title 1</h2>
            <p className="text-gray-700 mb-4">
              Description of the event. Details about what to expect and how to participate.
            </p>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Event Title 2</h2>
            <p className="text-gray-700 mb-4">
              Description of the event. Details about what to expect and how to participate.
            </p>
            <Image
              src="/assets/images/event-placeholder.jpg"
              alt="Event Image"
              width={600}
              height={400}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Events; 
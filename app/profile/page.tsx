import ProfileCard from "@/components/UserProfile/ProfileCard";
import { db } from "@/lib/db";
import React from "react";

import { currentProfile } from "@/lib/current-profile";
import Navbar from "@/components/Navbar/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useModal } from "@/hooks/use-modal-store";
import SelectCity from "@/components/ui/select-city";
import { InitialProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";
import GTM from "@/utils/GTM";

const Page = async () => {
  const AuthProfile = await InitialProfile();

  if (!AuthProfile) {
    return redirect("/sign-in");
  }

  const { userId, name, imageUrl, email } = AuthProfile;

  const appointments = await db.appointment.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const phone = appointments[0]?.phone;

  console.log("My appointments  ", appointments.length);

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

      {appointments.length !== 0 ? (
        <>
          <ProfileCard
            name={appointments[0] ? appointments[0].name : name}
            imageUrl={imageUrl}
            email={email}
            appointments={appointments}
            phone={phone}
          />

          <div className="container mx-auto px-4 mt-10 mb-10">
            <h2 className="text-3xl font-bold mb-2">Discussions</h2>
            <div className="flex flex-col gap-6">
              {appointments.map((appointment: any) => (
                <div
                  key={appointment.id}
                  className="bg-white rounded-lg shadow-md p-4"
                >
                  {appointment.discussionTitle ? (
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          {appointment.discussionTitle}
                        </h3>
                        <p className="text-gray-600">
                          {appointment.discussionDescription}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">
                          {appointment.date} at {appointment.time}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-between">
                      <h3 className="text-xl font-bold mb-2 text-center">
                        No discussion for appointment scheduled for{" "}
                        {appointment.date} at {appointment.time}
                      </h3>
                      <div className="hidden md:block">
                        <p className="text-gray-600">
                          {appointment.date} at {appointment.time}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <SelectCity />
      )}
    </>
  );
};

export default Page;

import ProfileCard from "@/components/UserProfile/ProfileCard";
import { db } from "@/lib/db";
import React from "react";

import { currentProfile } from "@/lib/current-profile";
import Navbar from "@/components/Navbar/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useModal } from "@/hooks/use-modal-store";

const Page = async () => {
  const user = await db.profile.findMany();
  const AuthProfile = await currentProfile();
  const { onOpen } = useModal();

  if (!AuthProfile) {
    console.error("Profile is undefined");
    return null; // or handle the case where the profile is not available
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

  console.log("My appointments  ", appointments);

  return (
    <>
      <Navbar />

      {appointments.length > 0 ? (
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
                      <div>
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
        <div className="text-lg  md:text-3xl font-semibold text-center m-12">
          <div className="my-8">
            Book an Appointment to create Patient Profile !
          </div>
          <Button
            onClick={() => onOpen("selectCity")}
            className="p-2 border  relative inline-flex justify-center items-center gap-x-3 text-center bg-primary hover:bg-blue-700  border-primary text-xl lg:text-base text-white  rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
          >
            Book an appointment
          </Button>
        </div>
      )}
    </>
  );
};

export default Page;

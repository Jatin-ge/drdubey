import ProfileCard from "@/components/UserProfile/ProfileCard";
import { db } from "@/lib/db";
import React from "react";

import { currentProfile } from "@/lib/current-profile";
import Navbar from "@/components/Navbar/navbar";


const page = async () => {
  const user = await db.profile.findMany();
  const AuthProfile = await currentProfile();


  if (!AuthProfile) {
    console.error("Profile is undefined");
    return null; // or handle the case where the profile is not available
  }

  const { userId, name, imageUrl, email }  = AuthProfile;

  const appointments = await db.appointment.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const phone = appointments[0].phone;

  console.log("My appointments  ", appointments);

  return (
    <>
      <Navbar />
      <ProfileCard
        name={name}
        imageUrl={imageUrl}
        email={email}
        appointments={appointments}
        phone={phone}
      />
    </>
  );
};

export default page;

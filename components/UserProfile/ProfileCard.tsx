import { db } from "@/lib/db";
import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  imageUrl: string;
  email: string;
  appointments: [];
  phone: string;
};

const ProfileCard = ({ name, imageUrl, email, appointments, phone }: Props) => {
  return (
    <>
      <div className="flex flex-col md:flex-row ">
        <div className="bg-white w-[40%] overflow-hidden shadow rounded-lg border mx-auto">
          <div className="px-4 flex justify-between py-5 sm:px-6 bg-primary text-white">
            <h3 className="text-lg leading-6 font-medium">User Profile</h3>

            <Image
              src={imageUrl}
              width={56}
              height={56}
              className="rounded-full"
              alt={""}
            />
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {name}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {email}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Phone Number
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {phone}
                </dd>
              </div>
              {/* Add other profile information sections as needed */}
            </dl>
          </div>
        </div>
        <div className="w-full md:w-1/2 mx-auto bg-gradient-to-r from-blue-400 to-teal-500 shadow-md rounded-md p-8 text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">
              Your Appointments
            </h2>
            {appointments.length === 0 ? (
              <p className="text-lg text-center">No appointments booked yet.</p>
            ) : (
              <ul className="divide-y divide-white">
                <li className="py-4 transition duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">Patient Name</h3>
                    </div>
                    <p className="text-2xl font-bold leading-relaxed">
                      Date and Time
                    </p>
                  </div>
                </li>
                {appointments.map((appointment) => (
                  <li
                    key={appointment.id}
                    className="py-4 transition duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">
                          {appointment.name.toUpperCase()}
                          <p className="text-gray-300">
                            Age: {appointment.age}
                          </p>
                        </h3>
                      </div>
                      <p className="text-2xl font-bold">
                        {appointment.date} at {appointment.time}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;

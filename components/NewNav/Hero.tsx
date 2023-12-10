import React, { useState } from "react";
import { useRouter } from "next/navigation";
const Hero = ({ heading, message }: any) => {
  const handleClick = () => {
    router.push("/booking");
  };

  const router = useRouter();
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    router.push(`/booking/${city}`);
    setShowCityDropdown(false);
  };

  const handleBookAppointment = () => {
    setShowCityDropdown(true);
  };

  const handleNavigateToBooking = () => {
    if (selectedCity) {
      router.push(`/booking/${encodeURIComponent(selectedCity)}`);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/80 z-[2]" />
      <div className="p-5 text-white z-[2] md:mt-[-10rem] ">
        <h2 className="text-5xl font-bold w-2/3">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>

        <div className="">
          <select
            id="city"
            name="city"
            value={selectedCity || ""}
            onChange={(e) => handleCitySelect(e.target.value)}
            className="px-8 md:px-16 bg-primary font-bold text-xl py-2 border"
          >
            <option value="" disabled>
              Book an appointment
            </option>
            {["chennai", "jaipur", "rajasthan", "kota"].map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Hero;

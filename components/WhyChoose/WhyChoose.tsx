import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";

type Props = {};

const WhyChoose = (props: Props) => {
  return (
    <div className="container mx-auto my-16 md:my-32">
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-44">
        <div className="mx-auto md:w-1/2">
          <Image
            width={900}
            height={900}
            src="/assets/images/whycoose2.jpg"
            alt="#"
            className="rounded-xl"
          />
        </div>

        <div className="md:w-1/2  ">
          <h1 className="text-2xl md:text-5xl font-semibold text-primary my-8">
            Why Choose Us?
          </h1>
          <ul className="list-disc list-inside mt-4 text-xl">
            <li className="flex items-center my-2">
              <CheckCircleIcon className="mr-2 " color="primary" />
              Safety First Quality Must
            </li>
            <li className="flex items-center my-2">
              <CheckCircleIcon className="mr-2" color="primary" />
              Patient-Centric Approach
            </li>
            <li className="flex items-center my-2">
              <CheckCircleIcon className="mr-2" color="primary" />
              Focused Leadership
            </li>
            <li className="flex items-center my-2">
              <CheckCircleIcon className="mr-2" color="primary" />
              Cutting-Edge Technology
            </li>
            <li className="flex items-center my-2">
              <CheckCircleIcon className="mr-2" color="primary" />
              Transparent Pricing
            </li>
            <li className="flex items-center my-2">
              <CheckCircleIcon className="mr-2" color="primary" />
              Coordinated Care
            </li>
          </ul>
        </div>
      </div>
      <div className="my-[80px]">
        <h1 className="text-4xl font-semibold">
          Wellness, Compassion, Quality
        </h1>
        <p className="my-4 text-lg md:text-xl">
          They live in Bookmark grove right at ht coast of the Semantic, a large
          language ocean. A small river named Duden flowws by their place and
          supplies it.
        </p>
        <button className="bg-primary px-5 py-2 rounded-md text-white mt-4 text-xl ">
          Make An Appointment
        </button>
      </div>
    </div>
  );
};

export default WhyChoose;

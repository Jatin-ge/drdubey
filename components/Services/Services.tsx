import React from "react";

import PsychologyIcon from "@mui/icons-material/Psychology";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type Props = {};

const Services = (props: Props) => {
  return (
    <div>
      <div className="px-[20px] sm:px-[50px] lg:px-[100px] xl:px-[150px] py-[40px] bg-[#F4FEFA] h-full">
        <div className="flex justify-between flex-col sm:flex-row">
          <div className=" w-[100%] sm:w-[40vw] xl:w-[30vw]">
            <span className="text-primary font-semibold">
              SERVICES & TREAFTMENT
            </span>
            <p className="bolder text-3xl sm:text-3xl lg:text-4xl font-semibold">
              More than 40 speciality and health care services
            </p>
          </div>
          <div className="">
            <button className="bg-primary px-6 font-bold py-3 text-white mt-2 sm:mt-[40%]">
              See all Services
            </button>
          </div>
        </div>
        <div className=" mx-auto      flex flex-wrap xl:ml-44 xl:grid xl:grid-cols-2 justify-around ">
          <div
            className="flex w-[512px] xl:w-[700px] text-white  py-10 px-8 rounded-xl relative m-6"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/images/elbow.jpeg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="">
              <PsychologyIcon className="" />
            </div>
            <div className="flex-row mx-4">
              <div>
                <h1 className="bolder text-2xl font-semibold">
                  Total Elbow Replacement
                </h1>
              </div>
              <div className="flex mt-32 items-end">
                <span>
                  Although elbow joint replacement is much less common than knee
                  or hip replacement, it is just as successful in relieving
                  joint pain and returning people to activities they enjoy.
                </span>
                <div className="absolute bottom-0 bg-primary right-0 bg-gray-300 w-[60px] h-10 rounded-br-xl flex items-center justify-center ">
                  <ArrowForwardIcon />
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex w-[512px] text-white  py-10 px-8 rounded-xl relative m-6"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/images/pelvic.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="">
              <PsychologyIcon className="" />
            </div>
            <div className="flex-row mx-4">
              <div>
                <h1 className="bolder text-2xl font-semibold">
                  Pelvic and Complex Trauma
                </h1>
              </div>
              <div className="flex mt-32 items-end">
                <span>
                  A pelvic fracture involves the breakage of pelvic bones, such
                  as pelvic ring, acetabulum, and avulsion fractures. Typically
                  caused by high-energy trauma, these fractures can also occur
                  in older individuals due to lower energy incidents.
                </span>
                <div className="absolute bottom-0 bg-primary right-0 bg-gray-300 w-[60px] h-10 rounded-br-xl flex items-center justify-center ">
                  <ArrowForwardIcon />
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex w-[512px] text-white  py-10 px-8 rounded-xl relative m-6"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/images/hip.jpeg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="">
              <PsychologyIcon className="" />
            </div>
            <div className="flex-row mx-4">
              <div>
                <h1 className="bolder text-2xl font-semibold">
                  Rivision Hip Replacement
                </h1>
              </div>
              <div className="flex mt-32 items-end">
                <span>
                  Total hip replacement is highly successful, relieving
                  debilitating hip pain and allowing for more active lives. In
                  some cases, a second operation, known as revision total hip
                  replacement, may be recommended to replace parts of the
                  original prosthesis that have failed over time.
                </span>
                <div className="absolute bottom-0 bg-primary right-0 bg-gray-300 w-[60px] h-10 rounded-br-xl flex items-center justify-center ">
                  <ArrowForwardIcon />
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex w-[512px] 2xl:w-[700px] 2xl:-mx-40 text-white  py-10 px-8 rounded-xl relative m-6"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/images/knee.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="">
              <PsychologyIcon className="" />
            </div>
            <div className="flex-row mx-4">
              <div>
                <h1 className="bolder text-2xl font-semibold">
                  Knee replacement surgery
                </h1>
              </div>
              <div className="flex mt-32 items-end">
                <span>
                  procedure involves replacing damaged bone and cartilage with a
                  metal and plastic artificial joint. An orthopedic surgeon
                  assesses your knee condition using factors like range of
                  motion, stability, and strength, with X-rays determining the
                  extent of damage.
                </span>
                <div className="absolute bottom-0 bg-primary right-0 bg-gray-300 w-[60px] h-10 rounded-br-xl flex items-center justify-center ">
                  <ArrowForwardIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

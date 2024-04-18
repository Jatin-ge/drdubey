import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/navbar";
import { db } from "@/lib/db";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async ({ params }: { params: { slug: string } }) => {
  console.log("the slug is ", params.slug);

  const data = await db.blogs.findFirst({
    where: {
      slug: params.slug,
    },
  });

  const allBlogs = await db.blogs.findMany();

  console.log("the data  is ", data);

  return (
    <>
      <head>
        <title>{data?.metaTitle || "Default Title"}</title>
        <meta
          name="description"
          content={data?.metaDescription || "Default Description"}
        />
        <link rel="icon" href="/assets/images/logonew.png" />
      </head>
      <Navbar />
      <div className="container mx-auto">
        <main className="mt-12">
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-6 mb-16 ">
            <div className="left mb-4 lg:mb-0 md:p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
              <h1 className="text-gray-800 text-4xl md:text-5xl font-bold mt-2 mb-2 md:mb-8 leading-tight">
                {data?.title}
              </h1>
              <Image
                src={data?.image1 || "/assets/images/col2.jpg"}
                height={900}
                width={900}
                alt="img"
                className="rounded-md object-cover w-[700px] h-[670px]"
              />
              <span className="text-green-700 text-sm hidden md:block mt-4">
                Dr. Dheeraj Dubay
              </span>
              <h1
                style={{ whiteSpace: "pre-wrap" }}
                className="text-gray-600 text-2xl font-semibold mt-2 mb-2 leading-tight"
              >
                {data?.subtitle1}
              </h1>
              <p style={{ whiteSpace: "pre-wrap" }} className="text-xl">
                {data?.content1}
              </p>

              {data?.subtitle2 ? (
                <h1
                  style={{ whiteSpace: "pre-wrap" }}
                  className="text-gray-600 text-2xl font-semibold mt-2 mb-2 leading-tight"
                >
                  {data?.subtitle2}
                </h1>
              ) : (
                <></>
              )}

              {data?.image2 ? (
                <Image
                  src={data?.image2 || "/assets/images/col2.jpg"}
                  height={900}
                  width={900}
                  alt="img"
                  className="rounded-md object-cover w-[700px] h-[500px]"
                />
              ) : (
                <></>
              )}

              {data?.content2 ? (
                <p style={{ whiteSpace: "pre-wrap" }} className="text-xl">
                  {data?.content2}
                </p>
              ) : (
                <></>
              )}
            </div>

            <div className="right w-full md:w-2/3 ">
              <div className="md:sticky md:top-8  ">
                <div className=" text-[#EE8A27] font-semibold m-2 text-xl">
                  recent post
                </div>

                <div className="rounded w-full flex flex-col  mb-10">
                  {allBlogs?.map((item: any) => (
                    // eslint-disable-next-line react/jsx-key
                    <Link href={`/blogs/${item.slug}`}>
                      <div
                        key={item.id}
                        className="rounded w-full flex flex-col md:flex-row mb-5 md:mb-10"
                      >
                        <Image
                          height={250}
                          width={200}
                          src={item.image1 || "/assets/images/contact.jpg"}
                          alt="img"
                          className="block md:hidden lg:block rounded-md h-32 w-60  md:h-32 m-4 md:m-0"
                        />
                        <div className="bg-white rounded px-4">
                          <div className="md:mt-0  text-gray-800 font-semibold text-xl mb-2">
                            {item.title}
                          </div>
                          <p className=" p-2 pl-0 pt-1 text-sm text-gray-600">
                            {item.subtitle1}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default page;

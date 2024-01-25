"use client";
import axios from "axios";
import { Instagram, Linkedin, LinkedinIcon } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";
import { AiFillLinkedin } from "react-icons/ai";

const ContactSection: React.FC = () => {
  const handleClick = async (event: any) => {
    event.preventDefault();

    const formFields = event.target;
    const fullNameInput =
      formFields.first_name.value + " " + formFields.last_name.value;
    const emailInput = formFields.email.value;
    const messageInput = formFields.message.value;
    try {
      await axios.post("/api/contact", {
        fullNameInput,
        emailInput,
        messageInput,
      });
      toast.success("Thanks for Contacting us!");
      formFields.reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/images/7.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(115px)",
      }}
      className="py-16 bg-gray-100 font-poppins dark:bg-gray-900"
    >
      <div className="justify-center flex-1 max-w-5xl px-4 py-4 mx-auto lg:py-10 md:px-7">
        <div className="max-w-xl mx-auto">
          <div className="text-center ">
            <div className="relative flex flex-col items-center">
              <h1 className="text-5xl font-bold dark:text-white">
                {" "}
                Our <span className="text-primary"> Contact</span>{" "}
              </h1>
              <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                <div className="flex-1 h-2 bg-blue-200"></div>
                <div className="flex-1 h-2 bg-blue-400"></div>
                <div className="flex-1 h-2 bg-primary"></div>
              </div>
            </div>
            <p className="mb-16 text-sm md:text-lg text-center text-gray-50">
              Drop your message here and feel free to enquire anything about us.
              We are happy to help.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap mb-8 -mx-4">
          <div className="w-full px-4 mb-4 lg:w-1/3 lg:mb-0">
            <div className="h-full py-12 text-center transition-all rounded-lg shadow dark:bg-gray-800 bg-gray-50 hover:shadow-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-primary rounded-full dark:bg-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path>
                </svg>
              </div>
              <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-400">
                Email
              </h2>
              <a
                href="#"
                className="text-base font-medium text-gray-500 md:text-lg dark:text-gray-400"
              >
                dheeraj23july@gmail.com
              </a>
            </div>
          </div>

          <div className="w-full px-4 mb-4 lg:w-1/3 lg:mb-0">
            <div className="h-full py-12 text-center transition-all rounded-lg shadow dark:bg-gray-800 bg-gray-50 hover:shadow-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-primary rounded-full dark:bg-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-telephone"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                </svg>
              </div>
              <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-400">
                Phone
              </h2>
              <a
                href="#"
                className="text-base font-medium text-gray-500 md:text-lg dark:text-gray-400"
              >
                +91 8955373205
              </a>
            </div>
          </div>

          <div className="w-full px-4 mb-4 lg:w-1/3 lg:mb-0">
            <div className="h-full py-12 text-center transition-all rounded-lg shadow dark:bg-gray-800 bg-gray-50 hover:shadow-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-primary rounded-full dark:bg-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-grid-3x3"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13zM1.5 1a.5.5 0 0 0-.5.5V5h4V1H1.5zM5 6H1v4h4V6zm1 4h4V6H6v4zm-1 1H1v3.5a.5.5 0 0 0 .5.5H5v-4zm1 0v4h4v-4H6zm5 0v4h3.5a.5.5 0 0 0 .5-.5V11h-4zm0-1h4V6h-4v4zm0-5h4V1.5a.5.5 0 0 0-.5-.5H11v4zm-1 0V1H6v4h4z"></path>
                </svg>
              </div>
              <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-400">
                Social
              </h2>
              <a
                href="https://www.facebook.com/drdheerajdubay/"
                className="inline-block mr-4 text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:text-blue-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="w-6 h-6 bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCyPsbuVYgJyu-QfAT7bqtnw"
                className="inline-block mr-4 text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 hover:text-blue-600"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 48 48"
                  version="1.1"
                  className="w-8 h-8  mt-4"
                  // xmlns="http://www.w3.org/2000/svg"
                  xmlns="http://www.w3.org/1999/xlink"
                >
                  <title>Youtube</title>
                  <g
                    id="Icon/Social/youtube-color"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <path
                      d="M20.2838235,29.7208546 L20.2817697,19.3775851 L30.0092421,24.5671906 L20.2838235,29.7208546 Z M41.6409276,17.5856462 C41.6409276,17.5856462 41.2890436,15.0488633 40.2097727,13.9319394 C38.8405739,12.4655276 37.3060444,12.4583393 36.6026186,12.3724221 C31.5649942,12 24.008044,12 24.008044,12 L23.9922983,12 C23.9922983,12 16.4356904,12 11.398066,12.3724221 C10.6939556,12.4583393 9.16045298,12.4655276 7.79091194,13.9319394 C6.71164104,15.0488633 6.36009927,17.5856462 6.36009927,17.5856462 C6.36009927,17.5856462 6,20.5646804 6,23.5437145 L6,26.3365376 C6,29.3152295 6.36009927,32.2946059 6.36009927,32.2946059 C6.36009927,32.2946059 6.71164104,34.8310466 7.79091194,35.9483127 C9.16045298,37.4147246 10.9592378,37.3681718 11.7605614,37.5218644 C14.6406709,37.8042616 24.0001711,37.8915481 24.0001711,37.8915481 C24.0001711,37.8915481 31.5649942,37.8799099 36.6026186,37.5074878 C37.3060444,37.4219129 38.8405739,37.4147246 40.2097727,35.9483127 C41.2890436,34.8310466 41.6409276,32.2946059 41.6409276,32.2946059 C41.6409276,32.2946059 42,29.3152295 42,26.3365376 L42,23.5437145 C42,20.5646804 41.6409276,17.5856462 41.6409276,17.5856462 L41.6409276,17.5856462 Z"
                      id="Shape"
                      fill="#E70000"
                    ></path>
                  </g>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/dheerajdubay1/?igshid=YmMyMTA2M2Y%3D"
                className="inline-block mr-4 text-rose-500"
              >
                <Instagram />
              </a>
              <a
                href="https://www.instagram.com/dheerajdubay1/?igshid=YmMyMTA2M2Y%3D"
                className="inline-block mr-4 text-blue-500 w-6 h-6"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="px-8 py-8 bg-white border rounded-md shadow-md dark:border-gray-800 dark:bg-gray-800">
          <form onSubmit={handleClick}>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-00 dark:text-gray-400">
                Please send message for futher information!{" "}
              </h2>
            </div>
            <div className="flex flex-wrap mb-4 -mx-2">
              <div className="w-full px-2 mb-4 lg:mb-0 lg:w-1/2">
                <input
                  className="w-full px-3 py-2 leading-loose border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
                  type="text"
                  placeholder="First Name.."
                  name="first_name"
                />
              </div>
              <div className="w-full px-2 lg:w-1/2">
                <input
                  className="w-full px-3 py-2 leading-loose border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
                  type="text"
                  placeholder="Last Name.."
                  name="last_name"
                />
              </div>
            </div>
            <input
              className="w-full px-3 py-2 mb-4 leading-loose border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
              type="email"
              placeholder="abc@gmail.com"
              name="email"
            />
            <textarea
              rows={4}
              placeholder="Write a message..."
              className="block w-full px-4 mb-4 leading-tight text-gray-700 border rounded bg-gray-50 dark:placeholder-gray-400 py-7 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-700 "
              name="message"
            />
            <button className="w-full py-4 text-sm font-bold leading-normal text-white transition-all duration-300 bg-primary rounded-md dark:bg-primary dark:hover:bg-primary hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

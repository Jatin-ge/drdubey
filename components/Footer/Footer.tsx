import Link from "next/link";
import React from "react";
import {
  YoutubeIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
} from "lucide-react";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="relative bg-gradient-to-b from-white to-[#E2FFF5] dark:from-gray-900 dark:to-gray-800">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/30"></div>
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="container px-4 py-16 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Logo & About Section */}
            <div className="space-y-6">
              <Link href="/" className="block w-44">
                <Image
                  height={600}
                  width={600}
                  src={"/assets/images/logofinalbg.png"}
                  alt={"logo"}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </Link>
              <p className="text-base text-gray-600 dark:text-gray-300">
                Dr. Dheeraj is one of the leading joint replacement surgeons in
                North India, with over 16 years of experience and more than 24,000 successful surgeries.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <MapPinIcon className="w-5 h-5 text-emerald-500" />
                  <span>Shalby Multi-Specialty Hospital, Jaipur</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <PhoneIcon className="w-5 h-5 text-emerald-500" />
                  <span>+91 XXX XXX XXXX</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <MailIcon className="w-5 h-5 text-emerald-500" />
                  <span>contact@example.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                Quick Links
              </h3>
              <ul className="space-y-4">
                {['Book Appointment', 'About Us', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`/${item.toLowerCase().replace(' ', '-')}`}
                      className="inline-flex text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-300"
                    >
                      <span className="border-b border-transparent hover:border-emerald-500">{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                More Links
              </h3>
              <ul className="space-y-4">
                {['Services', 'Gallery', 'Testimonials'].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`/${item.toLowerCase()}`}
                      className="inline-flex text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-300"
                    >
                      <span className="border-b border-transparent hover:border-emerald-500">{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                Connect With Us
              </h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  target="_blank"
                  href="https://www.facebook.com/drdheerajdubay/"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors duration-300"
                >
                  <FacebookIcon className="w-5 h-5" />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/dheerajdubay1/"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-pink-50 dark:bg-pink-900/30 text-pink-500 hover:bg-pink-100 dark:hover:bg-pink-900/50 transition-colors duration-300"
                >
                  <InstagramIcon className="w-5 h-5" />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors duration-300"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.youtube.com/@dr.dheerajdubay6664"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-red-50 dark:bg-red-900/30 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors duration-300"
                >
                  <YoutubeIcon className="w-5 h-5" />
                </Link>
              </div>
              
              {/* Newsletter Subscription */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                  Subscribe to our newsletter
                </h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-l-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <button className="px-4 py-2 bg-emerald-500 text-white rounded-r-lg hover:bg-emerald-600 transition-colors duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 dark:border-gray-700">
          <div className="container px-4 py-6 mx-auto">
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>© {new Date().getFullYear()} Dr. Dheeraj Dubay. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

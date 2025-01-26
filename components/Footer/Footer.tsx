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
  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/drdheerajdubay/',
      icon: FacebookIcon,
      bgClass: 'bg-gradient-to-r from-blue-500 to-blue-600',
      hoverClass: 'hover:from-blue-600 hover:to-blue-700',
      darkBgClass: 'dark:from-blue-600 dark:to-blue-700',
      darkHoverClass: 'dark:hover:from-blue-500 dark:hover:to-blue-600'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/dheerajdubay1/',
      icon: InstagramIcon,
      bgClass: 'bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500',
      hoverClass: 'hover:from-pink-600 hover:via-purple-600 hover:to-orange-600',
      darkBgClass: 'dark:from-pink-600 dark:via-purple-600 dark:to-orange-600',
      darkHoverClass: 'dark:hover:from-pink-500 dark:hover:via-purple-500 dark:hover:to-orange-500'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/',
      icon: LinkedinIcon,
      bgClass: 'bg-gradient-to-r from-blue-600 to-blue-700',
      hoverClass: 'hover:from-blue-700 hover:to-blue-800',
      darkBgClass: 'dark:from-blue-700 dark:to-blue-800',
      darkHoverClass: 'dark:hover:from-blue-600 dark:hover:to-blue-700'
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@dr.dheerajdubay6664',
      icon: YoutubeIcon,
      bgClass: 'bg-gradient-to-r from-red-500 to-red-600',
      hoverClass: 'hover:from-red-600 hover:to-red-700',
      darkBgClass: 'dark:from-red-600 dark:to-red-700',
      darkHoverClass: 'dark:hover:from-red-500 dark:hover:to-red-600'
    }
  ];

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

            {/* Enhanced Social Links Section */}
            <div className="space-y-8">
              <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                Connect With Us
              </h3>
              
              {/* Social Media Icons */}
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    target="_blank"
                    href={social.href}
                    className={`group relative inline-flex items-center justify-center h-12 w-12 rounded-xl ${social.bgClass} ${social.hoverClass} ${social.darkBgClass} ${social.darkHoverClass} transition-all duration-300 transform hover:scale-110 hover:rotate-3 hover:shadow-lg`}
                  >
                    <social.icon className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110" />
                    <span className="sr-only">{social.name}</span>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </Link>
                ))}
              </div>
              
              {/* Enhanced Newsletter Section */}
              <div className="mt-8 p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-emerald-100 dark:border-emerald-800/50">
                <h4 className="text-lg font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent mb-4">
                  Subscribe to Newsletter
                </h4>
                <div className="flex flex-col space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                  />
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl transform hover:scale-[1.02] transition-all duration-300 font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Copyright Section */}
        <div className="border-t border-gray-200 dark:border-gray-700/50 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm">
          <div className="container px-4 py-6 mx-auto">
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} Dr. Dheeraj Dubay. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

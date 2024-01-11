import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/navbar";
import { ThemeProvider } from "@/components/Provider/ThemeProvider";
import { ModalProvider } from "@/components/providers/modal-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastProvider } from "@/components/providers/toast-provider";
import React, { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr Dubay ",
  description:
    "Dr. Dheeraj Dubay , Joint and Hip Replacement Surgeon Rajasthan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <title>Dr. Dubay</title>
          <meta
            name="description"
            content="Dr. Dheeraj Dubay, Joint and Hip Replacement Surgeon in Rajasthan"
          />

          {/* Favicon for branding */}
          <link rel="icon" href="/assets/images/logonew.png" />
        </head>
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="light">
            <ToastProvider />
            <ModalProvider />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

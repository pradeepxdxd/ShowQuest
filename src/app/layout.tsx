/* eslint-disable react/no-children-prop */

'use client'
// import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/components/navbar/header/page";
import SubHeader from "@/app/components/navbar/sub-header/page";
import Footer from "@/app/views/footer/page";
import { store } from "@/app/store/index";
import { Provider } from "react-redux";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={store}>
          <Navbar />
          <SubHeader />
          <main>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

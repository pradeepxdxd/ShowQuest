/* eslint-disable react/no-children-prop */
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/components/navbar/header/page";
import SubHeader from "@/app/components/navbar/sub-header/page";
import Footer from '@/app/views/footer/page'

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

export const metadata: Metadata = {
  title: "Movie Tickets, Plays, Sports, Events & Cinemas",
  description:
    "BookMyShow offers showtimes, movie tickets, reviews, trailers, concert tickets and events near Pune. Also features promotional offers, coupons and mobile app.",
};

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
        <Navbar />
        <SubHeader />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}

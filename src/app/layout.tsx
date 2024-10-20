/* eslint-disable react/no-children-prop */

"use client";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/components/navbar/header/page";
import SubHeader from "@/app/components/navbar/sub-header/page";
import Footer from "@/app/views/footer/page";
import { store } from "@/app/store/index";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase.config";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

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
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const pathname = usePathname();

  console.log({ pathname, user });

  useEffect(() => {
    // Redirect to login if user is not present and trying to access /pages/main
    if (!loading) {
      if (!user && pathname.startsWith("/pages/main")) {
        router.push("/pages/login");
      } else if (user && pathname !== "/pages/main") {
        router.push(pathname);
      }
    }
  }, [user, loading, router]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={store}>
          <ToastContainer />
          <Navbar />
          <SubHeader />
          <main>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

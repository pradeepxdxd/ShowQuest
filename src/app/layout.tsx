"use client";
import "./globals.css";
import Navbar from "@/app/components/navbar/header/Header";
import SubHeader from "@/app/components/navbar/sub-header/SubHeader";
import Footer from "@/app/views/footer/Footer";
import { store } from "@/app/store/index";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Script from "next/script";
import { Roboto } from "next/font/google";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "900"], // Choose the weights you need
  variable: "--font-roboto", // Custom CSS variable for the font
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={`${roboto.variable} antialiased`}>
          <Script
            id="razorpay-checkout-js"
            src="https://checkout.razorpay.com/v1/checkout.js"
          />
          <Provider store={store}>
            <ThemeProvider theme={darkTheme}>
              <CssBaseline />
              <ToastContainer />
              <Navbar />
              <SubHeader />
              <main>{children}</main>
              <Footer />
            </ThemeProvider>
          </Provider>
        </body>
      </html>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
    </>
  );
}

'use client'

import React, { useEffect } from "react";
import "./Exit.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PaymentSuccessExit = () => {
  const router = useRouter();

  useEffect(() => {
    const handleBackButton = () => {
      router.push("/");
    };

    window.addEventListener("popstate", handleBackButton);
    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [router]);

  return (
    <div className="payment-success">
      <div className="success-icon">
        <div className="checkmark">
          <div className="checkmark-stem"></div>
          <div className="checkmark-kick"></div>
        </div>
      </div>
      <h1>Payment Successful!</h1>
      <p>Thank you for using our service 😇</p>
      <Link className="link" href={"/"}>
        Back to Home
      </Link>
    </div>
  );
};

export default PaymentSuccessExit;

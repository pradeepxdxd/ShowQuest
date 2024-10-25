import React from "react";
import "./page.css";
import Link from "next/link";

const PaymentSuccess = () => {
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

export const generateMetadata = () => {
    return {
        title : 'Enjoy your show with Shoq Quest',
        description : 'Enjoy your show with Shoq Quest'
    }
}

export default PaymentSuccess;

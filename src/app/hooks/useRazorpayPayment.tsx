/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useCallback, useState } from "react";

const useRazorpayPayment = (
  amount: number,
  currency: string,
  description: string,
  setbackgroundLoading: (param: boolean) => void
) => {
  const [success, setSuccess] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const handlePayment = useCallback((name : string, email : string) => {
    const callPayment = async () => {
      setLoading(true);
      setError("");
      setSuccess("");
      try {
        const resp = await axios.post(`/api/payment/order`, {
          amount,
          currency,
        });
        const orderId: string = resp.data.orderId;
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: amount,
          currency: currency,
          name,
          description,
          order_id: orderId,
          // image : '',
          handler: async function (response: any) {
            const data = {
              orderCreationId: orderId,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            };

            const result = await axios.post(`/api/payment/verify`, data);
            const res = result.data;
            if (res.isOk) {
              setSuccess("Payment Succeed");
            } else {
              setSuccess("Payment failed");
            }
          },
          prefill: {
            name,
            email,
          },
          theme: {
            color: "#3399cc",
          },
          modal: {
            ondismiss: function () {
              setbackgroundLoading(false);
            },
          },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.on("payment.failed", function (response: any) {
          setError(response.error.description);
        });
        paymentObject.open();
      } catch (error) {
        console.log(error);
        setError("Payment initiation failed.");
      } finally {
        setLoading(false);
      }
    };
    callPayment();
  }, [amount, currency, description, setbackgroundLoading]);

  return { handlePayment, error, success, loading };
};

export default useRazorpayPayment;

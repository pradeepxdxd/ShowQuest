/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useCallback, useState } from "react";

const useRazorpayPayment = (amount: number, currency: string) => {
  const [success, setSuccess] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const handlePayment = useCallback(() => {
    const callPayment = async () => {
      setLoading(true); // Set loading to true before the payment process
      setError(""); // Clear previous error messages
      setSuccess(""); // Clear previous success messages
      try {
        const resp = await axios.post(`/api/payment/order`, {
          amount, currency,
        });
        const orderId: string = resp.data.orderId;
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: amount,
          currency: currency,
          name: "name",
          description: "description",
          order_id: orderId,
          handler: async function (response: any) {
            const data = {
              orderCreationId: orderId,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            };

            const result = await axios.post("/api/verify", data);
            const res = result.data;
            if (res.isOk) {
                setSuccess('Payment Succeed')
            }
            else {
                setSuccess('Payment failed')
            }
          },
          prefill: {
            name: "pradeep biswas",
            email: "beastfake8@gmail.com",
          },
          theme: {
            color: "#3399cc",
          },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.on("payment.failed", function (response: any) {
          setError(response.error.description);
        });
        paymentObject.open();
      } catch (error) {
        console.log(error);
        setError("Payment initiation failed.")
      } finally {
        setLoading(false);
      }
    };
    callPayment();
  }, [amount, currency]);

  return { handlePayment, error, success, loading };
};

export default useRazorpayPayment;

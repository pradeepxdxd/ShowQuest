import axios from "axios";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const processPayment = async () => {
  const amount = 100,
    currency = "INR";
  try {
    const resp = await axios.post(`/api/payment/order`, {
      amount,
      currency,
    });
    const orderId: string = resp.data.orderId;
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: amount * 100,
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
        if (res.isOk) alert("payment succeed");
        else {
          alert(res.message);
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
    console.log(options);
    const paymentObject = new window.Razorpay(options);
    paymentObject.on("payment.failed", function (response: any) {
      alert(response.error.description);
    });
    paymentObject.open();
  } catch (error) {
    console.log(error);
  }
};

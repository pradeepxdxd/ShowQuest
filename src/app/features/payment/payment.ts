/* eslint-disable @typescript-eslint/no-explicit-any */
export const processPayment = async () => {
  const amount = 100, currency = 'INR';
  try {
    const orderId: string = '';
    const options = {
      key: process.env.key_id,
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

        const result = await fetch("/api/verify", {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        });
        const res = await result.json();
        if (res.isOk) alert("payment succeed");
        else {
          alert(res.message);
        }
      },
      prefill: {
        name: 'pradeep biswas',
        email: 'beastfake8@gmail.com',
      },
      theme: {
        color: "#3399cc",
      },
    };
    console.log(options)
    // const paymentObject = window.Razorpay(options);
    // paymentObject.on("payment.failed", function (response: any) {
    //   alert(response.error.description);
    // });
    // paymentObject.open();
  } catch (error) {
    console.log(error);
  }
};

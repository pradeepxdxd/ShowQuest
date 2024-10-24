import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID as string,
  key_secret: process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET as string,
});

export default razorpay;

import { NextRequest, NextResponse } from "next/server";
import razorpay from "@/app/config/payment";

export async function GET() {
  return NextResponse.json({messgae : 'api router private accessed'})
}

export async function POST(request: NextRequest) {
  try {
    const { amount, currency } = (await request.json()) as {
      amount: string;
      currency: string;
    };

    const options = {
      amount: amount,
      currency: currency,
      receipt: "rcp1",
    };
    const order = await razorpay.orders.create(options);
    console.log(order);
    return NextResponse.json({ orderId: order.id }, { status: 200 });
  } 
  catch (err) {
    console.log({ err });
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
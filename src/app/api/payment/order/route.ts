import { NextRequest, NextResponse } from "next/server";
import razorpay from "@/app/config/payment";
import shortid from 'shortid'

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
      receipt: shortid.generate(),
    };
    const order = await razorpay.orders.create(options);
    return NextResponse.json({ orderId: order.id, currency, amount }, { status: 200 });
  } 
  catch (err) {
    console.log({ err });
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

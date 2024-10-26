import { NextResponse } from "next/server";
import axios from "axios";

export async function POST() {
  try {
    const response = await axios({
      url: "https://graph.facebook.com/v20.0/400538119819796/messages",
      method: "post",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_META_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      timeout: 10000, // Set timeout to 10 seconds
      data: {
        messaging_product: "whatsapp",
        to: "919399924801",
        type: "template",
        template: {
          name: "hello_world",
          language: { code: "en_US" },
        },
      },
    });

    console.log(response.data);
    return NextResponse.json({ data: response.data });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

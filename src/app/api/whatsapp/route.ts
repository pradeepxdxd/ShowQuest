import { NextResponse } from "next/server";
import axios from "axios";

export async function POST() {
  try {
    const response = await axios({
      url: process.env.NEXT_PUBLIC_META_WHATSAPP_URL as string,
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_META_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      timeout: 10000, // Set timeout to 10 seconds
      data: {
        messaging_product: "whatsapp",
        to: "918319868762",
        type: "template",
        template: {
          name: "show_quest",
          language: { code: "en_US" },
        },
      },
    });

    console.log(response.data);
    return NextResponse.json({ data: response.data });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
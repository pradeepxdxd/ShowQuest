import { NextResponse } from "next/server";
import { generateJoseToken } from "@/app/lib/jose.auth";

export async function POST() {
  try {
    const token = await generateJoseToken();
    console.log({server_token:token})
    return NextResponse.json({ token }, { status: 200 });
  } catch (err) {
    console.log({ err });
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

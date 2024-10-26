import { NextRequest, NextResponse } from "next/server";
import { generateJoseToken } from "@/app/lib/jose.auth";

export async function POST(req: NextRequest) {
  try {
    const {email, name} = (await req.json()) as {
      name : string,
      email : string
    }
    const token = await generateJoseToken({name, email});
    return NextResponse.json({ token }, { status: 200 });
  } catch (err) {
    console.log({ err });
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

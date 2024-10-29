import { NextRequest, NextResponse } from "next/server";
import { generateJoseToken } from "@/app/lib/jose.auth";

export async function POST(req: NextRequest) {
  try {
    const { id } = (await req.json()) as {
      id: string;
    };
    const token = await generateJoseToken({ id });
    return NextResponse.json({ token }, { status: 200 });
  } catch (err) {
    console.log({ err });
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

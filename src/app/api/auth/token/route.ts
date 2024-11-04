import { NextRequest, NextResponse } from "next/server";
import { generateJoseToken } from "@/app/lib/jose.auth";
import { Role } from "@/firebase/actions/action.types";

export async function POST(req: NextRequest) {
  try {
    const { id, role } = (await req.json()) as {
      id: string;
      role: Role;
    };
    const token = await generateJoseToken({ id, role });
    return NextResponse.json({ token }, { status: 200 });
  } catch (err) {
    console.log({ err });
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

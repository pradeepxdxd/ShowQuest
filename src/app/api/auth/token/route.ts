import { NextRequest, NextResponse } from "next/server";
import { generateJoseRefreshToken, generateJoseToken } from "@/app/lib/jose.auth";
import { Role } from "@/firebase/actions/action.types";

export async function POST(req: NextRequest) {
  try {
    const { id, role } = (await req.json()) as {
      id: string;
      role: Role;
    };
    const accessToken = await generateJoseToken({ id, role });
    const refreshToken = await generateJoseRefreshToken({ id, role });
    return NextResponse.json({ token:accessToken, refreshToken }, { status: 200 });
  } catch (err) {
    console.log({ err });
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

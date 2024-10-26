import { NextRequest, NextResponse } from "next/server";
import { verifyJoseToken } from "./app/lib/jose.auth";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const verify = await verifyJoseToken(token as string);
  // Protect /pages/main
  if (!verify && req.nextUrl.pathname.startsWith("/pages/main")) {
    const absoluteURL = new URL("/pages/login", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }

  // Protect /api/payment
  if (!verify && req.nextUrl.pathname.startsWith("/api/payment")) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const response = NextResponse.next();
  response.headers.set("x-user-payload", JSON.stringify(verify));
  return response;
}

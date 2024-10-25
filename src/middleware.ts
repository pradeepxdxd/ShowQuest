import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  // Protect /pages/main
  if (!token && req.nextUrl.pathname.startsWith("/pages/main")) {
    const absoluteURL = new URL("/pages/login", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }

  // Protect /api/payment
  // if (!token && req.nextUrl.pathname.startsWith("/api/payment")) {
  //   return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  // }

  return NextResponse.next();
}

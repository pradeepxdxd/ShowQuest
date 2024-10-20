import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/app/lib/auth";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  
  if (!token && req.nextUrl.pathname.startsWith("/pages/main")) {
    const absoluteURL = new URL("/pages/login", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
  
  if (token) {
    console.log('second')
    try {
      await verifyToken(token);
      return NextResponse.next();
    } catch (err) {
      console.log("Token verification failed", err);
      const absoluteURL = new URL("/pages/login", req.nextUrl.origin);
      return NextResponse.redirect(absoluteURL.toString());
    }
  }
  console.log({pathmiddle:req.nextUrl.pathname});
  return NextResponse.next();
}

import { NextRequest, NextResponse } from "next/server";
import {
  verifyJoseToken,
  generateJoseToken,
  verifyRefreshJoseToken,
} from "./app/lib/jose.auth";

export async function middleware(req: NextRequest) {
  let token = req.cookies.get("token")?.value;
  const refreshToken = req.cookies.get("refreshToken")?.value;

  if (refreshToken && !token && refreshToken !== undefined) {
    const verifyRefreshToken = await verifyRefreshJoseToken(
      refreshToken as string
    );
    if (verifyRefreshToken && verifyRefreshToken !== undefined) {
      const accessToken = await generateJoseToken({
        id: verifyRefreshToken.id,
        role: verifyRefreshToken.role,
      });
      token = accessToken;
      const response = NextResponse.next();
      response.cookies.set("token", accessToken, {
        maxAge: 15 * 60,
        path: "/",
      });
      response.headers.set(
        "x-user-payload",
        JSON.stringify(verifyRefreshToken)
      );
      return response;
    }
  }

  const verify = await verifyJoseToken(token as string);

  if (req.nextUrl.pathname === "/pages/home") {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }

  // Protect main pages
  if (!verify && req.nextUrl.pathname.startsWith("/pages/main")) {
    const absoluteURL = new URL("/pages/login", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }

  // protect admin pages
  if (!verify && req.nextUrl.pathname.startsWith("/pages/admin")) {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }

  if (
    verify !== undefined &&
    verify.role === "USER" &&
    req.nextUrl.pathname.startsWith("/pages/admin")
  ) {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }

  // Protect apis
  if (
    !verify &&
    (req.nextUrl.pathname.startsWith("/api/payment") ||
      req.nextUrl.pathname.startsWith("/api/whatsapp") ||
      req.nextUrl.pathname.startsWith("/api/booking"))
  ) {
    return NextResponse.json({ message: "Unauthorized User" }, { status: 401 });
  }

  if (verify && req.nextUrl.pathname.startsWith("/api")) {
    const response = NextResponse.next();
    response.headers.append(
      "Access-Control-Allow-Origin",
      "https://showquest.vercel.app"
    );
    response.headers.append(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE"
    );
  }
  
  const response = NextResponse.next();
  response.headers.set("x-user-payload", JSON.stringify(verify));
  return response;
}

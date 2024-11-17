import { serialize } from "cookie";

export const createCookie = (token: string) => {
  return serialize("token", token, {
    httpOnly: true,
    secure:
      process.env.NODE_ENV === "development" ||
      process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "test",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
};

export const removeCookie = (cookieName: string) => {
  return serialize(cookieName, "", {
    httpOnly: true,
    secure:
      process.env.NODE_ENV === "development" ||
      process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "test",
    sameSite: "strict",
    path: "/", 
    expires: new Date(0),
  });
};

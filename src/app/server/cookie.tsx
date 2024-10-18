"use server";
import { cookies } from "next/headers";

export const getCookie = (cookieName: string) => {
  const cookieStore = cookies();
  return cookieStore.get(cookieName);
};

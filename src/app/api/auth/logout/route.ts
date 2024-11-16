import { removeCookie } from "@/app/utils/cookie/cookie";

export async function GET() {
  try {
    const tokenCookie = removeCookie("token");
    const roleCookie = removeCookie("role");
    const refreshToken = removeCookie("refreshToken");
    return new Response(
      JSON.stringify({ message: "Logged out successfully" }),
      {
        status: 200,
        headers: {
          "Set-Cookie": `${tokenCookie}, ${roleCookie}, ${refreshToken}`, // Set the cookie to delete it
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

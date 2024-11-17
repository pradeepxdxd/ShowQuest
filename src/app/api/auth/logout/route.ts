import { removeCookie } from "@/app/utils/cookie/cookie";

export async function GET() {
  try {
    const token = removeCookie("token");
    const role = removeCookie("role");
    const refreshToken = removeCookie("refreshToken");
    console.log({ token, role, refreshToken });
    return new Response(
      JSON.stringify({ message: "Logged out successfully" }),
      {
        status: 200,
        headers: {
          "Set-Cookie": `${token}, ${role}, ${refreshToken}`, // Set the cookie to delete it
          "Content-Type": "application/json",
          "x-user-payload": "undefined",
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

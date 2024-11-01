import transporter from "@/app/utils/mail/nodemailer";
import fs from "fs";
import { promisify } from "util";
import path from "path";
import { generateOtp } from "@/app/utils/otp/generate-otp";
import { removeCookie } from "@/app/utils/cookie/cookie";

const readFileAsync = promisify(fs.readFile);
let otp: undefined | string = undefined;

export async function POST(req: Request) {
  try {
    const { email, action, otpCode, token } = await req.json();
    if (action === "sentOtp") {
      const templatepath = path.join(
        process.cwd(),
        "src/app/templates/email.html"
      );

      let htmlTemplate = await readFileAsync(templatepath, "utf-8");
      otp = generateOtp();
      htmlTemplate = htmlTemplate.replace("{{OTP}}", otp);

      await transporter.sendMail({
        from: `"ShowQuest" <${process.env.NEXT_PUBLIC_NODEMAILER_EMAIL}>`,
        to: email,
        subject: `${otp} is your ShowQuest OTP`,
        html: htmlTemplate,
      });

      return new Response(
        JSON.stringify({ message: "OTP sent successfully" }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } else if (action === "verifyOtp") {
      if (otp === otpCode) {
        // const token = await generateJoseToken({name:'', email:email});
        // if (token) {
        // const cookie = createCookie(token);
        otp = undefined;
        return new Response(
          JSON.stringify({
            message: "Logged In successfully",
            // cookie,
            email,
          }),
          {
            status: 200,
            // headers: {
            //   "Set-Cookie": cookie,
            //   "Content-Type": "application/json",
            // },
          }
        );
        // } else {
        //   return new Response(
        //     JSON.stringify({ message: "Something went wrong" }),
        //     {
        //       status: 400,
        //     }
        //   );
        // }
      } else {
        return new Response(
          JSON.stringify({ message: "Invalid otp, please try again" }),
          {
            status: 400,
          }
        );
      }
    } else if (action === "logout") {
      const cookie = removeCookie(token);
      return new Response(
        JSON.stringify({ message: "Logged out successfully" }),
        {
          status: 200,
          headers: {
            "Set-Cookie": cookie, // Set the cookie to delete it
            "Content-Type": "application/json",
          },
        }
      );
    } else {
      return new Response(JSON.stringify({ message: "No action found" }), {
        status: 404,
      });
    }
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

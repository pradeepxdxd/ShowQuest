import transporter from "@/app/utils/mail/nodemailer";
import fs from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promisify } from "util";
import shortid from "shortid";

const readFileAsync = promisify(fs.readFile);

export async function POST(req: NextRequest) {
  try {
    const {
      email,
      showName,
      showImage,
      showSeatName,
      showPrice,
      theaterName,
      showTime,
      foodPrice,
      finalPrice,
    } = (await req.json()) as {
      email: string;
      showName: string;
      showImage: string;
      showSeatName: string;
      showPrice: number;
      theaterName: string;
      showTime: string;
      foodPrice: number;
      finalPrice: number;
    };

    const templatepath = path.join(
      process.cwd(),
      "src/app/templates/booking.html"
    );
    let htmlTemplate = await readFileAsync(templatepath, "utf-8");
    htmlTemplate = htmlTemplate.replace("{{showName}}", showName);
    htmlTemplate = htmlTemplate.replace("{{showImage}}", showImage);
    htmlTemplate = htmlTemplate.replace("{{showSeatName}}", showSeatName);
    htmlTemplate = htmlTemplate.replace(/{{showPrice}}/g, showPrice.toString());
    htmlTemplate = htmlTemplate.replace("{{theaterName}}", theaterName);
    htmlTemplate = htmlTemplate.replace("{{showTime}}", showTime);
    htmlTemplate = htmlTemplate.replace("{{foodPrice}}", foodPrice.toString());
    htmlTemplate = htmlTemplate.replace(
      "{{finalPrice}}",
      finalPrice.toString()
    );
    const foodPriceSection =
      foodPrice > 0
        ? `<p><span>Food And Beverage</span><span>: ₹${foodPrice}</span></p>`
        : "";
    htmlTemplate = htmlTemplate.replace(
      "{{foodPriceSection}}",
      foodPriceSection
    );

    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
      to: email,
      subject: `Here's your invoice Show Quest transaction ${shortid
        .generate()
        .toUpperCase()}`,
      html: htmlTemplate,
    });

    return new Response(
      JSON.stringify({ message: "confirmation mail sent successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

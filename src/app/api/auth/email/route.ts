import transporter from "@/app/utils/mail/nodemailer";

export async function GET() {
  try {
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
      to: "pradeepbiswas41813@gmail.com",
      subject: "Test mail",
      html: `
        <p>Name: Pradeep Biswas </p>
        <p>Email: pradeepbiswas23489 </p>
        <p>Message: Testing mail </p>
      `,
    });
    return new Response(
      JSON.stringify({ message: "OTP sent successfully", code: "873456" }),
      {
        status: 200,
        headers: {
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

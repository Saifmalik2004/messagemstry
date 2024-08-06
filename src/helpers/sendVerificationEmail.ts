import nodemailer from 'nodemailer';
import { ApiResponse } from "@/types/ApiResponse";
// Create a transporter object using Gmail's SMTP server
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, // Your Gmail address
    pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail App Password
  },
});

// Function to send an email
export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    const info = await transporter.sendMail({
      from: process.env.GMAIL_USER, // Your Gmail address
      to: email,
      subject: 'Message Mystry Verification Code',
      html: `<p>Hello ${username},</p><p>Thank you for registering. Please use the following verification code to complete your registration:</p><h1>${verifyCode}</h1><p>If you did not request this code, please ignore this email.</p>`,
    });

    console.log('Email sent:', info.response);
    return { success: true, message: 'Verification email sent successfully.' };
  } catch (error) {
    console.error('Error sending verification email:', error);
    return { success: false, message: 'Failed to send verification email.' };
  }
}

//  upper code used nodemailer for sending email  and below code used resend 

// import { resend } from "@/lib/resend";
// import VerificationEmail from "../../emails/verificationEmail";
// import { ApiResponse } from "@/types/ApiResponse";

// export async function sendVerificationEmail(
//   email: string,
//   username: string,
//   verifyCode: string
// ): Promise<ApiResponse> {
//   try {
//     console.log(`Sending email to: ${email}`);

//     // Attempt to send the email
//     const { data, error } = await resend.emails.send({
//       from: 'Acme <onboarding@resend.dev>',//this domain only use in my gmail acount to send email this is only for test purpose
//       to: email,
//       subject: 'Message Mystry Verification Code',
//       react: VerificationEmail({ username, otp: verifyCode }),
//     });

//     if (error) {
//       // If there's an error, log it and return a failure response
//       console.error("Error occurred while sending email:", error);
//       return { success: false, message: "Failed to send verification email." };
//     }

//     console.log("Email sent successfully:", data);
//     return { success: true, message: "Verification email sent successfully." };

//   } catch (exception) {
//     // Catch any unexpected exceptions and log them
//     console.error("Unexpected error sending verification email:", exception);
//     return { success: false, message: "Unexpected error occurred during email sending." };
//   }
// }

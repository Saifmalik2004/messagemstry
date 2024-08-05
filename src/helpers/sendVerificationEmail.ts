import { resend } from "@/lib/resend";

import VerificationEmail from "../../emails/verificationEmail";

import { APiResponse } from "@/types/ApiResponse";
import { promises } from "dns";

export async function sendVerficationEmail(
    eamil:string,
    username:string,
    verifyCode:string
):Promise<APiResponse>{
    try {
        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['delivered@resend.dev'],
            subject: 'Message Mystry Verification Code',
            react: VerificationEmail({ username , otp:verifyCode}),
          });
        return{success:false,message:" verification email successfully"}
    } catch (emailError) {
        console.error("Error sending verification email",emailError)
        return{success:false,message:"failed to send verification email"}
    }
}
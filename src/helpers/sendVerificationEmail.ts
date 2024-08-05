import { resend } from "@/lib/resend";

import VerificationEmail from "../../emails/verificationEmail";

import { ApiResponse } from "@/types/ApiResponse";


export async function sendVerificationEmail(
    email:string,
    username:string,
    verifyCode:string
):Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: email,
            subject: 'Message Mystry Verification Code',
            react: VerificationEmail({ username , otp:verifyCode}),
          });
        return{success:false,message:" verification email successfully"}
    } catch (emailError) {
        console.error("Error sending verification email",emailError)
        return{success:false,message:"failed to send verification email"}
    }
}
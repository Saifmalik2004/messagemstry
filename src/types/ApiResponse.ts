import { Message } from "@/model/User";

export interface APiResponse{
    success:boolean;
    message:string;
    isAcceptingMessages?:boolean
    messages?:Array<Message>
}
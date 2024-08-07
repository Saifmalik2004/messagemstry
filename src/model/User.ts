import mongoose,{Schema ,Document} from "mongoose";
import { type } from "os";

export interface Message extends Document{
    _id: string;
    content:string;
    createdAt:Date;
}

const MessageScehma :Schema<Message>= new Schema({
    content:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now
    }
})

export interface User extends Document{
    username:string;
    email:string;
    password:string;
    verifyCode:string;
    verifyCodeExpiry:Date;
    isVerified:boolean;
    isAcceptingMessages:boolean;
    messages:Message[]
}

const UserScehma :Schema<User>= new Schema({
    username:{
        type:String,
        required:[true,"Username is required"],
        unique:true,
        trim:true,
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,
        match:[/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,"Please use a valid email address"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    verifyCode:{
        type:String,
        required:[true,"Verify code is required"]
    },
    verifyCodeExpiry:{
        type:Date,
        required:[true,"Verifycode Expiry is required"]
    },
    
    isVerified:{
        type:Boolean,
        default:false
    },isAcceptingMessages:{
        type:Boolean,
        required:[true,""]
    },

    messages:[MessageScehma]
})

const UserModel =(mongoose.models.User as mongoose.Model<User>)||(mongoose.model<User>("User",UserScehma))

export default UserModel;
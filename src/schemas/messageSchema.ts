import {z} from 'zod'

export const MessageSchema=z.object({
    content:z.string()
    .min(10,{message:"Content must beat least 10 chracter"})
    .max(500,{message:"Content connot be more than 500 chracter long"})
   
})
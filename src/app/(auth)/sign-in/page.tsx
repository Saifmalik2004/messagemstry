"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {useDebounceValue} from'usehooks-ts'
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
function page() {

  const [username,setUsername] = useState('')
  const [usernameMessage, setUsernameMessage] = useState('')
  const [isCheckingUsername, setIsCheckingUsername] = useState(false)
  const [iSubmitting, setSubmitting] = useState(false)

  const debouncedUsername=useDebounceValue(username,300)
   const {toast}= useToast()
   const router = useRouter()
  return (
    <div>page</div>
  )
}

export default page
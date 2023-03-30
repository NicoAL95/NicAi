'use client'
import { signIn } from "next-auth/react"
import Image from "next/image"

function Login() {
  return (
    <div className="bg-[#129AA3] h-screen flex flex-col items-center justify-center text-center">
        <Image
            src="/logo/nicai-logo.svg"
            width={300}
            height={300}
            alt="Logo"
        />
        <button onClick={() => signIn('google')} className="text-white font-bold text-3xl animate-pulse">Sign In to Use NicAi</button>
    </div>
  )
}

export default Login
"use client"

import { PlusIcon } from "@heroicons/react/24/solid"
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { db } from "../firebase";

function sideOn(){
    const sidebar = document.getElementById("sidebar")
    sidebar?.classList.remove('left-[-150%]')
    sidebar?.classList.add('left-0')
}

function Navbar() {

    const router = useRouter();
    const { data: session } = useSession();

    const createNewChat = async() => {
        const doc = await addDoc(
            collection(db, "users", session?.user?.email!, "chats"), {
                userId: session?.user?.email!,
                createdAt: serverTimestamp()
            }
        );
        router.push(`/chat/${doc.id}`)
    }

    return(
        <div className="absolute z-[150] top-0 left-0 w-full h-fit bg-wall border-b border-white/20 text-white flex justify-between ml:hidden p-4">
            <button onClick={sideOn}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </button>
            <div>
                <h1>NicAi</h1>
            </div>
            <button onClick={createNewChat}>
                <PlusIcon className="w-6 h-6"/>
            </button>
        </div>
    )
}

export default Navbar;
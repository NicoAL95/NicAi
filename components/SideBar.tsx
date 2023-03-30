"use client"

import NewChat from "./NewChat"
import { useCollection } from "react-firebase-hooks/firestore";
import { useSession, signOut } from "next-auth/react"
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from 'react';
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";

function SideBar() {
    const { data: session } = useSession();

    const [chats, loading, error] = useCollection(
        session && query(collection(db, 'users', session.user?.email!, 'chats'), orderBy("createdAt", "asc"))
    );

// useState Hooks
const [showNavbar, setShowNavbar] = useState(false);

function sideOff(){
    const sidebar = document.getElementById("sidebar")
    sidebar?.classList.remove('left-0')
    sidebar?.classList.add('left-[-150%]')
    sidebar?.classList.toggle('border-r')
    sidebar?.classList.toggle('border-white/20')
}

// Close navbar outside
let menuRef = useRef<HTMLInputElement>(null);
useEffect(() => {
  let handler = (e: { target: any; }) => {
    if (!menuRef.current?.contains(e.target)) {
        const sidebar = document.getElementById("sidebar")
        sidebar?.classList.remove('border-r')
        sidebar?.classList.remove('border-white/20')
        sideOff()
    }
  };
  document.addEventListener('mousedown', handler);

  return () => {
    document.removeEventListener('mousedown', handler);
  };
});


  return (
    <div className="left-[-150%] w-[250px] absolute top-0 ml:static bg-wall sm:max-w-xs h-screen max-h-screen overflow-y-auto lg:min-w-[16rem] z-[200] transition-all ease-in-out duration-500 ml:border-0" id="sidebar" ref={menuRef}>

        <div className="p-2 flex flex-col h-screen">
            <div className="flex justify-between pt-2 pb-8">
                <div className="flex items-center text-white space-x-2">
                    <img src="/logo/nicai.svg" className="w-8 h-8" alt="" />
                    <h1 className="text-lg">NicAi</h1>
                </div>
                <div>
                    <button onClick={sideOff}>
                        <XMarkIcon className="w-7 h-7 text-white"/>
                    </button>
                </div>
            </div>
            {session && (
                <div className="flex justify-start space-x-3 items-center mx-auto mb-6">
                    <img src={session.user?.image!} alt="Profile Pic" className="h-12 w-12 rounded-xl cursor-pointer hover:opacity-50" />
                    <h2 className="text-white text-center">{session.user?.name}</h2>
                </div>
            )}
            <div className="flex-1">
                <div>

                    {/* NewChat */}
                    <NewChat/>

                    <div className="hidden sm:inline">
                        {/* Mode Selection */}
                        <div className={`${session?.user?.name == "Nico Abel Laia" ? '' : 'hidden'}`}>
                            <ModelSelection />
                        </div>
                    </div>

                    {loading && (
                        <div className="animate-pulse text-center text-white">
                            <p>Loading Chats...</p>
                        </div>
                    )}

                    <div className="flex flex-col space-y-2 my-2">
                        {/* Map through thre chatRows */}
                        {chats?.docs.reverse().map((chat) => (
                            <ChatRow key={chat.id} id={chat.id}/>
                        ))}
                    </div>

                </div>
            </div>
            <div className="py-5">
                <button onClick={() => (signOut())} className="flex space-x-1 text-white justify-center items-center mx-auto">
                    <h1 className="font-semibold">Log-Out</h1>
                    <ArrowRightOnRectangleIcon className="w-5 h-5"/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default SideBar
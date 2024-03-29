"use client"

import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Message from "./Message";

// import ScrollableFeed from 'react-scrollable-feed'
import ScrollToBottom from 'react-scroll-to-bottom';

type Props = {
    chatId: string;
}

function Chat({ chatId }: Props) {
  const { data: session } = useSession();

  const [messages] = useCollection(session && 
    query(
      collection(
        db, 
        "users", 
        session?.user?.email!, 
        "chats", chatId,"messages"
        ), 
        orderBy("createdAt", "asc")
        )
      );

  return (
      <div className="flex-1 overflow-y-auto pt-[56px] ml:pt-0" id="chatPulse">
        <ScrollToBottom className="w-full h-full">
        {messages?.empty && (
          <>
            <p className="mt-10 text-center text-white">
              Type a prompt in below to get started!
            </p>
            <ArrowDownCircleIcon className="w-10 h-10 mx-auto mt-5 text-white animate-bounce"/>
          </>
        )}
        {messages?.docs.map((message) => (
          <Message key={message.id} message={message.data()}/>
        ))}
        </ScrollToBottom>
      </div>
  )
}

export default Chat
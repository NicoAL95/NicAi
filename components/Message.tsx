import { DocumentData } from "firebase/firestore"

type Props = {
    message: DocumentData
}

function Message({
    message
}: Props) {
    const isNicAi = message.user.name === "NicAi"
  return (
    <div className={`py-5 text-white `}>
        <div className="flex flex-col px-10 max-w-2xl mx-auto">
            <div className={`${ message.user.name !== "NicAi" ? "justify-start flex-row-reverse" : "justify-start" } flex space-x-3 items-center mb-3`}>
                <img src={message.user.avatar} alt="" className={`${ message.user.name !== "NicAi" ? "ml-[12px]" : ""} w-7 h-7 sm:h-8 sm:w-8 rounded-full`} />
                <h1 className="text-white font-semibold text-[12px] sm:text-[13px] md: md:text-[15px]">{message.user.name}</h1>
            </div>
            <div className={`${ message.user.name !== "NicAi" ? "rounded-tr-sm rounded-tl-2xl rounded-b-2xl ml-auto" : "rounded-tl-sm rounded-tr-2xl rounded-b-2xl" } w-fit max-w-full bg-stone py-4 px-[33px] md:px-[44px] `}>
                <p className={`${ message.user.name !== "NicAi" ? "text-right" : "" } text-[13px] sm:text-[15px] md:text-[16px] break-words`}>
                    {message.text}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Message
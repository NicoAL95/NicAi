"use client"

import { BoltIcon, ExclamationTriangleIcon, SunIcon } from "@heroicons/react/24/outline"
import { useSession } from "next-auth/react";

function HomePage() {
    const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
        <div className="mb-20">
            <h1 className="text-5xl font-bold text-center">NicAi</h1>
            <h2>Welcome onboard {session?.user?.name}</h2>
        </div>

        <div className="flex space-x-2 text-center">

            <div>
                <div className="flex flex-col items-center mb-5">
                    {/* Sun Icon */}
                    <SunIcon className="h-8 w-8"/>
                    <h2>Examples</h2>
                </div>

                <div className="space-y-2">
                    <p className="infoText">"Explain Something to me"</p>
                    <p className="infoText">"What is the difference between a dog and a cat"</p>
                    <p className="infoText">"What is the color of the sun?"</p>
                    <p className="infoText">"How do I make an HTTP request in Javascript?"</p>
                </div>
            </div>

            <div>
                <div className="flex flex-col items-center mb-5">
                    {/* Bolt Icon */}
                    <BoltIcon className="h-8 w-8"/>
                    <h2>Capabilities</h2>
                </div>

                <div className="space-y-2">
                    <p className="infoText">"Explain Something to me"</p>
                    <p className="infoText">"What is the difference between a dog and a cat"</p>
                    <p className="infoText">"What is the color of the sun?"</p>
                    <p className="infoText">Trained to decline inappropriate requests</p>
                </div>
            </div>

            <div>
                <div className="flex flex-col items-center mb-5">
                    {/* ExclamationTriangle Icon */}
                    <ExclamationTriangleIcon className="h-8 w-8"/>
                    <h2>Limitations</h2>
                </div>

                <div className="space-y-2">
                    <p className="infoText">May occasionally generate incorrect information</p>
                    <p className="infoText">May occasionally produce harmful instructions or biased content</p>
                    <p className="infoText">Limited knowledge of world and events after 2018</p>
                    <p className="infoText">Can't Remembers what user said earlier in the conversation</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default HomePage;
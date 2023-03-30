import { SessionProvider } from "../components/SessionProvider"
import SideBar from "../components/SideBar"
import Login from "../components/Login"
import { getServerSession } from "next-auth"
import '../styles/globals.css'
import { authOptions } from "../pages/api/auth/[...nextauth]"
import ClientProvider from "../components/ClientProvider"
import Navbar from "../components/Navbar"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  // console.log(session);

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login/>
          ): (
            <div className="flex relative transition-all">

            {/* Top Navbar */}
            <Navbar/>
            {/* End Top Navbar */}

              {/* Sidebar */}
                <SideBar/>
              {/* End Sidebar */}

              {/* Client Provider - Notifications */}
              <ClientProvider/>
              <div className="bg-wheel w-full ml:pl-[30px] lg:pl-0 lg:w-full lg:flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  )
}

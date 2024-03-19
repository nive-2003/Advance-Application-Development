import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react"
import logo from "../assets/logo.png"
import profile from "../assets/profile.png"
import { createContext, useContext, useState } from "react"

const SidebarContext = createContext();

export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(true)
    return (
        <>
            <aside className="h-screen">
                <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                    <div className="p-4 pb-2 flex justify-between items-center">
                    <img
    src="https://t4.ftcdn.net/jpg/03/33/39/57/240_F_333395720_XtHypyIOmV31AelP8QAPDQ8GZ5fI7btU.jpg"
    className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}
    style={{
        maxWidth: expanded ? "428px" : "0", // Added inline style to set max width
        borderRadius: "50px" // Added inline style for border radius
    }}
/>

                        
                        <button onClick={() => setExpanded((curr) => !curr)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                            {expanded ? <ChevronFirst /> : <ChevronLast />}
                        </button>
                    </div>

                    <SidebarContext.Provider value={{ expanded }}>

                        <ul className="flex-1 px-3">{children}</ul>
                    </SidebarContext.Provider>

                    <div className="border-t flex p-3">
                        <img src={profile} className="w-10 h-10 rounded-md" />
                        <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"} `}>
                            <div className="leading-4">
                                <h4 className="font-semibold">BeachOram</h4>
                                <span className="text-xs text-gray-600">BeachOram@gmail.com</span>
                            </div>
                            <MoreVertical size={20} />
                        </div>
                    </div>
                </nav>
            </aside>
        </>
    )
}

export function SidebarItem({ icon, text, active, alert }) {
    const { expanded } = useContext(SidebarContext)
    return (
        <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>
            {icon}
            <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
            {alert && (
                <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`}>

                </div>
            )}

            {!expanded && (
               <div className="relative">
               {/* <img src={user} alt="User" className="h-10 rounded-full" /> */}
               <div className={`absolute z-100 left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                   {text}
               </div>
           </div>
           
            )}
        </li>
    )
}
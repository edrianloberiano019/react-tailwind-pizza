import React, { useState } from "react"
import SideNav from "../components/navbar/SideNav"
import TopNav from "../components/navbar/TopNav"
import Main from "./dashboard/Main"

const Dashboard = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)

    const toggleNav = (params) => {
        setIsNavOpen(!isNavOpen)
        console.log(isNavOpen)
    }

    return (
        <div className="flex h-screen bg-gray-200">
            <div
                className={`fixed inset-0 z-20 transition-opacity bg-black opacity-50 
                            ${isNavOpen ? "block" : "hidden"}`}
                onClick={toggleNav}
            ></div>
            <SideNav isNavOpen={isNavOpen} />
            <div className="flex flex-col flex-1 overflow-hidden">
                <TopNav toggleNav={toggleNav} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-purple-50">
                    <div className="container px-6 py-8 mx-auto">
                        <Main />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Dashboard

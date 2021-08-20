import React, { useState } from "react"
import { Route, useRouteMatch } from "react-router-dom"
import SideNav from "../components/navbar/SideNav"
import TopNav from "../components/navbar/TopNav"
import { DashboardRouter } from "./dashboard/DashboardRouter"
import Main from "./dashboard/Main"

const Dashboard = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)

    const toggleNav = (params) => {
        setIsNavOpen(!isNavOpen)
        console.log(isNavOpen)
    }

    let { path, url } = useRouteMatch()

    return (
        <div className="flex h-screen bg-gray-200">
            <div
                className={`fixed inset-0 z-20 transition-opacity bg-black opacity-50 
                            ${isNavOpen ? "block" : "hidden"}`}
                onClick={toggleNav}
            ></div>
            <SideNav isNavOpen={isNavOpen} url={url} />
            <div className="flex flex-col flex-1 overflow-hidden">
                <TopNav toggleNav={toggleNav} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-purple-50">
                    <div className="container px-6 py-8 mx-auto">
                        <Route exact path={path}>
                            <Main />
                        </Route>
                        <Route path={`${path}:page`}>
                            {console.log(path)}
                            <DashboardRouter />
                        </Route>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Dashboard

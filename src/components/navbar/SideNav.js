import React from "react"
import { Link, useLocation } from "react-router-dom"
import { navbar_data } from "../../libraries/data/navbar_data"

const SideNav = ({ isNavOpen }) => {
    const location = useLocation().pathname

    return (
        <div
            className={`fixed inset-y-0 left-0 z-30 w-64 h-screen overflow-y-auto transition duration-300 transform bg-gray-900 md:translate-x-0 md:static lg:inset-0
                ${isNavOpen ? "translate-x-0" : "-translate-x-96"}
            `}
        >
            <div className="flex items-center justify-center mt-8">
                <div className="flex items-center">
                    <span className="mx-2 text-2xl font-semibold text-white">Dashboard</span>
                </div>
            </div>
            <nav className="mt-10">
                {navbar_data.map((item, index) => (
                    <Link
                        className={`${
                            location === item.link
                                ? "flex items-center px-6 py-2 mt-4 text-gray-100 bg-gray-700 bg-opacity-25"
                                : "flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                        }`}
                        to={item.link}
                        key={index}
                    >
                        <i className={item.icon}></i>
                        <span className="mx-3">{item.name}</span>
                    </Link>
                ))}
            </nav>
        </div>
    )
}

export default SideNav

import React from "react"
import { FaShoppingCart, FaCrown } from "react-icons/fa"
import { MdPeople } from "react-icons/md"

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <div
            className={`fixed z-[999] h-full bg-[#d2691e] grid items-center w-full sm:w-96 top-0 transition duration-500 ease-in-out ${
                isOpen ? "right-0" : "right-full"
            }`}
            onClick={toggle}
        >
            <div
                className="absolute top-5 right-6 bg-transparent border-transparent text-[2rem] cursor-pointer outline-none "
                onClick={toggle}
            >
                <div className="text-black hover:text-white hover:transition hover:duration-500 hover:ease-in-out" />
            </div>
            <div className="grid grid-cols-1 text-center">
                <div
                    className="flex items-center justify-center py-4 text-3xl no-underline list-none transition duration-500 ease-in-out cursor-pointer hover:text-white "
                    to="/"
                >
                    <MdPeople className="p-1" /> My Profile
                </div>{" "}
                <div className="flex items-center justify-center py-4 text-3xl text-black no-underline list-none transition duration-500 ease-in-out cursor-pointer hover:text-white">
                    <FaShoppingCart className="p-1" /> My Purchases <nbsp />
                </div>
                <div className="flex items-center justify-center hover:transition hover:duration-500 hover:">hi</div>
            </div>
            <div className="flex justify-center">
                <div className="flex shadow-lg px-4 transition duration-300 ease-in-out bg-transparent cursor-pointer hover:transform hover:scale-110 bg-[#ca0000] hover:text-white hover:bg-[#aa0000] whitespace-nowrap py-7 rounded-xl ">
                    <FaCrown className="mt-1 mr-1 " />
                    Buy Premium Games
                </div>
            </div>
        </div>
    )
}

export default Sidebar

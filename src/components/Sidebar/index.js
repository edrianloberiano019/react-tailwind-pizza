import React from "react"
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebarRoute,
    SideBtnWrap,
} from "./SidebarElements"
import { FaShoppingCart, FaCrown } from "react-icons/fa"
import { MdPeople } from "react-icons/md"

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <aside
            className="fixed z-[999] w-[350px] h-full bg-[#d2691e] grid items-center top-0 transition duration-500 ease-in-out sm:w-full"
            isOpen={isOpen}
            onClick={toggle}
        >
            <div
                className="absolute top-5 right-6 bg-transparent border-transparent text-[2rem] cursor-pointer outline-none "
                onClick={toggle}
            >
                <div className="text-black hover:text-white hover:transition hover:duration-500 hover:ease-in-out" />
            </div>
            <SidebarMenu>
                <SidebarLink to="/">
                    My Profile
                    <MdPeople />
                </SidebarLink>{" "}
                <SidebarLink to="/">
                    My Purchases <nbsp />
                    <FaShoppingCart />
                </SidebarLink>
                <SidebarLink to="/">Log in or Sign up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">
                    Buy Premium Games <nbsp />
                    <FaCrown />
                </SidebarRoute>
            </SideBtnWrap>
        </aside>
    )
}

export default Sidebar

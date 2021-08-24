import React from "react"
import newlogo from "../../images/newlogo.png"

const Navbar = ({ toggle }) => {
    return (
        <>
            <nav className="bg-transparent  h-[80px] flex font-bold ml-6">
                <div
                    style={{ backgroundImage: `url(${newlogo})` }}
                    className="w-56 h-20 mt-2 bg-center bg-cover cursor-pointer rounded-xl"
                ></div>
                <div className="block absolute top-0 right-0 cursor-pointer text-[#fff]" onClick={toggle}>
                    <p className="p-4 font-bold transition duration-200 transform cursor-pointer ">Menu</p>
                </div>
            </nav>
        </>
    )
}

export default Navbar

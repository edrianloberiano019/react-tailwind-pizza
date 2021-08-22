import React from "react"

const Navbar = ({ toggle }) => {
    return (
        <>
            <nav className="bg-transparent h-[80px] flex font-bold ml-6">
                <div className="text-[#fff] text-[length:clamp(1rem,5vw,4rem)] flex items-center no-underline cursor-pointer sm:top-2 sm:left-6">
                    CROSSRANT
                </div>
                <div className="block absolute top-0 right-0 cursor-pointer text-[#fff]" onClick={toggle}>
                    <p className="absolute font-bold transition duration-100 ease-in-out hover:text-gray-700">Menu</p>
                </div>
            </nav>
        </>
    )
}

export default Navbar

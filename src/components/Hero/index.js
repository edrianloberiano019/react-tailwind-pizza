import React, { useState } from "react"
import Navbar from "../Navbar"
import Sidebar from "../Sidebar"
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from "./HeroElements"

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="w-full h-screen bg-gray-700 bg-center bg-cover">
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <div className="h-[calc(100vh-80px)] max-h-full px-0 py-[calc((100vw-1300px)/2)] ">
                <div className="flex flex-col justify-center items-start h-screen max-h-full px-0 py-8 w-[650px] text-[#fff] uppercase leading-none font-bold sm:w-full">
                    <h1 className="text-[length:clamp(1.5rem,8vw,4rem)] tracking-[3px]">Greatest Games Ever</h1>
                    <p className="text-[length:clamp(1rem,1.5vw,2rem)] mb-8">Over hundred Reality Games</p>
                    <button className="text-2xl px-4 py-16 bg-[#e31837] border-none text-[#fff] transition duration-75 ease-out hover:bg-[#ffc500] hover:cursor-pointer hover:text-[#000] border-solid border-black border-[10px]">
                        Buy Plans!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero

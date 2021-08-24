import React from "react"
import vrgames from "../../images/featured3.jpg"

function index() {
    return (
        //TODO : MAX-H-[1000px] font-size: clamp(3rem, 5vw, 5rem);
        <div
            style={{ backgroundImage: `url(${vrgames})` }}
            className="flex flex-col items-center justify-center h-screen max-h-[1000px] bg-[#ce2222] px-0 py-4 text-center text-white font-semibold left-0 bg-center bg-cover"
        >
            <div className="text-5xl text-[length:clamp(3rem,5vw,5rem)]" style={{ fontSize: "clamp(3rem, 5vw, 5rem)" }}>
                Reality to Advance
            </div>
            <p className="mb-4 text-5xl">Experience the most Realistic Games Ever!</p>
            <button className="px-12 py-4 text-2xl transition duration-200 ease-out bg-[#e31837] shadow-lg rounded-xl cursor-pointer transform hover:scale-110 hover:bg-[#a30b22]">
                Buy Plans!
            </button>
        </div>
    )
}

export default index

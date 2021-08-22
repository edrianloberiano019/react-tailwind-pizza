import React from "react"

function index() {
    return (
        //TODO : MAX-H-[1000px] font-size: clamp(3rem, 5vw, 5rem);
        <div className="flex flex-col items-center justify-center h-screen max-h-[1000px] bg-[#ce2222] px-0 py-4 text-center text-white bg-blue-500 bg-center bg-cover">
            <div className="text-5xl text-[length:clamp(3rem,5vw,5rem)]" style={{ fontSize: "clamp(3rem, 5vw, 5rem)" }}>
                Reality to Advance
            </div>
            <p className="mb-4 text-5xl">Experience the most Realistic Games Ever!</p>
            <button className="px-3 py-12 text-2xl text-black transition duration-200 ease-out bg-orange-600 cursor-pointer hover:text-white hover:bg-trueGray-800">
                Buy Plans!
            </button>
        </div>
    )
}

export default index

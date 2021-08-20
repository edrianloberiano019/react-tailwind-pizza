import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="flex flex-col items-center content-center justify-center w-screen h-screen bg-orange-700">
            <Link
                className="flex items-center content-center justify-center w-full py-10 text-white transition duration-300 text-7xl hover:bg-orange-600"
                to="/"
            >
                Home
            </Link>
            <Link
                className="flex items-center content-center justify-center w-full py-10 text-white transition duration-300 text-7xl hover:bg-orange-600"
                to="/login"
            >
                Login
            </Link>
            <Link
                className="flex items-center content-center justify-center w-full py-10 text-white transition duration-300 text-7xl hover:bg-orange-600"
                to="/register"
            >
                Register
            </Link>
            <Link
                className="flex items-center content-center justify-center w-full py-10 text-white transition duration-300 text-7xl hover:bg-orange-600"
                to="/dashboard"
            >
                Dashboard
            </Link>
        </div>
    )
}

export default Home

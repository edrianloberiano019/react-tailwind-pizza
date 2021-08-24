import React from "react"
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="bg-[#0d0909]">
            <div className="px-2 py-6 flex flex-col justify-center max-w-[1300px] m-[0,auto]">
                <section className="max-w-[1300px] w-full">
                    <div className="flex justify-between items-center max-w-[1100px] m-[16px,auto,0,auto] md:flex-col">
                        <Link
                            className="text-[#fff] justify-self-start cursor-pointer no-underline text-2xl flex items-center mb-4 font-bold"
                            to="/"
                        >
                            CROSSRANT
                        </Link>
                        <div className="flex items-center justify-between w-60">
                            <a className="text-[#fff] text-2xl" href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </a>
                            <a className="text-[#fff] text-2xl" href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a className="text-[#fff] text-2xl" href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </a>
                            <a
                                className="text-[#fff] text-2xl"
                                href="//www.twitter.com/briandesignz"
                                target="_blank"
                                aria-label="Twitter"
                                rel="noopener noreferrer"
                            >
                                <FaTwitter />
                            </a>
                            <a className="text-[#fff] text-2xl" href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    )
}

export default Footer

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
// import { Link, useNavigate} from 'react-router-dom';


const Navbar = () => {

    const [navbar, setNavbar] = useState(false);
    // const navigate = useNavigate();
    


    return (
        <>
            <nav className="w-full shadow">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                                <a href="/" className="text-4xl font-bold text-purple-500">N-Academy</a>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <FaTimes />
                                    ) : (
                                        <FaBars />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li><a href="/about" className="text-white text-xl hover:text-indigo-500 hover:underline cursor-pointer">
                                    About Us
                                </a></li>
                                <li><a href="/collection" className="text-white text-xl hover:text-indigo-500 hover:underline cursor-pointer">
                                    Collection
                                </a></li>
                                <li><a href="/blog" className="text-white text-xl hover:text-indigo-500 hover:underline cursor-pointer">
                                    Blog
                                </a></li>
                                <li><a href="/contact" className="text-white text-xl hover:text-indigo-500 hover:underline cursor-pointer">
                                    Contact Us
                                </a></li>
                            </ul>

                            <div className="mt-3 space-y-2 lg:hidden md:hidden md:inline-block mt-6 mb-2">
                                <a href="/" className="inline-block px-6 py-2 text-center text-white bg-purple-500 rounded shadow hover:bg-gray-800" >
                                    Sign Up
                                </a>
                                <a href="/" className="inline-block px-6 py-2 text-center text-gray-800 bg-white rounded shadow hover:bg-gray-100 ml-6">
                                    Log In
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden space-x-2 md:inline-block">
                        <a href="/" className="px-6 py-2 text-white bg-purple-500 rounded shadow hover:bg-gray-800 cursor-pointer" > 
                            Sign Up
                        </a>
                        <a href="/" className="px-4 py-2 text-gray-800 bg-white rounded shadow hover:bg-gray-100 cursor-pointer" >
                            Log In
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
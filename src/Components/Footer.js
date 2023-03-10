import React from 'react';
// import { FaGithub, FaLink } from "react-icons/fa";
import { motion } from 'framer-motion';


const Footer = () => {
    return (
        <>
            <footer className="bg-[#220761]">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <p className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <span className="text-3xl text-purple-400 font-bold">N-Academy</span>
                        </p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-8 -mb-10 md:mt-0 mt-10 md:text-left text-center text-white">
                        <motion.div
                            initial={{
                                y:80,
                                opacity:0,
                            }}
                            transition={{ duration: .5 }}
                            whileInView={{ opacity: 1, y:0 }}
                            className="lg:w-1/4 md:w-1/2 w-full px-4 text-white">
                            <h2 className="font-semibold text-lg mb-3">Quick Links</h2>
                            <nav className="list-none mb-10">
                                <li className="mb-2 cursor-pointer">
                                    Home
                                </li>
                                <li className="mb-2 cursor-pointer">
                                    Our Mission
                                </li>
                                <li className="mb-2 cursor-pointer">
                                    Careers
                                </li>
                                <li className="mb-2 cursor-pointer">
                                    Terms and Conditions
                                </li>
                                <li className="mb-2 cursor-pointer">
                                    Privacy Policy
                                </li>
                            </nav>
                        </motion.div>

                        <motion.div
                            initial={{
                                y:80,
                                opacity:0,
                            }}
                            transition={{ duration: .80 }}
                            whileInView={{ opacity: 1, y:0 }}
                            className="lg:w-1/4 md:w-1/2 w-full px-4 text-white">
                            <h2 className="font-semibold text-lg mb-3">Support</h2>
                            <nav className="list-none mb-10">
                                <li className="mb-2 cursor-pointer">
                                    How it works
                                </li>
                                <li className="mb-2 cursor-pointer">
                                    Pricing Plan
                                </li>
                                <li className="mb-2 cursor-pointer">
                                    Register
                                </li>
                                <li className="mb-2 cursor-pointer">
                                    FAQs
                                </li>
                                <li className="mb-2 cursor-pointer">
                                    Terms of use
                                </li>
                            </nav>
                        </motion.div>

                        <motion.div
                            initial={{
                                y:80,
                                opacity:0,
                            }}
                            transition={{ duration: 1.1 }}
                            whileInView={{ opacity: 1, y:0 }}
                            className="lg:w-1/4 md:w-1/2 w-full px-4 text-white">
                            <h2 className="font-semibold text-lg mb-3">Contact Us</h2>
                            <nav className="list-none mb-10">
                                <li className="mb-2 cursor-pointer">
                                +123456789
                                </li>
                                <li className="mb-2 cursor-pointer">
                                  info@nacademy.com
                                </li>
                                <li className="mb-2 cursor-pointer">
                                  24, Martins Street, Winchester.
                                </li>
                            </nav>
                        </motion.div>

                        <motion.div
                            initial={{
                                y:80,
                                opacity:0,
                            }}
                            transition={{ duration: 1.4 }}
                            whileInView={{ opacity: 1, y:0 }}
                            className="lg:w-1/4 md:w-1/2 w-full px-4 text-white">
                            <h2 className="font-semibold text-lg mb-3">Part 4</h2>
                            <nav className="list-none mb-10">
                                <li className="mb-2 cursor-pointer">
                                    First Link
                                </li>
                                <li className="mb-2 cursor-pointer">
                                    Second Link
                                </li>
                                <li className="mb-2 cursor-pointer">
                                    Third Link
                                </li>
                                <li className="mb-2 cursor-pointer">
                                    Fourth Link
                                </li>
                            </nav>
                        </motion.div>
                    </div>
                </div>
                <div className="">
                    <div className="container mx-auto py-6 px-5 align-center text-center">
                        <p className="text-base text-center text-white">Copyright ?? N-Academy Web App ???
                            <a href="https://www.linkedin.com/in/julietofoegbu" className="underline text-purple-500" target="_blank" rel="noreferrer"> Juliet</a>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
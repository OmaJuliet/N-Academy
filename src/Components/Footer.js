import React from 'react';
import { FaGithub, FaLink } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <span className="text-3xl text-purple-500 font-bold">N-Academy</span>
                        </a>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-8 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="font-semibold text-gray-900 text-lg mb-3">Quick Links</h2>
                            <nav className="list-none mb-10">
                                <li className="mb-2">
                                    <a className="cursor-pointer">Home</a>
                                </li>
                                <li className="mb-2">
                                    <a className="cursor-pointer">Our Mission</a>
                                </li>
                                <li className="mb-2">
                                    <a className="cursor-pointer">Careers</a>
                                </li>
                                <li className="mb-2">
                                    <a className="cursor-pointer">Terms and Conditions</a>
                                </li>
                                <li className="mb-2">
                                    <a className="cursor-pointer">Privacy Policy</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="font-semibold text-gray-900 text-lg mb-3">Support</h2>
                            <nav className="list-none mb-10">
                                <li className="mb-2">
                                    <a className="cursor-pointer">How it works</a>
                                </li>
                                <li className="mb-2">
                                    <a className="cursor-pointer">Pricing Plan</a>
                                </li>
                                <li className="mb-2">
                                    <a className="cursor-pointer">Register</a>
                                </li>
                                <li className="mb-2">
                                    <a className="cursor-pointer">FAQs</a>
                                </li>
                                <li className="mb-2">
                                    <a className="cursor-pointer">Terms of use</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="font-semibold text-gray-900 text-lg mb-3">Contact Us</h2>
                            <nav className="list-none mb-10">
                                <li className="mb-2">
                                    <a className="cursor-pointer">+123456789</a>
                                </li>
                                <li className="mb-2">
                                    <a className="cursor-pointer">info@nacademy.com</a>
                                </li>
                                <li className="mb-2">
                                    <a className="cursor-pointer">24, Martins Street, Winchester.</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="font-semibold text-gray-900 text-lg mb-3">Part 4</h2>
                            <nav className="list-none mb-10">
                                <li className="mb-2">
                                    <a className="cursor-pointer">First Link</a>
                                </li>
                                <li className="mb-2">
                                    <a className="cursor-pointer">Second Link</a>
                                </li>
                                <li className="mb-2">
                                    <a className="cursor-pointer">Third Link</a>
                                </li>
                                <li className="mb-2">
                                    <a className="cursor-pointer">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="container mx-auto py-6 px-5 align-center text-center">
                        <p className="text-base text-center">Copyright © N-Academy Web App —
                            <a href="https://github.com/OmaJuliet" className="text-gray-600 underline text-purple-500" target="_blank"> Juliet</a>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
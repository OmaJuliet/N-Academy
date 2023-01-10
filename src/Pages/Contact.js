import React from 'react';
import { FaDiscord, FaInstagram, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";



const Contact = () => {
  return (
    <>
      <section>
        <div className="container px-5 py-12 mx-auto flex flex-wrap items-center">

          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="font-bold text-4xl">CONTACT US</h1>
            <p className="leading-relaxed text-lg mt-12">For more information, media or partnership inquiries feel free to get in touch here.</p>
            <div className="flex flex-wrap mt-8">
              <FaInstagram className="w-8 h-8 cursor-pointer hover:text-gray-200"/>
              <FaTwitter className="w-8 h-8 ml-4 cursor-pointer hover:text-gray-200"/>
              <FaDiscord className="w-8 h-8 ml-4 cursor-pointer hover:text-gray-200"/>
              <FaYoutube className="w-8 h-8 ml-4 cursor-pointer hover:text-gray-200"/>
              <FaTwitch className="w-8 h-8 ml-4 cursor-pointer hover:text-gray-200"/>
            </div>
          </div>

          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <div className="relative mb-4">
              <label className="leading-7 text-base text-gray-600">First Name *</label>
              <input type="text" name="full-name" className="w-full text-gray-700 py-1 px-3 bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none leading-8" />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-base text-gray-600">Email *</label>
              <input type="email" name="email" className="w-full text-gray-700 py-1 px-3 bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none leading-8" />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-base text-gray-600">Subject *</label>
              <input type="text" name="subject" className="w-full text-gray-700 py-1 px-3 bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none leading-8" />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-base text-gray-600">Message *</label>
              <textarea type="text" name="message" className="w-full text-gray-700 py-1 px-3 bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none leading-8 "></textarea>
            </div>
            <button className="text-white align-left text-center w-28 text-xl bg-purple-500 border-0 py-2 px-4 focus:outline-none hover:bg-gray-100 hover:border-2 hover:border-purple-500 hover:text-purple-500 rounded-3xl">Submit</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
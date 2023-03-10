import React from 'react';
import img1 from "../Images/nft-go.png";
import img2 from "../Images/opensea-1.png";
import img3 from "../Images/middle.png"
import img4 from "../Images/polygon.png";
import img5 from "../Images/metamask-1.png";
import nft1 from "../Images/nft1.png";
import nft2 from "../Images/nft2.png";
import nft3 from "../Images/nft3.png";
import Carousel from '../Components/Carousel';
import { Testimonial } from './Testimonial';
import './home.css';
import { FaVideo } from 'react-icons/fa';
import { motion } from "framer-motion"




const Home = () => {


    return (
        <>
        <main className="p-5">
            <section className="">
                <div className="container mx-auto flex lg:px-5 px-2 py-24 items-center justify-center flex-col">
                    <div className='center z-0' />
                    <motion.div
                        initial={{
                            x:-100,
                            opacity:0,
                        }}
                        // animate={{ x: 10 }}
                        whileInView={{ opacity: 1, x:0 }}
                        transition={{ duration: 1.8, type: 'spring', bounce: .8 }}
                        className="text-center lg:w-2/3 w-full z-10">
                        <h5 className="text-white">Welcome to N-Academy</h5>
                        <h1 className="lg:w-12/12 sm:text-6xl text-3xl mb-4 font-medium text-white">The All-in-one Learning Platform for NFT</h1>
                        <p className="mb-8 leading-relaxed w-full text-lg text-white">An educational platform committed to building the most comprehensive,<br /> engaging and high-quality courses on NFT</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-purple-500 rounded-full text-base">Get Started</button>
                            <button className="inline-flex text-white bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-purple-500 rounded-full text-base ml-3">Watch Demo</button>
                        </div>
                    </motion.div>
                </div>
            </section>



            <section className="">
                <div className="container lg:px-40 md:px-12 px-2 py-2 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center">
                        <motion.div
                            initial={{
                                y:80,
                                opacity:0,
                            }}
                            transition={{ duration: .5 }}
                            whileInView={{ opacity: 1, y:0 }}
                            className="p-2 md:w-1/6 w-1/2">
                            <div className="p-2">
                                <img src={img1} alt="" className="text-indigo-500 lg:w-52 lg:h-32 w-24 h-20 mb-3 inline-block" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{
                                y:80,
                                opacity:0,
                            }}
                            transition={{ duration: .80 }}
                            whileInView={{ opacity: 1, y:0 }}
                            className="p-2 md:w-1/4 w-1/2">
                            <div className="p-2">
                                <img src={img2} alt="" className="text-indigo-500 lg:w-52 lg:h-32 w-24 h-20 mb-3 inline-block" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{
                                y:80,
                                opacity:0,
                            }}
                            transition={{ duration: 1.1 }}
                            whileInView={{ opacity: 1, y:0 }}
                            className="p-2 md:w-1/6 w-1/2">
                            <div className="p-2">
                                <img src={img3} alt="" className="text-indigo-500 lg:w-52 lg:h-32 w-24 h-20 mb-3 inline-block" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{
                                y:80,
                                opacity:0,
                            }}
                            transition={{ duration: 1.4 }}
                            whileInView={{ opacity: 1, y:0 }}
                            className="p-2 md:w-1/6 w-1/2">
                            <div className="p-2">
                                <img src={img4} alt="" className="text-indigo-500 lg:w-52 lg:h-32 w-24 h-20 mb-3 inline-block" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{
                                y:80,
                                opacity:0,
                            }}
                            transition={{ duration: 1.7 }}
                            whileInView={{ opacity: 1, y:0 }}
                            className="p-2 md:w-1/4 w-1/2">
                            <div className="p-2">
                                <img src={img5} alt="" className="text-indigo-500 lg:w-52 lg:h-32 w-24 h-20 mb-3 inline-block" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


            <section className="">
                <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
                <div className='center-2 z-0' />
                    <motion.div
                        initial={{
                            y:-100,
                            opacity:0,
                        }}
                        // animate={{ x: 10 }}
                        whileInView={{ opacity: 1, y:0 }}
                        transition={{ duration: 1.8, type: 'spring', bounce: .8 }}
                        className="text-center lg:w-2/3 w-full z-10">
                        <h1 className="lg:mt-8 sm:text-4xl text-3xl mb-4 font-medium lg:text-center text-left text-white">About Us</h1>
                        <p className="mb-8 text-lg leading-relaxed lg:text-center text-left text-white">We offer certification courses with hands-on development and practical testing. Our mission is to improve the quality and professionalism in the NFT industry
                            by providing top quality educational content. N-Academy is the next generation of Blockchain developer education.</p>
                    </motion.div>
                </div>
            </section>



            <section className="">
                <div className="container px-5 lg:py-20 py-8 mx-auto">
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div className="lg:p-4 px-20 py-4 md:w-1/3 sm:mb-0 mb-6">
                            <motion.div
                                initial={{
                                    x:80,
                                    opacity:0,
                                }}
                                transition={{ duration: .7 }}
                                whileInView={{ opacity: 1, x:0 }}
                                whileHover={{ scale: 1.2 }}
                                // whileTap={{ scale: 0.9 }}
                                className="bg-gradient-to-r from-fuchsia-500 to-indigo-500 rounded-lg lg:h-96 overflow-hidden">
                                <img alt="content" className="lg:h-11/12 lg:w-11/12 w-full" src={nft3} />
                            </motion.div>
                        </div>

                        <div className="lg:p-4 px-20 py-4 md:w-1/3 sm:mb-0 mb-6">
                            <motion.div
                                initial={{
                                    x:80,
                                    opacity:0,
                                }}
                                transition={{ duration: .9 }}
                                whileInView={{ opacity: 1, x:0 }}
                                whileHover={{ scale: 1.2 }}
                                // whileTap={{ scale: 0.9 }}
                                className="bg-[#002855] rounded-lg lg:h-96 overflow-hidden">
                                <img alt="content" className="lg:h-11/12 lg:w-11/12 w-full" src={nft2} />
                            </motion.div>
                        </div>

                        <div className="lg:p-4 px-20 py-4 md:w-1/3 sm:mb-0 mb-6">
                            <motion.div
                                initial={{
                                    x:35,
                                    opacity:0,
                                }}
                                transition={{ duration: 1.2 }}
                                whileInView={{ opacity: 1, x:0 }}
                                whileHover={{ scale: 1.2 }}
                                // whileTap={{ scale: 0.9 }}
                                className="bg-purple-500 rounded-lg lg:h-96 overflow-hidden">
                                <img alt="content" className="lg:h-11/12 lg:w-11/12 w-full" src={nft1} />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>




            <Carousel />
            <Testimonial />



          {/* subscribe section */}

            <div className="subscribe">
                <motion.div
                    initial={{
                        x:-100,
                        opacity:0,
                    }}
                    // animate={{ x: 10 }}
                    whileHover={{ scale: 1.08 }}
                    whileInView={{ opacity: 1, x:0 }}
                    transition={{ duration: 1.8, type: 'spring', bounce: .8 }}
                    className="subscribe-inner bg-gradient-to-r from-fuchsia-500 to-indigo-500">
                    <h1 className="subscribe-heading">Keep up with the Latest from N-Academy</h1>
                    <p className="subscribe-lead">
                        Subscribe and stay updated on the latest news by subscribing to the newsletter
                    </p>
                    <div className="subscribe-search">
                        <input
                            type="search"
                            name="domain"
                            className="search-input"
                            placeholder="Enter Your Email"
                            required
                        />
                        <button className="search-button bg-gradient-to-r from-fuchsia-500 to-indigo-500" type="submit">Subscribe Now</button>
                    </div>
                </motion.div>
            </div>
        </main>
        </>
    )
}

export default Home
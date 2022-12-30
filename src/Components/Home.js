import React from 'react';
import img1 from "../Images/nftgo.png";
import img2 from "../Images/opensea.png";
import img3 from "../Images/polygonscan.png";
import img4 from "../Images/metamask.png";
import nft1 from "../Images/nft1.png";
import nft2 from "../Images/nft2.png";
import nft3 from "../Images/nft3.png";
import Carousel from '../Components/Carousel';
import { Testimonial } from './Testimonial';
import './home.css';
import { FaVideo } from 'react-icons/fa';




const Home = () => {


    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                        <h5>Welcome to N-Academy</h5>
                        <h1 className="lg:w-11/12 sm:text-5xl text-3xl mb-4 font-medium text-gray-900">The All-in-one Learning Platform for NFT</h1>
                        <p className="mb-8 leading-relaxed w-full text-lg">An educational platform committed to building the most comprehensive,<br /> engaging and high-quality courses on NFT</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-500 rounded-full text-lg">Get Started</button>
                            <button className="ml-4 inline-flex text-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 hover:rounded-full rounded text-lg"><span className=""><FaVideo className="lg:m-auto lg:mt-2 lg:mr-2 text-purple-500"/></span>Watch Video</button>
                        </div>
                    </div>
                </div>
            </section>



            <section className="">
                <div className="container lg:px-40 md:px-12 px-2 py-2 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-2 md:w-1/4 w-1/2 w-full">
                            <div className="p-2">
                                <img src={img1} alt="" className="text-indigo-500 lg:w-52 lg:h-32 w-24 h-20 mb-3 inline-block" />
                            </div>
                        </div>
                        <div className="p-2 md:w-1/4 w-1/2 w-full">
                            <div className="p-2">
                                <img src={img2} alt="" className="text-indigo-500 lg:w-52 lg:h-32 w-24 h-20 mb-3 inline-block" />
                            </div>
                        </div>
                        <div className="p-2 md:w-1/4 w-1/2 w-full">
                            <div className="p-2">
                                <img src={img3} alt="" className="text-indigo-500 lg:w-52 lg:h-32 w-24 h-20 mb-3 inline-block" />
                            </div>
                        </div>
                        <div className="p-2 md:w-1/4 w-1/2 w-full">
                            <div className="p-2">
                                <img src={img4} alt="" className="text-indigo-500 lg:w-52 lg:h-32 w-24 h-20 mb-3 inline-block" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="">
                <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 lg:text-center text-left">About Us</h1>
                        <p className="mb-8 text-lg leading-relaxed lg:text-center text-left">We offer certification courses with hands-on development and practical testing. Our mission is to improve the quality and professionalism in the NFT industry
                            by providing top quality educational content. N-Academy is the next generation of Blockchain developer education.</p>
                    </div>
                </div>
            </section>



            <section className="">
                <div className="container px-5 lg:py-20 py-8 mx-auto">
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div className="lg:p-4 px-20 py-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="bg-purple-500 rounded-lg lg:h-96 overflow-hidden">
                                <img alt="content" className="lg:h-11/12 lg:w-11/12 w-full" src={nft3} />
                            </div>
                        </div>
                        <div className="lg:p-4 px-20 py-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="bg-blue-700 rounded-lg lg:h-96 overflow-hidden">
                                <img alt="content" className="lg:h-11/12 lg:w-11/12 w-full" src={nft2} />
                            </div>
                        </div>
                        <div className="lg:p-4 px-20 py-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="bg-purple-500 rounded-lg lg:h-96 overflow-hidden">
                                <img alt="content" className="lg:h-11/12 lg:w-11/12 w-full" src={nft1} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <Carousel />
            <Testimonial />



          {/* subscribe section */}

            <div className="subscribe">
                <div className="subscribe-inner">
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
                        <button className="search-button" type="submit">Subscribe Now</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
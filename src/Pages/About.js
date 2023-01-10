import React from 'react';
import roadmap2 from "../Images/Group 126.png";



const About = () => {
    return (
        <>
            <section>
                <div className="container px-5 py-12 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-5xl text-4xl font-bold text-center mb-4">Our Vision</h1>
                        <p className="text-lg leading-relaxed xl:w-3/4 lg:w-4/5 mt-2 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                        </p>
                    </div>
                </div>
            </section>


            {/* Roadmap section */}
            <section className="">
                <div className="container px-5 lg:py-12 py-8 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <h1 className="text-5xl font-bold mb-2">Roadmap</h1>
                        <img alt="roadmap" className=" h-full w-full" src={roadmap2} />
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div className="flex flex-col mb-12 lg:items-start items-center">
                            <div className="flex-grow">
                                <h2 className="text-2xl font-semibold underline text-indigo-700 cursor-pointer mb-3 text-left">Roadmap One</h2>
                                <p className="leading-relaxed text-base text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>

                        <div className="flex flex-col mb-12 lg:items-start items-center">
                            <div className="flex-grow">
                                <h2 className="text-2xl font-semibold underline text-indigo-700 cursor-pointer mb-3 text-left">Roadmap Two</h2>
                                <p className="leading-relaxed text-base text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>

                        <div className="flex flex-col mb-12 lg:items-start items-center">
                            <div className="flex-grow">
                                <h2 className="text-2xl font-semibold underline text-indigo-700 cursor-pointer mb-3 text-left">Roadmap Three</h2>
                                <p className="leading-relaxed text-base text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>

                        <div className="flex flex-col mb-12 lg:items-start items-center">
                            <div className="flex-grow">
                                <h2 className="text-2xl font-semibold underline text-indigo-700 cursor-pointer mb-3 text-left">Roadmap Four</h2>
                                <p className="leading-relaxed text-base text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



           {/* Mission section */}
            <section className="text-gray-600">
                <div className="container px-5 py-24 mx-auto">
                    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto p-8 bg-gray-300 rounded-3xl">
                        <h2 className="text-4xl font-semibold">Our Mission</h2>
                        <ol className="mt-2">
                            <li className="mt-2 p-2 text-xl">1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            <li className="mt-2 p-2 text-xl">2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            <li className="mt-2 p-2 text-xl">3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            <li className="mt-2 p-2 text-xl">4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        </ol>
                    </div>
                </div>
            </section>

        
        <div className="container px-12 lg:py-16 py-8 mx-auto">
            <div className="flex flex-wrap justify-between">
                <a href="/team"><h2 className="text-4xl text-purple-400 font-bold underline hover:text-5xl">Meet the team</h2></a>
                <a href="/"><h2 className="text-4xl text-purple-400 lg:mt-0 mt-12 font-bold underline hover:text-5xl">FAQs</h2></a>
            </div>
        </div>
        </>
    )
}

export default About
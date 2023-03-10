import React, { useRef, useEffect } from "react";
import roadmap2 from "../Images/Group 126.png";
import "../App.css"
import { motion } from 'framer-motion';
// import { Power2 } from "gsap";
// import { TimelineLite } from 'gsap/all';
// import CSSRulePlugin from "gsap/CSSRulePlugin";



const About = () => {
    // let image = useRef(null);
    // let container = useRef(null);
    // let imageReveal = CSSRulePlugin.getRule(".img-container:after");
  
    // const timeline = new TimelineLite();
  
    // useEffect(() => {
    //   timeline.to(container, 0, { css: { visibility: "visible" } });
    //   timeline.to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut });
    //   timeline.from(image, 1.4, {
    //     scale: 1.6,
    //     ease: Power2.easeInOut,
    //     delay: -1.4
    //   });
    // });

    return (
        <>
            <motion.section
                 initial={{
                    x:-100,
                    opacity:0,
                }}
                // animate={{ x: 10 }}
                whileInView={{ opacity: 1, x:0 }}
                transition={{ duration: 1.8, type: 'spring', bounce: .7 }}
            >
                <div className="container px-5 py-12 mx-auto">
                <div className='center-2 z-0' />
                    <div className="text-center mb-20 z-10 text-white">
                        <h1 className="sm:text-5xl text-4xl font-bold text-center mb-4">Our Vision</h1>
                        <p className="text-base leading-relaxed xl:w-3/4 lg:w-4/5 mt-2 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                        </p>
                    </div>
                </div>
            </motion.section>


            {/* Roadmap section */}
            <section className="">
                <div className="container px-5 lg:py-12 py-8 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <h1 className="text-5xl font-bold mb-2 text-white">Roadmap</h1>
                        <motion.img 
                             initial={{
                                x:-200,
                                opacity:0,
                            }}
                            transition={{
                                duration: 1.2,
                            }}
                            whileInView={{ opacity: 1, x:0 }}
                            // viewport={{ once:true }}
                            alt="roadmap" 
                            className=" h-full w-full" 
                            src={roadmap2}
                        />
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <motion.div
                            initial={{
                                y:-80,
                                opacity:0,
                            }}
                            transition={{ duration: .5 }}
                            whileInView={{ opacity: 1, y:0 }}
                            className="flex flex-col mb-12 lg:items-start items-center">
                            <div className="flex-grow">
                                <h2 className="text-2xl font-semibold underline text-indigo-700 cursor-pointer mb-3 text-left">Roadmap One</h2>
                                <p className="leading-relaxed text-base text-left text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{
                                y:-80,
                                opacity:0,
                            }}
                            transition={{ duration: .80 }}
                            whileInView={{ opacity: 1, y:0 }}
                            className="flex flex-col mb-12 lg:items-start items-center">
                            <div className="flex-grow">
                                <h2 className="text-2xl font-semibold underline text-indigo-700 cursor-pointer mb-3 text-left">Roadmap Two</h2>
                                <p className="leading-relaxed text-base text-left text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </motion.div>

                        <motion.div
                             initial={{
                                y:-80,
                                opacity:0,
                            }}
                            transition={{ duration: 1.1 }}
                            whileInView={{ opacity: 1, y:0 }}
                            className="flex flex-col mb-12 lg:items-start items-center">
                            <div className="flex-grow">
                                <h2 className="text-2xl font-semibold underline text-indigo-700 cursor-pointer mb-3 text-left">Roadmap Three</h2>
                                <p className="leading-relaxed text-base text-left text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{
                                y:-80,
                                opacity:0,
                            }}
                            transition={{ duration: 1.4 }}
                            whileInView={{ opacity: 1, y:0 }}
                            className="flex flex-col mb-12 lg:items-start items-center">
                            <div className="flex-grow">
                                <h2 className="text-2xl font-semibold underline text-indigo-700 cursor-pointer mb-3 text-left">Roadmap Four</h2>
                                <p className="leading-relaxed text-base text-left text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>



           {/* Mission section */}
            <section className="text-gray-600">
                <div className="container px-5 py-24 mx-auto">
                    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto p-8 bg-gray-300 rounded-3xl">
                        <h2 className="text-4xl font-semibold">Our Mission</h2>
                        <ol className="mt-2">
                            <li className="mt-2 p-2 text-base">1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            <li className="mt-2 p-2 text-base">2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            <li className="mt-2 p-2 text-base">3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            <li className="mt-2 p-2 text-base">4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
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
import React from 'react';
import team1 from "../Images/team1.jpg";
import team2 from "../Images/team2.jpeg";
import team3 from "../Images/team3.png";
import team4 from "../Images/team4.jpeg";
import team5 from "../Images/team5.png";
import team6 from "../Images/team6.jpg";
import { motion } from 'framer-motion';


const Team = () => {
  return (
    <section className="" id='team'>
      <div className='center-2 z-0' />
      <div className='container xl:max-w-screen-xl mx-auto py-5 px-4 relative'>
        <motion.h2
            initial={{
              x:-100,
              opacity:0,
          }}
          // animate={{ x: 10 }}
          whileInView={{ opacity: 1, x:0 }}
          transition={{ duration: 1.8, type: 'spring', bounce: .8 }}
          className="md:text-5xl text-4xl font-bold text-center text-white md:my-10 my-12 w-fit mx-auto relative">
          Meet The Team
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-20 my-10">

          <div className="w-[220px] xl:w-[250px] text-center">
            <div className="w-[220px] xl:w-[250px] h-[220px] xl:h-[250px] bg-primary bg-opacity-10 rounded-full flex items-end justify-center overflow-hidden" data-aos='fade-right'>
              <motion.img
                initial={{ x:-100,opacity:0, scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  bounce: .8
                }}
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileInView={{ opacity: 1, x:0 }}
                src={team3}
                alt="Team member"
                className="w-[80%] rounded-full"
              />
            </div>
            <p className="text-white font-semibold md:text-2xl text-xl hover:underline cursor-pointer hover:text-indigo-500 mt-4">
              Jane Doe
            </p>
            <p className="text-white text-lg">
              Founder and CEO
            </p>
          </div>

          <div className="w-[220px] xl:w-[250px] text-center">
            <div className="w-[220px] xl:w-[250px] h-[220px] xl:h-[250px] bg-primary bg-opacity-10 rounded-full flex items-end justify-center overflow-hidden" data-aos='fade-left'>
              <motion.img
                initial={{ x:-100,opacity:0, scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  bounce: .8
                }}
                whileInView={{ opacity: 1, x:0 }}
                src={team2}
                alt="Team member"
                className="w-[80%] rounded-full"
              />
            </div>
            <p className="text-white font-semibold md:text-2xl text-xl hover:underline cursor-pointer hover:text-indigo-500 mt-4">
              John Doe
            </p>
            <p className="text-white text-lg">
              Managing Director
            </p>
          </div>

          <div className="w-[220px] xl:w-[250px] text-center">
            <div className="w-[220px] xl:w-[250px] h-[220px] xl:h-[250px] bg-primary bg-opacity-10 rounded-full flex items-end justify-center overflow-hidden" data-aos='fade-up-right'>
              <motion.img
                initial={{ x:-100,opacity:0, scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  bounce: .8
                }}
                whileInView={{ opacity: 1, x:0 }}
                src={team5}
                alt="Team member"
                className="w-[85%] rounded-full"
              />
            </div>
            <p className="text-white font-semibold md:text-2xl text-xl hover:underline cursor-pointer hover:text-indigo-500 mt-4">
            Janet Elderman
            </p>
            <p className="text-white text-lg">
              Executive Assistant
            </p>
          </div>

          <div className="w-[220px] xl:w-[250px] text-center">
            <div className="w-[220px] xl:w-[250px] h-[220px] xl:h-[250px] bg-primary bg-opacity-10 rounded-full flex items-end justify-center overflow-hidden" data-aos='fade-up-left'>
              <motion.img
                initial={{ x:-100,opacity:0, scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  bounce: .8
                }}
                whileInView={{ opacity: 1, x:0 }}
                src={team4}
                alt="Team member"
                className="w-[80%] rounded-full"
              />
            </div>
            <p className="text-white font-semibold md:text-2xl text-xl hover:underline cursor-pointer hover:text-indigo-500 mt-4">
              Donald Biden
            </p>
            <p className="text-white text-lg">
              Marketing 
            </p>
          </div>

          <div className="w-[220px] xl:w-[250px] text-center">
            <div className="w-[220px] xl:w-[250px] h-[220px] xl:h-[250px] bg-primary bg-opacity-10 rounded-full flex items-end justify-center overflow-hidden" data-aos='fade-down-right'>
              <motion.img
                initial={{ x:-100,opacity:0, scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  bounce: .8
                }}
                whileInView={{ opacity: 1, x:0 }}
                src={team1}
                alt="Team member"
                className="w-[80%] rounded-full"
              />
            </div>
            <p className="text-white font-semibold md:text-2xl text-xl hover:underline cursor-pointer hover:text-indigo-500 mt-4">
              Peace Joseph
            </p>
            <p className="text-white text-lg">
              Finance, Head
            </p>
          </div>

          <div className="w-[220px] xl:w-[250px] text-center">
            <div className="w-[220px] xl:w-[250px] h-[220px] xl:h-[250px] bg-primary bg-opacity-10 rounded-full flex items-end justify-center overflow-hidden" data-aos='fade-down-left'>
              <motion.img
                initial={{ x:-100,opacity:0, scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  bounce: .8
                }}
                whileInView={{ opacity: 1, x:0 }}
                src={team6}
                alt="Team member"
                className="w-[80%] rounded-full"
              />
            </div>
            <p className="text-white font-semibold md:text-2xl text-xl hover:underline cursor-pointer hover:text-indigo-500 mt-4">
              Jackson Smith
            </p>
            <p className="text-white text-lg">
              Operations
            </p>
          </div>
        
        </div>
      </div>
    </section>
  )
}

export default Team
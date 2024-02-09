import React from 'react'
import { FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa'
import { motion } from "framer-motion"
import { fadeIn } from '../variants'
import { TypeAnimation } from 'react-type-animation'
const Main = () => {
    return (
        <section className='section min-h-[85vh] lg:min-h[70vh] flex items-center' id='home'>
            <div className='container mx-auto lg:-mt-28 mt-8'>
                <div className='flex flex-col lg:items-center lg:flex-row gap-y-8 lg:gap-y-0 lg:gap-x-12'>
                    <div className='flex-1 text-center font-secondary lg:text-left'>
                        <motion.h1
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className='text-2xl font-bold leading-[0.8] lg:text-4xl'>
                            ABDELRADY <span>MOHAMED</span>
                        </motion.h1>
                        <motion.div
                            variants={fadeIn("up", 0.5)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className='mb-6 mt-2 font-primary text-[36px] lg:text-[50px] uppercase leading-[1] font-semibold'
                        >
                            <span className='mr-4'>I'm a</span>
                            <TypeAnimation
                                sequence={[
                                    "Full Stack Developer",
                                    2000,
                                    "Web Developer",
                                    2000,
                                ]}
                                speed={50}
                                className='text-sky-500'
                                wrapper='span'
                                repeat={Infinity}
                            />
                        </motion.div>
                        <motion.p
                            variants={fadeIn("up", 0.6)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className='mb-8 max-w-lg mx-auto lg:mx-0'
                        >
                            Building websites can be a challenge, but I am up for any challenge.
                            I am a full-stack developer based in Egypt specializing in building exceptional websites, applications.
                        </motion.p>
                        <motion.div
                            variants={fadeIn("up", 0.8)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className='flex max-w-max mx-auto lg:mx-0 items-center gap-x-8 mb-12'
                        >
                            <a href='https://www.linkedin.com/in/abdelrady-mohamed/'>
                                <button className='btn btn-lg'>Contact me</button>
                            </a>
                            <a href='./My-CV.pdf'>My Resume</a>
                        </motion.div>
                        <motion.div
                            variants={fadeIn("up", 0.9)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className='flex item-center gap-x-4 max-w-max mx-auto lg:mx-0 '
                        >
                            <a href='https://www.linkedin.com/in/abdelrady-mohamed/'>
                                <FaLinkedin className='text-2xl' />
                            </a>
                            <a href='https://github.com/Abdelrady-M'>
                                <FaGithub className='text-2xl' />
                            </a>
                        </motion.div>
                    </div>
                    <motion.div
                        variants={fadeIn("down", 0.6)}
                        initial="hidden"
                        whileInView={"show"}
                        className='lg:flex hidden flex-1 max-w-[320px] lg-max-w-[480px] rounded-full'
                    >
                        <img src='./rady.png' />
                    </motion.div>
                </div>

            </div>
        </section >
    )
}

export default Main
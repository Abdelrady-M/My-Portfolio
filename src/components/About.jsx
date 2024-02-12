import React from 'react'
import { CountUp } from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const About = () => {
    const { ref, inView } = useInView({
        threshold: 0.5
    })
    return (
        <section className='section lg:48' id='about' ref={ref}>
            <div className='container mx-auto'>
                <div className='flex lg:flex-row flex-col lg:justify-between gap-y-10 lg:gap-y-0 
                gap-x-0 lg:gap-x-20 h-screen'
                >
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        className='flex-1 bg-about bg-contain bg-no-repeat h-[350px] mix-blend-lighten bg-top'
                    >

                    </motion.div>
                    <motion.div
                        variants={fadeIn("right", 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        className='flex-1'
                    >
                        <h2 className='h2 text-sky-500 lg:text-4xl'>About Me</h2>
                        <motion.p
                            variants={fadeIn("right", 0.5)}
                            initial="hidden"
                            whileInView={"show"}
                            className='mb-8 max-w-lg mx-auto lg:mx-0'
                        >
                            Hello! I'm Abdelrady, a full-stack developer based in Egypt.
                        </motion.p>
                        <motion.p
                            variants={fadeIn("right", 0.6)}
                            initial="hidden"
                            whileInView={"show"}
                            className='mb-8 max-w-lg mx-auto lg:mx-0'
                        >
                            I love creating things using JavaScript in general, My goal is to always build products that provide pixel-perfect, performant experiences..
                        </motion.p>
                        <motion.p
                            variants={fadeIn("right", 0.7)}
                            initial="hidden"
                            whileInView={"show"}
                            className='mb-8 max-w-lg mx-auto lg:mx-0'
                        >
                            I graduated from AAST and worked as a Communication Engineer for 2 years. After that, I figured out that's not what I wanted to do in life, so I shifted my career to become a software engineer.
                        </motion.p>
                        <motion.p
                            variants={fadeIn("right", 0.7)}
                            initial="hidden"
                            whileInView={"show"}
                            className='mb-8 max-w-lg mx-auto lg:mx-0'
                        >
                            Here are a few technologies I've been working with recently:
                            JavaScript (ES6+),
                            TypeScript,
                            HTML & (S)CSS,
                            Tailwind,
                            React,
                            Angular,
                            Next,
                            Bootstrap,
                            Node.js,
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
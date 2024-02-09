import React from 'react'
import { motion } from "framer-motion"
import { fadeIn } from '../variants'
const Project = () => {
    return (
        <section id='project' className='section h-screen lg:mt-0 mt-[100%]'>
            <div className='container mx-auto'>
                <div className='flex lg:flex-row flex-col gap-x-10'>
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex flex-1 flex-col gap-32 mb-10 lg:mb-0'
                    >
                        <div >
                            <h2 className='h2 leading-tight'>
                                My last <br /> works
                            </h2>
                            <p className='max-w-sm mb-16'>
                                This is websites that replicates the design of a famous E-commerce and Movies store that's fully responsive on all screen sizes.
                            </p>
                            <a href='https://github.com/Abdelrady-M'>
                                <button className='btn btn-sm'>See my project</button>
                            </a>
                        </div>
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl max-w-[400px]'>
                            <div className='group-hover bg-black/70 z-40 w-full absolute transition-all duration-300 cursor-pointer'>
                            </div>
                            <img src='./project5.png' className='group-hover:scale-125 transition-all duration-500 cursor-pointer h-full' />
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className='text-sky-800 font-primary lg:text-3xl text-2xl'>Web Developments</span>
                            </div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-500 z-50'>
                                <span className='text-black/80 font-primary lg:text-4xl text-2xl'>Easy Bank</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex flex-1 flex-col gap-y-9'
                    >
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl max-h-[400px] max-w-[400px]'>
                            <div className='group-hover bg-black/70 z-40 w-full absolute transition-all duration-300 cursor-pointer'>
                            </div>
                            <img src='./project1.png' className='group-hover:scale-125 transition-all duration-500 cursor-pointer h-full w-full' />
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className='text-sky-800 font-primary lg:text-3xl text-2xl'>Web Developments</span>
                            </div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-500 z-50'>
                                <span className='text-black/80 font-primary lg:text-4xl text-2xl'>Shopify Clone</span>
                            </div>
                        </div>
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl max-h-[400px] max-w-[400px]'>
                            <div className='group-hover bg-black/70 z-40 w-full absolute transition-all duration-300 cursor-pointer'>
                            </div>
                            <img src='./project3.png' className='group-hover:scale-125 transition-all duration-500 cursor-pointer h-full w-full' />
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className='text-sky-800 font-primary lg:text-3xl text-2xl'>Web Developments</span>
                            </div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-500 z-50'>
                                <span className='text-black/80 font-primary lg:text-4xl text-2xl'>Netflix Clone</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Project
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from "framer-motion"
import { fadeIn } from '../variants'

const services = [
    {
        id: 1,
        name: 'UI/UX Design',
        desc: 'Figma, Photoshop, and other applications',
        link: ''
    },
    {
        id: 2,
        name: 'Full Stack Development',
        desc: 'Reac.js, Node.Js, Angular, javascript, and other technologies',
        link: ''
    },
    {
        id: 3,
        name: 'Web Technologies',
        desc: 'HTML5, CSS, and other technologies',
        link: ''
    },
    {
        id: 4,
        name: 'Responsive Design',
        desc: 'tailwind, bootstrap, and other frameworks',
        link: ''
    }
]

const Services = () => {
    return (
        <section id='services' className='section h-screen mt-24'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row'>
                    <motion.div
                        variants={fadeIn("right", 0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex-1 lg:bg-service lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 max-w-[900px]'
                    >
                        <h2 className='h2 text-sky-500 mb-6'>Who am I?</h2>
                        <h3 className='h3 max-x-[455px] mb-16'>
                            {" "}
                            I'm Full-Stack Developer with over 2 year of experience
                        </h3>
                        <a href='https://github.com/Abdelrady-M'>
                            <button className='btn btn-sm'>See my projects</button>
                        </a>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", 0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex max-w-[500px]'
                    >
                        <div>
                            {
                                services.map((item) => {
                                    const { id, name, desc, link } = item
                                    return (
                                        <div key={id} className='flex border-b border-white/20 h-[130px] mb-4 gap-x-4'>
                                            <div className='max-w-[456px]'>
                                                <h4 className='text-xl tracking-wide font-primary font-semibold'>
                                                    {name}
                                                </h4>

                                                <p className='font-secondary leading-tight mt-2 text-gray-300'>
                                                    {desc}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

    )
}

export default Services
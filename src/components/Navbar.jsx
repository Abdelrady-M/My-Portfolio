import React from 'react'
import { IoHomeOutline } from 'react-icons/io5'
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from 'react-icons/md'
import { BiCommentDetail } from 'react-icons/bi'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { Link } from 'react-scroll'
const Navbar = () => {
    return (
        <nav className='fixed lg:flex hidden items-center justify-start left-4 top-8 h-full overflow-hidden z-50'>
            <div className='container mx-auto'>
                <div className='max-h-[500px] h-full bg-black/20 w-[70px] backdrop:blur-2xl 
                flex flex-col justify-between gap-y-9 rounded-xl py-8 items-center'>
                    <Link activeClass='active'
                        smooth={true}
                        spy={true}
                        to="home"
                        className='flex items-center justify-center w-[60px] h=[60px]'
                    >
                        <IoHomeOutline className='cursor-pointer text-xl' />
                    </Link>
                    <Link activeClass='active'
                        smooth={true}
                        spy={true}
                        to="about"
                        className='flex items-center justify-center w-[60px] h=[60px]'
                    >
                        <FaRegUser className='cursor-pointer text-xl' />
                    </Link>
                    <Link activeClass='active'
                        smooth={true}
                        spy={true}
                        to="services"
                        className='flex items-center justify-center w-[60px] h=[60px]'
                    >
                        <MdOutlineMail className='cursor-pointer text-xl' />
                    </Link>
                    <Link activeClass='active'
                        smooth={true}
                        spy={true}
                        to="project"
                        className='flex items-center justify-center w-[60px] h=[60px]'
                    >
                        <BiCommentDetail className='cursor-pointer text-xl' />
                    </Link>
                    <Link activeClass='active'
                        smooth={true}
                        spy={true}
                        to="contact"
                        className='flex items-center justify-center w-[60px] h=[60px]'
                    >
                        <MdOutlineWorkOutline className='cursor-pointer' />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
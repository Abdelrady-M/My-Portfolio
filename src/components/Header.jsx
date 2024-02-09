import React from 'react'

const Header = () => {
    return (
        <div className='py-6'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    <a href='#'>
                        <img src='./logo.png' className='lg:w-{150px} w-[70px] h-[70px]' />
                    </a>
                    <button className='btn btn-sm'>Contact me</button>

                </div>
            </div>
        </div>
    )
}

export default Header
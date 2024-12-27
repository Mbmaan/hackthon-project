"use client";
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className='bg-blue-600 text-white h-auto sm:h-12 md:h-16 lg:h-16 py-2 px-3 flex flex-col sm:flex-row justify-between items-center'>
                <div className='flex items-center space-x-2 mb-2 sm:mb-0'>
                    <img 
                    src='/m logo.jpg'
                    alt='logo'
                    className='w-10 h-10 rounded-full'
                    />
                    <h1 className='text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold'>
                        <a href="#!">COMFY's</a>
                    </h1>
                    </div>
                <div className='w-full sm:w-auto mb-4 sm:mb-0'>
                    <ul className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-5'>
                        <li><Link href="/" className='hover:text-red-600'>Home</Link></li>
                        <li><Link href="/aboutus" className='hover:text-red-600'>About Us</Link></li>
                        <li><Link href="/contactus" className='hover:text-red-600'>Contact Us</Link></li>
                        
                    </ul>
                </div>
                <div className='w-full sm:w-auto'>
                    <ul className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3'>
                    <button><Link href="/viewall" className='hover:text-red-600 bg-white text-black rounded font-bold space-x-10'>SHOP HERE</Link></button>   
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar
import Link from 'next/link';
import React from 'react'
import { RiMoonLine } from "react-icons/ri";

export default function Header() {
  return (
    <div className='fixed top-8 left-1/2 -translate-x-1/2 z-50 flex bg-white/10 backdrop-blur-lg rounded-full px-8 py-4 justify-between items-center gap-12 text-white max-w-6xl w-[90%]'>
        <p className='text-xl font-semibold'>Alfa</p>
        <ul className='flex gap-8 text-sm'>
            <Link href="/" className='hover:text-black hover:bg-white hover:p-1 hover:rounded-full'>Home</Link>
            <Link href="/about" className='hover:text-black hover:bg-white hover:p-1 hover:rounded-full'>About Us</Link>
            <Link href="/properties" className='hover:text-black hover:bg-white hover:p-1 hover:rounded-full'>Properties</Link>
            <Link href="/services" className='hover:text-black hover:bg-white hover:p-1 hover:rounded-full'>Services</Link>
            <Link href="/contact" className='hover:text-black hover:bg-white hover:p-1 hover:rounded-full'>Contact</Link>
        </ul>
        <button className='hover:text-gray-300 transition'><RiMoonLine /></button>
    </div>
  )
}

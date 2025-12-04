import Link from 'next/link';
import React from 'react'
import { RiMoonLine } from "react-icons/ri";

export default function Header() {
  return (
    <div className='fixed top-0 left-0 z-50 flex bg-white/10 backdrop-blur-lg rounded-full m-8 justify-between p-4 items-center gap-20 text-white w-[90%]'>
        <p>Alfa</p>
        <ul className='flex gap-20'>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/properties">Properties</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
        </ul>
        <button className=''><RiMoonLine /></button>
    </div>
  )
}

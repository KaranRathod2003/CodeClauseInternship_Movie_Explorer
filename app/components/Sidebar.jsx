'use client'

import Link from "next/link";
import { useState } from "react"

const navItems = [
    {href: '/', title: 'Home'},
    {href: '/now-playing', title: 'Latest Movies'},
    {href: '/popular', title: 'Popular Movies'},
    {href: '/top-rated', title: 'Top Rated Movies'},
    {href: '/upcoming', title: 'Upcoming Movies'},

]

export default function Sidebar(){
    const [isOpen, setIsOpen] = useState(false);

    function closeSidebar(){
        setIsOpen(false)
    }

    return (
        <>
            <button 
            className="fixed top-0 left-0 z-40 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl px-3 py-2 text-white hover:from-pink-500 hover:to-yellow-500  m-2 "
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'X' : 'Menu'}
            </button>
            {isOpen && (
            <div className="fixed top-0 left-0 h-full z-30 w-54 bg-blue-300 p-5 transition-all duration-300">
                <nav className="mt-8 flex flex-col">
                {
                    navItems.map((item) => (
                    <Link 
                        key={item.href} 
                        onClick={closeSidebar} 
                        href={item.href} 
                        className="bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500 p-2 rounded transition-colors duration-200">
                        {item.title}
                    </Link>
                    ))
                }
                </nav>
            </div>
        )}
      </>
    )
}
'use client'

import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const menuItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/About',
  },
  {
    name: 'Services',
    href: '/Services',
  },
  {
    name: 'Gallery',
    href: '/Gallery',
  }
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)


  return (
    <div className="w-full bg-white sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>

          <a href='/'><img src="https://png.pngtree.com/png-vector/20191117/ourmid/pngtree-club-suit-playing-card-icon-cartoon-style-png-image_1990917.jpg" className=' cursor-pointer w-10' /></a>
          </span>
          <span className="cursor-pointer font-bold text-2xl text-black"><a href='/'>KILWAR</a></span>
        </div>
        <div className="hidden lg:block">
           <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm font-semibold text-gray-800  hover:bg-indigo-500 hover:text-white px-4 py-2 rounded-md duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
            {/* <Link to='/'>Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/Services'>Services</Link>
            <Link to='/Gallery'>Gallery</Link> */}
          </ul> 
          

        </div>
        <div className="hidden lg:block">
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <a href='/Contact' >Contact Us</a>
            
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
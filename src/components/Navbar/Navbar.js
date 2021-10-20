import React, { useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { useHistory } from "react-router-dom";
import logo from '../../assets/logo.png';
import { useOrder } from '../../contexts/OrderProvider';
import useAuth from '../../hooks/useAuth';


/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const Navbar = () => {
    const [changeHeader, setChangeHeader] = useState(false)
    const history = useHistory();
    const { user, signOutUser } = useAuth();
    const { order } = useOrder();

    //header change function 
    const onChangeHeader = () => {
        if (window.scrollY >= 50) {
            setChangeHeader(true)
        } else {
            setChangeHeader(false)
        }
    }
// Navbar dynamice
const navigation = [
    { name: 'Home', href:'/home' },
    { name: 'About',href:'/about' },
    { name: 'Service', href:'/service' },
    { name: 'Testimonial', href:'/testimonial' },
    { name: 'Contact', href:'/contact' },
  ]
    //change header by scrolling
    window.addEventListener('scroll', onChangeHeader)
    return (
      <>
        <header className={changeHeader ? "bg-white fixed z-50 top-0 left-0 w-full shadow-md transition duration-500" : "bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500"}>
         
              <nav className="flex items-center max-w-screen-xl mx-auto px-6 py-3">
                
                 {/* right  */}
                 {user.displayName ? (
                    <>
                        <div className="flex items-center justify-end space-x-4">
                            <div className="relative flex cursor-pointer" onClick={() => history.push('/orders')}>
                                <span className="bg-primary w-6 h-6 rounded-full flex items-center justify-center text-white poppins absolute -right-2 -top-2">{order.length}</span>
                                <BsCart2 className="cursor-pointer w-6 h-6 text-gray-700" />
                            </div>
                            <img src={user.photoURL} alt={user.displayName} className="w-10 h-10 rounded-full" />
                            <p className="text-gray-700 poppins hidden md:block lg:block">{user.displayName}</p>
                            <FiLogOut className="cursor-pointer w-6 h-6 text-gray-700" onClick={signOutUser} />
                        </div>
                        
           
                    </>
                ) : (
                    <>
                        <div className="flex items-center justify-end space-x-6">
                            <button className="poppins" onClick={() => history.push('/signin')}>Sign In</button>
                            <button className=" bg-primary px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105" onClick={() => history.push('/signup')}>Sign Up</button>
                        </div>
                    </>
                )}

                {/* left  */}
                <div className="flex flex-grow items-center justify-center ">
                    <img className="w-36 cursor-pointer" src={logo} alt="logo" onClick={() => history.push('/')} />
                </div>


                {/* ======================================== */}
                <Popover>
                <svg
                    className="hidden lg:block absolute right-5 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                    fill="currentColor"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <polygon points="50,0 100,0 50,100 0,100" />
                </svg>
        
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-center md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

            </Popover.Panel>
            </Transition>


                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                 {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                      {item.name}
                    </a>
                  ))}
                  
                </div>

                </Popover>

  
                
               

            </nav>  

        </header>
        </>
    )
}

export default Navbar

import React from 'react';
import Image from "next/image";

const NavBar : React.FC = () => {
    return (
        <>
            <nav className="max-w-screen-xl mx-auto mt-6">
                <div className=" flex flex-wrap items-center justify-between  p-4  border-gray-200 rounded-lg dark:bg-gray-900 relative">
                    <div className="bg-gradient-overlay"></div>
                    <Image
                        className="image-overlay"
                        src='/bg1.png'
                        width='100'
                        height='100'
                        priority
                        alt='read more'
                    />
                    <a href="https://flowbite.com/" className="relative z-10 flex items-center">
                        <span
                            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">@devmamunur</span>
                    </a>
                    <div className="relative z-10 flex md:order-2">
                        <button type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get
                            started
                        </button>
                        <button data-collapse-toggle="navbar-cta" type="button"
                                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>

                        </button>
                    </div>
                    <div className="relative z-10 items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  bg-transparent rounded-lg  md:flex-row md:space-x-8 md:mt-0 ">
                            <li>
                                <a href="#"
                                   className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-sky-500"
                                   aria-current="page">
                                    Home</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-sky-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    About</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-sky-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    Opensource</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-sky-500 dark:text-white dark:hover:bg-sky-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
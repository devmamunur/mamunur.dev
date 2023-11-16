import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const DashboardNavBar: React.FC = () => {
  return (
    <>
      <nav className="max-w-screen-xl mx-auto mt-6">
        <div className=" flex flex-wrap items-center justify-between  p-4  border-gray-200 rounded-lg dark:bg-slate-800 relative">
          <Link href={'/'} className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              @devmamunur
            </span>
          </Link>
          <div className="flex md:order-2">
            <Link href={'https://github.com/devmamunur/mamunur.dev'}>
              <button
                type="button"
                className="text-gray-900 bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2 mr-2 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                <FontAwesomeIcon icon={faGithub} /> Code
              </button>
            </Link>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2  dark:text-white-400 dark:hover:bg-red-700 dark:focus:ring-red-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  bg-transparent rounded-lg  md:flex-row md:space-x-8 md:mt-0 ">
              <li>
                <Link
                  href={'/dashboard/home'}
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-sky-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={'/dashboard/opensource/projects'}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-sky-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Opensource Projects
                </Link>
              </li>
              <li>
                <Link
                  href={'/dashboard/opensource/contributions'}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-sky-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Opensource Contributions
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-sky-500 dark:text-white dark:hover:bg-sky-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Guest note
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DashboardNavBar;

import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faGit, faGithub, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";
const HeroArea: React.FC = () => {
    return (
        <>
            <div className="">
                <div className="mx-auto max-w-screen-xl">
                    <div className="md:flex items-center w-full bg-white py-6 px-6 rounded-2xl mt-6 dark:bg-gray-800">
                        <img className="h-72 w-72 rounded-2xl  mx-auto md:mx-0 md:mr-10"
                             src="https://avatars.githubusercontent.com/u/49125977?v=4" alt="Bonnie image"/>
                        <div className="text-center md:text-left">
                            <h1 className="mb-1 text-5xl font-bold text-gray-900 mb-3 uppercase dark:text-white">Mamunur Rashid</h1>
                            <h6 className="text-2xl mb-3 text-gray-100 dark:text-gray-200">Software Developer</h6>
                            <p className="text-1xl text-gray-100 dark:text-gray-200">
                                Full Stack Web Developer | JavaScript, TypeScript, Node.js | React.js, Vue.js | Open Source Enthusiast | 4 years of industry experience.
                            </p>
                            <div className="flex mt-4 space-x-3 md:mt-4">
                                <a href="#"
                                   className="inline-flex items-center justify-center h-10 w-10  text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-full hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                                <a href="#"
                                   className="inline-flex items-center justify-center h-10 w-10  text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-full hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="#"
                                   className="inline-flex items-center justify-center h-10 w-10  text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-full hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </div>
                            <div className="flex mt-4 space-x-3 md:mt-4">
                                <a href=""
                                   className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroArea;
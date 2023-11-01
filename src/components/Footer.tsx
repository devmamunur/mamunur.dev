import React from 'react';
import Image from "next/image";

const Footer: React.FC = () => {
    return (
        <>
            <div
                className="mx-auto max-w-screen-xl grid grid-cols-3 gap-6 flex my-6 items-center justify-center text-center">
                <footer className="col-span-3 bg-white rounded-lg shadow p-5  dark:bg-gray-900 relative">
                    <div className="bg-gradient-overlay"></div>
                    <Image
                        className="image-overlay"
                        src='/bg1.png'
                        width='100'
                        height='100'
                        priority
                        alt='read more'
                    />
                    <span className="relative z-10 text-md text-gray-500 sm:text-center dark:text-gray-400">© 2023 <span
                        className="text-blue-500">@devmamunur</span>. All Rights Reserved.
                    </span>

                </footer>
            </div>
        </>
    );
};

export default Footer;
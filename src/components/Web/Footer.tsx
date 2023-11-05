import React from 'react';
import Image from "next/image";

const Footer: React.FC = () => {
    return (
        <>
            <div
                className="mx-auto max-w-screen-xl grid grid-cols-3 gap-6 flex my-6 items-center justify-center text-center">
                <footer className="col-span-3 p-5  bg-transparent relative">
                    <span className=" text-md text-gray-500 sm:text-center dark:text-gray-400">© 2023 <span
                        className="text-blue-500">@devmamunur</span>. All Rights Reserved.
                    </span>
                </footer>
            </div>
        </>
    );
};

export default Footer;
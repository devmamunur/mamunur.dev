import React from 'react';

const Footer: React.FC = () => {
    return (
        <>
        <div className="mx-auto max-w-screen-xl grid grid-cols-3 gap-6 flex my-6 items-center justify-center text-center">
            <footer className="col-span-3 bg-white rounded-lg shadow p-5  dark:bg-gray-800">
                      <span className="text-md text-gray-500 sm:text-center dark:text-gray-400">© 2023 <span className="text-blue-500">@devmamunur</span>. All Rights Reserved.
                    </span>

            </footer>
        </div>
        </>
    );
};

export default Footer;
import React from 'react';
const AboutCard :React.FC = () => {
    return (
        <>
            <div className="bg-white py-6 px-6 rounded-2xl mt-6 dark:bg-gray-800">
                <div className="text-center md:text-left">
                    <h1 className="mb-1 text-5xl font-bold text-gray-900 mb-3 uppercase dark:text-white">Mamunur Rashid</h1>
                    <h6 className="text-2xl mb-3 text-gray-100 dark:text-gray-200">Software Developer</h6>
                </div>
            </div>
        </>
    );
};

export default AboutCard;
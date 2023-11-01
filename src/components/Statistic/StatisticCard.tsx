import React from 'react';
import Image from "next/image";

const StatisticCard: React.FC = () => {
    return (
        <>
            <div className="col-span-2 section-card-wrapper">
                <div className="bg-gradient-overlay"></div>
                <Image
                    className="image-overlay"
                    src='/bg1.png'
                    width='100'
                    height='100'
                    priority
                    alt='read more'
                />
                <div className="section-card">
                    <ul className="flex justify-between align-middle text-center my-8">
                        <li className="">
                            <span>
                                <h3 className="dark:text-gray-200 text-3xl mb-3">1500 +</h3>
                                <p className="dark:text-gray-400 text-1xl">Product Sell</p>
                            </span>
                        </li>
                        <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
                            <span>
                                <h3 className="dark:text-gray-200 text-3xl mb-3">100 +</h3>
                                <p className="dark:text-gray-400 text-1xl">Product Made</p>
                            </span>
                        </li>
                        <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
                            <span>
                                <h3 className="dark:text-gray-200 text-3xl mb-3">60 +</h3>
                                <p className="dark:text-gray-400 text-1xl">5-Star Rating</p>
                            </span>
                        </li>
                        <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
                            <span>
                                <h3 className="dark:text-gray-200 text-3xl mb-3">4y +</h3>
                                <p className="dark:text-gray-400 text-1xl">Experience</p>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default StatisticCard;
import React from 'react';
import Image from "next/image";

const StatisticCard: React.FC = () => {
    const statistics = [
        {
            number : '1500 +',
            label : 'Product Sell',
        },
        {
            number : '100 +',
            label : 'Product Made',
        },
        {
            number : '80 +',
            label : '5-Star Rating',
        },
        {
            number : '4y +',
            label : 'Experience',
        }
    ]
    return (
        <>
            <div className="col-span-2 section-card-wrapper">
                <div className="section-card h-full w-full flex items-center">
                    <ul className="flex justify-between w-full align-middle text-center">
                        {
                            statistics.map((item, i) =>
                                <li key={i}>
                                    <span>
                                        <h3 className="dark:text-gray-200 text-3xl mb-3">{item.number}</h3>
                                        <p className="dark:text-gray-400 text-1xl">{item.label}</p>
                                    </span>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </>
    );
};

export default StatisticCard;
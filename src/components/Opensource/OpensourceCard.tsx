import React from 'react';
import Image from "next/image";
import Link from "next/link";

const OpensourceCard : React.FC = () => {
    return (
        <>
            <div className="col-span-2 mt-6 section-card-wrapper">
                <div className="bg-gradient-overlay"></div>
                <Image
                    className="image-overlay"
                    src='/bg1.png'
                    width='100'
                    height='100'
                    priority
                    alt='read more'
                />
                <div className="group section-card">
                    <div className="flex justify-between">
                        <div>
                            <h6 className="section-card-sub-title">Projects I Made</h6>
                            <h6 className="mb-7 section-card-title">Opensource Projects</h6>
                        </div>
                        <Link href="#" className="opacity-50 group-hover:opacity-100 transition-opacity duration-200 ease-linear">
                            <Image src='/icon.svg' width='40' height='40' priority alt='read more'/>
                        </Link>
                    </div>
                    <h6 className="text-1xl font-bold text-sky-500">PMSGO, VueBusiness, Advanced-JavaScript-Guide, mamunur.dev</h6>
                </div>
            </div>
        </>
    );
};

export default OpensourceCard;
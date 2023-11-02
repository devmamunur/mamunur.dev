import React from 'react';
import Image from "next/image";
import Link from "next/link";

const OpensourceCard : React.FC = () => {
    return (
        <>
            <Link href={`/opensource-projects`} className="col-span-2 mt-6 section-card-wrapper">
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
                    <h6 className="text-1xl font-bold text-sky-500">PMSGO, Advanced-JavaScript-Guide, mamunur.dev, ...</h6>
                </div>
            </Link>
        </>
    );
};

export default OpensourceCard;
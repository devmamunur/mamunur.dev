'use client'
import React, {useEffect, useState} from 'react';
import AboutCard from "@/components/About/AboutCard";
import OpensourceCard from "@/components/Opensource/OpensourceCard";
import ContributeCard from "@/components/Opensource/ContributeCard";
import ExperienceCard from "@/components/Experience/ExperienceCard";
import TestimonialCard from "@/components/Testimonial/TestimonialCard";
import StatisticCard from "@/components/Statistic/StatisticCard";
import BlogCard from "@/components/Blog/BlogCard";
import ContactCard from "@/components/Contact/ContactCard";
import PremiumProduct from "@/components/Product/PremiumProduct";
import GuestNote from "@/components/Guest/GuestNote";

const HomeSections : React.FC = () => {
    return (
        <>
            <div className="mx-auto max-w-screen-xl grid grid-cols-3 gap-6">
                <AboutCard/>
                <OpensourceCard/>
                <ContributeCard/>
                <ExperienceCard/>
                <PremiumProduct/>
                <StatisticCard/>
                <TestimonialCard/>
                <BlogCard/>
                <GuestNote/>
                <ContactCard/>
            </div>
        </>
    );
};

export default HomeSections;
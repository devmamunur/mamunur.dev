import React from 'react';
import AboutCard from "@/components/About/AboutCard";
import OpensourceCard from "@/components/Opensource/OpensourceCard";
import ContributeCard from "@/components/Opensource/ContributeCard";
import ExperienceCard from "@/components/Experience/ExperienceCard";
import TestimonialCard from "@/components/Testimonial/TestimonialCard";
import StatisticCard from "@/components/Statistic/StatisticCard";
import BlogCard from "@/components/Blog/BlogCard";
import ContactCard from "@/components/Contact/ContactCard";

const HomeSections : React.FC = () => {
    return (
        <>
            <div className="mx-auto max-w-screen-xl grid grid-cols-3 gap-6">
                <AboutCard/>
                <OpensourceCard/>
                <ContributeCard/>
                <ExperienceCard/>
                <TestimonialCard/>
                <StatisticCard/>
                <BlogCard/>
                <ContactCard/>
            </div>
        </>
    );
};

export default HomeSections;
'use client';
import React, { useEffect, useState } from 'react';
import AboutCard from '@/components/Web/About/AboutCard';
import OpensourceCard from '@/components/Web/Opensource/OpensourceCard';
import ContributeCard from '@/components/Web/Opensource/ContributeCard';
import ExperienceCard from '@/components/Web/Experience/ExperienceCard';
import TestimonialCard from '@/components/Web/Testimonial/TestimonialCard';
import StatisticCard from '@/components/Web/Statistic/StatisticCard';
import BlogCard from '@/components/Web/Blog/BlogCard';
import ContactCard from '@/components/Web/Contact/ContactCard';
import PremiumProduct from '@/components/Web/Product/PremiumProduct';
import GuestNote from '@/components/Web/Guest/GuestNote';

const HomeSections: React.FC = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl grid grid-cols-3 gap-6">
        <AboutCard />
        <OpensourceCard />
        <ContributeCard />
        <ExperienceCard />
        <PremiumProduct />
        <StatisticCard />
        <TestimonialCard />
        <BlogCard />
        <GuestNote />
        <ContactCard />
      </div>
    </>
  );
};

export default HomeSections;

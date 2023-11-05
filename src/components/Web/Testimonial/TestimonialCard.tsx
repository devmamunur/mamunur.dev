import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TestimonialCard: React.FC = () => {
  return (
    <>
      <div className="col-span-2 section-card-wrapper">
        <div className="group section-card">
          <div className="flex justify-between">
            <div>
              <h6 className="section-card-sub-title">
                Want Clients Say About Me
              </h6>
              <h4 className="mb-7 section-card-title">Testimonial</h4>
            </div>
            <Link
              href="src/components/Web/Testimonial#"
              className="opacity-50 group-hover:opacity-100 transition-opacity duration-200 ease-linear"
            >
              <Image
                src="/icon.svg"
                width="40"
                height="40"
                priority
                alt="read more"
              />
            </Link>
          </div>
          <h6 className="text-1xl font-bold text-sky-500">Envato</h6>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;

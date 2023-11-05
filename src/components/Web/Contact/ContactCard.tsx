import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ContactCard: React.FC = () => {
  return (
    <>
      <div className="col-span-2 section-card-wrapper">
        <div className="group section-card">
          <div className="flex justify-between">
            <div>
              <h6 className="section-card-sub-title">Let Work Together</h6>
              <h4 className="mb-7 section-card-title">Contact Me</h4>
            </div>
            <Link
              href="src/components/Web/Contact#"
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
          <h6 className="text-1xl font-bold text-sky-500">@devmamunur</h6>
        </div>
      </div>
    </>
  );
};

export default ContactCard;

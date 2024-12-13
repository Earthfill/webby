'use client';

import { sections } from '@/data';
import { useState } from 'react';

export default function SecondSection() {
  const [activeSection, setActiveSection] = useState('Patients');

  return (
    <div className="audienceBg xl:h-[800px] bg-cover bg-no-repeat w-full xl:p-36 lg:p-28 p-10">
      <div className="font-semibold">
        We align incentives across the home-based care ecosystem.
      </div>
      <div className="lg:mt-5 mt-2 space-y-8 overflow-y-auto md:overflow-y-hidden md:h-full h-[175px] md:overscroll-none overscroll-auto">
        {sections.map(({ id, title, description, buttonText }) => (
          <div
            key={id}
            className={`border-l-2 pl-4 space-y-3 cursor-pointer transition-all ${
              activeSection === id
                ? 'border-l-[#00E1B7]'
                : 'opacity-30'
            }`}
            onClick={() => setActiveSection(id)}
          >
            <div className="text-6xl">{title}</div>
            <div>{description}</div>
            {activeSection === id && (
              <button className='button'>
                {buttonText}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

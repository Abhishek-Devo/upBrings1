'use client';
import React from 'react';
import Navbar from '@/components/Navbar'


const AboutUs = () => {
  return (
    <>
    <Navbar/>
      <div className="bg-white text-black min-h-screen pt-16"> {/* pt-16 to offset the fixed navbar height */}
        
        <main className="container mx-auto px-4 py-8">
          <img src="/images/aboutUs/Child-Support.jpg" alt="Children" className="w-full h-64 object-cover rounded-lg shadow-lg mb-8" />
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">UpBrings Foundation</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-green-400 mb-8">A Non-Profit Organization</h2>
          <p className="text-xl mb-12 leading-relaxed">
            UpBrings Foundation is one of the eminent non-profit organisations engaged in providing a better future to underprivileged children. We believe that education is the basis of development, thus we provide education to children to enhance their future as well as the country's. We have been able to arrange basic necessities for children and work as a team for their betterment. UpBrings is strongly aligned with the 'Right to Education Act' or the 'Samagra Shiksha,' committed to improving access to primary education for children, especially underprivileged ones. Our goal is to improve access and quality of education, based on the belief <strong>"TO PROVIDE EVERY CHILD A TOOL TO WRITE THEIR OWN DESTINY".</strong>
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
            <img src="/images/aboutUs/CLIPART.png" alt="Education Clipart" className="w-80 mb-8 md:mb-0 md:mr-8" />
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-400">Education is the key to unlock the golden door of opportunities</h2>
              <ul className="text-lg space-y-4">
                <li>We focus on not just teaching books but more importantly life values.</li>
                <li>Provide high quality relevant education.</li>
                <li>Encourage and enable each child to become an independent thinker and self-learner.</li>
                <li>Make learning joyful.</li>
                <li>Help transform the community.</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AboutUs;
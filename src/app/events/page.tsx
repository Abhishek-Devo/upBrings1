// Next.js 14 Client Component
'use client'
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import Image from 'next/image';


const NGOEvent = () => {
  const [modal, setModal] = useState<string | null>(null);

  const closeModal = () => setModal(null);

  return (
    <>
    <Navbar/>
    
     <br/>

      <div className="relative bg-cover bg-center text-white py-20 px-5 mt-10 rounded-lg text-center">
        <div className="absolute inset-0 bg-black opacity-50 flex flex-col justify-center items-center p-5">
          <h1 className="text-6xl font-bold mb-2">Our Upcoming Event</h1>
          <p className="text-2xl mb-5">Join us in making a difference!</p>
        </div>
      </div>

      <div className="container mx-auto py-10">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/3 p-5">
            <div className="bg-gray-200 p-5 rounded mb-5">
              <h3 className="text-blue-500 text-xl font-bold">Free Education Camp</h3>
            </div>
            <div className="border border-gray-300 p-5 rounded-md">
              <Image src="images/eventspic/preview.jpg" alt="Free Education Camp" className="w-full h-auto mb-5" />
              <p className="text-gray-800 font-bold">About the Event</p>
              <p className="text-gray-800">We are excited to announce a Free Education Camp for underprivileged children, aimed at providing quality educational support and opportunities.</p>
              <button className="btn btn-primary bg-blue-500 rounded" onClick={() => setModal('event1')}>More Details</button>
            </div>
          </div>
          <div className="w-full sm:w-1/3 p-5">
            <div className="bg-gray-200 p-5 rounded mb-5">
              <h3 className="text-blue-500 text-xl font-bold">Health Awareness Camp</h3>
            </div>
            <div className="border border-gray-300 p-5 rounded-md">
              <Image src="images/eventspic/preview1.jpg" alt="Health Awareness Camp" className="w-full h-auto mb-5" />
              <p className="text-gray-800 font-bold">About the Event</p>
              <p className="text-gray-800">The Health Awareness Camp is aimed at educating children about the importance of health and wellness. It will include sessions on nutrition, exercise, mental health, and preventive healthcare.</p>
              <button className="btn btn-primary bg-blue-500 rounded " onClick={() => setModal('event2')}>More Details</button>
            </div>
          </div>
          <div className="w-full sm:w-1/3 p-5">
            <div className="bg-gray-200 p-5 rounded mb-5">
              <h3 className="text-blue-500 text-xl font-bold">Food Distribution</h3>
            </div>
            <div className="border border-gray-300 p-5 rounded-md">
              <Image src="images/eventspic/Untitled design.png" alt="Food Distribution" className="w-full h-auto mb-5" />
              <p className="text-gray-800 font-bold">About the Event</p>
              <p className="text-gray-800">The Food Distribution event is dedicated to providing essential food supplies to families in need. This initiative aims to combat hunger and ensure that everyone has access to nutritious food.</p>
              <button className="btn btn-primary bg-blue-500 rounded" onClick={() => setModal('event3')}>More Details</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue text-center py-10 ">
        <p>Contact us at: upBrings@gmail.com</p>
      </div>

      {/* Event 1 Modal */}
      {modal === 'event1' && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 overflow-y-auto max-h-screen">
            <div className="modal-header">
              <h5 className="text-xl font-bold">Free Education Camp Details</h5>
              <button type="button" className="text-black" onClick={closeModal}>&times;</button>
            </div>
            <div className="modal-body">
              <p className="font-bold">About the Event</p>
              <p>We are excited to announce a Free Education Camp for underprivileged children, aimed at providing quality educational support and opportunities. The camp will be held every Saturday and Sunday, offering a consistent schedule to ensure that children can benefit from regular learning sessions.</p>
              <p className="font-bold">Purpose</p>
              <p>The primary purpose of this camp is to bridge the educational gap for children who do not have access to adequate learning resources. We believe that every child deserves the chance to learn, grow, and succeed, regardless of their socio-economic background. Our goal is to empower these children with knowledge and skills that will help them achieve their full potential.</p>
              <p className="font-bold">Dates and Venue</p>
              <p>The camp will take place every Saturday and Sunday, creating a reliable routine for the participants. Each session will be carefully designed to provide engaging and educational activities that cater to the needs of the children. The venue for the camp will be centrally located to ensure easy access for all attendees.</p>
              <p className="font-bold">Registration</p>
              <p>Registration for the camp can be done on the spot. This process is solely for keeping an accurate count of the children attending, ensuring that we have sufficient resources and staff to provide a high-quality educational experience for everyone. There are no fees or prerequisites for registration, as our aim is to make education accessible to all children who need it.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary bg-blue-500 rounded" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Event 2 Modal */}
      {modal === 'event2' && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 overflow-y-auto max-h-screen">
            <div className="modal-header">
              <h5 className="text-xl font-bold">Health Awareness Camp Details</h5>
              <button type="button" className="text-black" onClick={closeModal}>&times;</button>
            </div>
            <div className="modal-body">
              <p className="font-bold">About the Event</p>
              <p>The Health Awareness Camp is aimed at educating the community about the importance of health and wellness. It will include sessions on nutrition, exercise, mental health, and preventive healthcare.</p>
              <p className="font-bold">Purpose</p>
              <p>The primary purpose of this camp is to raise awareness about healthy lifestyle choices and provide valuable information on maintaining overall well-being. We aim to empower individuals with knowledge to take proactive steps in managing their health.</p>
              <p className="font-bold">Dates and Venue</p>
              <p>The camp will be held on the last weekend of every month, ensuring consistent engagement with the community. The venue will be the Community Health Center, located in the city center for easy accessibility.</p>
              <p className="font-bold">How to Participate</p>
              <p>Participation is open to all community members. Registration can be done on-site at the event venue. There are no fees or prerequisites for participation, as we aim to make health education accessible to everyone.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary bg-blue-500 rounded" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Event 3 Modal */}
      {modal === 'event3' && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 overflow-y-auto max-h-screen">
            <div className="modal-header">
              <h5 className="text-xl font-bold">Food Distribution Event Details</h5>
              <button type="button" className="text-black" onClick={closeModal}>&times;</button>
            </div>
            <div className="modal-body">
              <p className="font-bold">About the Event</p>
              <p>The Food Distribution event is dedicated to providing essential food supplies to families in need. This initiative aims to combat hunger and ensure that everyone has access to nutritious food.</p>
              <p className="font-bold">Purpose</p>
              <p>The primary purpose of this event is to support individuals and families who are facing food insecurity. We believe that access to nutritious food is a fundamental right, and our goal is to alleviate hunger in our community.</p>
              <p className="font-bold">Dates and Venue</p>
              <p>The event will be held every first Saturday of the month. The venue will be the Community Center, centrally located to ensure easy access for all attendees.</p>
              <p className="font-bold">How to Participate</p>
              <p>Participation is open to all community members. Registration can be done on-site at the event venue. There are no fees or prerequisites for participation, as we aim to make food distribution accessible to everyone in need.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary bg-blue-500 rounded" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NGOEvent;

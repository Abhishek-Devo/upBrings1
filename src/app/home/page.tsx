'use client'; // Ensures this component is client-side

import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useState } from 'react';
import Modal from '@/components/Modal';
import Image from 'next/image';

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleReadMore = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Navbar/>
            <br /><br/>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-10 px-4">
                {/* Left Section */}
                <div className="left w-full md:w-1/2 mb-8 md:mb-0">
                    <div className="heading mb-4">
                        <h1 className="text-4xl font-bold text-gray-800">Welcome To UpBrings</h1>
                        
                    </div>
                    <p className="text-gray-700 mb-8">
                        UpBrings Foundation is an educational NGO that has a vision, a dream to educate every unprivileged child in our country. It's a long journey, but we're determined to make a difference. We started on the streets and moved on to villages, and since then, we've never looked back. Running an educational NGO for underprivileged children has become our passion.
                        <br />
                        <br />
                        In the modern world, education is necessary to survive. The digital revolution has taken over the world, and everything has gone online. It becomes even more necessary to provide education to the future of this country. UpBrings Foundation is a force determined to bring about a permanent change.
                    </p>
                    <div className="flex gap-4">
                        <button 
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                            onClick={handleReadMore}
                        >
                            READ MORE
                        </button>
                        <button ><Link href='/contactUs' className='hover:font-serif'>Contact Us</Link></button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="right hidden md:block w-full md:w-1/2">
                    <Image src="/images/homeImg/pic4.jpg" alt="pic4" className="object-cover w-full h-full rounded-lg shadow-lg" width={500} height={300} />
                </div>
            </div>

            <section className="relative bg-cover bg-no-repeat bg-center bg-gradient-to-r from-sky-500 to-indigo-500">
                <div className="grid grid-cols-1 md:grid-cols-4 text-center pt-16 pb-8">
                    <div className="flex flex-col items-center text-black">
                        <h1 className="text-5xl font-medium">25</h1>
                        <hr className="w-1/2 my-4 border-yellow-500 border-2" />
                        <span className="text-lg">VOLUNTEERS</span>
                    </div>
                    <div className="flex flex-col items-center text-black">
                        <h1 className="text-5xl font-medium">52</h1>
                        <hr className="w-1/2 my-4 border-yellow-500 border-2" />
                        <span className="text-lg">TEACHERS</span>
                    </div>
                    <div className="flex flex-col items-center text-black">
                        <h1 className="text-5xl font-medium">4</h1>
                        <hr className="w-1/2 my-4 border-yellow-500 border-2" />
                        <span className="text-lg">SPORTS COACHES</span>
                    </div>
                    <div className="flex flex-col items-center text-black">
                        <h1 className="text-5xl font-medium">624</h1>
                        <hr className="w-1/2 my-4 border-yellow-500 border-2" />
                        <span className="text-lg">STUDENTS</span>
                    </div>
                </div>
            </section>

            {isModalOpen && (
                <Modal closeModal={closeModal}>
                    <h2 className="text-xl font-bold mb-4">Quality Education Provided by UpBrings</h2>
                    <ul className="list-disc list-inside">
                        <li>Access to modern educational resources and materials</li>
                        <li>Personalized learning plans for each student</li>
                        <li>Qualified and passionate teaching staff</li>
                        <li>Regular workshops and extra-curricular activities</li>
                        <li>Focus on digital literacy and online learning</li>
                        <li>Community engagement and support</li>
                    </ul>
                    <button 
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                        onClick={closeModal}
                    >
                        Close
                    </button>
                </Modal>
            )}
        </>
    );
}

'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

export default function Navbar() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Method for logout, executed when user clicks on Log out button
  const onLogOut = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/users/logout");
      console.log("Logout success");
      router.push('/login');
      toast.success("Logout Successful", { duration: 2000 });
    } catch (error: any) {
      console.log('Failed to Logout', error);
      toast.error(error.message, { duration: 2000 });
    } finally {
      setLoading(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-7 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image src='/images/aboutUs/logo.jpg' alt="Logo" width={40} height={40} />
          <span className="font-bold text-lg">UpBrings Foundation</span>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul className={`lg:flex lg:items-center lg:space-x-4 ${isOpen ? 'block' : 'hidden'} lg:block lg:ml-auto mt-4 lg:mt-0`}>
          <li><Link href="/home" className="hover:text-green-400 transition duration-300 text-lg">Home</Link></li>
          <li><Link href="/aboutUs" className="hover:text-green-400 transition duration-300 text-lg">About Us</Link></li>
          <li><Link href="/donate" className="hover:text-green-400 transition duration-300 text-lg">Donate</Link></li>
          <li><Link href="/events" className="hover:text-green-400 transition duration-300 text-lg">Events</Link></li>
          <li><Link href="/galleryPage" className="hover:text-green-400 transition duration-300 text-lg">Gallery</Link></li>
          <li><Link href="/contactUs" className="hover:text-green-400 transition duration-300 text-lg">Contact</Link></li>
          <li>
            <button onClick={onLogOut} className="bg-gray-500 text-white py-1 px-4 rounded hover:bg-red-600 transition duration-300">{loading ? "Logging Out" : "Log Out"}</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

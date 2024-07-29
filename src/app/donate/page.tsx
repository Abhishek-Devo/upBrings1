'use client'
import Navbar from "@/components/Navbar"
import Image from 'next/image';
export default function donate(){
  return(
    <>
    <Navbar/><br/>    
        <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex justify-center items-center p-6">
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full flex flex-col md:flex-row items-center">
                {/* Left Section */}
                <div className="text-left w-full md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Support Our Cause</h1>
                    <p className="text-gray-700 mb-6">
                        Your donation helps us provide quality education to underprivileged children.
                        By contributing, you are playing a part in creating a better future for them.
                        Every donation, big or small, makes a significant difference.
                    </p>
                    <p className="text-gray-700 mb-6">
                        Scan the QR code to donate using your phone. We appreciate your support and generosity!
                    </p>
                </div>
                
                {/* Right Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                
                    <Image
                        src="/images/donationQR.jpeg" // Replace with the actual path to your QR code image
                        alt="QR Code for Donations"
                        width={300}
                        height={300}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
    </>
  )
}
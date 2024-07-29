//this page will do axios request to me route.

'use client'
import axios from 'axios'
import Link from 'next/link'
import { toast, Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function ProfilePage() {
    const [data, setData] = useState('nothing');
    const router = useRouter()

    //function to handle logout button
    const logout = async () => {
        try {
            const response = await axios.get('/api/users/logout')
            console.log(response)
            router.push('/login')
            toast.success('Logged out successfully',{duration:1000})
          }
        catch (error: any) {
            toast.dismiss()            
            toast.error('logout failed ')
        }
    }
    //function to get user details
    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        console.log(res)
        console.log(res.data)
        setData(res.data.data.username)  
}
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <Toaster position="top-center" reverseOrder={false} />
                <h1> User Profile</h1>
                <hr />
                <h2 className="p-3 rounded bg-green-500">
                    {data === 'nothing' ? "Nothing" : 
                    <Link href={`/profile/${data}`}>{data}</Link>
                    }
                </h2>
                <button type='submit' onClick={logout} className="bg-blue-600 hover:bg-blue-800 font-bold px-2 py-4 rounded text-white mt-4">
                    LogOut
                </button>
                <button type='submit' onClick={getUserDetails} className="bg-green-600 hover:bg-blue-800 font-bold px-2 py-4 rounded text-white mt-4">
                    Get User Details
                </button>

            </div>
        </>
    )
}
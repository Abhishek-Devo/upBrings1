'use client'
import Link from "next/link"
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation"
import Axios from "axios"
import toast, { Toaster } from "react-hot-toast"

export default function LoginPage() {
    const router = useRouter()
    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const [buttonEnabled, setButtonEnabled] = useState(false)
    const [loading, setLoading] = useState(false)

    //this method will talk to database to confirm user login credentials
    const onLogin = async () => {
        try {
            setLoading(true)
            //axios is used to request to server
            const response = await Axios.post("/api/users/login", user);   
            router.push("/home")
            toast.success('Successfully LoggedIn',{duration:1000})            
            setLoading(false)
        } 
        catch (error: any) {
            console.log("Login Failed", error.message)
            toast.error(error.message, { duration: 2000 })
        }
         finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (user.email.length > 13 && user.password.length > 1 && user.email.includes('@gmail.com')) {
            setButtonEnabled(true)
        } else {
            setButtonEnabled(false)
        }
    }, [user])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black text-white">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="w-full max-w-md p-8 bg-gray-800 shadow-md rounded-lg relative">
                
                <h1 className="text-3xl  mb-6 text-center font-bold">{loading ? "Processing..." : "Log In |     UpBrings"}</h1>
                <hr className="border-gray-600 mb-6" />

                <label htmlFor="email" className="block text-left mb-2 font-sans">Email</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={(e) => {
                        setUser({ ...user, email: e.target.value })
                    }}
                    placeholder="Enter your Valid Email "
                    className="w-full p-3 border border-gray-600 text-black rounded-lg mb-4 focus:ring-2 focus:ring-blue-500"
                    autoComplete="off"
                />

                <label htmlFor="password" className="block text-left mb-2">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={user.password}
                    onChange={(e) => {
                        setUser({ ...user, password: e.target.value })
                    }}
                    placeholder="enter your Password"
                    autoComplete="off"
                    className="w-full p-3 border border-gray-600 text-black rounded-lg mb-6 focus:ring-2 focus:ring-blue-500"
                />

                <button
                    type="submit"
                    onClick={onLogin}
                    className={`w-full p-3 rounded-lg text-white transition-colors duration-200 ${buttonEnabled ? "bg-blue-500 hover:bg-blue-700" : "bg-red-400 cursor-not-allowed"}`}
                    disabled={!buttonEnabled}
                >
                    {buttonEnabled ? "Log In" : "Enter Your Credentials"}
                </button>

                <div className="mt-4 text-center">
                    <Link href="/signup"
                    className="text-blue-400 hover:underline">Visit Sign Up
                    </Link>
                </div>
            </div>
        </div>
    )
}
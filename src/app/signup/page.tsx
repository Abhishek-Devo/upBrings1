'use client'
import Link from "next/link"
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"

export default function SignupPage() {
    const router = useRouter()
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
    })
    
    const [buttonEnabled, setButtonEnabled] = useState(false)
    const [loading, setLoading] = useState(false)

    //this method will talk to database
    const onSignup = async () => {
        try {
            setLoading(true)
            const response = await axios.post("/api/users/signup", user)
            console.log("signUp success", response.data);
            router.push("/home")
            toast.success("Welcome To UpBrings",{duration:2000})
        }
        catch (error: any) {
            console.log("signup failed :(", error)
            toast.dismiss()
            toast.error('signup failed :(,Try again', { duration: 2000 })
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (user.email.length > 13 && user.password.length > 5 && user.username.length > 3 && (user.email.includes('@gmail.com') || user.email.includes('@outlook.com'))) {
            setButtonEnabled(true)
        } else {
            setButtonEnabled(false)
        }
    }, [user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black text-white">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="w-full max-w-md p-8 bg-gray-900 shadow-xl rounded-xl">
                <h1 className="text-4xl font-bold mb-8 text-center text-blue-500">{loading ? "Processing..." : "Sign Up | UpBrings"}</h1>

                <div className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium mb-2 text-gray-300">Username</label>
                        <input
                            type="text"
                            value={user.username}
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                            placeholder="minimum 4 characters"
                            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
                            autoComplete="off"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                        <input
                            type="text"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            placeholder="Enter valid email"
                            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
                            autoComplete="off"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium mb-2 text-gray-300">Password</label>
                        <input
                            type="password"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            placeholder="minimum pass length 6"
                            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
                            autoComplete="off"
                        />
                    </div>

                    <button onClick={onSignup}
                        className={`w-full p-3 rounded-lg text-white font-semibold transition-colors duration-300 ${buttonEnabled ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-700 cursor-not-allowed"}`}
                        disabled={!buttonEnabled}>
                        {buttonEnabled ? "Sign Up" : "Fill required Details"}
                    </button>

                    <div className="text-center">
                        <Link href="/login" className="text-blue-400 hover:text-blue-500 transition-colors duration-300">Already have an account? Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
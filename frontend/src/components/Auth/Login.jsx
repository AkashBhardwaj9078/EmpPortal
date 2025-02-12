import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'
import { useContext } from 'react'
import useAuthStore from '../../store/useAuthStore'

const Login = () => {
    // const { setEmployee } = useContext(AuthContext)   
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const {employee,Login}=useAuthStore();

    const submitHandler = async (e) => {
        e.preventDefault()

        const loginData = { email, password }

        Login(loginData,navigate);
        setEmail("")
        setPassword("")
    }

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center ">
            <div className="bg-gray-800 p-8 rounded-xl shadow-md text-white w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back</h2>
                <form onSubmit={submitHandler} className="space-y-6">
                    <div className="flex flex-col gap-4">
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            required
                            placeholder="Enter your email"
                            className="p-3 rounded-full border border-gray-600 bg-gray-700 placeholder-gray-400 text-white focus:outline-none focus:border-blue-500"
                        />
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            required
                            placeholder="Enter your password"
                            className="p-3 rounded-full border border-gray-600 bg-gray-700 placeholder-gray-400 text-white focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <button className="w-full py-3 bg-blue-600 rounded-full text-xl font-semibold hover:bg-blue-700 transition">
                        Login
                    </button>
                    <p className="mt-4 text-center">
                        Don't have an account?
                        <Link to="/signup" className="text-red-500 hover:underline ml-1">
                            Sign up now
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login

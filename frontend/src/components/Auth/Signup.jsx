import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'
import useAuthStore from '../../store/useAuthStore'

const Signup = () => {
    // const {employee,setEmployee}=useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fullname, setFullname] = useState("")
    const [isAdmin, setIsAdmin] = useState(false)
    const navigate = useNavigate()
    const {employee,Signup}=useAuthStore()

    const submitHandler = async (e) => {
        e.preventDefault()
        const empData = {
            fullname,
            email,
            password,
            isAdmin
        }

        console.log("Submitting:", empData)

        Signup(empData,navigate);

        

    
        setEmail("")
        setPassword("")
        setFullname("")
        setIsAdmin(false)
    }

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center ">
            <div className="bg-gray-800 p-8 rounded-xl shadow-md text-white w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center">Create Your Account</h2>
                <form onSubmit={submitHandler} className="space-y-6">
                    <div className="flex flex-col gap-4">
                        <input
                            onChange={(e) => setFullname(e.target.value)}
                            value={fullname}
                            type="text"
                            required
                            placeholder="Enter your fullname"
                            className="p-3 rounded-full border border-gray-600 bg-gray-700 placeholder-gray-400 text-white focus:outline-none focus:border-blue-500"
                        />
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
                    <button type="submit" data-role="employee" className="w-full py-3 bg-blue-600 rounded-full text-xl font-semibold hover:bg-blue-700 transition">
                        Signup as employee
                    </button>
                    <button
                        type="submit"
                        data-role="admin"
                        onClick={() => setIsAdmin(true)}
                        className="w-full py-3 bg-red-600 rounded-full text-xl font-semibold hover:bg-green-700 transition"
                    >
                        Signup as Admin
                    </button>
                    <p className="mt-4 text-center">
                        Already have an account?
                        <Link to="/login" className="text-blue-600 hover:underline ml-1">
                            Login now
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Signup

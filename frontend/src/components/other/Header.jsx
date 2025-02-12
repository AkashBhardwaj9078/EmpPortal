import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import useAuthStore from '../../store/useAuthStore'

const Header = () => {
  // const {employee,setEmployee}=useContext(AuthContext)
  const { employee, Logout } = useAuthStore();
  const navigate = useNavigate();

  const LogoutHandler = async () => {
    Logout(navigate);
  }

  return (
    <div className='flex p-4'>
        <div className="text-left">
            <span className='text-xl text-white font-bold'>Hello,</span>
            <br />
            <div className="flex justify-between items-center w-full  ">
            <div className='text-2xl text-white font-bold'>{employee?.fullname}</div>
            <button  onClick={LogoutHandler} className='bg-[#c5533d] px-4 py-1 absolute  right-10  text-lg text-white font-bold rounded'>Logout</button>

            </div>
            
        </div>
       
      
    </div>
  )
}

export default Header

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const EmpProtectedWrapper = ({children}) => {
  const navigate=useNavigate()
  useEffect(() => {
   const token=localStorage.getItem('token')
  //  const emp=localStorage.getItem('employee')
   if(!token){
    navigate('/login')
   }
  
    
  }, [navigate])
  
  return (
    <div>
      {/* Hello */}
      {children}
      
    </div>
  )
}

export default EmpProtectedWrapper


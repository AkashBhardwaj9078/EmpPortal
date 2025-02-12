import React, { useState, useEffect } from 'react'
import { createContext } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [employee, setEmployee] = useState(null)
  
  useEffect(() => {
    const storedEmployee = localStorage.getItem('employee')
    if (storedEmployee) {
      setEmployee(JSON.parse(storedEmployee))
    }
    else setEmployee(null);
    // Run only once on mount
  }, [])
  
  return (
    <AuthContext.Provider value={{ employee, setEmployee }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

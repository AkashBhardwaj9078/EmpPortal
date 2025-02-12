import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import EmpDashboard from './components/Dashboard/EmpDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmpProtectedWrapper from './pages/EmpProtectedWrapper'
import AdminProtectedWrapper from './pages/AdminProtectedWrapper'
import useAuthStore from './store/useAuthStore'

const App = () => {
    const { employee, loading, AuthenticateEmp,allEmployees, getAllemployees} = useAuthStore();

    useEffect(() => {
      AuthenticateEmp();
      getAllemployees();
    }, [AuthenticateEmp,getAllemployees]);

    if (loading) {
        return <div>Loading...</div>;
    }

    console.log(employee,allEmployees);
  
    return (
        <Routes>  
             <Route path="/" element={<Navigate to="/login" />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/emp-dashboard' 
              element={<EmpProtectedWrapper><EmpDashboard/></EmpProtectedWrapper>} />
            <Route 
              path='/admin-dashboard'
              element={
                <AdminProtectedWrapper>
                  <AdminDashboard/>
                </AdminProtectedWrapper>
              } 
            />
        </Routes>
    );
}

export default App;

import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';

const AdminProtectedWrapper = ({ children }) => {
  const { employee, loading } = useAuthStore();

  if (loading) return <div>Loading...</div>;
  if (!employee || !employee.isAdmin) return <Navigate to="/emp-dashboard" />;
  
  return <>{children}</>;
};

export default AdminProtectedWrapper;

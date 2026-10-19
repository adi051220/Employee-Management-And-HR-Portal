import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { useAuth } from '../context/AuthContext';

const Login = () => <div className="flex justify-center items-center h-screen font-semibold">Login Page Placeholder</div>;
const Register = () => <div className="flex justify-center items-center h-screen font-semibold">Register Page Placeholder</div>;
const AdminDashboard = () => <div className="flex justify-center items-center h-screen font-semibold">Admin Dashboard</div>;
const EmployeeDashboard = () => <div className="flex justify-center items-center h-screen font-semibold">Employee Dashboard</div>;

export const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route 
        path="/admin/dashboard" 
        element={
          <ProtectedRoute requiredRole="Admin">
            <AdminDashboard />
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/employee/dashboard" 
        element={
          <ProtectedRoute requiredRole="Employee">
            <EmployeeDashboard />
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/" 
        element={
          user ? (
            <Navigate to={user.role === 'Admin' ? '/admin/dashboard' : '/employee/dashboard'} replace />
          ) : (
            <Navigate to="/login" replace />
          )
        } 
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
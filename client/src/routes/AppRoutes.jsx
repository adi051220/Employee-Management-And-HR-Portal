import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { useAuth } from '../context/AuthContext';
import AdminLayout from '../layouts/AdminLayout';
import EmployeeLayout from '../layouts/EmployeeLayout';

const Login = () => <div className="flex justify-center items-center h-screen font-semibold">Login Page Placeholder</div>;
const Register = () => <div className="flex justify-center items-center h-screen font-semibold">Register Page Placeholder</div>;
const AdminDashboard = () => <div className="flex justify-center items-center h-screen font-semibold">Admin Dashboard</div>;
const ManageEmployees = () => <div className="flex justify-center items-center h-screen font-semibold">Manage Employees Page</div>;
const AdminAttendance = () => <div className="flex justify-center items-center h-screen font-semibold">Attendance & Leaves Page</div>;
const AdminPayroll = () => <div className="flex justify-center items-center h-screen font-semibold">Payroll Page</div>;

const EmployeeDashboard = () => <div className="flex justify-center items-center h-screen font-semibold">Employee Dashboard</div>;
const EmployeeProfile = () => <div className="flex justify-center items-center h-screen font-semibold">My Profile Page</div>;
const EmployeeAttendance = () => <div className="flex justify-center items-center h-screen font-semibold">Attendance Page</div>;
const EmployeeLeaves = () => <div className="flex justify-center items-center h-screen font-semibold">Leave Requests Page</div>;

export const AppRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen font-semibold text-indigo-600">
        Loading HR Portal...
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        element={
          <ProtectedRoute requiredRole="Admin">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/employees" element={<ManageEmployees />} />
        <Route path="/admin/attendance" element={<AdminAttendance />} />
        <Route path="/admin/payroll" element={<AdminPayroll />} />
      </Route>

      <Route
        element={
          <ProtectedRoute requiredRole="Employee">
            <EmployeeLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
        <Route path="/employee/profile" element={<EmployeeProfile />} />
        <Route path="/employee/attendance" element={<EmployeeAttendance />} />
        <Route path="/employee/leaves" element={<EmployeeLeaves />} />
      </Route>

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
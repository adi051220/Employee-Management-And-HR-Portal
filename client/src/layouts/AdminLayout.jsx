import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const AdminLayout = () => {
    const adminLinks = [
        { to: '/admin/dashboard', label: 'Dashboard' },
        { to: '/admin/employees', label: 'Manage Employees' },
        { to: '/admin/attendance', label: 'Attendance & Leaves' },
        { to: '/admin/payroll', label: 'Payroll' }
    ];

    return (
        <div className="flex h-screen bg-gray-100 overflow-hidden">
            <Sidebar links={adminLinks} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar title="Admin Control Panel" />
                <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
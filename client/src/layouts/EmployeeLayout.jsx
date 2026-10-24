import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const EmployeeLayout = () => {
    const employeeLinks = [
        { to: '/employee/dashboard', label: 'My Dashboard' },
        { to: '/employee/profile', label: 'My Profile' },
        { to: '/employee/attendance', label: 'Attendance' },
        { to: '/employee/leaves', label: 'Leave Requests' }
    ];

    return (
        <div className="flex h-screen bg-gray-100 overflow-hidden">
            <Sidebar links={employeeLinks} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar title="Employee Portal" />
                <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default EmployeeLayout;
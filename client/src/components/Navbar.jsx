import React from 'react';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ title }) => {
    const { user, logout } = useAuth();

    return (
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 shadow-sm">
            <h1 className="text-xl font-semibold text-gray-800">{title || 'Dashboard'}</h1>

            <div className="flex items-center space-x-4">
                <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{user?.name || 'User'}</p>
                    <p className="text-xs text-gray-500">{user?.role || 'Guest'}</p>
                </div>
                <button
                    onClick={logout}
                    className="px-3 py-1.5 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                >
                    Logout
                </button>
            </div>
        </header>
    );
};

export default Navbar;
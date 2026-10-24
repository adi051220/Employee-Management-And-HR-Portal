import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ links = [] }) => {
    return (
        <aside className="w-64 bg-gray-900 text-gray-300 flex flex-col min-h-screen">
            <div className="h-16 flex items-center px-6 border-b border-gray-800">
                <span className="text-lg font-bold text-white tracking-wider">HR Portal</span>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-1">
                {links.map((link, index) => (
                    <NavLink
                        key={index}
                        to={link?.to || '#'}
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive
                                ? 'bg-indigo-600 text-white'
                                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                            }`
                        }
                    >
                        {link?.icon && <span className="mr-3">{link.icon}</span>}
                        {link?.label || ''}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
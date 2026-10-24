import React from 'react';

const Loader = ({ size = 'medium', text = 'Loading...' }) => {
    const sizeClasses = {
        small: 'w-5 h-5 border-2',
        medium: 'w-8 h-8 border-4',
        large: 'w-12 h-12 border-4'
    };

    return (
        <div className="flex flex-col items-center justify-center p-6 space-y-2">
            <div
                className={`${sizeClasses[size] || sizeClasses.medium} border-indigo-600 border-t-transparent rounded-full animate-spin`}
            />
            {text && <p className="text-sm text-gray-600">{text}</p>}
        </div>
    );
};

export default Loader;
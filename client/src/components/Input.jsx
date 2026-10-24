import React from 'react';

const Input = ({ label, name, type = 'text', value, onChange, placeholder, error, required = false, className = '' }) => {
    return (
        <div className={`mb-4 ${className}`}>
            {label && (
                <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <input
                id={name}
                name={name}
                type={type}
                value={value ?? ''}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-colors ${error
                    ? 'border-red-500 focus:ring-red-200 text-red-900'
                    : 'border-gray-300 focus:ring-indigo-200 focus:border-indigo-500'
                    }`}
            />
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
};

export default Input;
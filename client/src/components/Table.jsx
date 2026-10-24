import React from 'react';

const Table = ({ columns = [], data = [], keyField = '_id', emptyMessage = 'No records found.' }) => {
    const safeColumns = Array.isArray(columns) ? columns : [];
    const safeData = Array.isArray(data) ? data : [];

    return (
        <div className="overflow-x-auto shadow ring-1 ring-black ring-opacity-5 rounded-lg">
            <table className="min-w-full divide-y divide-gray-300 bg-white">
                <thead className="bg-gray-50">
                    <tr>
                        {safeColumns.map((col, index) => (
                            <th
                                key={index}
                                scope="col"
                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                            >
                                {col?.header || ''}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                    {safeData.length > 0 ? (
                        safeData.map((row) => (
                            <tr key={row?.[keyField] || Math.random()} className="hover:bg-gray-50 transition-colors">
                                {safeColumns.map((col, colIndex) => (
                                    <td key={colIndex} className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-700 sm:pl-6">
                                        {col?.render ? col.render(row) : (row?.[col?.accessor] ?? '')}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={safeColumns.length || 1} className="py-8 text-center text-sm text-gray-500">
                                {emptyMessage}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
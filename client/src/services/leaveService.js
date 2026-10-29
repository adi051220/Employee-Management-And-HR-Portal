import API from './api';

export const getAllLeaves = async () => {
    try {
        const response = await API.get('/leaves');
        return response.data;
    }
    catch (error) {
        console.error("Error fetching leave requests:", error);
        throw error;
    }
};

export const getEmployeeLeaves = async (employeeId) => {
    try {
        const response = await API.get(`/leaves/employee/${employeeId}`);
        return response.data;
    }
    catch (error) {
        console.error(`Error fetching leaves for employee ${employeeId}:`, error);
        throw error;
    }
};

export const createLeave = async (leaveData) => {
    try {
        const response = await API.post('/leaves', leaveData);
        return response.data;
    }
    catch (error) {
        console.error("Error creating leave request:", error);
        throw error;
    }
};

export const updateLeaveStatus = async (id, statusData) => {
    try {
        const response = await API.put(`/leaves/${id}`, statusData);
        return response.data;
    }
    catch (error) {
        console.error(`Error updating leave status for ${id}:`, error);
        throw error;
    }
};
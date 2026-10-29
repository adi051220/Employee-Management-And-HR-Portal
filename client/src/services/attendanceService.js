import API from './api';

export const getAllAttendance = async () => {
    try {
        const response = await API.get('/attendance');
        return response.data;
    }
    catch (error) {
        console.error("Error fetching attendance records:", error);
        throw error;
    }
};

export const getEmployeeAttendance = async (employeeId) => {
    try {
        const response = await API.get(`/attendance/employee/${employeeId}`);
        return response.data;
    }
    catch (error) {
        console.error(`Error fetching attendance for employee ${employeeId}:`, error);
        throw error;
    }
};

export const markAttendance = async (attendanceData) => {
    try {
        const response = await API.post('/attendance', attendanceData);
        return response.data;
    }
    catch (error) {
        console.error("Error marking attendance:", error);
        throw error;
    }
};

export const updateAttendance = async (id, attendanceData) => {
    try {
        const response = await API.put(`/attendance/${id}`, attendanceData);
        return response.data;
    }
    catch (error) {
        console.error(`Error updating attendance record ${id}:`, error);
        throw error;
    }
};
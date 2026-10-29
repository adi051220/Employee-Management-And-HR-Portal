import API from './api';

export const getAllSalaries = async () => {
    try {
        const response = await API.get('/salaries');
        return response.data;
    }
    catch (error) {
        console.error("Error fetching salary records:", error);
        throw error;
    }
};

export const getEmployeeSalary = async (employeeId) => {
    try {
        const response = await API.get(`/salaries/employee/${employeeId}`);
        return response.data;
    }
    catch (error) {
        console.error(`Error fetching salary for employee ${employeeId}:`, error);
        throw error;
    }
};

export const createSalary = async (salaryData) => {
    try {
        const response = await API.post('/salaries', salaryData);
        return response.data;
    }
    catch (error) {
        console.error("Error creating salary record:", error);
        throw error;
    }
};

export const updateSalary = async (id, salaryData) => {
    try {
        const response = await API.put(`/salaries/${id}`, salaryData);
        return response.data;
    }
    catch (error) {
        console.error(`Error updating salary record ${id}:`, error);
        throw error;
    }
};
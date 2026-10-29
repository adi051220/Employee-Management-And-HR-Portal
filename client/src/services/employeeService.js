import API from './api';

export const getAllEmployees = async () => {
    try {
        const response = await API.get('/employees');
        return response.data;
    }
    catch (error) {
        console.error("Error fetching employees:", error);
        throw error;
    }
};

export const getEmployeeById = async (id) => {
    try {
        const response = await API.get(`/employees/${id}`);
        return response.data;
    }
    catch (error) {
        console.error(`Error fetching employee ${id}:`, error);
        throw error;
    }
};

export const createEmployee = async (employeeData) => {
    try {
        const response = await API.post('/employees', employeeData);
        return response.data;
    }
    catch (error) {
        console.error("Error creating employee:", error);
        throw error;
    }
};

export const updateEmployee = async (id, employeeData) => {
    try {
        const response = await API.put(`/employees/${id}`, employeeData);
        return response.data;
    }
    catch (error) {
        console.error(`Error updating employee ${id}:`, error);
        throw error;
    }
};

export const deleteEmployee = async (id) => {
    try {
        const response = await API.delete(`/employees/${id}`);
        return response.data;
    }
    catch (error) {
        console.error(`Error deleting employee ${id}:`, error);
        throw error;
    }
};
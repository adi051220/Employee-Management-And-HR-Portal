import API from './api';

export const getNotifications = async () => {
    try {
        const response = await API.get('/notifications');
        return response.data;
    }
    catch (error) {
        console.error("Error fetching notifications:", error);
        throw error;
    }
};

export const markNotificationAsRead = async (id) => {
    try {
        const response = await API.put(`/notifications/${id}/read`);
        return response.data;
    }
    catch (error) {
        console.error(`Error marking notification ${id} as read:`, error);
        throw error;
    }
};
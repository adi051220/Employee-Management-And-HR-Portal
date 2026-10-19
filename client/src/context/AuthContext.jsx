import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            const storedUser = localStorage.getItem('hr_user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        }
        catch (error) {
            console.error("Failed to parse user from localStorage", error);
            localStorage.removeItem('hr_user');
            localStorage.removeItem('hr_token');
        }
        finally {
            setLoading(false);
        }
    }, []);

    const login = (data) => {
        const token = data.token;
        const userInfo = {
            _id: data._id,
            name: data.name,
            email: data.email,
            role: data.role
        };

        setUser(userInfo);
        localStorage.setItem('hr_user', JSON.stringify(userInfo));
        localStorage.setItem('hr_token', token);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('hr_user');
        localStorage.removeItem('hr_token');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
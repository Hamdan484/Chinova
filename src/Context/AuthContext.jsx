import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if user is logged in from localStorage
        const savedUser = localStorage.getItem('chinova_user');
        const token = localStorage.getItem('chinova_token');
        if (savedUser && token) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false);
    }, []);

    const login = (userData, token) => {
        setUser(userData);
        localStorage.setItem('chinova_user', JSON.stringify(userData));
        localStorage.setItem('chinova_token', token);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('chinova_user');
        localStorage.removeItem('chinova_token');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

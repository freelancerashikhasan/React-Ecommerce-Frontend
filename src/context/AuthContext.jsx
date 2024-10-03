import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
// Create a Context for authentication
const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') || null);
    const [userEmail, setUserEmail] = useState('');
    const [companyInfomation, setCompanyInformation] = useState([]);

    useEffect(() => {
        axios.get('http://ecommerce-backend.test.com/api/company-information')
        .then(response => {
            setCompanyInformation(response.data);
        })
        .catch(error => {
            console.error('Login failed:', error);
            throw error;
        });
    },[]);
    useEffect(() => {
        if (authToken) {
            axios.get('http://ecommerce-backend.test.com/api/user', {
                headers: { Authorization: `Bearer ${authToken}` }
            })
            .then(response => {
                setUserEmail(response.data.email);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
                // Optionally clear token if fetching user data fails
                setAuthToken(null);
                localStorage.removeItem('authToken');
            });
        }
    }, [authToken]);

    const login = (input) => {
        return axios.post('http://ecommerce-backend.test.com/api/login', input)
            .then(response => {
                const token = response.data.authorisation.token;
                localStorage.setItem('authToken', token);
                setAuthToken(token);
                setUserEmail(response.data.user.email);
                toast.success('Login Successful');
            })
            .catch(error => {
                console.error('Login failed:', error);
                throw error;
            });
    };

    const logout = () => {
        if (authToken) {
            return axios.post('http://ecommerce-backend.test.com/api/logout', {}, {
                headers: { Authorization: `Bearer ${authToken}` }
            })
            .then(() => {
                setAuthToken(null);
                setUserEmail('');
                localStorage.removeItem('authToken');
                toast.error('Logged out Successfully!');
            })
            .catch(error => {
                console.error('Error logging out:', error);
            });
        }
    };

    return (
        <AuthContext.Provider value={{ authToken, userEmail, login, logout, companyInfomation }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;

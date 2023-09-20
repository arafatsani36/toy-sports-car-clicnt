import { useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const useAxiosSecure = () => {
  const [axiosSecure, setAxiosSecure] = useState(null);
  const { logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const createAxiosInstance = () => {
      const instance = axios.create({
        baseURL: 'http://localhost:5000', // Replace with your API base URL
      });

      // Add an interceptor to inject the authorization header
      instance.interceptors.request.use(
        (config) => {
          const token = localStorage.getItem('access-token');
          if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
          }
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );

      // Add an interceptor to handle 401 and 403 errors
      instance.interceptors.response.use(
        (response) => {
          return response;
        },
        (error) => {
          if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            // Logout the user
            logOut();

            // Redirect to the login page
            navigate('/login'); // Replace with your login route
          }
          return Promise.reject(error);
        }
      );

      setAxiosSecure(instance);
    };

    createAxiosInstance();
  }, [logOut, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;

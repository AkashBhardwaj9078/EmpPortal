import {create} from 'zustand'
import axios from 'axios';
import Signup from '../components/Auth/Signup';


const useAuthStore = create((set, get) => ({

    employee: null,
    loading: false,
    allEmployees: null,
    counts:null,
    

    AuthenticateEmp: async () => {
        set({ loading: true });
        const token = localStorage.getItem('token');
        if (!token) {
            set({ employee: null, loading: false });
            return;
        }
        try {
            const res = await axios.get('http://localhost:3000/api/emp/profile', {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                withCredentials: true
            });
            set({ employee: res.data, loading: false });
        } catch (error) {
            console.error('Error in checking Auth Profile:', error);
            if (error.response && error.response.status === 401) {
                localStorage.removeItem('token');
                localStorage.removeItem('employee');
                localStorage.removeItem('isAdmin');
            }
            set({ employee: null, loading: false });
        }
    },

    Signup: async (empData, navigate) => {
        try {
            const { status, data } = await axios.post('http://localhost:3000/api/emp/signup', empData);
            if (status === 201) {
                const loggedInEmployee = data.employee;
                set({ employee: loggedInEmployee });
                localStorage.setItem('employee', JSON.stringify(loggedInEmployee));
                localStorage.setItem('token', data.token);
                localStorage.setItem('isAdmin', loggedInEmployee.isAdmin);

                navigate(loggedInEmployee.isAdmin ? "/admin-dashboard" : "/emp-dashboard");
            } else {
                console.error('Signup error:', data.message);
            }
        } catch (error) {
            console.error("Error creating account:", error.message);
        }
    },

    Logout: async (navigate) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:3000/api/emp/logout', {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                withCredentials: true
            });
            if (response.status === 200) {
                localStorage.removeItem('token');
                localStorage.removeItem('employee');
                localStorage.removeItem('isAdmin');
                set({ employee: null });
                navigate("/login");
            }
        } catch (error) {
            console.error("Logout error:", error);
        }
    },

    Login: async (loginData, navigate) => {
        try {
            const { status, data } = await axios.post('http://localhost:3000/api/emp/login', loginData);
            if (status === 201) {
                const loggedInEmployee = data.employee;
                set({ employee: loggedInEmployee });
                localStorage.setItem('employee', JSON.stringify(loggedInEmployee));
                localStorage.setItem('token', data.token);
                localStorage.setItem('isAdmin', loggedInEmployee.isAdmin);

                navigate(loggedInEmployee.isAdmin ? "/admin-dashboard" : "/emp-dashboard");
            } else {
                console.error('Login error:', data.message);
            }
        } catch (error) {
            console.error("Error in logging in:", error.message);
        }
    },

    assignTask: async (newTask, assignTo, navigate) => {
        try {
            const encodedName = encodeURIComponent(assignTo);
            const response = await axios.put(
                `http://localhost:3000/api/emp/assign/${encodedName}`,
                newTask,
                { withCredentials: true }
            );

            if (response.status === 200) {
                console.log("Task assigned successfully.", response.data.employee);
                get().getAllemployees()
                navigate("/admin-dashboard");
                
            } else {
                console.error('Assign task error:', response.data.message);
            }
        } catch (error) {
            console.error("Error in assigning task:", error.message);
        }
    },

    getAllemployees: async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(
                'http://localhost:3000/api/emp/all-profile', // ensure this endpoint is available via GET on the backend
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    withCredentials: true
                }
            );
            if (response.status === 200) {
                set({ allEmployees: response.data });
            }
        } catch (error) {
            console.error("Error fetching all employees:", error.message);
        }
    }
}));

export default useAuthStore;
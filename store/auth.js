
import { create } from "zustand";
import axios from 'axios';
import Cookies from "js-cookie";

export const useAuthStore = create((set)=> ({
    user : null,
    isSignUp : false,
    signup : async (credentials) => {
        set({ isSignUp : true });
        try {
            const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/signup`, credentials)
            Cookies.set('token', data.user.token);
            set({user : data.user, isSignUp : false})
        } catch (error) {
            console.log(error);
            set({user: null, isSignUp: false})
        }
    },
    login : async (credentials) => {
        try {
            const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/login`, credentials)
            set({user : data.user})
        } catch (error) {
            console.log(error);
            set({user: null})
        }
    },
    authCheck : async () => {
        try {
            const token = Cookies.get('token');
            console.log(token);
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/authCheck`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    withCredentials: true, // include cookies in the request
                },
            })
            set({user : data.user})
            console.log(" data ", data);
        } catch (error) {
            console.log(error);
            set({user: null})
        }
    }
}))
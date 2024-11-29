
import { create } from "zustand";
import axios from 'axios';
import Cookies from "js-cookie";

export const useMatchStore = create((set)=> ({
    fields : [],
    careers : [],
    specializations : [],
    skills : [],
    fetchFieldsData : async (credentials) => {
        try {
            const token = Cookies.get('token');
            const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/match/field`,{
                headers: {
                    Authorization: `Bearer ${token}`,
                    withCredentials: true,
                },
            })
            set({fields : data.content[0].fields})
        } catch (error) {
            console.log(error);
            set({fields: []})
        }
    },
    updateBuildingProfile : async (credentials) => {
        try {
            const token = Cookies.get('token');
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/match/career`, credentials ,{
                headers: {
                    Authorization: `Bearer ${token}`,
                    withCredentials: true,
                },
            })
            set({careers : data.content.careers})
        } catch (error) {
            console.log(error);
            set({careers: []})
        }
    },
    fetchSpecialization : async (credentials) => {
        try {
            const token = Cookies.get("token");
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/match/specialization`, credentials, {
                headers : {
                    Authorization: `Bearer ${token}`,
                    withCredentials: true,
                }
            })
            set({specializations : data.content.specializations})
        } catch (error) {
            console.log(error);
        }
    },
    fetchSkills : async ( credentials ) => {
        try {
            const token = Cookies.get('token');
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/match/skill`,credentials, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    withCredentials: true,
                },
            })
            set({skills : data.content.skills})
        } catch (error) {
            console.log(error);
        }
    },
    updateSkills : async ( credentials ) => {
        try {
            const token = Cookies.get('token');
            await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/match/update-mentee-choices`,credentials, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    withCredentials: true,
                },
            })
        } catch (error) {
            console.log(error);
        }
    },
    getMentor : async (credentials) => {
        try {
            const token = Cookies.get('token');
            const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/match/matching`,{
                headers: {
                    Authorization: `Bearer ${token}`,
                    withCredentials: true,
                },
            })
            console.log("mentor", data)
        } catch (error) {
            console.log(error);
        }
    }
}))
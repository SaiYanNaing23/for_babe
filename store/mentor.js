import { create } from "zustand";
import axios from 'axios';


export const useMentorStore = create((set)=> ({
    mentors : [],
    fetchMentorDetails : async ( credentials ) => {
        try {
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/mentor/details`, credentials)
            set({ mentors : data.mentor })
        } catch (error) {
            console.error(error);
        }
    },
    agreementMutation : async ( credentials ) => {
        try {
             await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/mentor/agreed-mentee`, credentials)
        } catch (error) {
            console.error(error);
        }
    }
}))


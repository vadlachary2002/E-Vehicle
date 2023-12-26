import axios from "axios";
import { BOOKING_URL, PINS_URL } from "../../urls";
axios.defaults.withCredentials = true;

export const getPins = async ()=>{
    try{
        const res =  await axios.get(PINS_URL);
        console.log(res.data);
        return {
            data:res.data
        }
    }catch(err){
        return {
            error:true,
            data:err.response.data
        }
    }
}

export const bookingApi = async (bookingBody)=>{
    try{
        const res =  await axios.post(BOOKING_URL,bookingBody);
        console.log(res.data);
        return {
            data:res.data
        }
    }catch(err){
        return {
            error:true,
            data:err.response.data
        }
    }
}
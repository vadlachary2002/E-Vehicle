import axios from "axios"
import { LOGIN_URL, REGISTER_URL } from "../../urls"
axios.withCredentials = true

export const register = async (userBody)=>{
    try{
        const res =  await axios.post(REGISTER_URL,userBody);
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

export const login =async (userBody)=>{
    try{
        const res =  await axios.post(LOGIN_URL,userBody);
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
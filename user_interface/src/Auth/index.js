import { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducer/userReducer";
export const UserContext = createContext(null);

export const Auth =({children})=>{
  const [state, dispatch] = useReducer(reducer,initialState);
  const loggedIn = (data)=>{
    console.log("data9",data);
    const { isAdmin, email} =  data;
    dispatch({type:"ADMIN",payload:isAdmin});
    dispatch({type:"USER",payload:true});
    dispatch({type:"EMAIL",payload:email});
  }
  const loggedOut = ()=>{
    dispatch({type:"ADMIN",payload:false});
    dispatch({type:"USER",payload:false});
    dispatch({type:"EMAIL",payload:''});
  }
  const authenticate = (info)=>{
    const { code } =  info;
    console.log("aut",info);
    if(code===401){
      loggedOut();
    }
    return info;
  }
  return (
    <UserContext.Provider value={{ state, loggedIn,loggedOut, authenticate }}>
     {children}
    </UserContext.Provider>
  )
} 
import React, { useContext, useEffect } from "react";
import { UserContext } from "../../Auth";
import { useNavigate } from "react-router-dom";


const Profile =  ()=>{
  const { state } = useContext(UserContext);
  const navigate =  useNavigate();
  useEffect(()=>{
    if(!state || !state.user){
      navigate('/login');
      return ;
    }
  },[state])
  return (
    <div className="profilepage">
      profile
    </div>
  )
}

export default Profile;
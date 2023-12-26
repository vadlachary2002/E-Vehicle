import React, { useContext, useEffect, useState } from "react";
import './Login.scss';
import { UserContext } from "../../Auth";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/User";

const Login = ()=>{
  const [ user, setUser ] =  useState({email:'',password:''});
  const { state, loggedIn} =  useContext(UserContext);
  const [ error, setError] = useState('');
  const [ success, setSuccess] = useState('');
  const navigate  =  useNavigate();
  const updateUser = (e)=>{
    setUser((prevUser)=>{
      return {
        ...prevUser,
        [e.target.name]:e.target.value
      }
    })
  }
  const onSubmit = async (e)=>{
    e.preventDefault();
    const { error, data } =  await login(user);
    if(error){
      setError(data.message);
      setTimeout(() => {
        setError('')
      }, 2000);
      return;
    }
    setSuccess('User Logged In succesfully');
    loggedIn(data);
    setTimeout(() => {
      setSuccess('');
      navigate('/profile')
    }, 2000);
    return ;

    console.log(user);
  }
  useEffect(()=>{
    if(state && state.user){
      navigate('/profile');
      return;
    }
  },[state]);
  return(
    <div className="login">
      <div className="content">
        <h1>Login to Explore...</h1>
        <h4>Don't have an account <a href="/register">Register?</a> </h4>
        <div className="error">{error}</div>
        <div className="success">{success}</div>
      </div>
      <form className="minibox" onSubmit={onSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={updateUser}
          value={user.email}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={updateUser}
          value={user.password}
        />
        <input type="submit" value="Login" />
        <div className="links">
          <a href="/forgotpass">Forgot Password?</a>
          <a href="/register">
            <b>Register</b>
          </a>
        </div>
      </form>
    </div>

  )
}

export default Login;
import React, { useState } from "react";
import './Login.scss';

const Login = ()=>{
  const [ user, setUser ] =  useState({email:'',password:''});
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
    console.log(user);
  }
  return(
    <div className="login">
      <div className="content">
        <h1>Login to Explore...</h1>
        <h4>Don't have an account <a href="/register">Register?</a> </h4>
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
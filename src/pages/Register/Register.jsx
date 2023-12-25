import React, { useState } from "react";
import './Register.scss';
import { useNavigate } from "react-router-dom";

const defaultUser = {
  firstname:'',
  lastname:'',
  email:'',
  password:'',
  gender:'',
  mobile:null,
}
const Register = ()=>{
  const [userDetails, setUserDetails] = useState(defaultUser);
  const navigate = useNavigate();
  const updateUserDetails = (e) => {
    setUserDetails((prevUser) => {
      return {
        ...prevUser,
        [e.target.name]: e.target.value,
      };
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    // const { error, data, code } = await register(userDetails, file);
    // if (error) {
    //   console.log('Error');
    //   return;
    // }
    // console.log(data, code);
    console.log(userDetails);
  };
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="register">
      <div className="content">
        <h1>No Need to Worry!!!</h1>
        <h4>Your details will be safe.</h4>
      </div>
      <form className="registerBox" onSubmit={onSubmit}>
        <div className="top">
          
          <h1>Register</h1>
        </div>
        <div className="middle">
          <div className="left box">
            <div className="inputBox">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstname"
                value={userDetails.firstname}
                onChange={updateUserDetails}
              />
            </div>
            <div className="inputBox">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                name="lastname"
                value={userDetails.lastname}
                onChange={updateUserDetails}
              />
            </div>
            <div className="inputBox">
              <label htmlFor="gender">Gender</label>
              <select
                name="gender"
                id="gender"
                defaultValue={userDetails.gender}
                onChange={updateUserDetails}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="inputBox">
              <label htmlFor="mobile">Mobile No</label>
              <input
                type="text"
                name="mobile"
                onChange={updateUserDetails}
                value={userDetails.mobile}
              />
            </div>
            <div className="inputBox">
              <label htmlFor="mail">Email </label>
              <input
                type="email"
                name="email"
                onChange={updateUserDetails}
                value={userDetails.email}
              />
            </div>
            <div className="inputBox">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={updateUserDetails}
                />
            </div>
            <div className="inputBox">
                <label htmlFor="cpassword">Confirm</label>
                <input type="text" name="cpassword" />
            </div>
          </div>
        </div>
        <div className="bottom">
          <input name="Cancel" onClick={goBack} type="button" value="Cancel" />
          <input
            name='Register'
            onClick={null}
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}

export default Register;
import React, { useContext } from "react";
import './Home.scss';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Auth"


const Home =  ()=>{
  const navigate =  useNavigate();
  const redirect = (path)=>{
    navigate(path);
  }
  const { state, loggedIn} =  useContext(UserContext);
  return (
    <div className="homepage">
      <div className="content">
        <h1>Well-Come {state.email}</h1>
        <h4>Search E-Vehicle Charge Pin NearBy...</h4>
      </div>
      <div className="contentsearch">
        <div className="search">
          <span><b>43%</b><small>Your Charging</small></span>
          <button onClick={()=>redirect('/search')}> Search<i className="fa-solid fa-search"/></button>
          <button onClick={()=>redirect('/login')}> Login</button>
        </div>
        <div className="status">
          <label htmlFor="">Enter Your Vehicle Charging</label>
          <input type="text" placeholder="66%" />
          <button>Update</button>
        </div>
      </div>

    </div>
  )
}

export default Home;
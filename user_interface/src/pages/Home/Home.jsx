import React from "react";
import './Home.scss';


const Home =  ()=>{
  return (
    <div className="homepage">
      <div className="content">
        <h1>Well-Come Chary</h1>
        <h4>Search E-Vehicle Charge Pin NearBy...</h4>
      </div>
      <div className="contentsearch">
        <div className="search">
          <span><b>43%</b><small>Your Charging</small></span>
          <button> Search<i className="fa-solid fa-search"/></button>
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
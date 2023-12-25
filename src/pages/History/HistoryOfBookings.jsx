import React, { useContext, useEffect, useState } from "react";
import './History.scss';
import { UserContext } from "../../Auth";
import { useNavigate } from "react-router-dom";
import { getAllBookings } from "../../services/User";

const HistoryOfBookings = ()=>{
  const [ allBookings, setAllBookings ] = useState(null);
  const [ loading, setLoading ] =  useState(true);
  const [ error, setError] = useState('');
  const { state } =  useContext(UserContext);
  const navigate  = useNavigate();
  const authorise = async()=>{
    const { error, data } =  await getAllBookings();
    if(error){
      setError(data.message);
      setTimeout(() => {
        setError('');
        navigate('/login');
      }, 2000);
      return;
    }
    setLoading(false);
    setAllBookings(data);
  }
  useEffect(()=>{
    authorise();

  },[state])
  return (
    <div className="history">
      <div className="heading">
        <h3>Your Past Bookings </h3>
        <div className="error">{error}</div>
        {loading &&  <div>Loading....</div>}
      </div>
      { 
      allBookings && allBookings.map((booking)=>(
        <div className="item">
          <div className="box">
            <span>{booking.city}</span>
            <small>City</small>
          </div>
          <div className="box">
            <span>{booking.subcity}</span>
            <small>Sub City</small>
          </div>
          <div className="box">
            <span>{booking.type}</span>
            <small>Charging Type</small>
          </div>
          <div className="box">
            <span>{booking.slot}</span>
            <small>Slot No</small>
          </div>
          <div className="box">
            <span className="">{booking.time}</span>
            <small>{booking.createdAt.toString().substring(0,10)}</small>
          </div>
          <div className="box">
            <b>{booking.cost}/-</b>
            <small>Cost</small>
          </div>
        </div>
      ))
      }
    </div>
  )
}

export default HistoryOfBookings;
import React, {useContext, useEffect, useState} from "react";
import './search.scss';
import { bookingApi, getPins } from "../../services/Pins";
import { useNavigate } from "react-router-dom";
import {UserContext} from "../../Auth";
const date = new Date();
const Search =  ()=>{
  const [ search, setSearch ] = useState(null);
  const [ error, setError] = useState('');
  const [ success, setSuccess] = useState('');
  const [ loading,setLoading ] = useState(true);
  const navigate =  useNavigate();
  const { state, loggedIn} =  useContext(UserContext);
  const [ booking, setBooking] = useState({
    slotId:'',
    city:'',
    subcity:'',
    type:'',
    slot:null,
    time:'',
    cost:null,
    timeout:null,
    email:''
  })
  const bookSlot = async (slot,type,cost)=>{
    setBooking((prevBooking)=>{
      return  {
        ...prevBooking,
        type:type,
        slot:slot.slot,
        time:slot.time,
        timeout:slot.timeout,
        cost:cost
      }
    })
  }
  const [ searchState, setSearchState] =  useState({
    subcities:null,
    subcity:null,
  })
  const updateSearch = (field,value,fstate,data)=>{
    setSearchState((prevSearch)=>{
      const updated = {
        ...booking,
        [field]:value
      }
      setBooking(updated);
      return {
        ...prevSearch,
        [fstate]:data
      }
    })
  }
  const back = ()=>{

    if(booking.slot){
      setBooking((prevBooking)=>{
        return {
          ...prevBooking,
          type:'',
          slot:null,
          time:'',
          cost:null
        }
      })
      return;
    }
    if(booking.subcity){
      setBooking((prevBooking)=>{
        setSearchState((prevSearch)=>{
          return {
            ...prevSearch,
            subcity:null,
          }
        })
        return {
          ...prevBooking,
          subcity:''
        }
      })
      return;
    }

    if(booking.city){
      setBooking((prevBooking)=>{
        setSearchState((prevSearch)=>{
          return {
            ...prevSearch,
            subcities:null,
          }
        })
        return {
          ...prevBooking,
          city:''
        }
      })
    }
  }
  const bookHandle = async(e)=>{
    e.preventDefault();
    if (!state.email) {
      navigate('/login')
      return
    }
    setLoading(true);
    const { error, data }  = await bookingApi(booking);
    if(error){
      setError(data.message);
      setTimeout(() => {
        setError('')
      }, 2000);
      return;
    }
    setSuccess('Booked slot  succesfully');
    setTimeout(() => {
      setSuccess('');
      setLoading(false);
      navigate('/history')
    }, 2000);
    return ;
  }
  const fetchCities =  async ()=>{
    const { code, data } = await getPins();
    setLoading(false);
    setSearch((data.available));
  }
  useEffect(()=>{
    fetchCities();
  },[])
  return (
    <div className="searchpage">
      {booking.city && <div className="mainhead">
        {booking.city && booking.city+booking.slotId +">>"}
        {booking.subcity && booking.subcity+">>"}
        {booking.type && booking.type+">>"}
        {booking.time && booking.time}
      </div>}
      <div className="middle">
        {booking.city && <span onClick={back}>Back</span>}
        <h3>Select City </h3>
        <div className="error">{error}</div>
        <div className="success">{success}</div>
        {loading &&  <div>Loading....</div>}
      </div>
      <div className="content">
        {  booking?.slot &&
          <form className="box" onSubmit={bookHandle}>
            <div className="up">Booking Receipt</div>
            <div className="mid">
              <div className="left">
                <div className="row">
                  <label htmlFor="">City</label>
                  <span>{booking.city}</span>
                </div>
                <div className="row">
                  <label htmlFor="">Subcity</label>
                  <span>{booking.subcity}</span>
                </div>
                <div className="row">
                  <label htmlFor="">Type</label>
                  <span>{booking.type}</span>
                </div>
                <div className="row">
                  <label htmlFor="">Slot</label>
                  <span>Slot no {booking.slot}</span>
                </div>
                <div className="row">
                  <label htmlFor="">Expires</label>
                  <span>{booking.timeout}<sup>th</sup> hour</span>
                </div>
              </div>
              <div className="right">
                <div>Time</div>
                <div><h3>{booking.time}</h3></div>
                <div>Cost</div>
                <div><b><h1>{booking.cost}/-</h1></b></div>
              </div>
            </div>
            <div className="down">
              <input type="button" value="Cancel" onClick={back} />
              <input type="submit" value={loading?"Booking":"Book"} />
            </div>
          </form>

        }
        {
          searchState.subcity && !booking.slot &&
          <div className="slots">
            <div className="slot">
              <div className="head">
                <span className="title">Fast Charging Slots</span>
                <div>
                  <span className="avail">Available</span>
                  <span className="booked">Booked</span>
                <span className="postTimeout">Post Timeout </span>

                </div>
              </div>
              <div className="timings">
                {
                  searchState.subcity.fast.slots.map((each,index)=>(
                    <span key={index}
                    className={each.isBooked?"booked":date.getHours()>=each.timeout-1?"postTimeout":"avail"}
                    onClick={()=>each.isBooked?null:date.getHours()>=each.timeout-1?null:bookSlot(each,"fast",searchState.subcity.fast.cost)}
                    >{each.time}
                    </span>
                  ))
                }
              </div>
            </div>
            <div className="slot">
            <div className="head">
              <span className="title">Normal Charging Slots</span>
              <div>
                <span className="avail">Available</span>
                <span className="booked">Booked</span>
                <span className="postTimeout">Post Timeout</span>
              </div>
            </div>
            <div className="timings">
              {

                searchState.subcity.normal.slots.map((each,index)=>(
                  <span key={index}
                  className={each.isBooked?"booked":date.getHours()>=each.timeout-1?"postTimeout":"avail"}
                  onClick={()=>each.isBooked?null:date.getHours()>=each.timeout-1?null:bookSlot(each,"normal",searchState.subcity.normal.cost)}
                  >{each.time}
                  </span>
                ))
              }
            </div>
          </div>
        </div>
        }
        {
          booking.city && !booking.subcity && searchState.subcities && searchState.subcities.map((each,index)=>(
            <div className="each" key={index} onClick={()=>updateSearch('subcity',each.name,"subcity",each)}>
              <h2>{each.name}</h2>
              <span>Available <b>{each.available}</b></span>
              <div className="row">
                <span>Fast Cost: <b>{each.fast.cost}</b></span>
                <span>Normal Cost: <b>{each.normal.cost}</b></span>
              </div>
            </div>
          ))
        }
      </div>
      {
        !booking?.city &&
        <div className="content">
        {
          search && search.map((each,index)=>(
            <div className="each" key={index} onClick={()=>updateSearch("city",each.city,"subcities",each.subcities)}>
              <h2>{each.city}</h2>
              <div className="row">
                <span>Available <b>{each.available}</b></span>
                <span>Subcities <b>{each.subcities.length}</b></span>
              </div>
            </div>
          ))
        }
        </div>
      }
    </div>
  )
}

export default Search;

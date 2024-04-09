import React from 'react';
import './App.css';
import { HashRouter as Router, Route,Routes } from 'react-router-dom';
import { HistoryOfBookings, Home, Login, Profile, Register, Search } from './pages';
import Sidebar from './components/Sidebar/Sidebar';

const App  = ()=>{
  return (
    <div className='app'>
      <Router>
        <Sidebar/>
        <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/profile' element={<Profile />} />
          <Route path='/search' element={<Search />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/history' element={<HistoryOfBookings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

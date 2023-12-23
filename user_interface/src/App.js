import React, { useContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { Home, Login, Profile, Register, Search } from './pages';
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;

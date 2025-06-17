import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Dashboard from './components/Dashboard.js';
import 'react-toastify';
import PrivateRoute from './components/authenticate.js';

function App() {
  return (
      <div>
        <Routes>
        <Route path='/' element={<Navigate to='/login'/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashboard/' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
        </Routes>
      </div>
  );
}

export default App;

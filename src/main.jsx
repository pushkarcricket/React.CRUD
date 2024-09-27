import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateUser from './CreateUser.jsx';

import UserListing from './UserListing.jsx';
import App1 from './crud-my/App1.jsx';
import CreateUser1 from './crud-my/CreateUser1.jsx';
import 'boxicons'
import UserListing1 from './crud-my/UserListing1.jsx';
import App2 from './todo/App2.jsx';
import StopWatch from './Stopwatch/StopWatch.jsx';
import Use from './Use Effect/Use.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* <BrowserRouter>
    <Routes>
      <Route path='/' element={ <App/>}/>
      <Route path='/UserListing' element={
    <UserListing/>}/>
      <Route path='/create-user' element={<CreateUser/>}/>
    </Routes>
    
    </BrowserRouter> */}

  {/* <BrowserRouter>
  <Routes>
    <Route path='/' element={<App1/>}/>
    <Route path='/creat.user' element={<CreateUser1/>}/>
    <Route path='/user.listing' element={<UserListing1/>}/>
  </Routes>
  </BrowserRouter> */}

  {/* <StopWatch/> */}
  {/* <Use/> */}

<App/>

    
    
   
    
  </React.StrictMode>,
)

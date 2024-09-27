import React from 'react'
import CreateUser1 from './CreateUser1'
import { useNavigate } from 'react-router-dom'
import UserListing1 from './UserListing1';


export default function App1() {
    const navigate=useNavigate();
  return (
    <div>
        <h1> welcome to my crud app</h1>
        <button onClick={()=> navigate("/creat.user")}>Add user</button>
      
        
    </div>
  )
}

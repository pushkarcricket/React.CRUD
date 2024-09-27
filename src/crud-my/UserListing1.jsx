import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';


export default function UserListing1() {
  const navigate=useNavigate()
  const [user, setuser]=useState([])
   const [name, viewName]= React.useState(false)
  const getAllUsers = async ()=>{
    await axios
    .get("http://localhost:5005/users")
    .then((res)=>{
      console.log(res)
      setuser(res.data)
    }).catch((err)=>{
      console.log(err);
    })
  };

  const deleteUser = async(e)=>{
    await axios.delete(`http://localhost:5005/users/${e.id}`)
    .then((res)=>{
      toast.success("user is deleted!")
      viewName(!name)

    })
    .catch((err)=>{
      toast.error("something is missing")
    })

  }
  React.useEffect(()=>{
    getAllUsers()
  
  },[name])

  return (
    <div className='container my-5' >
      <button onClick={()=>navigate("/creat.user")}> ADD new user</button>
      <table>
        <thead style={{backgroundColor:"yellow"}}>
          <tr >
          
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Number</th>
            <th>Address</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
          {
            user.map((e)=>{
              console.log(e.Name)
              return <tr  key={e.id}style={{backgroundColor:"red"}}>
                <td>{e.Name}</td>
                <td>{e.Email}</td>
                <td>{e.Password}</td>
                <td>{e.Number}</td>
                <td>{e.Address}</td>
                <td><span style={{cursor:"pointer"}}><box-icon name='pencil'></box-icon></span>
                   <span style={{cursor:"pointer"}} onClick={()=> deleteUser(e)}><box-icon name='trash-alt' type='solid' color='#ffffff'></box-icon></span>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
      <Toaster/>
    </div>
  )
}

import React from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import { Toaster,toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function CreateUser1() {

    const navigate=useNavigate();
    const myFormik=useFormik({
        initialValues : {
            Name : "",
            Email: "",
            Password:"",
            Number: "",
            Address:""
        },
         onSubmit :async(values)=>{
            await axios.post ("http://localhost:5005/users",values)
            .then((res)=>{
                toast.success("your form is submittes")
                setTimeout(()=>{
                    navigate("/user.listing")

                },1000)
            }).catch((err)=>{
                toast.error("nothing is working on it")
            })

         }

    })

    
  return (
    <div>
        <form onSubmit={myFormik.handleSubmit}>
            <div>
            <label htmlFor="text">Name</label>
            <input type="text" 
            name='Name'
            onChange={myFormik.handleChange}
            value={myFormik.values.Name}
            />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email"
                name='Email'
                onChange={myFormik.handleChange}
                value={myFormik.values.Email}
                 />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" 
                name='Password'
                onChange={myFormik.handleChange} 
                value={myFormik.values.Password}
                />
            </div>
            <div>
                <label htmlFor="number">Number</label>
                <input type="number"
                name='Number'
                  onChange={myFormik.handleChange}
                  value={myFormik.values.Number}

                 />
            </div>
            <div>
                <input type="submit"  />
            </div>
        </form>
        <Toaster/>
    </div>
  )
}

import React, { useEffect, useState } from 'react'

export default function Use() {
    const[first, setFirst]=useState("this is normal data");
    const[second, setSecond]=useState("this is large data")

     useEffect(()=>{
        console.log("service component is created");


        return ()=>{
            console.log("service component is deleted")
        }
     })


  return (
    <div>
        <h1>{first}</h1>
        <button onClick={()=> setFirst("normal data has been changed")}>Change Normal</button>


        <h1>{second}</h1>
        <button onClick={()=>{
            setSecond("large data has been changed")
        }}>Change second</button>

    </div>
  )
}

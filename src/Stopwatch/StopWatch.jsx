import React, { useState } from 'react'

export default function StopWatch() {
    const[count,setCount]=useState(0);

    const start=setInterval( ()=>{
        setCount(count+1);
    }

    )
    

    const restart=()=>{
        if(count >= 0){
            setCount(0)

        }10000
    }
  return (
    <div>
        <h1>StopWatch</h1>
        <p> time:{count}</p>
        <button onClick={start}>start</button>
        <button >stop</button>
        <button onClick={restart}>restart</button>
    </div>
  )
}

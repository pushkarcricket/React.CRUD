import React from 'react'

export default function AddTodo() {
  return (
    <div><div className='col-6'>
    <input type="text"  placeholder='enter todo here'/>
    </div>
    <div  className='col-4'>
        <input type="date" />
    </div></div>
  )
}

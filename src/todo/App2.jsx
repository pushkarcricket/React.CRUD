import React from 'react'
import AppName from './AppName'
import AddTodo from './AddTodo'

export default function App2() {
  return (
    <div className='container text-center'>
        <AppName/>
        <AddTodo/>
        <div className='col-2'>
        <button>Add</button>
        </div>
        <div>
            <button>Delete</button>
        </div>

    </div>
  )
}

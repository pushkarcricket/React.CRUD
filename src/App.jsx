import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { useNavigate } from "react-router-dom";
import UserListing from "./UserListing";
import Parent from "./P to C/Parent";


 
 const App = ()=>{
// const run=(a)=>{
//   <h1>hi how are you</h1>
// }
 
//   const navigate = useNavigate();
  return(
    // <>
    // {/* <div className="container bg-dark">
    //   <h1 className="text-info text-center">Welcome to React Crud</h1>
    // </div>
    // <div className=" container text-center my-5">
    //   <button className="btn btn-outline-primary">Add a user</button>
    // </div> */}
    // <Parent/>
    // </>
    <div>
      <Parent name="pushkar kumar" age={27}></Parent>
    </div>
  )
}
 

 export default App;
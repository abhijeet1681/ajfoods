// HARDCODED DATA (class base Component) => UserClass.js
// HARDCODED DATA (function base component)
import { render } from "@testing-library/react";
import { useState } from "react";
import { jsx } from "react/jsx-runtime";

const User = ({name, district, country, email}) =>{
    const [count, setCount] = useState(1);
    // const [count2, setCount2] = useState(-1);
    return(
        <div className="function">
            <div>Name : {name}</div>
            <div>District : {district}</div>
            <div>Country : {country}</div>
            <div>email id : {email}</div>
            <div>Count : {count}</div>
            {/* <div>Count2 : {count2}</div> */}
             <button onClick={()=>{setCount(count+1)}}>Increase</button>
        </div>
    )
}

export default User;


// // API DATA
// import {useState} from 'react'

// const User = (prop) =>{
//     const [count, setCount] = useState(1);
//     return(
//         <div style={{border:"1px solid darkblue"}}>
//             <div>Name : {prop.name}</div>
//             <div>Country : {prop.country}</div>
//             <div>Email id : {prop.email}</div>
//             <div>Count : {count}</div>
//             <button onClick={()=>{setCount(count+1)}}>Increase</button>
//         </div>
//     )
// }

// export default User;



// Tips:
// 1. How to render jsx
// 2. Passing the props
// 3. Declaring the state variable
// 4. Declaring the multiple state variable
// 4. Updating the state variable


import { useState } from "react";

export const DerivedState =()=>{
    const [users, setUser] =useState([
        { name : "alice", age:25 , location : "Mumbai"},
        { name : "Rakesh", age:65, location : "Mumbai"},
        { name : "Harry", age:75, location : "Mumbai"},
        { name : "Mukesh", age:35, location : "Mumbai"},
    ])
    console.log(users);
    const userCount = users.length;
    const averageAge =users.reduce((accum, curElem) => accum + curElem.age, 0) / userCount;
    const userLocation =users.filter;
    return(
        <div className="main-div">
        <h1>Users List</h1>
        <ul>
            {users.map((curElem, index)=>(
                        <li key={index}>
                            {curElem.name} - {curElem.age} - {curElem.location}
                        </li>        
            ))}
        </ul>
        <p>Total User-{userCount}</p>
        <p>Average Age-{averageAge}</p>
        <p>User Location-{userLocation}</p>
        </div>
    )
}
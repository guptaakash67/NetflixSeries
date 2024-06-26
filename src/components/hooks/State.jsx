import "../Ev.css"
import { useState } from "react"
export const State =()=>{
    // let value = 0;
    // const handleButtonclick =()=>{
    //     value ++;
    //     console.log(value);
    // }

    // console.log(useState());

    
//  #useState Syntax
//  const[count,setCount]=useState(0)

    const [count, setCount] = useState(0);
    console.log("parent components rendered");
    const handleButtonclick =()=>{
        setCount (()=> count + 1 )
    }
    return(
        <>
            <section className="main-div">
            <h1>{count}</h1>
            <button onClick={handleButtonclick}>Increment</button>
            </section>
            <ChildComponent/>
        </>
    )
}

function ChildComponent(){
console.log("Child components rendered");
return(
    <div className="main-div">
        <h2>Child components</h2>
    </div>
)
}


import { useState } from "react"
import './useState.css'

export const Counter=()=>{
  const[count, setCount]= useState(0);
  const[step, setStep]= useState(0);

    const handleIncrement =()=>{
        setCount(()=> count + step )
    }

    const handleDecrement =()=>{
        setCount(()=> count - step )
    }

    const handleReset =()=>{
        setCount(0);
    }



    return(

        <div>
            <h1> useState challange on Increment & Decrement</h1>
        
        <p>
            Count: <span>{count}</span>
        </p>

        <div>
            <label>
                Step:
                <input type="number" value={step} onChange={(e)=> setStep(Number(e.target.value))}>
                </input>
            </label>
        </div>
      
        <div>
            <button className="btn" onClick={handleIncrement} disabled={ count >= 100}>Increment</button>
            <button className="btn" onClick={handleDecrement} disabled={ count <= 0}>Decrement</button>
            <button className="btn" onClick={handleReset}>Reset</button>
        </div>
        </div>
        
    )

}

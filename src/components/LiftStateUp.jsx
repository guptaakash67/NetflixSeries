import { useState } from "react"

export const LifStateUp = ()=>{
    const [inputValue, setInputValue]= useState("")
    return(
        <>
            <InputComponents inputValue={inputValue} setInputValue={setInputValue}/>
            <DisplayComponents inputValue={inputValue}/>
        </>
    )
}

const InputComponents =({inputValue, setInputValue})=>{
  
        return(
                <>
                    <input type="text" placeholder="Enter your name" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}></input>
                </>
        )
}

const DisplayComponents =({inputValue})=>{
    return(
        <>
            <p>The current value is: {inputValue}</p>
        </>
    )
}
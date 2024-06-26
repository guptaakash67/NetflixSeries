import "./Ev.css"

export const EventHandling =()=>{

    // function handleButtonClick (){
    //     alert("Hey I am onClick Event")
    // }

    const handleButtonClick  = (event)=>{
        // console.log(event)
        // console.log(event.target)
        // console.log(event.type)
        alert("Hey I am onClick Event")
    }
    // jab uska define karte hai usko parameter bolta hai
    const HandleWelcomeUser =(user)=>{
        console.log('Hey ${user}, Welcome');
    }
    return(
        <>
        {/* function components with named function */}
        <button onClick={handleButtonClick}>Click Me</button><br/>
        <button onClick={(event)=>handleButtonClick(event)}>Click Me 2</button><br/>
        {/* inline handlers */}
        <button onClick={(event)=> console.log(event)}>Inline Function</button><br/>
        {/* Function Components with Inline Arrow Function */}
        <button onClick={() => alert("Inline arrow function")}>Arrow Inline Function </button><br/>
        {/* Passing argument to event handlers */}
        {/* <button onClick={HandleWelcomeUser("Akash")}>Click Me</button> */}
        {/* //function call karte jo bhi value pass kare ho wo hai argument */}
        <button onClick={()=>HandleWelcomeUser("Akash")}>Click Me</button>
        <button onClick={()=>HandleWelcomeUser("Ram")}>Click Me</button>
        </>
    )
}
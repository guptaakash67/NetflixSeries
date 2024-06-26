import "./Ev.css"

export const EventProps =()=>{

    const HandleWelcomeUser =(user)=>{
            alert('Hey, ${user}');
    }
    const handleHover =()=>{
            alert('hey thanks for hovering me');
    }
      return (
        <>
            <WelcomeUser onClick={() => HandleWelcomeUser('Akash')}
                onMouseEnter={handleHover}
            />
        </>
      )
}

const WelcomeUser = ( props ) =>{
    const {onClick, onMouseEnter} =props
    const handleGreeting =()=>{
        console.log('Hey, WelcomeUser')
        onClick();
    }
    return(
        <>
        <button onClick={onClick}>click </button>
        <button onMouseEnter={onMouseEnter}>Hover me </button>
        <button onClick={handleGreeting}>Greeting </button> 
        </>
    )
}
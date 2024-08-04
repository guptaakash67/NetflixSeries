import { react } from "react"
import NetflixSeries  from "./components/NetflixSeries";
import "./components/Netflix.css"
import { EventHandling } from "./components/EventHandling";
import { EventProps } from "./components/EventProps";
import { EventPropagation } from "./components/EventPropagation";
import { State } from "./components/hooks/State.jsx"
import { DerivedState } from "./components/DerivedState.jsx";
import { LifStateUp } from "./components/LiftStateUp.jsx";
import { Counter } from "./hook/useState.jsx"





export const App =()=>{
  // return ( [<NetflixSeries key={1}/>, <NetflixSeries key={2}/>];
  return(
     // Fragment is use to remove extra nodes
   <section className="container"> 
   {/* <h1 className="card-heading">List of best Netflix Series</h1> */}
     {/* <NetflixSeries/> */}
     <Counter/>
     {/* <State/> */}
     {/* <EventPropagation/> */}
     {/* <EventProps/>*/}
     {/*<EventHandling/> */}
     {/* <DerivedState/> */}
     {/* <LifStateUp/> */}
  
  </section>
  );
};





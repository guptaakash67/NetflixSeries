import {  } from "react"
import NetflixSeries  from "./components/NetflixSeries";
import "./components/Netflix.css"


export const App =()=>{
  // return ( [<NetflixSeries key={1}/>, <NetflixSeries key={2}/>];
  return(
     // Fragment is use to remove extra nodes
   <section className="container"> 
   <h1 className="card-heading">List of best Netflix Series</h1>
     <NetflixSeries/>
  </section>
  );
};





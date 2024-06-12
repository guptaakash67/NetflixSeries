 //it is a component not a function
  //   const name = " Harry potter"
  //   const rating = "9.5/10"
  //   const summary = "   He becomes close friends with Ron and Hermione, who spend most of their time together as they are all in Gryffindor House. "
  //  " Harry develops a great interest in flying on a broomstick and also discovers the game of Quidditch. He finds out about his history, the death of his parents, and the Dark Wizard called Lord Voldemort, who is responsible for it."
  //   "He also figures out the origin of the famed scar he got from this confrontation with Lord Voldemort. He discovers several secrets and events surrounding a mysterious object which prompt him to attempt and solve them with his friends Ron and Hermione."
    
  //  {/* //* conditionals in JSX - you can either return a jSX early or you can use ternary operators for conditionals in JSX.  */}
  //   let age = 20;
  
  
  
  //   const returnGenre =()=> {
  //     const nickname  = "harry maguire";
  //     return nickname;
  //   }
  
  //   // 1 dont repaeat your self
  //   // if (age > 17){
  //   //   return(
  //   //     <div>
  //   //     <img src="harry.jpg" alt="harry.jpg" width={300} height={300}></img>
  //   //     <h2> Name: { name } </h2>
  //   //     <h3> Rating no: { rating }{3 + 10} </h3>  
  //   //    <summary>  summary : {summary} </summary>
  //   //    <p> genre: {returnGenre()}</p>
  //   //    <button>Not available</button>
  //   //    </div>
  //   //   )
  //   // }
  
  //   // 2: but this violates dry (do not repeat yourself)
  // //   return (
  // //     <div>
  // //     <img src="harry.jpg" alt="harry.jpg" width={300} height={300}></img>
  // //     <h2> Name: {name } </h2>
  // //     <h3> Rating no: { rating }{3 + 10} </h3>  
  // //    <summary >  summary : {summary} </summary>
  // //    <p> genre: {returnGenre()}</p>
  // //       <button>{age >= 19 ? "watch now" : "not available"}</button>
  // //    </div>
  // //   )
  // // }
  
  // //3 sometimes you might have very complex if conditions, for that there are some solution
  
  // // let canWatch = "not watch"
  // // if (age >= 19) canWatch = "watch now";
  
  // // return (
  // //   <div>
  // //   <img src="harry.jpg" alt="harry.jpg" width={300} height={300}></img>
  // //   <h2> Name: {name } </h2>
  // //   <h3> Rating no: { rating }{3 + 10} </h3>  
  // //  <summary >  summary : {summary} </summary>
  // //  <p> genre: {returnGenre()}</p>
  // //     <button>{canWatch}</button>
  // //  </div>
  // // )
  // // }
  
  // // 4: solution can be better as it prevents cluttering of variables utside and encapsulations such logic inside a function
  // // one another benefit is also that, you can also pass some dynamic values as function parameter
  
  // const canWatch = ()=>{
  //   if (age >= 18) return "watch now";
  //   return " not available"
  // }
  // return (
  //   <div>
  //   <img src="harry.jpg" alt="harry.jpg" width={300} height={300}></img>
  //   <h2> Name: {name } </h2>
  //   <h3> Rating no: { rating }{3 + 10} </h3>  
  //  <summary >  summary : {summary} </summary>
  //  <p> genre: {returnGenre()}</p>
  //     <button>{canWatch()}</button>
  //  </div>
  // )
  // }

  // export default NetflixSeries ;

// export const Header = ()=>{
// return <p>List of Best Netflix Series </p>
//   }
// export const Footer = ()=>{
// return <p>All Copyright Reserved by @akashGupta</p>
//   }

import seriesData from "../api/seriesData.json";	
import SeriesCard from "../components/SeriesCard";


const NetflixSeries =()=>{
  return (
    <ul className="grid grid-three-cols">
      {
        seriesData.map((curElem) => {
         return<SeriesCard key={curElem.id} curElem = {curElem}/>
        }
        )
      }
    </ul>
  )
}

// export const Header =()=>{
//   return <p>List of Netflix Series</p>
// }

// export const Footer =()=>{
//   return <p>All copyright reversed @akashGupta</p>
// }


export default NetflixSeries;

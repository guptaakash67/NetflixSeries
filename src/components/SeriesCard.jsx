 import "../components/Series.css"



export const SeriesCard = (props)=>{
  const {id, img_url, name, rating, summary, cast, genre, watch_url} = props.curElem;  //destructuring jsx

  const btn = {
    backgroundColor: rating >= 8.5 ? "#7dcea0" : "#f7dc6f",
  };

  const ratingClass = rating >= 8.5 ? "super_hit" : "average";
  

        return (
        <li className="card">
        <div >
        <img src={img_url}
         alt="img" width="100%" height="40%">
         </img>
         </div>

      <div className=" card-footer button card-content "> 
      <div className="flex flex-col gap-3 px-5 py-5">
      <h2>Name:{name}</h2>
      <h3 style={{color:"#7dcea0"}}>Rating no: <span className={ratingClass}>{rating}</span></h3>  
       <summary style={{margin:"1.2rem 0"}} className="text-3xl font-bold underline text-cyan-900">Summary:{summary} </summary>
       <p>Genre:{genre}</p>
       <p>Cast:{cast}</p>
       <a href={watch_url}target="_blank">
       <button style={{backgroundColor: rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}} className={btn}>Watch Now</button>
       </a>
       </div>
       </div>
       </li>
        )
        }
  

export default SeriesCard;

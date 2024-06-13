import "../components/Series.css"

export const SeriesCard = (props)=>{
  const {id, img_url, name, rating, summary, cast, genre, watch_url} = props.curElem;  //destructuring jsx
        return (
        <li className="card card-header card-body card-footer button">
        <div>
        <img src={img_url}
         alt="img" width="100%" height="40%">
         </img>
         </div>

      <div >
      <h2>Name:{name } </h2>
      <h3 >Rating no:{rating } </h3>  
       <summary style={{margin:"1.2rem 0"}}>Summary:{summary} </summary>
       <p>Genre:{genre}</p>
       <p>Cast:{cast}</p>
       <a target="_blank">
       <button>Watch Now</button>
       </a>
       </div>
       </li>
        )
        }
  

export default SeriesCard;

import "./featured.css"
import { useNavigate } from "react-router-dom"
import useFetch from "../hooks/useFetch"

function Featured() {

  const navigate = useNavigate()
  const {data,loading,error} = useFetch("http://localhost:8080/api/hotels/countByCity?featured=true")

  return( 
    <>{loading ? <h1>Loading...</h1> : 
      <div className="featured">
        {data.map(property => {
          const {_id,count} =property
          return (
            <div className="featured__item" onClick={()=>navigate('/hotels')}>
              <img src="https://cf.bstatic.com/xdata/images/city/square250/653240.webp?k=6b015a87c8443039a685038e97dd58dab6a8748078948b27cca7d1a5fcef308d&o=" alt="" className="featured__img"/>
              <div className="featured__titles">
                <h2> {_id}</h2>
                <h3>{count} properties</h3>
              </div>
            </div>
        )})}
      </div>
    }</>
)}

export default Featured
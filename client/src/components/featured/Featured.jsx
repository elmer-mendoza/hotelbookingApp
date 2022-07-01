import "./featured.css"
import { Link } from "react-router-dom"

function Featured() {
  return (
    <div className="featured"><Link to={'./hotels'}>
      <div className="featured__item">
        <img src="https://cf.bstatic.com/xdata/images/city/square250/653240.webp?k=6b015a87c8443039a685038e97dd58dab6a8748078948b27cca7d1a5fcef308d&o=" alt="" className="featured__img"/>
        <div className="featured__titles">
          <h2> Dublin</h2>
          <h3>123 properties</h3>
        </div>
      </div></Link>
      <div className="featured__item">
        <img src="https://cf.bstatic.com/xdata/images/city/square250/653240.webp?k=6b015a87c8443039a685038e97dd58dab6a8748078948b27cca7d1a5fcef308d&o=" alt="" className="featured__img" />
        <div className="featured__titles">
          <h2>Dublin</h2>
          <h3>123 properties</h3>
        </div>
      </div>
      <div className="featured__item">
        <img  src="https://cf.bstatic.com/xdata/images/city/square250/653240.webp?k=6b015a87c8443039a685038e97dd58dab6a8748078948b27cca7d1a5fcef308d&o=" alt="" className="featured__img"/>
        <div className="featured__titles">
          <h2>Dublin</h2>
          <h3>123 properties</h3>
        </div>
      </div>
    </div>
  )
}

export default Featured
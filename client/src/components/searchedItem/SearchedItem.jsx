import "./searchedItem.css"
import { useNavigate } from "react-router-dom"

function SearchedItem({property}) {
 
  const {name,distance,_id} = property
  const navigate = useNavigate()

  return (
    <div className="searchedItem">
      <img src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" alt="" />
      <div className="searchedItem__desc">
        <h1 className="searchedItem__title">{name}</h1>
        <span className="searchedItem__distance">{distance}m from center</span>
        <span className="searchedItem__taxiOption">Free airport taxi</span>
        <span className="searchedItem__subtitle">Studio Apartment with Air conditioning</span>
        <span className="searchedItem__features">Entire studio • 1 bathroom • 21m² 1 full bed</span>
        <span className="searchedItem__cancelOption">Free cancellation</span>
        <span className="searchedItem__cancelOptionSubtitle">You can cancel later, so lock in this great price today!</span>
      </div>
      <div className="searchedItem__details">
        <div className="searchedItem__rating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="searchedItem__detailTexts">
          <span className="searchedItem__price">$123</span>
          <span className="searchedItem__taxOption">Includes taxes and fees</span>
          <button className="searchedItem__checkButton" onClick={()=>navigate(`/hotels/find/${_id}`)}>See availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchedItem
import useFetch from "../hooks/useFetch"
import "./featuredProperties.css"


function FeaturedProperties() {

  const {data,loading,error} = useFetch("http://localhost:8080/api/hotels?featured=true")

  console.log(data)

  return (
    <>{loading ? <h1>Loading...</h1> :
      <div className='featuredProperties'>
        {data.map((property) => {
          const {name,city,cheapestPrices} = property
          return(
            <div className="featuredProperties__item">
              <img src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" alt=""  />
              <span className="featuredProperties__name">{name}</span>
              <span className="featuredProperties__city">{city}</span>
              <span className="featuredProperties__name">Starting at ${cheapestPrices}</span>
              <div className="featuredProperties__rating">
                <button>8.9</button>
                <span>Excellent</span>
              </div>
            </div>
          )
        })}
      </div>
    }</>
  )
}

export default FeaturedProperties

import "./propertyType.css"
import useFetch from "../hooks/useFetch"

function PropertyType() {

  const {data,loading,error} = useFetch("http://localhost:8080/api/hotels/countByType")

  return(
    <>{loading ? <h1>Loading...</h1> : 
      <div className='propertyType'>
        {Object.keys(data).map(propertyType => {
          const key = propertyType
          const count =data[key]
          return (
              <div className="propertyType__item">
                <img src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" alt="" />
                <h2>{propertyType}</h2>
                <p>{count} {propertyType}{count>1?"s":""}</p>
              </div>
          )
        })
        }
      </div>
    }</>
  )
}

export default PropertyType
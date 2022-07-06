import { faArrowLeft,faArrowRight, faLocationDot, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import Footer from "../../components/footer/Footer"
import MailList from "../../components/mailList/MailList"
import "./hotel.css"

const photos = [
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
  },
];

function Hotel() {
    const [isImageSliderOpen,setIsImageSliderOpen] = useState(false)
    const [slideNumber,setSlideNumber] = useState(0)

    const handleImagePreview =(i)=>{
      console.log(i)
      setIsImageSliderOpen(true);
      setSlideNumber(i)
    }

    const handleImageSlider = (operation) => {
      console.log(slideNumber)
      let newSlideNumber;
      if (operation==="l"){ newSlideNumber = slideNumber === 0 ? 5 :slideNumber -1 }
      if (operation==="r"){ newSlideNumber = slideNumber === 5 ? 0 :slideNumber + 1 }
      setSlideNumber(newSlideNumber)
     }

  return (
    <div className="hotel__container">
      {isImageSliderOpen && 
      <div className="hotel__imageSlider">
        <div className="hotel__imageSliderWrapper" onMouseLeave={()=>setIsImageSliderOpen(false)}>
          <FontAwesomeIcon onClick={()=> setIsImageSliderOpen(false)} icon={faXmark} className="hotel__imageSliderXmark"/>
          <FontAwesomeIcon onClick={()=>handleImageSlider('l')} icon={faArrowLeft} className="hotel__imageSliderLeftArrow"/>
          <img src={photos[slideNumber].src} alt="" />
          <FontAwesomeIcon onClick={()=>handleImageSlider('r')} icon={faArrowRight} color="white" className="hotel__imageSliderRightArrow"/>
        </div>
      </div>}
      <div className="hotel__wrapper">
        <button className="hotel__bookNow">
          Reserve or Book Now!
        </button>
        <h1 className="hotel__title">Grand Hotel</h1>
        <div className="hotel__address">
          <FontAwesomeIcon icon={faLocationDot}/>
          <span>Elton St 125  New york</span>
        </div>
        <span className="hotel__distance">
          Excellent location  500 from center
        </span>
        <span className="hotel__priceHighLight">
          Book a stay over $114 at this property and get a free airport taxi
        </span>
        <div className="hotel__images">
          {
            photos.map((photo,i) => 
              <div className="hotel__imageWrapper">
                <img src={photo.src} alt="" onClick={()=> handleImagePreview(i)}/>
              </div>
            )
          }
        </div>
        <div className="hotel__details">
          <div className="hotel__detailText">
            <h1 className="hotel__detailTitle">Stay in the heart of Krakow</h1>
            <p className="hotel__desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque accusamus, voluptas sed qui recusandae blanditiis, laboriosam nostrum quo quos similique necessitatibus autem nulla ea porro dolor reprehenderit facilis ducimus cumque pariatur possimus corrupti corporis numquam id repellat. Fuga iure vitae modi reiciendis, quis impedit, magni, deleniti natus tenetur voluptatem harum!</p>
          </div>
          <div className="hotel__detailPrice">
            <h1>Perfect for a 9-night stay!</h1>
            <span>
              Located in the real heart of Krakow, this property has an excellent location score of 9.8!
            </span>
            <h2>
              <b>$945</b> (9 nights)
            </h2>
            <button>Reserve or Book Now!</button>
          </div>
        </div>
      </div>
      <MailList/>
      <Footer/>
    </div>
  )
}

export default Hotel
import './navbar.css'
import { headerIcons } from "../../data/data"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const NavList = () => {
  return(
    headerIcons.map(({title,icon},i)=> 
      <div key={i} className="navbar__listItem active">
        <FontAwesomeIcon icon={icon}/>
        <span className="navbar__listItemTitle">{title}</span>
      </div>
    )
  )
}


const Navbar = () => {

  const navigate=useNavigate()

  return (
    <>
      <div className="navbar">
        <div className="navbar__container">
          <span className="navbar__logo"><Link to={'./'}>BM Square Booking</Link></span>
          <div className="navbar__items">
            <button className="navbar__button navbar__button--register">Register</button>
            <button className="navbar__button navbar__button--login" onClick={() => navigate('/auth/login')}>Login</button>
          </div>
        </div>
      </div>
      <div className="navbar">
        <div className="navbar__container">
          <div className="navbar__list">
            <NavList/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar


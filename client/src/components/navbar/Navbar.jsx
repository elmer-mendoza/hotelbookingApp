import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <span className="navbar__logo">BM Square Booking</span>
        <div className="navbar__items">
          <button className="navbar__button navbar__button--register">Register</button>
          <button className="navbar__button navbar__button--login">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar


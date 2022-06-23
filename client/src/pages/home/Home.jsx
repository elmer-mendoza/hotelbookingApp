
import Header from '../../components/header/Header.jsx'
import './home.css'
import Featured from '../../components/featured/Featured.jsx'

function Home() {
  return (
    <div>
      <Header/>
      <div className="home__container">
        <Featured/>
        <Featured/>
      </div>

    </div>
  )
}

export default Home

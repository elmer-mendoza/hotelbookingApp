
import Header from '../../components/header/Header.jsx'
import './home.css'
import Featured from '../../components/featured/Featured.jsx'
import PropertyList from '../../components/propertyList/PropertyList.jsx'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties.jsx'
import MailList from '../../components/mailList/MailList.jsx'
import Footer from '../../components/footer/Footer.jsx'

function Home() {
  return (
    <div>
      <Header/>
      <div className="home__container">
        <Featured/>
        <h1 className="home__title">Browse by property type</h1>
        <PropertyList/>
        <h1 className="home__title">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>

    </div>
  )
}

export default Home

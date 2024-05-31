import Hero from "../components/Hero"
import Carousel from "../components/Carousel"
import Brands from "../components/Brands"
import Description from "../components/Description"
import Footer from "../components/Footer/Footer"

const Home = () => {
  return (
    <div className="bg-b-100">
      <Hero />
      <Carousel />
      <Brands />
      <Description />
      <Footer />
    </div>
  )
}

export default Home

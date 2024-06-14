import Hero from "../components/Home/Hero.jsx"
import Brands from "../components/Home/Brands.jsx"
import Description from "../components/Home/Description.jsx"

const Home = () => {
  	return (
    	<main className="relative bg-b-100">
      		<Hero />
      		<Brands />
      		<Description />

      		<div className='absolute max-md:hidden right-0 top-0 bg-b-400 h-full w-[70px] lg:w-[90px]' />
            <div className='absolute max-md:hidden right-[70px] xl:right-[90px] top-0 bg-b-300 h-full w-[70px] xl:w-[90px]' />
    	</main>
  	)
}

export default Home

import Hero from "../components/Hero"
import Carousel from "../components/Carousel"
import Brands from "../components/Brands"
import Description from "../components/Description"

const Home = () => {
	return (
		<div className="relative bg-b-100">
			<Hero />
			<Carousel />
			<Brands />
			<Description />

			<div className='absolute max-md:hidden right-0 top-0 bg-b-400 h-full w-[70px] lg:w-[90px]' />
			<div className='absolute max-md:hidden right-[70px] xl:right-[90px] top-0 bg-b-300 h-full w-[70px] xl:w-[90px]' />
		</div>
	)
}

export default Home

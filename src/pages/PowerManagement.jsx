import ProductsGrid from "../components/ProductsGrid"
import EcostruxurePMS from '../components/PowerManagement/EcoStruxurePMS'

const PowerManagement = () => {
  return (
    <div className='bg-b-100'>
      <Header />
      <Intro />
      <EcostruxurePMS />
      <ProductsGrid />
    </div>
  )
}

const Header = () => {
  return (
    <div id="header" className='relative left-0 top-0 w-full h-[200px] xl:h-[460px] bg-b-200 p-10 flex items-center'>
        <h1 className='absolute bottom-1/3 left-[5%] text-3xl lg:text-6xl font-bold'>
          Power Management System
        </h1>
    </div>
)
}

const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center my-10 py-10 md:w-3/4 mx-auto">
          <div className="md:w-2/5 mx-10 my-5 font-bold text-xl xl:text-3xl md:text-right">POWER MANAGEMENT <br className="hidden md:block" />SYSTEM (PMS)</div>
          <div className="w-[4px] bg-b-800" />
          <div className="md:w-3/5 mx-10 flex items-center xl:text-lg"><p>At Ingenium, we specialize in cutting-edge power management systems (PMS) designed to automate and control electrical distribution, energy usage, and power quality. Ideal for any facility that relies on high-quality power, our solutions serve critical infrastructure like hospitals, data centers, airports, industrial plants, and commercial buildings.</p></div>
    </div>
  )
}

export default PowerManagement

import ProductsGrid from "../components/ProductsGrid"
import EcostruxurePMS from '../components/PowerManagement/EcoStruxurePMS'
import { pmsproducts } from "../constants"
import { pmsarch } from "../assets"

const PowerManagement = () => {
  return (
    <main className='bg-b-100 pb-10'>
      <Header />
      <Intro />
      <EcostruxurePMS />
      <article className='relative flex flex-col items-center p-10'>
        <h1 className='relative text-b-900 font-semibold text-3xl max-xl:text-3xl mb-4'>ARCHITECTURE</h1>
        <div className='relative flex justify-center'>
          <img src={pmsarch} className='rounded-3xl z-10 border-4 border-b-800'/>
          <div className='absolute w-full h-full top-[30px] left-[30px] bg-b-800 rounded-3xl' />
        </div> 
      </article>
      <ProductsGrid productlist={pmsproducts}/>
    </main>
  )
}

const Header = () => {
  return (
    <section id="header" className='relative left-0 top-0 w-full h-[200px] xl:h-[460px] bg-b-200 p-10 flex items-center border-b-[20px] border-b-800 rounded-bl-3xl rounded-br-3xl ' style={{backgroundImage: `url()`, backgroundSize:'cover', backgroundPosition:'0% 0%'}}>
        <h1 className='absolute bottom-16 left-[10%] text-3xl lg:text-6xl font-bold text-b-900'>
          Power Management <br/> System
        </h1>
    </section>
)
}

const Intro = () => {
  return (
    <article className="flex flex-col md:flex-row justify-center my-10 py-10 md:w-3/4 mx-auto">
          <div className="md:w-2/5 mx-10 my-5 font-semibold text-xl xl:text-3xl md:text-right text-b-900">POWER MANAGEMENT <br className="hidden md:block" />SYSTEM <span className="text-black">(PMS)</span></div>
          <div className="w-[4px] bg-black" />
          <div className="md:w-3/5 mx-10 flex items-center xl:text-[17px]"><p>At Ingenium, we specialize in cutting-edge power management systems (PMS) designed to automate and control electrical distribution, energy usage, and power quality. Ideal for any facility that relies on high-quality power, our solutions serve critical infrastructure like hospitals, data centers, airports, industrial plants, and commercial buildings.</p></div>
    </article>
  )
}

export default PowerManagement

import EcostruxureFire from "../components/SafetyandSecurity/EcostruxureFire"
import HikvisionCCTV from "../components/SafetyandSecurity/HikvisionCCTV"
import HikvisionAC from "../components/SafetyandSecurity/HikvisionAC"
import ProductsGrid from "../components/ProductsGrid"

const SafetyandSecurity = () => {
  return (
    <div className="bg-b-100">
      <Header />
      <Intro />
      <EcostruxureFire />
      <ProductsGrid />
      <HikvisionCCTV />
      <ProductsGrid />
      <HikvisionAC />
      <ProductsGrid />
    </div>
  )
}

const Header = () => {
  return (
    <div id="header" className='relative left-0 top-0 w-full h-[200px] xl:h-[460px] bg-b-200 p-10 flex items-center border-b-[20px] border-b-800 rounded-bl-3xl rounded-br-3xl'>
        <h1 className='absolute bottom-16 left-[10%] text-3xl xl:text-6xl font-bold text-b-900'>
          Safety & Security <br /> Systems
        </h1>
    </div>
)
}

const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center my-10 py-10 md:w-3/4 mx-auto">
          <div className="md:w-2/5 mx-10 my-5 font-semibold text-xl xl:text-3xl md:text-right text-b-900">SAFETY & <br className="hidden md:block" />SECURITY</div>
          <div className="w-[4px] bg-black" />
          <div className="md:w-3/5 mx-10 flex items-center xl:text-[17px]"><p>At Ingenium, we specialize in cutting-edge safety and security systems designed to protect your facility and its occupants. Our systems ensure comprehensive protection through advanced monitoring, access control, and real-time threat detection, enhancing the overall safety and security of your operations.</p></div>
    </div>
  )
}

export default SafetyandSecurity

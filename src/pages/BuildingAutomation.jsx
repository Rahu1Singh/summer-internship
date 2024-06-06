import EcostruxureBMS from "../components/BuildingAutomation/EcostruxureBMS"
import EcostruxureBOS from "../components/BuildingAutomation/EcostruxureBOS"
import ProductsGrid from "../components/ProductsGrid"

const BuildingAutomation = () => {
  return (
    <div className="bg-b-100">
      <Header />
      <Intro />
      <EcostruxureBMS />
      <ProductsGrid />
      <EcostruxureBOS />
      <ProductsGrid />
    </div>
  )
}

const Header = () => {
  return (
    <div id="header" className='relative left-0 top-0 w-full h-[200px] xl:h-[460px] bg-b-200 p-10 flex items-center'>
        <h1 className='absolute bottom-1/3 left-[5%] text-5xl xl:text-6xl font-bold'> Building Automation </h1>
    </div>
)
}

const Intro = () => {
    return (
      <div className="flex flex-col md:flex-row justify-center my-10 py-10 md:w-3/4 mx-auto">
            <div className="md:w-2/5 mx-10 my-5 font-bold text-xl xl:text-3xl md:text-right">BUILDING MANAGEMENT <br className="hidden md:block" />SYSTEM (BMS)</div>
            <div className="w-[4px] bg-b-800" />
            <div className="md:w-3/5 mx-10 flex items-center xl:text-lg"><p>At Ingenium, we specialize in cutting-edge building management systems (BMS) designed to automate and control HVAC, lighting, security, and energy management. Our integrated platform provides real-time monitoring and control, enabling building managers to optimize operations, reduce energy consumption, and enhance occupant comfort and safety.</p></div>
      </div>
    )
}

export default BuildingAutomation

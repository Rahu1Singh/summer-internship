import EcostruxureBMS from "../components/BuildingAutomation/EcostruxureBMS"
import EcostruxureBOS from "../components/BuildingAutomation/EcostruxureBOS"
import ProductsGrid from "../components/ProductsGrid"

const BuildingAutomation = () => {
  return (
    <main className="bg-b-100">
      <Header />
      <Intro />
      <EcostruxureBMS />
      <ProductsGrid />
      <EcostruxureBOS />
      <ProductsGrid />
    </main>
  )
}

const Header = () => {
  return (
    <section id="header" className='relative z-10 left-0 top-0 w-full h-[200px] xl:h-[460px] bg-b-200 p-10 flex items-center lg:mb-10 border-b-[20px] border-b-800 rounded-bl-3xl rounded-br-3xl'>
        <h1 className='absolute bottom-16 left-[10%] text-5xl xl:text-6xl font-bold text-b-900'> Building <br/> Automation </h1>
    </section> 
)
}


const Intro = () => {
    return (
      <article className="flex flex-col md:flex-row justify-center my-10 py-10 md:w-3/4 mx-auto">
            <div className="md:w-2/5 mx-10 my-5 font-semibold text-b-900 text-xl xl:text-3xl md:text-right">BUILDING MANAGEMENT <br className="hidden md:block" />SYSTEM <span className="text-black"> (BMS)</span></div>
            <div className="w-[4px] bg-black" />
            <div className="md:w-3/5 mx-10 flex items-center xl:text-[17px]"><p>At Ingenium, we specialize in cutting-edge building management systems (BMS) designed to automate and control HVAC, lighting, security, and energy management. Our integrated platform provides real-time monitoring and control, enabling building managers to optimize operations, reduce energy consumption, and enhance occupant comfort and safety.</p></div>
      </article>
    )
}

export default BuildingAutomation

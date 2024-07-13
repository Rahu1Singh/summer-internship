import EcostruxureFire from "../components/SafetyandSecurity/EcostruxureFire"
import HikvisionCCTV from "../components/SafetyandSecurity/HikvisionCCTV"
import HikvisionAC from "../components/SafetyandSecurity/HikvisionAC"
import ProductsGrid from "../components/ProductsGrid"
import { acproducts, cctvproducts, fireproducts, safetyproducts } from "../products"
import { fearch, search } from "../assets"

const SafetyandSecurity = () => {
  return (
    <main className="bg-b-100 pb-10">
      <Header />
      <Intro />
      <EcostruxureFire />
      <article className=' max-lg:hidden flex flex-col items-center my-16 p-10'>
        <h1 className='relative text-g-600 font-semibold text-3xl max-xl:text-3xl mb-4'>SCHNEIDER - FIRE EXPERT</h1>
        <div className='relative flex justify-center w-[850px]'>
          <img src={fearch} className='rounded-3xl z-10 border-4 border-b-800'/>
          <div className='absolute w-full h-full top-[30px] left-[30px] bg-b-800 rounded-3xl' aria-hidden="true" />
        </div>
      </article>
      <div className="my-32" aria-hidden="true" />
      <ProductsGrid productlist={fireproducts}/>
      <p className="w-3/4 py-5 mt-15 mx-auto text-xl text-g-600 text-center">Protect your building occupants and assets with EcoStruxure Security Expert, an integrated role-based physical access control and intrusion detection solution that unifies your building’s security infrastructure and management systems into an easy to manage, single platform that enables faster, more efficient, and potentially life-saving decision making.</p>
      <article className=' max-lg:hidden flex flex-col items-center my-8 p-10'>
        <h1 className='relative text-g-600 font-semibold text-3xl max-xl:text-3xl mb-4'>SCHNEIDER - SECURITY EXPERT</h1>
        <div className='relative flex justify-center w-[700px]'>
          <img src={search} className='rounded-3xl z-10 border-4 border-b-800'/>
          <div className='absolute w-full h-full top-[30px] left-[30px] bg-b-800 rounded-3xl' aria-hidden="true" />
        </div>
      </article>
      <div className="my-32" aria-hidden="true" />
      <ProductsGrid productlist={safetyproducts} />
      <HikvisionCCTV />
      <div className="my-32" aria-hidden="true" />
      <ProductsGrid productlist={cctvproducts}/>
      <HikvisionAC />
      <div className="my-32" aria-hidden="true" />
      <ProductsGrid productlist={acproducts}/>
    </main>
  )
}

const Header = () => {
  return (
    <section id="header" className='relative left-0 top-0 w-full h-[300px] xl:h-[460px] bg-b-200 p-10 flex items-center border-b-[20px] border-b-800 rounded-bl-3xl rounded-br-3xl' style={{backgroundImage: 'url(https://www.saltek.eu/files/solution/22/default/Kamerove_systemy-v2.webp)',backgroundSize: 'cover', backgroundPosition: "100% 60%"}}>
        <h1 className='z-10 absolute bottom-16 left-[10%] text-4xl xl:text-6xl font-bold text-white'>
          Safety & Security <br /> Systems
        </h1>
        <div className='absolute inset-0 bg-black/30' aria-hidden="true" />
    </section>
)
}

const Intro = () => {
  return (
    <article className="flex flex-col md:flex-row justify-center my-10 py-10 xl:w-3/4 mx-auto">
          <h1 className="md:w-2/5 mx-10 my-5 font-semibold text-2xl xl:text-4xl md:text-right text-b-900">SAFETY & <br className="hidden md:block" />SECURITY</h1>
          <div className="w-[4px] bg-black" aria-hidden="true" />
          <p className="md:w-3/5 mx-10 flex items-center xl:text-[17px]">We specialize in safety and security systems designed to protect your facility and its occupants. Our systems ensure comprehensive protection through advanced monitoring, access control and real-time threat detection, enhancing the overall safety and security of your operations.</p>
    </article>
  )
}

export default SafetyandSecurity

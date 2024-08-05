import EcostruxureBMS from "../components/BuildingAutomation/EcostruxureBMS"
import EcostruxureBOS from "../components/BuildingAutomation/EcostruxureBOS"
import ProductsGrid from "../components/ProductsGrid"
import { bmsproducts, hmiproducts } from "../products"
import { bmsarch } from "../assets"

const BuildingManagement = () => {
    return (
        <main className="bg-b-100 pb-10">
            <Header />
            <Intro />
            <EcostruxureBMS />
            <article className=' max-lg:hidden flex flex-col items-center my-16 p-10'>
                <h1 className='relative text-g-600 font-semibold text-3xl max-xl:text-3xl mb-4'>INGENIUM - BUILDING OPERATION</h1>
                <div className='relative flex justify-center'>
                    <img src={bmsarch} className='rounded-3xl z-10 border-4 border-b-800'/>
                    <div className='absolute w-full h-full top-[30px] left-[30px] bg-b-800 rounded-3xl' aria-hidden="true" />
                </div> 
            </article>
            <EcostruxureBOS />
            <ProductsGrid productlist={bmsproducts} />
            <h1 className=' mt-20 text-3xl xl:text-4xl text-center font-medium text-b-900'>Human Machine Interfaces (HMIs)</h1>
            <ProductsGrid productlist={hmiproducts} />
        </main>
    )
}

const Header = () => {
    return (
        <section id="header" className='relative z-10 left-0 top-0 w-full h-[300px] xl:h-[460px] p-10 flex items-center lg:mb-10 border-b-[20px] border-b-800 rounded-bl-3xl rounded-br-3xl overflow-clip' style={{backgroundImage:"url(https://www.autodesk.com/blogs/construction/wp-content/uploads/2021/02/construction-technology-trends-APAC.jpg)", backgroundPosition: "100% 50%"}}>
            <h1 className='absolute bottom-16 left-[5%] lg:left-[10%] text-5xl xl:text-6xl font-bold text-b-900 z-20'>Building <br/> Management</h1>
        </section>
    )
}


const Intro = () => {
    return (
        <article className="flex flex-col md:flex-row justify-center my-10 py-10 xl:w-3/4 mx-auto">
            <h1 className="md:w-2/5 mx-10 my-5 font-semibold text-b-900 text-3xl xl:text-4xl md:text-right">BUILDING MANAGEMENT <br className="hidden md:block" />SYSTEM <span className="text-black max-lg:hidden"> (BMS)</span></h1>
            <div className="w-[4px] bg-black" aria-hidden="true" />
            <p className="md:w-3/5 mx-10 flex items-center xl:text-[17px]">At Ingenium, we specialize in cutting-edge building management systems (BMS) designed to automate, monitor and control HVAC, lighting, security and energy management. Our integrated platform provides real-time monitoring and control, enabling building managers to optimize operations, reduce energy consumption and enhance occupant comfort and safety.</p>
        </article>
    )
}

export default BuildingManagement

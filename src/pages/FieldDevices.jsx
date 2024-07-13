import ProductsGrid from "../components/ProductsGrid"
import { fielddevices } from "../products"

const FieldDevices = () => {
  return (
        <main className="bg-b-100 pb-10">
            <Header />
            <Intro />
            <p className="w-3/4 py-5 mt-15 mx-auto text-xl text-g-600 text-center">Field instrumentation to measure and monitor flow, level, pressure, temperature and analyze liquids. Depending on the application a field instrument is required to measure and control different automation processes.</p>
            <ProductsGrid productlist={fielddevices} />
        </main>
    )
}

const Header = () => {
    return (
        <section id="header" className='relative z-10 left-0 top-0 w-full h-[300px] xl:h-[460px] flex items-center lg:mb-10 border-b-[20px] border-b-800 rounded-bl-3xl rounded-br-3xl overflow-clip' style={{backgroundImage:"url(https://e0.pxfuel.com/wallpapers/95/181/desktop-wallpaper-automation-automation-industrial-automation-and-b-r-automation-rockwell-automation.jpg)", backgroundSize: "cover", backgroundPosition: "100% 90%"}}>
            <h1 className='absolute bottom-16 left-[5%] lg:left-[10%] text-4xl xl:text-6xl font-bold text-b-800 z-20'>Field Devices</h1>
            <div className="h-full w-full inset-0 bg-white/20" aria-hidden="true" />
        </section>
    )
}

const Intro = () => {
    return (
        <article className="flex flex-col md:flex-row justify-center my-10 py-10 xl:w-3/4 mx-auto">
            <h1 className="md:w-2/5 mx-10 my-5 font-semibold text-b-900 text-2xl xl:text-4xl md:text-right">OUR PRODUCTS <br className="hidden md:block" />AND SOLUTIONS</h1>
            <div className="w-[4px] bg-black" aria-hidden="true" />
            <p className="md:w-3/5 mx-10 flex items-center xl:text-[17px]">At Ingenium Automation, we deliver advanced field device solutions to enhance your industrial operations. Our expertise in deploying and managing smart sensors and controllers ensures precise data collection, real-time monitoring and optimized performance, driving operational excellence and efficiency.</p>
        </article>
    )
}

export default FieldDevices

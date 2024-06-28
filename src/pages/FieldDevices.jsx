import ProductsGrid from "../components/ProductsGrid"
import { fielddevices } from "../products"

const FieldDevices = () => {
  return (
        <main>
            <Header />
            <Intro />
            <ProductsGrid productlist={fielddevices} />
        </main>
    )
}

const Header = () => {
    return (
        <section id="header" className='relative z-10 left-0 top-0 w-full h-[300px] xl:h-[460px] flex items-center lg:mb-10 border-b-[20px] border-b-800 rounded-bl-3xl rounded-br-3xl overflow-clip' style={{backgroundImage:"url(https://img.freepik.com/free-photo/futuristic-smart-city-with-5g-global-network-technology_53876-98438.jpg?t=st=1719484400~exp=1719488000~hmac=1a88396996e61e8764d77783cab5a09653a68c226e7c185264637170103a9fb9&w=1380)", backgroundSize: "cover", backgroundPosition: "100% 90%"}}>
            <h1 className='absolute bottom-16 left-[10%] text-5xl xl:text-6xl font-bold text-white z-20'>Field Devices</h1>
            <div className="h-full w-full inset-0 bg-black/10" aria-hidden="true" />
        </section>
    )
}

const Intro = () => {
    return (
        <article className="flex flex-col md:flex-row justify-center my-10 py-10 md:w-3/4 mx-auto">
            <h1 className="md:w-2/5 mx-10 my-5 font-semibold text-b-900 text-3xl xl:text-4xl md:text-right">OUR PRODUCTS <br className="hidden md:block" />AND SOLUTIONS</h1>
            <div className="w-[4px] bg-black" aria-hidden="true" />
            <p className="md:w-3/5 mx-10 flex items-center xl:text-[17px]">At Ingenium Automation, we deliver advanced field device solutions to enhance your industrial operations. Our expertise in deploying and managing smart sensors and controllers ensures precise data collection, real-time monitoring, and optimized performance, driving operational excellence and efficiency.</p>
        </article>
    )
}

export default FieldDevices

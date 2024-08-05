import { accuracy, busywork, iotarch, realtime, safety, speed } from "../assets"
import ProductsGrid from "../components/ProductsGrid"
import { bmsproducts, iotproducts, paproducts } from "../products"

const content = [
    {
        id: "0",
        icon: speed,
        title: "Improved Productivity",
        text: "In traditional factories, manual tasks consume valuable time. With IIoT, smart factory allows remote control—just a laptop click away.",
    },
    {
        id: "1",
        icon: accuracy,
        title: "Enhanced Accuracy",
        text: "Complex machinery can hide subtle issues. IIoT sensors, however, are meticulous. They identify glitches down to the last bolt, saving time and costs.",
    },
    {
        id: "2",
        icon: safety,
        title: "Enhanced Safety",
        text: "Safety is paramount. Accidents happen, but IIoT minimizes risks. Predictive maintenance further reduces breakdowns and accidents.",
    },
    {
        id: "3",
        icon: busywork,
        title: "Reducing Busywork",
        text: "Smart machines handle repetitive tasks, freeing human resources for meaningful, skill-based work. The result? Improved production and overall returns.",
    },
    {
        id: "4",
        icon: realtime,
        title: "Real-Time Monitoring",
        text: "Monitor and manage your automated processes in real-time with our intuitive dashboards and reporting tools.",
    },
]

const InternetofThings = () => {
    return (
        <main className="bg-b-100 pb-10">
            <Header />
            <Intro />
            <p className="w-3/4 py-5 mt-15 mx-auto text-xl text-g-600 text-center">EcoStruxure is Schneider Electric's IoT-enabled, plug-and-play, open, interoperable architecture and platform, in Homes, Buildings, Data Centres, Infrastructure and Industries. Innovation at Every Level from Connected Products to Edge Control and Apps, Analytics and Services.</p>
            <article className=' max-lg:hidden flex flex-col items-center my-8 p-10'>
                <h1 className='relative text-g-600 font-semibold text-3xl max-xl:text-3xl mb-4'>INGENIUM - IOT</h1>
                <div className='relative flex justify-center max-w-[1200px]'>
                    <img src={iotarch} className='rounded-3xl z-10 border-4 border-b-800 ' alt='PA Architecture'/>
                    <div className='absolute w-full h-full top-[30px] left-[30px] bg-b-800 rounded-3xl' aria-hidden="true"/>
                </div> 
            </article>
            <section className='flex flex-col'>
                <h1 className='relative text-center text-b-900 font-semibold text-3xl max-xl:text-3xl'>ADVANTAGES</h1>
                <Advantages />
            </section>
            <ProductsGrid productlist={bmsproducts.concat(paproducts.concat(iotproducts))} />
        </main>
    )
}

const Header = () => {
    return (
        <section id="header" className='relative z-10 left-0 top-0 w-full h-[300px] xl:h-[460px] flex items-center lg:mb-10 border-b-[20px] border-b-800 rounded-bl-3xl rounded-br-3xl overflow-clip' style={{backgroundImage:"url(https://www.eripacific.com/wp-content/uploads/leveraging_IoT_facility_operations.jpg)", backgroundSize: "cover", backgroundPosition: "100% 90%"}}>
            <h1 className='absolute bottom-16 left-[5%] lg:left-[10%] text-4xl xl:text-6xl font-bold text-white z-20'>Internet of Things</h1>
            <div className="h-full w-full inset-0 bg-black/10" aria-hidden="true" />
        </section>
    )
}

const Intro = () => {
    return (
        <article className="flex flex-col md:flex-row justify-center my-10 py-10 xl:w-3/4 mx-auto">
            <h1 className="md:w-2/5 mx-10 my-5 font-semibold text-b-900 text-2xl xl:text-4xl md:text-right">OUR PRODUCTS <br className="hidden md:block" />AND SOLUTIONS</h1>
            <div className="w-[4px] bg-black" aria-hidden="true" />
            <p className="md:w-3/5 mx-10 flex items-center xl:text-[17px]">At Ingenium Automation, we offer IoT solutions that enhance industrial operations by connecting devices, centralizing data and enabling real-time monitoring and control. Our approach empowers businesses to achieve seamless integration, provide better insights and make smarter-decisions.</p>
        </article>
    )
}

const Advantages = () => {
    return (
        <section className="relative mx-auto mb-5 lg:my-10">
            <div className="relative z-20 md:h-[650px] md:w-[650px] rounded-2xl bg-whitebg flex flex-col md:grid md:grid-cols-3 md:justify-items-center p-2 md:p-5 border-2 border-b-800">  
                {content.map((item) => (
                    <article key={item.id} className="md:h-full lg:w-full flex md:flex-col items-center p-2 lg:hover:bg-b-200 rounded-xl transition-all">
                        <img src={item.icon} className="h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] m-3"></img>
                        <h1 className="font-bold text-[17px] text-start md:text-center py-2">{item.title}</h1>
                        <p className="hidden md:block">{item.text}</p>
                    </article>
                ))}
            </div>
            <div className="hidden lg:block absolute md:top-[50px] md:right-[140px] lg:top-[30px] lg:left-[30px] z-10 h-[750px] w-[450px] lg:h-[650px] lg:w-[650px] rounded-2xl bg-b-800" aria-hidden="true" />
        </section>
    )
}

export default InternetofThings

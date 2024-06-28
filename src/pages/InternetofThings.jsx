import { iotarch } from "../assets"

const InternetofThings = () => {
    return (
        <main className="bg-b-100 pb-10">
            <Header />
            <Intro />
            <article className=' max-lg:hidden flex flex-col items-center my-16 p-10'>
                <h1 className='relative text-b-900 font-semibold text-3xl max-xl:text-3xl mb-4'>ARCHITECTURE</h1>
                <div className='relative flex justify-center max-w-[1200px]'>
                    <img src={iotarch} className='rounded-3xl z-10 border-4 border-b-800 ' alt='PA Architecture'/>
                    <div className='absolute w-full h-full top-[30px] left-[30px] bg-b-800 rounded-3xl' aria-hidden="true"/>
                </div> 
            </article>
            <section className='mx-auto flex flex-col w-1/2 p-5'>
                <h1 className='relative text-center text-b-900 font-semibold text-3xl max-xl:text-3xl'>ADVANTAGES</h1>
                <div className="relative flex m-5 h-[150px]">
                    <p className="absolute px-2 py-5 border-2 border-b-800 rounded-2xl bg-whitebg z-10 top-5 left-5 w-full h-[150px] hover:-translate-x-5 hover:-translate-y-5 transition-all"><span className="text-lg text-b-800 font-medium">Improved Efficiency and Productivity:</span> <br />In traditional factories, manual tasks consume valuable time. Imagine a worker manually activating and inspecting every machine on the factory floor. With IIoT, this changes dramatically. A smart factory allows remote control—just a laptop click away.</p>
                    <div className='absolute w-full h-[150px] top-5 left-5 bg-b-800 rounded-3xl' aria-hidden="true"/>
                </div>
                <div className="relative flex m-5 h-[150px]">
                    <p className="absolute px-2 py-5 border-2 border-b-800 rounded-2xl bg-whitebg z-10 top-5 left-5 w-full h-[150px] hover:-translate-x-5 hover:-translate-y-5 transition-all"><span className="text-lg text-b-800 font-medium">Enhanced Accuracy:</span> <br />Complex machinery can hide subtle issues. IIoT sensors, however, are meticulous. They identify glitches down to the last bolt, saving time and costs. Whether it is a factory machine or a remote agricultural patch, IIoT ensures accurate monitoring.</p>
                    <div className='absolute w-full h-[150px] top-5 left-5 bg-b-800 rounded-3xl' aria-hidden="true"/>
                </div>
                <div className="relative flex m-5 h-[150px]">
                    <p className="absolute px-2 py-5 border-2 border-b-800 rounded-2xl bg-whitebg z-10 top-5 left-5 w-full h-[150px] hover:-translate-x-5 hover:-translate-y-5 transition-all"><span className="text-lg text-b-800 font-medium">Enhanced Safety:</span> <br />Safety is paramount. Accidents happen, but IIoT minimizes risks. Workers can monitor equipment remotely, eliminating much manual handling. Predictive maintenance further reduces breakdowns and accidents.</p>
                    <div className='absolute w-full h-[150px] top-5 left-5 bg-b-800 rounded-3xl' aria-hidden="true"/>
                </div>
                <div className="relative flex m-5 h-[150px]">
                    <p className="absolute px-2 py-5 border-2 border-b-800 rounded-2xl bg-whitebg z-10 top-5 left-5 w-full h-[150px] hover:-translate-x-5 hover:-translate-y-5 transition-all"><span className="text-lg text-b-800 font-medium">Reducing Busywork:</span> <br />Smart machines handle repetitive tasks, freeing human resources. Workers can focus on meaningful, skill-based work. The result? Improved production and overall returns.</p>
                    <div className='absolute w-full h-[150px] top-5 left-5 bg-b-800 rounded-3xl' aria-hidden="true"/>
                </div>
            </section>
        </main>
    )
}

const Header = () => {
    return (
        <section id="header" className='relative z-10 left-0 top-0 w-full h-[300px] xl:h-[460px] flex items-center lg:mb-10 border-b-[20px] border-b-800 rounded-bl-3xl rounded-br-3xl overflow-clip' style={{backgroundImage:"url(https://img.freepik.com/free-photo/futuristic-smart-city-with-5g-global-network-technology_53876-98438.jpg?t=st=1719484400~exp=1719488000~hmac=1a88396996e61e8764d77783cab5a09653a68c226e7c185264637170103a9fb9&w=1380)", backgroundSize: "cover", backgroundPosition: "100% 90%"}}>
            <h1 className='absolute bottom-16 left-[10%] text-5xl xl:text-6xl font-bold text-white z-20'>Internet of Things</h1>
            <div className="h-full w-full inset-0 bg-black/10" aria-hidden="true" />
        </section>
    )
}

const Intro = () => {
    return (
        <article className="flex flex-col md:flex-row justify-center my-10 py-10 md:w-3/4 mx-auto">
            <h1 className="md:w-2/5 mx-10 my-5 font-semibold text-b-900 text-3xl xl:text-4xl md:text-right">OUR PRODUCTS <br className="hidden md:block" />AND SOLUTIONS</h1>
            <div className="w-[4px] bg-black" aria-hidden="true" />
            <p className="md:w-3/5 mx-10 flex items-center xl:text-[17px]">At Ingenium Automation, we offer IoT solutions that enhance industrial operations by connecting devices, centralizing data, and enabling real-time monitoring and control. Our approach empowers businesses to achieve seamless integration, provide better insights and make smarter-decisions.</p>
        </article>
    )
}

export default InternetofThings

import { itarch } from "../assets"

const InformationTechnology = () => {
    return (
        <main className="bg-b-100">
            <Header />
            <Intro />
            <p className="w-3/4 py-5 mt-15 mx-auto text-xl text-g-600 text-center">IT and network solutions to ensure seamless connectivity and secure data transmission. We provide different devices that work at different levels of the architecture to achieve safe and fast transmission of data.</p>
            <article className=' max-lg:hidden flex flex-col items-center my-16 p-3 lg:p-10'>
                <h1 className='relative text-b-900 font-semibold text-3xl max-xl:text-3xl mb-4'>ARCHITECTURE - IT</h1>
                <div className='relative flex justify-center'>
                    <img src={itarch} className='rounded-3xl z-10 border-4 border-b-800 max-w-[800px]' alt="IT Architecture"/>
                    <div className='absolute w-full h-full top-[30px] left-[30px] bg-b-800 rounded-3xl' aria-hidden="true"/>
                </div> 
            </article>
            <section className="flex flex-col items-center p-8">
                <h1 className='relative text-b-900 font-semibold text-2xl lg:text-4xl my-4'>SERVERS</h1>
                <div className="flex lg:w-2/3 items-center mb-5 p-5 border-2 border-b-800 lg:rounded-3xl bg-b-200">
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200429161002/server-image-1.png" className="max-lg:hidden h-[200px] border-2 border-b-800 rounded-3xl" />
                    <p className='lg:w-2/3 lg:text-lg lg:m-5'>Servers are designed to handle intensive tasks such as data processing, data sharing and performing computations for clients. They play a crucial role in a network, serving as the primary device that manages and responds to requests from other programs and devices (clients). They also facilitate the exchange and processing of data over the Internet or a local network.
                    <ul>We provide:
                        <li className="list-disc mx-10">Server Rack</li>
                        <li className="list-disc mx-10">Tower Server</li> 
                        <li className="list-disc mx-10">Wall-mount Server</li>    
                    </ul></p>
                </div>
                <h1 className='relative text-b-900 font-semibold text-2xl lg:text-4xl my-4'>SERVER RACKS</h1>
                <div className="flex lg:w-2/3 items-center mb-5 p-5 border-2 border-b-800 lg:rounded-3xl bg-b-200">
                    <img src="https://assets.tripplite.com/products/rack-enclosures-and-cabinets.jpg" className="max-lg:hidden h-[200px] border-2 border-b-800 rounded-3xl" />
                    <p className='lg:w-2/3 lg:text-lg lg:m-5'>A server rack is a standardized frame or enclosure designed to house and organize multiple pieces of IT equipment, including servers, network switches, routers and other data center components.
                    <ul>We provide:
                        <li className="list-disc mx-10">Wall-mount Racks</li>
                        <li className="list-disc mx-10">Open Racks</li> 
                        <li className="list-disc mx-10">Enclosed Racks</li>    
                    </ul></p>
                </div>
                <h1 className='relative text-b-900 font-semibold text-2xl lg:text-4xl my-4'>SWITCHES</h1>
                <div className="flex lg:w-2/3 items-center mb-5 p-5 border-2 border-b-800 lg:rounded-3xl bg-b-200">
                    <img src="https://greenipservices.com/wp-content/uploads/2022/02/switches8-2.jpg" className="max-lg:hidden h-[200px] border-2 border-b-800 rounded-3xl" />
                    <p className='lg:w-2/3 lg:text-lg lg:m-5'>A switch is a crucial networking device that connects multiple devices within a local area  network (LAN) and facilitates the efficient transfer of data between them. It enhances network performance and scalability & plays a vital role in the infrastructure of both small and large networks by ensuring smooth and reliable communication between connected devices.
                    <ul>We provide:
                        <li className="list-disc mx-10">Layer Switch</li>
                        <li className="list-disc mx-10">Core Switch</li> 
                        <li className="list-disc mx-10">Aggregate Switch</li>    
                    </ul></p>
                </div>
                <h1 className='relative text-b-900 font-semibold text-2xl lg:text-4xl my-4'>WORKSTATIONS</h1>
                <div className="flex lg:w-2/3 items-center mb-5 p-5 border-2 border-b-800 lg:rounded-3xl bg-b-200">
                    <img src="https://static.javatpoint.com/computer/images/what-is-a-workstation.png" className="max-lg:hidden h-[200px] border-2 border-b-800 rounded-3xl" />
                    <p className='lg:w-2/3 lg:text-lg lg:m-5'>A workstation is a high-performance computer designed for technical or scientific applications. Workstations are optimized for tasks that require significant computing power, advanced graphics capabilities and high levels of reliability and efficiency.</p>
                </div>
            </section>
        </main>
    )
}

const Header = () => {
    return (
        <section id="header" className='relative z-10 left-0 top-0 w-full h-[300px] xl:h-[460px] flex items-center lg:mb-10 border-b-[20px] border-b-800 rounded-bl-3xl rounded-br-3xl overflow-clip' style={{backgroundImage:"url(https://www.swmich.edu/media/website/content-assets/images/general-images/Networking_171983987.jpg)", backgroundPosition: "100% 80%"}}>
            <h1 className='absolute bottom-16 left-[5%] lg:left-[10%] text-4xl xl:text-6xl text-white font-bold z-20'> Information Technology <br/> & Networks</h1>
            <div className="h-full w-full bg-black/30" aria-hidden="true" />
        </section>
    )
}
  
  
const Intro = () => {
    return (
        <article className="flex flex-col md:flex-row justify-center my-10 py-10 xl:w-3/4 mx-auto">
            <h1 className="md:w-2/5 mx-10 my-5 font-semibold text-b-900 text-2xl xl:text-4xl md:text-right">OUR PRODUCTS <br className="hidden lg:block" />AND SOLUTIONS</h1>
            <div className="w-[4px] bg-black" aria-hidden="true"/>
            <p className="md:w-3/5 mx-10 flex items-center xl:text-[17px]">At Ingenium, our IT Network Management Solutions optimize your building and industrial systems by ensuring seamless connectivity and robust network performance, significantly enhancing operational efficiency.</p>
        </article>
    )
}

export default InformationTechnology

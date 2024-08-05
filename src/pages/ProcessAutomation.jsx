import { paarch, speed, error, cost, information, scalable, realtime } from "../assets"
import ProductsGrid from "../components/ProductsGrid"
import { hmiproducts, paproducts } from "../products"

const content = [
    {
        id: "0",
        icon: speed,
        title: "Efficiency and Speed",
        text: "Our automation solutions enhance operational efficiency by accelerating processes and reducing turnaround times.",
    },
    {
        id: "1",
        icon: error,
        title: "Error Reduction",
        text: "Automating tasks minimizes human errors and ensures consistent, reliable outcomes.",
    },
    {
        id: "2",
        icon: cost,
        title: "Cost Savings",
        text: "Reduce labor costs and operational expenses with automated workflows that handle repetitive tasks.",
    },
    {
        id: "3",
        icon: information,
        title: "Centralized Information",
        text: "Centralize data for easier access, improved accuracy, and better decision-making.",
    },
    {
        id: "4",
        icon: scalable,
        title: "Scalability",
        text: "Our automation products are designed to grow with your business, easily adapting to increased demands.",
    },
    {
        id: "5",
        icon: realtime,
        title: "Real-Time Monitoring",
        text: "Monitor and manage your automated processes in real-time with our intuitive dashboards and reporting tools.",
    },
]

const ProcessAutomation = () => {
    return (
        <main>
            <Header />
            <Intro />
            <section className='flex flex-col'>
                <h1 className='relative text-center text-b-900 font-semibold text-3xl max-xl:text-3xl'>ADVANTAGES</h1>
                <Advantages />
            </section>
            <article className=' max-lg:hidden flex flex-col items-center my-16 p-10'>
                <h1 className='relative text-g-600 font-semibold text-3xl max-xl:text-3xl mb-4'>INGENIUM - PROCESS AUTOMATION</h1>
                <div className='relative flex justify-center'>
                    <img src={paarch} className='rounded-3xl z-10 border-4 border-b-800 ' alt='PA Architecture'/>
                    <div className='absolute w-full h-full top-[30px] left-[30px] bg-b-800 rounded-3xl' aria-hidden="true"/>
                </div> 
            </article>
            <ProductsGrid productlist={paproducts} />
            <div className=' mt-20 text-3xl xl:text-4xl text-center font-medium text-b-900'>Human Machine Interfaces (HMIs)</div>
            <ProductsGrid productlist={hmiproducts} />
        </main>
    )
}

const Header = () => {
	return (
		<section id="header" className='relative z-10 left-0 top-0 w-full h-[200px] xl:h-[460px] p-10 flex items-center lg:mb-10 border-b-[20px] border-b-800 rounded-bl-3xl rounded-br-3xl overflow-clip' style={{backgroundImage:"url(https://letstranzact.com/_ipx/f_png/production_line.jpg)", backgroundSize: "cover", backgroundPosition: "100% 50%"}}>
			<div className='absolute inset-0 bg-black/30' aria-hidden="true"/>
			<h1 className='absolute bottom-16 left-[10%] text-4xl xl:text-6xl font-bold text-white z-20'>Process <br/> Automation</h1>
		</section>
	)
}

const Intro = () => {
    return (
        <article className="flex flex-col md:flex-row justify-center my-10 py-10 xl:w-3/4 mx-auto">
            <h1 className="md:w-2/5 mx-10 my-5 font-semibold text-b-900 text-2xl xl:text-4xl md:text-right">PROCESS <br className="hidden md:block" />AUTOMATION</h1>
            <div className="w-[4px] bg-black" aria-hidden="true"/>
            <p className="md:w-3/5 mx-10 flex items-center xl:text-[17px]">At Ingenium Automation, we also specialize in process automation that leverages cutting-edge technology to streamline complex business processes, centralize information and minimize human intervention. With our expertise and innovative approach, we empower businesses to achieve flawless, continuous operations and significant operational improvements.</p>
        </article>
    )
}

const Advantages = () => {
    return (
        <section className="relative mx-auto my-5">
            <div className="relative z-20 md:min-h-[650px] md:w-[650px] rounded-2xl bg-whitebg flex flex-col md:grid md:grid-cols-3 md:justify-items-center p-2 md:p-4 border-2 border-b-800">  
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

export default ProcessAutomation

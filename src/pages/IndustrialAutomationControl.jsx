import DomainCard from "../components/DomainCard"

const IndustrialAutomationControl = () => {
    return (
        <main className="bg-b-100 pb-10">
            <Header />
            <Intro />
            <section className='mx-auto lg:w-2/3 lg:justify-around lg:p-20 flex flex-wrap justify-center'>
        		<DomainCard linkto="/products/industrial_automation_control/process_automation" imglink={"https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_23751_16831178817174714.jpg"}>Process Automation</DomainCard>
		        <DomainCard linkto='/products/chiller_plant_management' imglink={"https://www.onicon.com/wp-content/uploads/2022/08/AA_Chiller_Plant.jpg"}>Chiller Plant Management</DomainCard>
      		</section>
        </main>
    )
}

const Header = () => {
    return (
        <section id="header" className='relative z-10 left-0 top-0 w-full h-[300px] xl:h-[460px] flex items-center lg:mb-10 border-b-[20px] border-b-800 rounded-bl-3xl rounded-br-3xl overflow-clip' style={{backgroundImage:"url(https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?cs=srgb&dl=pexels-pixabay-257700.jpg&fm=jpg)", backgroundSize: "cover", backgroundPosition: "100% 70%"}}>
            <h1 className='absolute bottom-16 left-[10%] text-5xl xl:text-6xl font-bold text-white z-20'>Industrial Automation <br/> & Control </h1>
            <div className="h-full w-full inset-0 bg-black/30" aria-hidden="true" />
        </section>
    )
}

const Intro = () => {
    return (
        <article className="flex flex-col md:flex-row justify-center my-10 py-10 md:w-3/4 mx-auto">
            <h1 className="md:w-2/5 mx-10 my-5 font-semibold text-b-900 text-3xl xl:text-4xl md:text-right">OUR PRODUCTS <br className="hidden md:block" />AND SOLUTIONS</h1>
            <div className="w-[4px] bg-black" aria-hidden="true" />
            <p className="md:w-3/5 mx-10 flex items-center xl:text-[17px]">At Ingenium Automation, we provide automation solutions for industries that streamline complex business processes, centralize information, and minimize human intervention. With our expertise and innovative approach, we empower businesses to achieve flawless, continuous operations and significant operational improvements.</p>
        </article>
    )
}

export default IndustrialAutomationControl
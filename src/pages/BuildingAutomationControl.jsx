import DomainCard from '../components/DomainCard'

const BuildingAutomationControl = () => {
	return (
		<main className='bg-b-100'>
			<Header />
			<Intro />
			<section className='mx-auto lg:w-4/5 lg:p-20 flex flex-wrap justify-center'>
				<DomainCard linkto="/products/building_automation_control/building_management" imglink={"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}>Building Management</DomainCard>
				<DomainCard linkto="/products/building_automation_control/power_management" imglink={"https://images.unsplash.com/photo-1549880433-c2978126edec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}>Power Management</DomainCard>
				<DomainCard linkto="/products/building_automation_control/dcim" imglink={"https://img.freepik.com/free-photo/long-hallway-with-row-servers-center_188544-26047.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718755200&semt=sph"}>Data Center Infrastructure Management</DomainCard>
				<DomainCard linkto="/products/building_automation_control/safety_security" imglink={"https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}>Safety & Security</DomainCard>
				<DomainCard linkto='/products/chiller_plant_management' imglink={"https://www.onicon.com/wp-content/uploads/2022/08/AA_Chiller_Plant.jpg"}>Chiller Plant Management</DomainCard>
			</section>
		</main>
	)
}

const Header = () => {
	return (
		<section id="header" className='relative z-10 left-0 top-0 w-full h-[200px] xl:h-[460px] p-10 flex items-center lg:mb-10 border-b-[20px] border-b-800 rounded-bl-3xl rounded-br-3xl overflow-clip' style={{backgroundImage:"url(https://www.autodesk.com/blogs/construction/wp-content/uploads/2021/02/construction-technology-trends-APAC.jpg)", backgroundPosition: "100% 50%"}}>
			<div className='absolute inset-0 bg-white/30' aria-hidden="true" />
			<h1 className='absolute bottom-16 left-[10%] text-5xl xl:text-6xl font-bold text-b-900 z-20'>Building Automation <br/> & Control </h1>
		</section>
	)
}

const Intro = () => {
    return (
		<article className="flex flex-col md:flex-row justify-center my-10 py-10 md:w-3/4 mx-auto">
            <h1 className="md:w-2/5 mx-10 my-5 font-semibold text-b-900 text-xl xl:text-3xl md:text-right">OUR PRODUCTS <br className="hidden md:block" />AND SOLUTIONS</h1>
            <div className="w-[4px] bg-black" aria-hidden="true"/>
            <p className="md:w-3/5 mx-10 flex items-center xl:text-[18px]">At Ingenium, we specialize in providing  cutting-edge building management systems (BMS), power management systems (PMS) and data center infrastructure management (DCIM), while also providing safety and security solutions.</p>
		</article>
	)
}

export default BuildingAutomationControl

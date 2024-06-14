import { automation , it , engineering } from "../assets"

const Services = () => {
  	return (
    	<div className="relative bg-b-100">
      		<ServicesHeader />
      		<Intro />
      		<ServiceCard img={automation}><AutomationContent /></ServiceCard>
			<ServiceCard img={it}><ITContent /></ServiceCard>
			<ServiceCard img={engineering}><EngineeringContent /></ServiceCard>
    	</div>
  	)
}

const ServicesHeader = () => {
  	return (
    	<div id="header" className='relative left-0 top-0 w-full h-[200px] xl:h-[460px] bg-b-200 p-10 flex items-center border-b-[20px] border-b-800 rounded-bl-3xl rounded-br-3xl'>
      		<h1 className='absolute bottom-16 left-[10%] text-5xl xl:text-[54px] font-bold text-b-900'> Solutions & <br/> Services </h1>
    	</div>
	)
}

const Intro = () => {
  	return (
    	<div className="flex flex-col md:flex-row justify-center mt-10 py-10 md:w-3/4 mx-auto">
      		<div className="md:w-2/5 mx-10 my-5 font-semibold text-xl text-b-900 xl:text-3xl md:text-right">SOLUTIONS & <br className="hidden md:block" />SERVICES <span className="text-black">PROVIDED <br className="hidden md:block" />AT INGENIUM</span></div>
      		<div className="w-[4px] bg-black" />
      		<div className="md:w-3/5 mx-10 flex items-center text-[17px]"><p>Ingenium Automation + Engineering is dedicated to providing innovative solutions and exceptional services that drive success for our clients across industries. Contact us to learn more about how we can partner with you to achieve your automation goals.</p></div>
    	</div>
  	)
}

const ServiceCard = ({children, img}) => {
  return (
    	<div className="relative my-10 py-10">
    		<div className="relative xl:w-4/5 h-[536px] z-10 mx-auto xl:bg-b-200 xl:rounded-3xl p-10 flex flex-row items-center">
				<div className="hidden xl:block relative m-10">
					<div className="relative w-[400px] h-[400px] z-10 rounded-3xl" >
						<img src={img} className='rounded-3xl object-cover h-[400px] w-[400px]'/>
					</div>
					<div className="absolute top-[20px] left-[20px] w-[400px] h-[400px] bg-b-700 rounded-3xl" />
				</div>
				{children}
			</div>
			<img  src={img} width={380} height={362} className="absolute xl:hidden top-0 w-full h-full object-cover opacity-65" />
			<div className="hidden xl:block absolute w-4/5 h-[536px] top-[12%] left-[12%] bg-b-700 rounded-3xl" />
    	</div>
  	)
}

const AutomationContent = () => {
	return (
		<div className="relative flex flex-col xl:text-left m-10 bg-i">
					<h1 className="font-bold text-4xl text-b-900 mt-10 mb-5">AUTOMATION</h1>
					<ul className="hidden md:block text-[17px] font-medium text-white xl:text-black">
					<li className="list-disc my-3">Building Management System (PLC, SCADA & DDC SYSTEM) - Provides seamless integration and real-time monitoring of building operations to optimize energy use and ensure efficient facility management.</li>
					<li className="list-disc my-3">Power Management Systems (PME) - Enhances energy efficiency and reliability through comprehensive monitoring and management of power distribution systems.</li>
					<li className="list-disc my-3">Process Automation (PLC Programming & SCADA Engineering) - Customizes PLC programming and SCADA engineering to automate processes, increase efficiency, and provide detailed monitoring and control.</li>
					<li className="list-disc my-3">Fire & Security Management (FAS & CCTV/ACS)- Integrates fire alarm systems with CCTV and access control for robust security and immediate incident response</li>
					<li className="list-disc my-3">Computer Systems Validation (Pharma, Bio, Semiconductor)- Ensures regulatory compliance and system reliability through rigorous testing and validation of computer systems in critical environments.</li>
					</ul>
				</div>
	)
}

const ITContent = () => {
	return (
		<div className="relative flex flex-col text-left m-10">
					<h1 className="font-bold text-4xl text-b-900 mt-10 mb-5">INFORMATION TECHNOLOGY</h1>
					<ul className="hidden md:block text-[17px] font-medium text-white xl:text-black">
					<li className="list-disc my-3">Software Development - Offers bespoke software solutions tailored to meet specific business needs, enhancing operational efficiency and functionality.</li>
					<li className="list-disc my-3">Interface, Driver Development (OPC, SLIP+, BNP3, BACNET, LONWORKS, MODBUS, Other Protocols) - Develops and integrates custom drivers and interfaces for a wide range of protocols, ensuring seamless communication and interoperability between different systems.</li>
					<li className="list-disc my-3">Custom Interface For Database (SQL, MYSQL, ORACLE) - Creates tailored database interfaces to enable efficient data management, retrieval, and storage across various database platforms like SQL, MySQL, and Oracle.</li>
					<li className="list-disc my-3">WEB INTERFACE (XML, SOA, SOAP, ASP, NET, JSP, REST, LoRa, WSDL) - Designs and implements web interfaces using a variety of technologies and protocols (XML, SOA, SOAP, ASP, NET, JSP, REST, LoRa, WSDL) to facilitate smooth and efficient web-based interactions and services.</li>
					<li className="list-disc my-3">Custom Report Generation (SQL, Crystal Report) - Generates custom reports using SQL and Crystal Report, providing detailed insights and analytics tailored to specific business requirements.</li>
					<li className="list-disc my-3">Mobile Technology (iOS, Android) - Develops mobile applications for iOS and Android platforms, enabling businesses to reach and engage users through mobile devices effectively.</li>
					</ul>
				</div>
	)
}

const EngineeringContent = () => {
	return (
		<div className="relative flex flex-col text-left p-2 m-10">
					<h1 className="font-bold text-4xl text-b-900 mt-10 mb-5">ENGINEERING</h1>
					<ul className="hidden md:block text-[17px] font-medium text-white xl:text-black">
					<li className="list-disc my-3">DDC / PLC Panels Design & Engineering / Delivery - Provides comprehensive design, engineering, and delivery of DDC and PLC panels, ensuring efficient and reliable control systems for various applications.</li>
					<li className="list-disc my-3">Power Monitoring System Design & Engineering / Delivery - Specializes in the design, engineering, and delivery of power monitoring systems to enhance energy management and ensure optimal power distribution.</li>
					<li className="list-disc my-3">Chiller Plant Control & Monitoring - Develops and implements advanced control and monitoring solutions for chiller plants, optimizing performance and energy efficiency.</li>
					<li className="list-disc my-3">Instrumentation Panels Design & Engineering / Delivery - Offers complete design, engineering, and delivery services for instrumentation panels, providing accurate and reliable measurement and control for industrial processes.</li>
					</ul>
				</div>
	)
}

export default Services

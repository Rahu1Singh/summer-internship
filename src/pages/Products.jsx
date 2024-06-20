import React from 'react'
import DomainCard from '../components/Products/DomainCard'
import ProductsGrid from '../components/ProductsGrid'
import { color } from 'framer-motion'

const Products = () => {
  	return (
    	<main className=' bg-b-100'>
			<Header />
      		<section className='flex flex-col md:flex-row md:flex-wrap justify-around mx-20'>
        		<DomainCard linkto="/products/building_automation" imglink={"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}>Building Automation</DomainCard>
				<DomainCard linkto="/products/power_management" imglink={"https://images.unsplash.com/photo-1549880433-c2978126edec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}>Power Management</DomainCard>
				<DomainCard linkto="/products/safety_security" imglink={"https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}>Safety & Security</DomainCard>
				<DomainCard linkto="/products/dcim" imglink={"https://img.freepik.com/free-photo/long-hallway-with-row-servers-center_188544-26047.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718755200&semt=sph"}>Data Center Infrastructure Management</DomainCard>
      		</section>
			<ProductsGrid />
    	</main>
  	)
}

const Header = () => {
	return (
	  	<section id="header" className='relative left-0 top-0 w-full h-[200px] xl:h-[460px] bg-b-200 p-10 flex items-center lg:mb-10 border-b-[20px] border-b-800 rounded-bl-3xl rounded-br-3xl'  style={{backgroundImage: `url(https://assets.onejswhomes.com/home_automation_6608fed159/home_automation_6608fed159.jpeg)`, backgroundSize:'cover', backgroundPosition:'0% 20%'}}>
			    <div className='absolute inset-0 bg-black/40 rounded-bl-3xl rounded-br-3xl'></div>

		  	<h1 className='absolute bottom-20 left-[40%] text-3xl lg:text-6xl font-bold text-b-200'>
				Our Products
		  	</h1>
	  	</section>
  	)
}

export default Products

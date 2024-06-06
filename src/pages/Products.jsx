import React from 'react'
import DomainCard from '../components/Products/DomainCard'
import ProductsGrid from '../components/ProductsGrid'

const Products = () => {
  	return (
    	<div className='bg-b-100 '>
			<Header />
      		<div className='flex flex-col md:flex-row justify-around mx-20'>
        		<DomainCard linkto="/products/building_automation">Building Automation</DomainCard>
				<DomainCard linkto="/products/power_management">Power Management</DomainCard>
				<DomainCard linkto="/products/safety_security">Safety & Security</DomainCard>
				
      		</div>
			<ProductsGrid />
    	</div>
  	)
}

const Header = () => {
	return (
	  <div id="header" className='relative left-0 top-0 w-full h-[200px] xl:h-[460px] bg-b-200 p-10 flex items-center lg:mb-10'>
		  <h1 className='absolute bottom-1/3 left-[5%] text-3xl lg:text-6xl font-bold'>
			Our Products
		  </h1>
	  </div>
  )
  }

export default Products

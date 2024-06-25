import { dcimarch } from "../assets"
import { dcimproducts } from "../products"
import { dcimops } from "../constants"
import ProductsGrid from "../components/ProductsGrid"

const DCIM = () => {
    return (
        <div className="bg-b-100 pb-10">
            <Header />
            <Intro />
            <Operations />
            <article className='max-lg:hidden flex flex-col items-center my-16 p-10'>
                <h1 className='relative text-b-900 font-semibold text-3xl max-xl:text-3xl mb-4'>ARCHITECTURE</h1>
                <div className='relative flex justify-center'>
                    <img src={dcimarch} className='rounded-3xl z-10 border-4 border-b-800 bg-white'/>
                    <div className='absolute w-full h-full top-[30px] left-[30px] bg-b-800 rounded-3xl' />
                </div> 
            </article>
            <ProductsGrid productlist={dcimproducts}/>
        </div>
    )
}

export default DCIM

const Header = () => {
    return (
        <section id="header" className='relative z-10 left-0 top-0 w-full h-[300px] xl:h-[460px] bg-b-200 p-10 flex items-center lg:mb-10 border-b-[20px] border-b-800 rounded-bl-3xl rounded-br-3xl' style={{backgroundImage: 'url(https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', backgroundSize: 'cover'}}>
            <h1 className='absolute bottom-16 left-[10%] text-5xl xl:text-6xl font-bold text-b-300'> Data Center<br/>Infrastructure Management</h1>
        </section> 
    )
}

const Intro = () => {
    return (
      <article className="flex flex-col md:flex-row justify-center my-10 py-10 md:w-3/4 mx-auto">
            <div className="md:w-2/5 mx-10 my-5 font-semibold text-b-900 text-3xl xl:text-4xl md:text-right">DATA CENTER<br className="hidden md:block" />MANAGEMENT<span className="text-black"> (DCIM)</span></div>
            <div className="w-[4px] bg-black" />
            <div className="md:w-3/5 mx-10 flex items-center xl:text-[17px]"><p>At Ingenium, we specialize in delivering cutting-edge solutions for efficient data center infrastructure management. With our comprehensive suite of services and software solutions, we ensure optimal performance, energy efficiency, and reliability throughout your data center operations.</p></div>
      </article>
    )
}

const Operations =() => {
    return(
        <div className="my-5 relative p-5 flex flex-col justify-center items-center w-full z-30">
            <h1 className="z-30 text-3xl lg:text-4xl text-center font-bold text-b-950 my-2 lg:my-5">DCIM : OPERATIONS</h1>
        <div id="items" className="flex flex-row flex-wrap justify-center gap-4 my-10 w-4/5">
        	{dcimops.map((item) => (
            	<div key={item.id} className="relative">
                	<div className="relative flex flex-row items-center p-2 z-20 w-[240px] xl:w-[280px] h-[100px] xl:h-[120px] bg-whitebg border-2 border-b-800 mx-6 xl:mx-8 my-[15px] md:my-[30px] rounded-2xl hover:-translate-x-3 hover:-translate-y-3 transition-all">
                    	<div className="px-6 xl:px-8"><img src={item.icon}/></div>
                    	<div><p className="text-b-950 font-medium text-xl">{item.text}</p></div>
                	</div>
                	<div className="absolute left-[35px] top-[30px] md:left-[40px] md:top-[45px] lg:left-[40px] lg:top-[45px] w-[240px] xl:w-[280px] h-[100px] xl:h-[120px] bg-b-800 z-10 rounded-2xl" />
            	</div>
        	))}
      	</div>
        </div>
    )
  }
import { domainitems } from "../../constants"

const Domainsweserve = () => {
 	return ( 
      	<div id="items" className="flex flex-row flex-wrap justify-center my-10 xl:w-4/5">
        	{domainitems.map((item) => (
            	<div key={item.id} className="relative">
                	<div className="relative flex flex-row items-center z-20 w-[240px] xl:w-[280px] h-[100px] xl:h-[120px] bg-whitebg border-2 border-b-800 mx-6 xl:mx-8 my-[15px] md:my-[30px] rounded-2xl hover:-translate-x-3 hover:-translate-y-3 transition-all">
                    	<div className="px-6 xl:px-8"><img src={item.icon} className="h-[40px] w-[40px] lg:h-[50px] lg:w-[50px]"/></div>
                    	<div><p className="text-b-950 font-medium text-lg lg:text-xl">{item.text}</p></div>
                	</div>
                	<div className="absolute left-[35px] top-[30px] md:left-[40px] md:top-[45px] lg:left-[40px] lg:top-[45px] w-[240px] xl:w-[280px] h-[100px] xl:h-[120px] bg-b-800 z-10 rounded-2xl" />
            	</div>
        	))}
      	</div>
  	)
}

export default Domainsweserve

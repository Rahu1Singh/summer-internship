import { domainitems } from "../constants"

const Domainsweserve = () => {
 	return ( 
      	<div id="items" className="flex flex-col md:grid md:grid-cols-2 gap-4 my-20">
        	{domainitems.map((item) => (
            	<div key={item.id} className="relative">
                	<div className="relative flex flex-row  items-center z-20 w-[240px] xl:w-[280px] h-[100px] xl:h-[120px] bg-b-500 mx-6 xl:mx-8 my-[15px] md:my-[30px] rounded-2xl hover:-translate-x-3 hover:-translate-y-3 transition-all">
                    	<div className="px-6 xl:px-8"><img src={item.icon}/></div>
                    	<div><p className="text-b-950 font-medium text-xl">{item.text}</p></div>
                	</div>
                	<div className="absolute left-[35px] top-[30px] md:left-[40px] md:top-[45px] lg:left-[40px] lg:top-[45px] w-[240px] xl:w-[280px] h-[100px] xl:h-[120px] bg-b-800 z-10 rounded-2xl" />
            	</div>
        	))}
      	</div>
  	)
}

export default Domainsweserve

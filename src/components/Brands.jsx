import { schneiderlogo , hikvisionlogo, sme500 , bizsafe , bms , criticalpower } from "../assets"

const Brands = () => {
  return (
    <div className='relative bg-b-100 flex flex-col items-center pb-[5rem]'>
        <div className="z-10 bg-b-200 rounded-3xl p-5">      
            <div id='partnered-by' className='flex-1 text-4xl font-bold'>Partnered By</div>
            <div id='brands' className="flex-1 flex flex-rows justify-center"><img src={schneiderlogo} className="h-[300px]"/><img src={hikvisionlogo} className="h-[300px]"/></div>
            <div id='certifications' className='flex-1 text-4xl font-bold'>Certified By</div>
            <div id='brands' className="flex-1 flex flex-rows items-center justify-center py-12"><img src={sme500} className="h-[150px] px-5"/><img src={bizsafe} className="h-[120px] px-5"/><img src={bms} className="h-[125px] px-5"/><img src={criticalpower} className="h-[120px] px-5"/></div>
        </div>
        
        <div className='flex-1 absolute right-0 top-0 bg-b-400 h-[100%] w-[90px]'/>
        <div className='flex-1 absolute right-[90px] top-0 bg-b-300 h-[100%] w-[90px]'/>
    </div>
  )
}

export default Brands

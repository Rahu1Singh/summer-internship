import { schneiderlogo, hikvisionlogo, sme500, bizsafe, bms, criticalpower } from "../assets";

const Brands = () => {
  return (
    <div className='relative flex flex-col items-center py-5 md:py-20 bg-b-100'>
     {/* <div className="bg-b-900 left-0 right-0 rounded-3xl"> */}
        <div className="z-10 bg-b-200 rounded-3xl p-0.5 w-full max-w-5xl">      
            <div id='partnered-by' className='text-center justify-center text-xl md:text-3xl font-bold py-5'>Partnered By</div>
            <div id='brands' className="flex flex-wrap justify-center py-5">
                <img src={schneiderlogo} className="m-5 h-20 md:h-24 lg:h-20" alt="Schneider Electric" />
                <img src={hikvisionlogo} className="m-5 h-10 md:h-12 lg:h-13" alt="Hikvision" />
            </div>
        </div>
     {/* </div> */}
        <br /> <br /> <br /> <br />
        <div className="z-10 bg-b-200 rounded-3xl p-0.5 w-full max-w-5xl">
            <div id='certifications' className='text-center justify-center text-3xl md:text-3xl font-bold py-5'>Certified By</div>
            <div id='brands' className="flex flex-wrap justify-center items-center py-5">
                <img src={sme500} className="m-5 h-24 md:h-28 lg:h-28 p-2" alt="SME 500" />
                <img src={bizsafe} className="m-5 h-20 md:h-24 lg:h-24 p-2" alt="BizSafe" />
                <img src={bms} className="m-5 h-20 md:h-24 lg:h-28 p-2" alt="BMS" />
                <img src={criticalpower} className="m-5 h-20 md:h-24 lg:h-28 p-2" alt="Critical Power" />
            </div>
        </div>    
        

        <div className='absolute max-md:hidden right-0 top-0 bg-b-400 h-full w-[70px] lg:w-[90px]' />
        <div className='absolute max-md:hidden right-[70px] xl:right-[90px] top-0 bg-b-300 h-full w-[70px] xl:w-[90px]' />
    </div>
  )
}

export default Brands;

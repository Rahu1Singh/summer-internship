import { schneiderlogo, hikvisionlogo, sme500, bizsafe, bms, criticalpower } from "../assets";

const Brands = () => {
  return (
    <div className='relative flex flex-col items-center bg-b-100 py-5 md:py-20'>
        <div className="z-10 bg-b-200 md:rounded-3xl p-5 w-full max-w-5xl">      
            <div id='partnered-by' className='text-center text-2xl md:text-4xl font-bold py-5'>Partnered By</div>
            <div id='brands' className="flex flex-wrap justify-center py-5">
                <img src={schneiderlogo} className="m-5 h-20 md:h-24 lg:h-26" alt="Schneider Electric" />
                <img src={hikvisionlogo} className="m-5 h-10 md:h-12 lg:h-13" alt="Hikvision" />
            </div>
            <div id='certifications' className='text-center text-2xl md:text-4xl font-bold py-5'>Certified By</div>
            <div id='brands' className="flex flex-wrap justify-center items-center py-5">
                <img src={sme500} className="m-5 h-24 md:h-28 lg:h-32 p-2" alt="SME 500" />
                <img src={bizsafe} className="m-5 h-24 md:h-24 lg:h-28 p-2" alt="BizSafe" />
                <img src={bms} className="m-5 h-20 md:h-24 lg:h-20 p-2" alt="BMS" />
                <img src={criticalpower} className="m-5 h-20 md:h-24 lg:h-28 p-2" alt="Critical Power" />
            </div>
        </div>
    </div>
  )
}

export default Brands;

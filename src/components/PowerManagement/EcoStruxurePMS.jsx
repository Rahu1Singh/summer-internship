import { pmsimg  } from "../../assets"
import { assets , growth , lifecycle , compliance } from "../../assets"

const EcostruxurePMS = () => {
    return (
        <div className='relative bg-g-100 my-10 p-10 overflow-hidden flex'>
            <div className='relative w-full 2xl:w-1/2 xl:left-[15%] flex flex-col items-center xl:items-start z-40 my-auto'>
                <div className="flex flex-col lg:w-1/2">
                    <h1 className='text-xl font-medium text-g-900 my-3'>EcoStruxure Power Monitoring Expert gives you</h1>
                    <div className="flex flex-row p-2 items-center">
                        <img src={assets} className="h-[50px] mx-3" aria-hidden="true" />
                        <div className="flex flex-col">
                            <h1 className="font-bold">Protect People and Assets</h1>
                            <p className="hidden lg:block">Ensure the safety of personnel and protection of valuable assets with advanced monitoring and alert systems.</p>
                        </div>
                    </div>
                    <div className="flex flex-row p-2 items-center">
                        <img src={growth} className="h-[50px] mx-3" aria-hidden="true" />
                        <div className="flex flex-col">
                            <h1 className="font-bold">Optimize Business Continuity</h1>
                            <p className="hidden lg:block">Quickly recover from outages and ensure a stable, continuous power supply to prevent unplanned interruptions.</p>
                        </div>
                    </div>
                    <div className="flex flex-row p-2 items-center">
                        <img src={lifecycle} className="h-[50px] mx-3" aria-hidden="true" />
                        <div className="flex flex-col">
                            <h1 className="font-bold">Maximize Lifecycle Efficiency</h1>
                            <p className="hidden lg:block">Optimize maintenance schedules and extend the life of electrical assets with predictive analytics.</p>
                        </div>
                    </div>
                    <div className="flex flex-row p-2 items-center">
                        <img src={compliance} className="h-[50px] mx-3" aria-hidden="true" />
                        <div className="flex flex-col">
                            <h1 className="font-bold">Simplify Regulatory Compliance</h1>
                            <p className="hidden lg:block">Simplify the process of acquiring and maintaining compliance with standards, regulations, and legislation.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden w-1/2 z-40 xl:flex justify-center items-center'>
                <img src={pmsimg} />
            </div>
      
            <div className='absolute top-0 left-0 h-full w-[960px] z-0 bg-g-200' aria-hidden="true" />
            <div className='absolute hidden lg:block top-0 left-[90px] h-full w-[90px] z-10 bg-g-300' aria-hidden="true" />
            <div className='absolute hidden lg:block top-0 left-0 h-full w-[90px] z-20 bg-g-400' aria-hidden="true" />
        </div>
    )
}

export default EcostruxurePMS

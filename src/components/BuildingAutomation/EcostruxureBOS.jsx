import { bosimg , ecostruxurelogo } from "../../assets"
import { datavisibility , efficiency , mobileaccess , security } from "../../assets"

const EcostruxureBOS = () => {
    return (
        <div className='relative bg-g-100 my-16 p-10 overflow-hidden flex'>
            <div className='hidden w-1/2 z-40 2xl:flex justify-center items-center'>
                <img src={bosimg} />
            </div>

            <div className='relative w-full 2xl:w-1/2 flex flex-col items-center z-40 my-auto'>
                <img src={ecostruxurelogo} className="h-[70px] lg:h-[100px]"/>
                <div className="flex flex-col xl:w-1/2 my-3">
                    <h1 className='text-lg font-medium text-g-900'>EcoStruxure™ Building Operation System has unmatched power to</h1>
                    <div className="flex flex-row p-2 items-center">
                        <img src={datavisibility}  className="h-[50px] mx-3"/>
                        <div>
                            <h1 className="font-bold">Provide better Data visibility</h1>
                            <p className="hidden lg:block">View comprehensive data from all building systems in one place.</p>
                        </div>
                    </div>
                    <div className="flex flex-row p-2 items-center">
                        <img src={efficiency} className="h-[50px] mx-3"/>
                        <div>
                            <h1 className="font-bold">Increased Energy and Operational Efficiency</h1>
                            <p className="hidden lg:block">Use advanced controls to reduce energy consumption, operational costs, and enhance overall building performance.</p>
                        </div>
                    </div>
                    <div className="flex flex-row p-2 items-center">
                        <img src={mobileaccess} className="h-[50px] mx-3"/>
                        <div>
                            <h1 className="font-bold">Remote and Mobile Access</h1>
                            <p className="hidden lg:block">Access building management systems from anywhere, anytime.</p>
                        </div>
                    </div>
                    <div className="flex flex-row p-2 items-center">
                        <img src={security} className="h-[50px] mx-3"/>
                        <div>
                            <h1 className="font-bold">Enhanced Occupant Experience</h1>
                            <p className="hidden lg:block">Maintain optimal environmental and security conditions for occupant comfort and productivity.</p>
                        </div>
                    </div>
                </div>
            </div>
      
            <div className='absolute -top-[150px] right-[100px] h-[800px] w-[800px] z-20 rounded-[50%] bg-g-200'/>
            <div className='absolute -top-[250px] right-[0px] h-[1000px] w-[1000px] z-10 rounded-[50%] bg-g-300'/>
            <div className='absolute -top-[350px] -right-[100px] h-[1200px] w-[1200px] z-0 rounded-[50%] bg-g-400'/>
        </div>
    )
}

export default EcostruxureBOS

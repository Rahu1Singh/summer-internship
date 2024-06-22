import { bmsimg1 , ecostruxurelogo } from "../../assets"
import { endtoend , integration , design , communication } from "../../assets"

const EcostruxureFire = () => {
    return (
        <div className='relative bg-g-100 my-10 p-10 overflow-hidden flex'>
            <div className='relative w-full 2xl:w-1/2 flex flex-col items-center z-40 my-auto'>
                <img src={ecostruxurelogo} className="h-[100px]"/>
                <div className="flex flex-col lg:w-2/3 my-3">
                    <h1 className='text-lg font-medium text-g-900 my-3'>Schneider Electric EcoStruxure™ Fire Expert gives you</h1>
                    <div className="flex flex-row p-2 items-center">
                        <img src={endtoend} className="h-[50px] mx-3"/>
                        <div className="flex flex-col">
                            <h1 className="font-bold">End-to-End solution</h1>
                            <p className="hidden lg:block">A complete portfolio of access control software and hardware including controllers, I/O modules, readers, credentials, and more.</p>
                        </div>
                    </div>
                    <div className="flex flex-row p-2 items-center">
                        <img src={integration} className="h-[50px] mx-3"/>
                        <div className="flex flex-col">
                            <h1 className="font-bold">Easy integration</h1>
                            <p className="hidden lg:block">Integrates with 30+ lifts, wireless locks, intercoms, biometric, video, and visitor management systems.</p>
                        </div>
                    </div>
                    <div className="flex flex-row p-2 items-center">
                        <img src={design} className="h-[50px] mx-3"/>
                        <div className="flex flex-col">
                            <h1 className="font-bold">Simple design</h1>
                            <p className="hidden lg:block">All controllers and modules are available in full or half DIN sizes  enabling standardisation in system panel design with front panel LED indicators that help in diagnosing faults.</p>
                        </div>
                    </div>
                    <div className="flex flex-row p-2 items-center">
                        <img src={communication} className="h-[50px] mx-3"/>
                        <div className="flex flex-col">
                            <h1 className="font-bold">Controller communication:</h1>
                            <p className="hidden lg:block">Cross-controller operations facilitate communication between  controllers, enabling controllers to operate as one system and share  hardware resources.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden w-1/2 z-40 2xl:flex justify-center items-center'>
                <img src={bmsimg1} />
            </div>
      
            <div className='absolute -top-[100px] left-[100px] h-[800px] w-[800px] z-20 rounded-[50%] bg-g-200'/>
            <div className='hidden lg:block absolute -top-[200px] left-[0px] h-[1000px] w-[1000px] z-10 rounded-[50%] bg-g-300'/>
            <div className='hidden lg:block absolute -top-[300px] -left-[100px] h-[1200px] w-[1200px] z-0 rounded-[50%] bg-g-400'/>
        </div>
    )
}

export default EcostruxureFire

import { bmsimg1, ecostruxurelogo } from "../../assets"
import { ipicon , enterprise , edgecontrol } from "../../assets"

const EcostruxureBMS = () => {
    return (
        <div className='relative bg-g-100 my-16 p-10 overflow-hidden flex z-10'>
            <div className='relative w-full 2xl:w-1/2 flex flex-col items-center z-40 my-auto'>
                <img src={ecostruxurelogo} className="h-[70px] lg:h-[100px]" alt="Ecostruxure Logo"/>
                <div className="flex flex-col xl:w-1/2 my-3">
                    <h1 className='text-lg font-medium text-g-900 my-3'>Schneider Electric EcoStruxure Building gives you</h1>
                    <div className="flex flex-row p-2 items-center">
                        <img src={ipicon} className="h-[50px] mx-3" aria-hidden="true" />
                        <div className="flex flex-col">
                            <h1 className="font-bold">Digital IP Backbone</h1>
                            <p className="hidden lg:block">Leverage the latest in digital infrastructure to ensure seamless communication between all building systems.</p>
                        </div>
                    </div>
                    <div className="flex flex-row p-2 items-center">
                        <img src={enterprise} className="h-[50px] mx-3" aria-hidden="true" />
                        <div className="flex flex-col">
                            <h1 className="font-bold">Enterprise services at scale</h1>
                            <p className="hidden lg:block">From small commercial buildings to large industrial complexes, our solutions grow with your needs.</p>
                        </div>
                    </div>
                    <div className="flex flex-row p-2 items-center">
                        <img src={edgecontrol} className="h-[50px] mx-3" aria-hidden="true" />
                        <div className="flex flex-col">
                            <h1 className="font-bold">Powerful integration and control at the edge</h1>
                            <p className="hidden lg:block">Enhance performance and reliability with edge computing, reducing latency and increasing response time.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden w-1/2 z-40 2xl:flex justify-center items-center'>
                <img src={bmsimg1} />
            </div>
      
            <div className='absolute -top-[150px] left-[100px] h-[800px] w-[800px] z-20 rounded-[50%] bg-g-200' aria-hidden="true" />
            <div className='absolute -top-[250px] left-[0px] h-[1000px] w-[1000px] z-10 rounded-[50%] bg-g-300' aria-hidden="true" />
            <div className='absolute -top-[350px] -left-[100px] h-[1200px] w-[1200px] z-0 rounded-[50%] bg-g-400' aria-hidden="true" />
        </div>
    )
}

export default EcostruxureBMS

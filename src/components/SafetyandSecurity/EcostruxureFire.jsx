import { control, efficiency, value , feimg} from "../../assets"

const EcostruxureFire = () => {
    return (
        <div className='relative bg-g-100 my-10 p-10 overflow-hidden flex'>
            <div className='relative w-full 2xl:w-1/2 flex flex-col items-center z-40 my-auto'>
                <div className="flex flex-col lg:w-2/3 my-3">
                    <h1 className='text-lg font-medium text-g-900 my-3'>Schneider Electric EcoStruxure™ Fire Expert gives you</h1>
                    <div className="flex flex-row p-2 items-center">
                        <img src={control} className="h-[50px] mx-3" aria-hidden="true" />
                        <div className="flex flex-col">
                            <h1 className="font-bold">Get Control</h1>
                            <p className="hidden lg:block">Take control of all your fire detection systems and enjoy easy monitoring and management with the ability to access anytime, anywhere.</p>
                        </div>
                    </div>
                    <div className="flex flex-row p-2 items-center">
                        <img src={efficiency} className="h-[50px] mx-3" aria-hidden="true" />
                        <div className="flex flex-col">
                            <h1 className="font-bold">Get Efficient</h1>
                            <p className="hidden lg:block">Optimize operational efficiency with up to 50% time savings and a single view of all your sites.</p>
                        </div>
                    </div>
                    <div className="flex flex-row p-2 items-center">
                        <img src={value} className="h-[50px] mx-3" aria-hidden="true" />
                        <div className="flex flex-col">
                            <h1 className="font-bold">Get Value</h1>
                            <p className="hidden lg:block">Enjoy less time-consuming operations, while having increased situational awareness and save costs during lifecycle.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='hidden w-1/2 z-40 2xl:flex justify-center items-center'>
                <img src={feimg} />
            </div>
      
            <div className='hidden lg:block absolute -top-2/4 -left-[40%] h-[1800px] w-[1800px] z-10 bg-g-300 rotate-[60deg]' aria-hidden="true" />
        </div>
    )
}

export default EcostruxureFire

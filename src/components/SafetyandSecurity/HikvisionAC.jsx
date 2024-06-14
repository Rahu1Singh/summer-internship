import { hikvisionlogo , acimg } from "../../assets"
import { facerecog , fingerprint , barriergate , tripod , flap } from "../../assets"

const HikvisionAC = () => {
    return (
        <div className='relative bg-r-100 my-10 p-10 overflow-hidden flex'>
            <div className='relative w-full 2xl:w-1/2 flex flex-col items-center z-40 my-auto'>
                <img src={hikvisionlogo} className="h-[30px] xl:h-[50px] m-5"/>
                <div className="flex flex-col lg:w-2/3 xl:w-1/2 my-3">
                    <h1 className='text-lg font-medium text-r-900'>Access Control with HIKVISION gives you</h1>
                    <div className="flex flex-row p-2 items-center">
                    <img src={facerecog} className="h-[50px] px-5"/>
                        <div className="flex flex-col">
                            <h1 className="font-bold">MinMoe Face Recognition Terminal</h1>
                            <p className="hidden lg:block">Provides touch-free access with advanced security features like deep learning algorithms, anti-spoofing detection, recognition in zero-light, and face mask detection while integrating video intercom and CCTV systems</p>
                        </div>
                    </div>
                    <div className="flex flex-row p-2 items-center">
                    <img src={fingerprint} className="h-[50px] px-5"/>
                        <div className="flex flex-col">
                            <h1 className="font-bold">Fingerprint/Card Terminal</h1>
                            <p className="hidden lg:block">Provides high security with multiple authentication methods (fingerprints, cards, PIN), access control secure modules, local and remote enrollment options, and seamless integration with the Hik-Connect App for streamlined access control management.</p>
                        </div>
                    </div>
                    <div className="flex flex-row p-2 items-center">
                    <img src={barriergate} className="h-[50px] px-5"/>
                        <div className="flex flex-col">
                            <h1 className="font-bold">Swing Barrier Gates</h1>
                            <p className="hidden lg:block">Offers quick access with flexible options, suitable for diverse environments like offices, schools, hospitals, factories, transportation hubs, and public spaces.</p>
                        </div>
                    </div>
                    <div className="flex flex-row p-2 items-center">
                    <img src={tripod} className="h-[50px] px-5"/>
                        <div className="flex flex-col">
                            <h1 className="font-bold">Tripod Barrier Gates</h1>
                            <p className="hidden lg:block">Provides quick access with flexible product options and fixed lane widths, suitable for specific scenarios requiring stable and controlled entry points.</p>
                        </div>
                    </div>
                    <div className="flex flex-row p-2 items-center">
                    <img src={flap} className="h-[50px] px-5"/>
                        <div className="flex flex-col">
                            <h1 className="font-bold">Flap Barrier Gates</h1>
                            <p className="hidden lg:block">Enhances access speeds and offer high verification accuracy with regular lane widths, ideal for environments requiring efficient and secure entry management.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden w-1/2 z-40 2xl:flex justify-center items-center'>
                <img src={acimg} className="h-60"/>
            </div>
      
            <div className='absolute top-0 left-0 h-full w-[960px] z-0 bg-r-300'/>
            <div className='hidden lg:block absolute top-0 left-[90px] h-full w-[90px] z-10 bg-r-400'/>
            <div className='hidden lg:block absolute top-0 left-0 h-full w-[90px] z-20 bg-r-500'/>
        </div>
  )
}

export default HikvisionAC

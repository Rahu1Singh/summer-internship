import { hikvisionlogo , cctvimg } from "../../assets"
import { cctv1 , cctv2 , cctv3 } from "../../assets"

const HikvisionCCTV = () => {
    return (
        <div className='relative my-10 p-10 overflow-hidden flex'>
            <div className='relative w-full 2xl:w-1/2 flex flex-col items-center z-40 my-auto'>
                <img src={hikvisionlogo} className="h-[30px] lg:h-[50px] m-5"/>
                <div className="flex flex-col lg:w-2/3 my-3">
                    <h1 className='text-lg font-medium text-r-900'>HIKVISION CCTV gives you</h1>
                    <div className="flex flex-row p-2 items-center">
                        <img src={cctv1} className="h-[50px] px-3"/>
                        <div className="flex flex-col">
                            <h1 className="font-bold">Easy Installation</h1>
                            <p className="hidden lg:block">Featuring Power-over-Ethernet (PoE) and pre-installed network cables, HIKVISION CCTV systems save time and money on cable installation.</p>
                        </div>
                    </div>
                    <div className="flex flex-row p-2 items-center">
                    <img src={cctv2} className="h-[50px] px-3"/>
                        <div className="flex flex-col">
                            <h1 className="font-bold">Easy Operation</h1>
                            <p className="hidden lg:block">HIKVISION's IP Solution offers high-resolution, stable HD imaging with smooth playback, ensuring sharp, clear video even in the presence of extreme electromagnetic interference.</p>
                        </div>
                    </div>
                    <div className="flex flex-row p-2 items-center">
                        <img src={cctv3} className="h-[50px] px-3"/>
                        <div className="flex flex-col">
                            <h1 className="font-bold">Easy Connection</h1>
                            <p className="hidden lg:block">HIKVISION CCTV systems feature PoE for simple camera-to-NVR connections, Quick Wi-Fi and Auto Connection functions for fast setup, ensuring swift, clear image display.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden w-1/2 z-40 2xl:flex justify-center items-center'>
                <img src={cctvimg} className="absolute left-2/3 top-1/3 h-[300px]"/>
            </div>
      
            <div className='absolute top-[150px] -right-[100px] h-[800px] w-[800px] z-20 rounded-[50%] bg-r-300'/>
            <div className='absolute top-[50px] -right-[200px] h-[1000px] w-[1000px] z-10 rounded-[50%] bg-r-400'/>
            <div className='absolute -top-[50px] -right-[300px] h-[1200px] w-[1200px] z-0 rounded-[50%] bg-r-500'/>
        </div>
    )
}

export default HikvisionCCTV

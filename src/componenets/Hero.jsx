import {FaCheckSquare} from 'react-icons/fa'
import { heroImg1 , heroImg2 } from '../assets'
import { useRef } from 'react';
import { ScrollParallax } from "react-just-parallax"

const Hero = () => {
    const parallaxRef = useRef(null);
    return (
    <div className='flex flex-row top-0 left-0 w-screen absolute bg-blue-100 px-60' ref={parallaxRef}>
        <div className='flex flex-col py-[15rem]'>
            <h1 className='pb-[5rem] text-[64px] font-bold leading-[1.05] text-left'>
                Engineering innovation <br />& empowering futures<br /> with <span className=' text-blue-800'>innovative <br />solutions.</span> 
            </h1>
            <div className='py-3 flex items-center justify-start'><FaCheckSquare size={32} className='mr-4 text-blue-800'/><p className='text-[20px]'>Efficiency Amplified: Redefining Industry Standards in Automation & IT Solutions.</p></div>
            <div className='py-3 flex items-center justify-start'><FaCheckSquare size={32} className='mr-4 text-blue-800'/><p className='text-[20px]'>Pioneering Innovation: Crafting Complete and Effective Products for Your Business Needs.</p></div>
            <div className='py-3 flex items-center justify-start'><FaCheckSquare size={32} className='mr-4 text-blue-800'/><p className='text-[20px]'>Streamlined Excellence: Your Partner in Simplifying Processes and Maximizing Results.</p></div>
            <div className='py-6 flex flex-col'>
                <div className='flex-1 justify-start'><p className='text-[20px] font-bold'>Ingenium Automation is your partner for innovative solutions.</p></div>
                <div></div>
            </div>
        </div>
 
        <div className='flex-1 py-[15rem] items-center justify-center'>           
            <div className='relative'>
            <ScrollParallax isAbsolutelyPositioned>
                <img src={heroImg1} className='absolute z-10 rounded-3xl object-cover h-[300px] w-[300px]'/>
                <div className='absolute left-[30px] top-[30px] z-5 bg-blue-800 h-[300px] w-[300px] rounded-3xl'></div>
                <img src={heroImg2} className='absolute top-[200px] left-[200px] z-10 rounded-3xl object-cover h-[300px] w-[300px]'/>
                <div className='absolute left-[230px] top-[230px] z-5 bg-blue-800 h-[300px] w-[300px] rounded-3xl'></div>
                </ScrollParallax>
            </div>        
        </div>       
    </div>
  )
}

export default Hero

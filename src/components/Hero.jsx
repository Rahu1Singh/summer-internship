import { heroImg1, heroImg2 } from '../assets';
import { useRef } from 'react';
import { ScrollParallax } from "react-just-parallax";
import { IoMdCheckboxOutline } from "react-icons/io";


const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    //Engineering Innovation Text Section
    <div className='flex flex-row top-0 left-0 w-screen absolute bg-b-100 px-60' ref={parallaxRef} style={{ marginTop: '80px' }}>
      <div className='flex flex-col py-20'>
        <h1 className='pb-20 text-[57.34px] font-extrabold leading-[1.05] text-left'>
          Engineering innovation <br />& empowering futures<br /> with <span className=' text-b-800'>innovative <br />solutions.</span> 
        </h1>
     {/* //Ingenium Automation Text Section    */}
        <div className='py-3 flex items-center justify-start'>
        <IoMdCheckboxOutline size={50} className='mr-4 text-b-800' />
          <p className='text-[20px] font-semibold'>Efficiency Amplified: Redefining Industry Standards in Automation & IT Solutions.</p>
        </div>

        <div className='py-3 flex items-center justify-start'>
        <IoMdCheckboxOutline size={50} className='mr-4 text-b-800' />
          <p className='text-[20px] font-semibold'>Pioneering Innovation: Crafting Complete and Effective Products for Your Business Needs.</p>
        </div>

        <div className='py-3 flex items-center justify-start'>
        <IoMdCheckboxOutline size={50} className='mr-4 text-b-800' />
          <p className='text-[20px] font-semibold'>Streamlined Excellence: Your Partner in Simplifying Processes and Maximizing Results.</p>
        </div>

        {/* Caption Section */}
        <div className='py-10 flex items-center justify-start'>
            <p className='text-[20px] font-normal'>Ingenium Automation is your partner for innovative solutions.</p>
          </div>
      </div>

      <div className='flex-1 py-24 items-center justify-center'>
        <div className='relative'>
          <ScrollParallax isAbsolutelyPositioned>
            <img src={heroImg1} className='absolute z-10 rounded-3xl object-cover h-[300px] w-[300px]'/>
            <div className='absolute left-[30px] top-[30px] z-5 bg-b-800 h-[300px] w-[300px] rounded-3xl'></div>
            <img src={heroImg2} className='absolute top-[200px] left-[200px] z-10 rounded-3xl object-cover h-[300px] w-[300px]'/>
            <div className='absolute left-[230px] top-[230px] z-5 bg-b-800 h-[300px] w-[300px] rounded-3xl'></div>
          </ScrollParallax>
        </div>
      </div>

    </div>
  );
}

export default Hero;

import { heroImg1} from '../assets';
import { useRef } from 'react';
import { ScrollParallax } from "react-just-parallax";

   

const AboutUs = () => {
  const parallaxRef = useRef(null);
  return (
    //At Ingenium Text Section
    <div className='flex flex-row top-0 left-0 w-screen absolute bg-g-100 px-60' ref={parallaxRef} style={{ marginTop: '80px' }}>
      <div className='flex flex-col py-20'>
        <h1 className='pb-20 text-[57.34px] font-extrabold leading-[1.05] text-left'>
        At Ingenium, providing <br />innovative solutions is<br /> not an afterthought, <br /> <span className=' text-g-800'>it’s what we do. </span> 
        </h1>

     {/* //Ingenium Automation Text Section    */}
        <div className='py-3 flex items-center justify-start'>
          <p className='text-[20px] text-left font-regular'>With years of experience in automation and engineering, our 
          <br /> products have helped countless people around the world and 
          <br /> solved their problems in the Automation & IT industry. </p>
        </div>
        
      </div>
      <div className='flex-1 py-24 px-48 items-center justify-center'>
        <div className='relative'>
          <ScrollParallax isAbsolutelyPositioned>
            <img src={heroImg1} className='absolute z-10 rounded-3xl object-cover h-[400px] w-[400px]'/>
            <div className='absolute left-[30px] top-[30px] z-5 bg-g-800 h-[400px] w-[400px] rounded-3xl'></div>
          </ScrollParallax>
        </div>
      </div>

    </div>
  );
}

export default AboutUs;

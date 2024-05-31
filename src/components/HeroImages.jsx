import { ScrollParallax } from "react-just-parallax"
import { heroImg1 , heroImg2 } from '../assets'
import { useRef } from 'react';

const HeroImages = () => {
  const parallaxRef = useRef(null);

  return (
    <div className='relative w-1/2' ref={parallaxRef}>
        <ScrollParallax isAbsolutelyPositioned>
            <img src={heroImg1} className='absolute left-0 right-0 z-10 rounded-3xl object-cover h-[250px] w-[250px]'/>
            <div className='absolute left-[25px] top-[25px] z-5 bg-b-700 h-[250px] w-[250px] rounded-3xl'></div>
            <img src={heroImg2} className='absolute top-[200px] left-[200px] z-10 rounded-3xl object-cover h-[250px] w-[250px]'/>
            <div className='absolute left-[225px] top-[225px] z-5 bg-b-700 h-[250px] w-[250px] rounded-3xl'></div>
            </ScrollParallax>
    </div>
  )
}

export default HeroImages

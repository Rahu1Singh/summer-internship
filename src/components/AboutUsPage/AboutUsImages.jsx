import { ScrollParallax } from "react-just-parallax"
import { innosols2} from '../../assets'
// import { heroImg1 , heroImg2 } from '../assets'
import { useRef } from 'react';

const AboutUsImages = () => {
  const parallaxRef = useRef(null);

  return (
    <div className='relative w-1/2' ref={parallaxRef}>
        <ScrollParallax isAbsolutelyPositioned>
            {/* <img src={heroImg1} className='absolute left-0 right-0 z-10 rounded-3xl object-cover h-[250px] w-[250px]'/>
            <div className='absolute left-[30px] top-[30px] z-5 bg-g-700 h-[250px] w-[250px] rounded-3xl'></div>
            <img src={heroImg2} className='absolute top-[200px] left-[200px] z-10 rounded-3xl object-cover h-[250px] w-[250px]'/>
            <div className='absolute left-[230px] top-[230px] z-5 bg-g-700 h-[250px] w-[250px] rounded-3xl'></div> */}
            <img src={innosols2} className='absolute left-0 right-0 z-10 rounded-3xl object-cover h-[350px] w-[350px]'/>
            <div className='absolute left-[30px] top-[30px] z-5 bg-g-700 h-[350px] w-[350px] rounded-3xl'></div>
            </ScrollParallax>
    </div>
  )
}

export default AboutUsImages

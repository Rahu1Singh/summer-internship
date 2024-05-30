import { IoMdCheckboxOutline } from "react-icons/io";
// import { useRef } from 'react';

import { herotext } from '../constants';
import HeroImages from './HeroImages';
import Button from './Button';

const Hero = () => {

    return (
    <div id='hero' className='flex flex-row w-100% bg-b-100 px-60'>
        <div id='heroContent' className='relative flex flex-col py-[6rem] justify'>
            <h1 className='pb-10 py-10 text-[64px] font-extrabold leading-[1.05] text-left'>
                Engineering innovation <br />& empowering futures<br /> with <span className=' text-b-800'>innovative <br />solutions.</span> 
            </h1>
            
            {herotext.map((item) => (
                <div key={item.id} className='py-3 flex items-center justify-start'>
                   <IoMdCheckboxOutline size={50} className='mr-4 text-b-800' />
                    <p className='text-lg text-left font-semibold'>{item.text}</p>
                </div>))
            }  
            
            <div className='relative pt-4 flex flex-col items-center justify-start'>
                <div className='relative left-0 w-full py-2 flex flex-row justify-start'>
                    <p className='text-[20px] font-normal'>Ingenium Automation is your partner for innovative solutions.</p>
                </div>
                <div className='relative left-0 w-full py-8 flex flex-row justify-start'>
                    <Button className={`bg-b-800 mr-10 py-3 text-white rounded-3xl text-lg border-b-800 hover:bg-white/0 hover:text-b-800 hover:font-bold`}>Check out products</Button>
                    <Button className={`bg-white/0  mr-10 py-3 rounded-3xl text-lg border-b-800 hover:bg-b-800 text-b-800 hover:text-white hover:font-bold`}>Solutions & Services</Button></div>
            </div>
        </div>
 
        <div id='heroImages' className='hidden lg:block flex-1 px-[10px] py-[10rem] items-center justify-center'>           
            <HeroImages />     
        </div>  

        <div className='flex-1 absolute right-0 top-0 bg-b-400 h-[100%] w-[90px]'/>
        <div className='flex-1 absolute right-[90px] top-0 bg-b-300 h-[100%] w-[90px]'/>
    </div>
  )
}

export default Hero

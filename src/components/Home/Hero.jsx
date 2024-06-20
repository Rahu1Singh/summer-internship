import { IoMdCheckboxOutline } from "react-icons/io";
import { herotext } from '../../constants';
import HeroImages from './HeroImages';
import Button from '../Button';

const Hero = () => {
    return (
        <section id='hero' className='relative flex bg-b-100 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-40 pt-8 md:pt-16 lg:pt-30 xl:pt-50 2xl:pt-20 min-h-screen' style={{backgroundImage: `url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}}>
            <div id='heroContent' className='relative flex flex-col items-start w-1/2 z-5 text-white'>
                <h1 className='pb-10 py-10 text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-left'>
                    Engineering<br /> Innovation & Empowering<br /> futures with <span className='text-b-300'>innovative solutions.</span>
                </h1>
                {herotext.map((item) => (
                    <div key={item.id} className='py-3 flex items-center justify-start z-10'>
                        <IoMdCheckboxOutline size={50} className='mr-4 text-b-300' />
                        <p className='text-base xl:text-lg text-left'>{item.text}</p>
                    </div>
                ))}
                <div className='pt-4 flex flex-col items-center md:items-start justify-start w-full'>
                    <div className='w-full py-5 flex justify-start'>
                        <p className='text-base md:text-lg lg:text-xl font-bold'>Ingenium Automation is your partner for innovative solutions.</p>
                    </div>
                    <div className='w-full py-3 flex flex-row justify-start'>
                        <Button link='/products'  className='bg-b-800 mr-10 py-3 md:mr-4 mb-4 md:mb-0 text-white rounded-3xl text-lg border-b-800 hover:border-b-200 hover:bg-transparent hover:text-b-200 hover:backdrop-blur-lg font-semibold'>
                            Check out products
                        </Button>
                        <Button link='/services' className='bg-transparent mr-10 py-3 md:mr-4 mb-4 md:mb-0 text-lg rounded-3xl backdrop-blur-xl text-b-200 border-b-200 hover:bg-b-200 hover:text-b-800 font-semibold'>
                            Solutions & Services
                        </Button>
                    </div>
                </div>
            </div>

            {/*<div id='heroImages' className='relative max-2xl:hidden flex-1 flex justify-center w-1/2 z-20 py-20 pr-32 '>
                <HeroImages />
            </div>*/}
        </section>
    );
};

export default Hero;

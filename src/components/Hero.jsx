import { FaCheckSquare } from 'react-icons/fa';
import { herotext } from '../constants';
import HeroImages from './HeroImages';
import Button from './Button';

const Hero = () => {
    return (
        <div id='hero' className='flex bg-b-100 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-40 pt-8 md:pt-16 lg:pt-36 xl:pt-50 2xl:pt-70'>
            <div id='heroContent' className='flex-1 relative flex flex-col items-start w-2/3 z-5'>
                <h1 className='pb-8 text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-left'>
                    Engineering innovation <br />& empowering futures<br /> with <span className='text-b-800'>innovative <br />solutions.</span>
                </h1>
                {herotext.map((item) => (
                    <div key={item.id} className='py-3 flex items-center justify-start z-10'>
                        <FaCheckSquare size={24} className='mr-4 text-b-800' />
                        <p className='text-base xl:text-lg text-left'>{item.text}</p>
                    </div>
                ))}
                <div className='pt-4 flex flex-col items-center md:items-start justify-start w-full'>
                    <div className='w-full py-2 flex justify-start'>
                        <p className='text-base md:text-lg lg:text-xl font-bold'>Ingenium Automation is your partner for innovative solutions.</p>
                    </div>
                    <div className='w-full py-3 flex flex-row justify-start'>
                        <Button link="/products" className='bg-b-800 mr-2 md:mr-4 mb-4 md:mb-0 text-white rounded-3xl text-lg border-b-800 hover:bg-white/0 hover:text-b-800 hover:font-bold'>
                            Check out products
                        </Button>
                        <Button link="/services" className='bg-transparent mr-2 md:mr-4 mb-4 md:mb-0 text-lg rounded-3xl text-b-800 border-b-800 hover:bg-b-800 hover:text-white hover:font-bold'>
                            Solutions & Services
                        </Button>
                    </div>
                </div>
            </div>

            <div id='heroImages' className='max-2xl:hidden flex-1 flex justify-center w-1/3 z-30'>
                <HeroImages />
            </div>
        </div>
    );
};

export default Hero;

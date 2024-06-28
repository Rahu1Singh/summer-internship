import { IoMdCheckboxOutline } from "react-icons/io";
import { herotext } from '../../constants';
import HeroImages from './HeroImages';
import Button from '../Button';

const Hero = () => {
    return (
        <section id='hero' className='relative flex bg-b-100 px-2 md:px-8 lg:px-16 xl:px-24 py-8 md:max-h-[870px]' style={{backgroundImage: `url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`, backgroundSize:"cover", backgroundPosition: '50% 15%'}} aria-labelledby="hero">
            <div id='heroContent' className='relative flex flex-col justify-start items-start lg:mx-5 p-5 backdrop-blur-sm lg:w-1/2 z-5 text-white  rounded-2xl bg-black/30'>
                <h1 className='md:py-10 text-2xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-left'>
                    Automate to Enhance<br className="max-md:hidden"/> & Empower futures <br className="max-md:hidden"/> with <span className='text-g-500'>Innovative <br className="max-md:hidden"/> solutions.</span>
                </h1>
                {herotext.map((item) => (
                    <div key={item.id} className='hidden my-2 md:my-3 md:flex items-center justify-start z-10'>
                        <IoMdCheckboxOutline size={50} className='mr-4 text-b-300' aria-hidden="true" />
                        <p className='text-base xl:text-lg text-left'>{item.text}</p>
                    </div>
                ))}
                <div className='pt-4 flex flex-col items-center md:items-start justify-start w-full'>
                    <p className=' w-full py-5 flex justify-start text-base md:text-lg lg:text-xl font-bold'>Ingenium Automation is your partner for innovative solutions.</p>
                    <div className='w-full py-3 flex justify-center align-center flex-col md:flex-row md:justify-start'>
                        <Button link='/products'  className='bg-b-800 my-auto md:py-3 md:mr-4 mb-4 md:mb-0 text-white rounded-3xl md:text-lg border-b-800 hover:border-b-200 hover:bg-transparent hover:text-b-200 font-semibold'>
                            Products & Solutions
                        </Button>
                        <Button link='/services' className='bg-transparent my-auto md:py-3 md:mr-4 mb-4 md:mb-0 md:text-lg rounded-3xl text-b-200 border-b-200 hover:bg-b-200 hover:text-b-800 font-semibold'>
                            Check our Services
                        </Button>
                    </div>
                </div>
            </div>
            <div className='hidden relative lg:flex flex-col items-start xl:my-10 lg:w-1/2 z-5 text-white'>
                <HeroImages />
            </div>
        </section>
    );
};

export default Hero;

import Button from '../Button';
import AboutUsImages from './AboutUsImages';

const AboutUsHero = () => {
    return (
        <section id="hero" className='relative bg-b-100 min-h-[100vh] flex items-center'>
                <div id='AboutUs' className='flex min-h-full px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-40 py-8 md:py-16 ly:py-30 xl:py-50 2xl:py-36'>
                    <div id='heroContent' className='flex-1 relative flex flex-col items-start w-2/3 z-5'>
                        <h1 className='pb-10 py-10 text-3xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-left text-b-950'>
                            At Ingenium, providing <br className='hidden md:block'/>innovative solutions is<br className='hidden md:block'/> not an afterthought, <br />
                            <span className='text-b-800'>it’s what we do.</span>
                        </h1>

                        <div className='py-4 flex items-center justify-start z-10 w-full md:w-1/2 2xl:w-full'>
                            <p className='text-[18px] xl:text-lg text-left text-b-950'> With years of experience in automation and engineering, our products  have helped countless people around the world and solved their problems in the Automation & IT industry.</p>
                        </div>

                        <div className='pt-4 flex flex-col items-center md:items-start justify-start w-full'>
                            <div className='w-full py-3 flex flex-row justify-start'>
                            <Button link="/products" className='bg-b-800 mr-2 md:mr-4 mb-4 md:mb-0 text-white rounded-3xl text-lg border-b-700 hover:bg-transparent hover:text-b-700 font-semibold'>
                            Check our products
                            </Button>
                            </div>
                        </div>
                    </div>

                <div id='AboutUsImages' className='max-2xl:hidden flex items-start justify-center w-1/2 z-20'>
                    <AboutUsImages />
                </div>

                <div className='absolute max-md:hidden right-0 top-0 bg-b-400 h-full w-[70px] lg:w-[90px]' />
                <div className='absolute max-md:hidden right-[70px] xl:right-[90px] top-0 bg-b-300 h-full w-[70px] xl:w-[90px]' />
                </div>
        </section>
    )
}

export default AboutUsHero
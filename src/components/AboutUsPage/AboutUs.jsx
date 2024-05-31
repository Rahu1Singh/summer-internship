import Button from '../Button';
import AboutUsImages from './AboutUsImages';

const AboutUs = () => {
  return (
    <div className='relative'>
    <div className="bg-g-100 w-full min-h-screen">
        
        <div id='AboutUs' className='flex bg-g-100 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-40 pt-8 md:pt-16 lg:pt-30 xl:pt-50 2xl:pt-40'>
            <div id='heroContent' className='flex-1 relative flex flex-col items-start w-2/3 z-5'>
                <h1 className='pb-10 py-10 text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-left text-b-950'>
                At Ingenium, providing <br />innovative solutions is<br /> not an afterthought, <br />
                 <span className='text-g-800'>it’s what we do.</span>
                </h1>

                    <div className='py-4 flex items-center justify-start z-10'>
                        <p className='text-base xl:text-lg text-left text-b-950'> With years of experience in automation and engineering, our
                        products <br/> have helped countless people around the world and solved their <br /> problems in the Automation & IT industry.
                        </p>
                    </div>

                <div className='pt-4 flex flex-col items-center md:items-start justify-start w-full'>
                    <div className='w-full py-3 flex flex-row justify-start'>
                        <Button className='bg-g-700 mr-10 py-3 md:mr-4 mb-4 md:mb-0 text-white rounded-3xl text-lg border-g-700 hover:bg-white hover:text-g-800 hover:font-bold'>
                            Check our products
                        </Button>
                    </div>
                </div>
            </div>

            <div id='AboutUsImages' className='max-2xl:hidden flex-1 flex justify-center w-1/3 z-20 py-20 pr-32 '>
                <AboutUsImages />
            </div>

            <div className='absolute max-md:hidden right-0 top-0 bg-g-400 h-full w-[70px] lg:w-[90px]' />
            <div className='absolute max-md:hidden right-[70px] xl:right-[90px] top-0 bg-g-300 h-full w-[70px] xl:w-[90px]' />
        </div>
        </div>
        </div>
  )
}

export default AboutUs
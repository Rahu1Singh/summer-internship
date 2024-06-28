const DomainCard = ({ linkto, imglink, children }) => {
    return (
        <div className='relative m-5 h-[300px] w-[300px] lg:h-[300px] lg:w-[300px] 2xl:h-[400px] 2xl:w-[400px]'>
            <a href={linkto} className='absolute  hover:-translate-x-5 hover:-translate-y-5 focus:left-0 focus:top-0 z-10 h-[300px] w-[300px] lg:h-[300px] lg:w-[300px] 2xl:h-[400px] 2xl:w-[400px] p-3 rounded-3xl transition-all flex justify-center items-center focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500 focus-visible:ring-opacity-50' style={{ backgroundImage: `url(${imglink})`, backgroundSize: 'cover' }} aria-label={children}>
                <h1 className='z-10 text-2xl text-white xl:text-3xl 2xl:text-4xl text-center font-bold' aria-hidden="true">
                    {children}
                </h1>
                <div className="absolute inset-0 bg-neutral-950/30 hover:bg-neutral-950/45 rounded-3xl transition-colors" aria-hidden="true" />
            </a>
            <div className='absolute z-0 bg-b-700 h-[250px] w-[250px] lg:h-[300px] lg:w-[300px] 2xl:h-[400px] 2xl:w-[400px] p-3 rounded-3xl' aria-hidden="true" />
        </div>
    )
  }
  
export default DomainCard;  
const DomainCard = ({ linkto , children }) => {
    return (
        <div className='relative h-[250px] w-[250px] lg:h-[350px] lg:w-[350px] 2xl:h-[450px] 2xl:w-[450px]'>
            <a href={linkto}><div className='absolute left-5 top-5 hover:left-0 hover:top-0 z-10 bg-b-300 h-[200px] w-[200px] lg:h-[300px] lg:w-[300px] 2xl:h-[400px] 2xl:w-[400px] p-3 rounded-3xl transition-all flex justify-center items-center'>
                <h1 className='text-2xl lg:text-3xl xl:text-4xl text-center font-bold'>{children}</h1>
            </div></a>
            <div className='absolute left-5 top-5 z-0 bg-b-700 h-[200px] w-[200px] lg:h-[300px] lg:w-[300px] 2xl:h-[400px] 2xl:w-[400px] p-3 rounded-3xl'></div>
        </div>
    )
}

export default DomainCard

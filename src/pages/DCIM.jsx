import { dcimarch } from "../assets"

const DCIM = () => {
    return (
        <div className="bg-b-100 pb-10">
            <Header />
            <article className='flex flex-col items-center my-16 p-10'>
                <h1 className='relative text-b-900 font-semibold text-3xl max-xl:text-3xl mb-4'>ARCHITECTURE</h1>
                <div className='relative flex justify-center'>
                    <img src={dcimarch} className='rounded-3xl z-10 border-4 border-b-800 bg-white'/>
                    <div className='absolute w-full h-full top-[30px] left-[30px] bg-b-800 rounded-3xl' />
                </div> 
            </article>
        </div>
    )
}

export default DCIM

const Header = () => {
    return (
        <section id="header" className='relative z-10 left-0 top-0 w-full h-[200px] xl:h-[460px] bg-b-200 p-10 flex items-center lg:mb-10 border-b-[20px] border-b-800 rounded-bl-3xl rounded-br-3xl'>
            <h1 className='absolute bottom-16 left-[10%] text-5xl xl:text-6xl font-bold text-b-900'> Data Center<br/>Infrastructure Management</h1>
        </section> 
    )
}
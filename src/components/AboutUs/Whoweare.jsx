import { whoweareitems } from "../../constants"

const Whoweare = () => {
  return (
    <section className="relative my-5 px-2 lg:my-10">
    <div className="relative z-20 lg:h-[700px] lg:w-[700px] rounded-2xl bg-whitebg flex flex-col md:items-center lg:grid lg:grid-cols-3 lg:justify-items-center p-2 md:p-5 border-2 border-b-800">  
        {whoweareitems.map((item) => (
            <div key={item.id} className="lg:h-full lg:w-full flex lg:flex-col items-center p-2 md:my-5 lg:hover:bg-b-200 rounded-xl transition-all">
                <img src={item.icon} className="h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] m-3"></img>
                <h1 className="font-bold text-[17px] text-start lg:text-center py-2 ">{item.title}</h1>
                <p className="hidden lg:block">{item.text}</p>
            </div>
        ))}
    </div>
    <div className="hidden lg:block absolute md:top-[50px] md:right-[140px] lg:top-[30px] lg:left-[30px] z-10 h-[750px] w-[450px] lg:h-[700px] lg:w-[700px] rounded-2xl bg-b-800" />
    </section>
  )
}

export default Whoweare

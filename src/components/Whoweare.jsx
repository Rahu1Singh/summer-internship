import { whoweareitems } from "../constants"

const Whoweare = () => {
  return (
    <div className="z-20 lg:h-[666px] lg:w-[747px] rounded-2xl bg-b-200 flex flex-col md:items-center lg:grid lg:grid-cols-3 p-2 md:p-5">  
        {whoweareitems.map((item) => (
            <div key={item.id} className="lg:h-[265px] lg:w-[200px] flex lg:flex-col items-center p-2 md:my-5">
                <img src={item.icon} className="h-[50px] w-[50px] m-3"></img>
                <h1 className="font-bold text-[17px] text-start lg:text-center py-2 ">{item.title}</h1>
                <p className="hidden lg:block">{item.text}</p>
            </div>
        ))}
    </div>
  )
}

export default Whoweare

import { whoweareitems } from "../constants"

const Whoweare = () => {
  return (
    <div className="z-20 h-[666px] w-[747px] rounded-2xl bg-b-200 flex flex-wrap md:grid md:grid-cols-3 p-2 md:p-5">  
        {whoweareitems.map((item) => (
            <div key={item.id} className="md:h-[265px] md:w-[200px] flex md:flex-col items-center p-2 md:my-5">
                <img src={item.icon} className="h-[50px] w-[50px] m-3"></img>
                <h1 className="font-bold text-[17px] text-start md:text-center py-2 ">{item.title}</h1>
                <p className="hidden md:block">{item.text}</p>
            </div>
        ))}
    </div>
  )
}

export default Whoweare

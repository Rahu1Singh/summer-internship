import { whoweareitems } from "../constants"

const Whoweare = () => {
  return (
    <div className="z-20 h-[666px] w-[747px] rounded-2xl bg-[#EFEFEF] flex flex-wrap justify-around align-center p-5">  
        {whoweareitems.map((item) => (
            <div className="h-[265px] w-[200px] flex flex-col items-center p-2 my-5">
                <img src={item.icon} className="h-[50px] w-[50px] m-3"></img>
                <h1 className="font-bold text-[17px] text-center py-2 ">{item.title}</h1>
                <p>{item.text}</p>
            </div>
        ))}
    </div>
  )
}

export default Whoweare

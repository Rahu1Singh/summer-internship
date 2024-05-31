import { domainitems } from "../constants"

const Domainsweserve = () => {
  return (
      <div id="items" className="flex flex-col lg:grid lg:grid-cols-2 gap-4 my-20">
        {domainitems.map((item) => (
            <div key={item.id} className="relative">
                <div className="relative flex flex-rows items-center z-20 w-[280px] h-[120px] bg-b-500 mx-14 md:mx-20 my-[15px] md:my-[30px] rounded-2xl">
                    <div className="px-8"><img src={item.icon}/></div>
                    <div><p className="text-b-950 font-medium text-xl">{item.text}</p></div>
                </div>
                <div className="absolute left-[80px] top-[30px] lg:left-[85px] lg:top-[45px] w-[280px] h-[120px] bg-b-800 z-10 rounded-2xl" />
            </div>
        ))}
      </div>
  )
}

export default Domainsweserve

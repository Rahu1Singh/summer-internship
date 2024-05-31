import { domainitems } from "../constants"

const Domainsweserve = () => {
  return (
    <div>
      <div></div>
      <div className="grid grid-cols-2 gap-4 my-20">
        {domainitems.map((item) => (
            <div className="relative">
                <div id={item.id} className="relative flex flex-rows items-center z-20 w-[280px] h-[120px] bg-b-500 mx-20 my-[30px] rounded-2xl">
                    <div className="px-8"><img src={item.icon}/></div>
                    <div><p className="text-b-950 font-medium text-xl">{item.text}</p></div>
                </div>
                <div className="absolute left-[85px] top-[45px] w-[280px] h-[120px] bg-b-800 z-10 rounded-2xl" />
            </div>
        ))}
      </div>
    </div>
  )
}

export default Domainsweserve

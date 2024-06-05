import Button from "./Button";

const Description = () => {
    return (
        <div className='relative w-full bg-b-200 p-10'>
            <div className='w-full flex flex-col items-center'>
                <div className='xl:w-3/4 flex flex-col xl:flex-row py-10'>
                <div className="uppercase text-left xl:w-1/3 text-3xl lg:text-4xl xl:text-4xl md:text-4xl font-medium xl:text-right px-10 py-5 lg:border-r-4 lg:border-black">
                        Our <br /> 
                        <span className="text-b-900 font-semibold">Products</span>
                    </div>
                    <div className="md:w-4/5 xl:w-1/2 text-lg text-left pl-10">
                        Ingenium Automation + Engineering offers a whole range of IT & Automation products for the Process / Energy / Building and Engineering industries globally using open protocols like OPC, Modbus, Profibus, Profinet, Bacnet, Lonworks.
                        <br />
                        <Button className='bg-b-800 rounded-md my-4 text-white border-b-800 hover:bg-white hover:text-b-800 hover:font-bold'>
                            Read More
                        </Button>
                    </div>
                </div>

                <div className='xl:w-3/4 flex flex-col xl:flex-row py-10'>
                    <div className="uppercase text-left xl:w-1/3 text-3xl lg:text-4xl xl:text-4xl md:text-4xl font-medium xl:text-right px-10 py-5 lg:border-r-4 lg:border-black">
                        Our <br /> 
                        <span className="text-b-900 font-semibold">Solutions</span>
                    </div>
                    <div className="md:w-4/5 xl:w-1/2 text-lg text-left pl-10">
                        We at Ingenium Automation + Engineering are capable of Designing, Developing & installing various Solutions using different types of PLCs, Controllers, SCADA/DCS systems & drivers for our global clients.
                        <Button className='bg-b-800 rounded-md my-4 text-white border-b-800 hover:bg-white hover:text-b-800 hover:font-bold'>
                            Read More
                        </Button>
                    </div>
                </div>
                <div className='xl:w-3/4 flex flex-col xl:flex-row py-10'>
                    <div className="uppercase text-left xl:w-1/3 text-3xl lg:text-4xl xl:text-4xl md:text-4xl font-medium xl:text-right px-10 py-5 lg:border-r-4 lg:border-black">
                        Our <br /> 
                        <span className="text-b-900 font-semibold">Services</span>
                    </div>
                    <div className="md:w-4/5 xl:w-1/2 text-lg text-left pl-10">
                        Ingenium Automation + Engineering offers professional Engineering / Documentation / Commissioning / Validation services for global clients on a turnkey project basis.
                        <Button className='bg-b-800 rounded-md my-4 text-white border-b-800 hover:bg-white hover:text-b-800 hover:font-bold'>
                            Read More
                        </Button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Description;

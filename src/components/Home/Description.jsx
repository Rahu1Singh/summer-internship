import Button from "../Button";

const Description = () => {
    return (
        <section className='relative bg-b-200 p-10'>
            <div className='w-full flex flex-col items-center'>
                <div className='xl:w-3/4 flex flex-col lg:flex-row lg:items-center py-5 lg:py-10'>
                    <h1 className="uppercase text-left lg:w-1/3 text-2xl lg:text-4xl font-medium lg:text-right lg:px-10 py-5 lg:border-r-4 lg:border-black">
                        Our <br /> <span className="text-b-900 font-semibold">Products</span>
                    </h1>
                    <div className="md:w-4/5 xl:w-1/2 lg:text-lg text-left lg:pl-10">
                        Ingenium Automation offers a whole range of Automation & IT products for the Building / Process / Energy and Engineering industries globally using protocols like OPC, Modbus, Profibus, Profinet, Bacnet, Lonworks.
                        <br />
                        <Button link="/products" className='bg-b-800 rounded-md my-4 text-white border-b-800 hover:bg-transparent hover:text-b-800 hover:font-bold max-w-[150px]'>
                            Read More
                        </Button>
                    </div>
                </div>

                <div className='xl:w-3/4 flex flex-col lg:flex-row lg:items-center py-5 lg:py-10'>
                    <h1 className="uppercase text-left lg:w-1/3 text-2xl lg:text-4xl font-medium lg:text-right lg:px-10 py-5 lg:border-r-4 lg:border-black">
                        Our <br /> <span className="text-b-900 font-semibold">Solutions</span>
                    </h1>
                    <div className="md:w-4/5 xl:w-1/2 lg:text-lg text-left lg:pl-10">
                        We at Ingenium Automation are capable of Designing, Deploying & installing various Solutions using different types of DDC and PLC Controllers, SCADA, DCS, MES systems & drivers for our global clients.
                        <Button link="/products/building_automation_control" className='bg-b-800 rounded-md my-4 text-white border-b-800 hover:bg-transparent hover:text-b-800 hover:font-bold max-w-[150px]'>
                            Read More
                        </Button>
                    </div>
                </div>
                <div className='xl:w-3/4 flex flex-col lg:flex-row lg:items-center py-5 lg:py-10'>
                    <h1 className="uppercase text-left lg:w-1/3 text-2xl lg:text-4xl font-medium lg:text-right lg:px-10 py-5 lg:border-r-4 lg:border-black">
                        Our <br /> <span className="text-b-900 font-semibold">Services</span>
                    </h1>
                    <div className="md:w-4/5 xl:w-1/2 lg:text-lg text-left lg:pl-10">
                        Ingenium Automation offers professional Engineering / Documentation / Commissioning / Validation services for global clients on a turnkey project basis.
                        <Button link="/services" className='bg-b-800 rounded-md my-4 text-white border-b-800 hover:bg-transparent hover:text-b-800 hover:font-bold max-w-[150px]'>
                            Read More
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Description;

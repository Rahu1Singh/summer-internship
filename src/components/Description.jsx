import Button from "./Button";

const Description = () => {
    return (
        <div className='relative w-full bg-b-100 p-10'>
            <div className='w-full flex flex-col items-center'>
                <div className='xl:w-3/4 flex flex-col xl:flex-row py-10'>
                    <div className="uppercase text-left xl:w-1/3 text-3xl md:text-4xl font-bold xl:text-right px-10 py-5">Our <br className="hidden xl:block"/>Products</div>
                    <div className="md:w-4/5 xl:w-1/2 text-lg text-left pl-10">
                        Ingenium Automation + Engineering offers a whole range of IT & Automation products for the Process / Energy / Building and Engineering industries globally using open protocols like OPC, Modbus, Profibus, Profinet, Bacnet, Lonworks.
                        <Button link="/products">Read More</Button>
                    </div>
                </div>
                <div className='xl:w-3/4 flex flex-col xl:flex-row py-10'>
                    <div className="uppercase text-left xl:w-1/3 text-3xl md:text-4xl font-bold xl:text-right px-10 py-5">Our <br className="hidden xl:block"/>Solutions</div>
                    <div className="md:w-4/5 xl:w-1/2 text-lg text-left pl-10">
                        We at Ingenium Automation + Engineering are capable of Designing, Developing & installing various Solutions using different types of PLCs, Controllers, SCADA/DCS systems &Drivers for our global clients
                        <Button link="/services">Read More</Button>
                    </div>
                </div>
                <div className='xl:w-3/4 flex flex-col xl:flex-row py-10'>
                    <div className="uppercase text-left xl:w-1/3 text-3xl md:text-4xl font-bold xl:text-right px-10 py-5">Our <br className="hidden xl:block"/>Services</div>
                    <div className="md:w-4/5 xl:w-1/2 text-lg text-left pl-10">
                        Ingenium Automation + Engineering offers professional Engineering / Documentation / Commissioning / Validation services for global clients on turnkey project basis
                        <Button link="/services">Read More</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;

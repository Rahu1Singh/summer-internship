import { SlLocationPin } from "react-icons/sl";

const Addresses = () => {
    return (
        <section className="relative bg-b-100 p-10 flex flex-col items-center">
            <h1 className="text-4xl m-5 my-8 text-b-900 font-bold">Our Locations</h1>
            <div className="relative flex flex-col lg:flex-row gap-20">
                
                {/* Singapore Section */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-5 items-center  p-5 mt-2 h-[350px] w-full bg-whitebg border-b-[20px] border-b-800 rounded-bl-3xl rounded-br-3xl rounded-3xl">
                    <article className="lg:col-span-2 lg:row-span-1 m-5 p-4 -mt-10 transition-all w-full rounded-3xl flex flex-col flex-grow">
                        <h1 className="my-2 flex gap-x-3 items-center font-bold text-2xl"><SlLocationPin /> SINGAPORE</h1>
                        <h3 className="flex gap-x-3 items-center font-semibold">Ingenium Automation + Engineering Pte Ltd</h3>
                    </article>

                    <article className="m-5 p-4 -mt-16 transition-all w-full h-full rounded-3xl flex flex-col justify-center">
                        <h1 className="my-2 flex gap-x-3 items-center font-bold text-lg">Admin Office</h1>
                        <p className="my-2 mb-4">111 North Bridge Road #21-01,<br />Peninsula Plaza,<br />Singapore (179098).</p>
                        <h3 className="flex gap-x-3 items-center font-semibold"><span className='text-b-900 font-bold'>TEL:</span>+65 6854 3761</h3>
                        <h3 className="flex gap-x-3 items-center font-semibold"><span className='text-b-900 font-bold'>MOB:</span>+65 6507 4488</h3>
                    </article>

                    <article className="m-5 p-4 -mt-16 transition-all w-full h-full rounded-3xl flex flex-col justify-center">
                        <h1 className="my-2 flex gap-x-3 items-center font-bold text-lg">Engineering Office</h1>
                        <p className="my-2 mb-4">10, Ubi Crescent #05-08,<br />Ubi Techpark Lobby B,<br />Singapore (408564).</p>
                        <h3 className="flex gap-x-3 items-center font-semibold"><span className='text-b-900 font-bold'>TEL:</span>+65 6593 4370/71</h3>
                        <h3 className="flex gap-x-3 items-center font-semibold"><span className='text-b-900 font-bold'>FAX:</span>+65 6749 9370 </h3>
                        
                    </article>
                </div>

                {/* India and Indonesia Section */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start p-5 mt-2 h-[350px] w-full justify-around bg-whitebg border-b-[20px] border-b-800 rounded-bl-3xl rounded-br-3xl rounded-3xl">
                    {/* India Section */}
                    <div className="">
                        <article className="lg:col-span-2 lg:row-span-1 m-4 p-4 -mt-2 transition-all w-full rounded-3xl flex flex-col flex-grow">
                            <h1 className="my-2 flex gap-x-3 items-center font-bold text-2xl"><SlLocationPin /> INDIA</h1>
                            <h3 className="flex gap-x-3 items-center font-semibold">Ingenium Automation Pvt. Ltd.</h3>
                        </article>

                        <article className="m-5 p-4 -mt-8 transition-all w-full h-full rounded-3xl flex flex-col justify-center">
                            
                            <p className="my-2 mb-4">No. 4L, 560-562, Century Plaza,<br />Anna Salai, Teynampet,<br />Chennai - 600 018.</p>
                            <h3 className="flex gap-x-3 items-center font-semibold"><span className='text-b-900 font-bold'>TEL:</span>+91 044 4795 7162</h3>
                            <h3 className="flex gap-x-3 items-center font-semibold"><span className='text-b-900 font-bold'>MOB:</span>+91 93429 61474</h3>
   
                        </article>
                    </div>

                    {/* Indonesia Section */}
                    <div>
                        <article className="lg:col-span-2 lg:row-span-1 m-4 p-4 -mt-2 transition-all w-full rounded-3xl flex flex-col flex-grow">
                            <h1 className="my-2 flex gap-x-3 items-center font-bold text-2xl"><SlLocationPin /> INDONESIA</h1>
                            <h3 className="flex gap-x-3 items-center font-semibold">Pt. Ingenium Automation & Services</h3>
                        </article>

                        <article className="m-5 p-4 -mt-8 transition-all w-full h-full rounded-3xl flex flex-col justify-center">
                            
                            <p className="my-2 mb-4">Axa Tower Lantai 36 Unit 5-6<br />Jalan Profesor Docktor Satrio Kaveling,<br />18, South Jakarta, Indonesia</p>
                            <h3 className="flex gap-x-3 items-center font-semibold"><span className='text-b-900 font-bold'>TEL:</span>+91 044 4795 7162</h3>
                            <h3 className="flex gap-x-3 items-center font-semibold"><span className='text-b-900 font-bold'>FAX:</span>+91 044 4795 7162</h3>
                            
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Addresses;

import { SlLocationPin } from "react-icons/sl"
import { indiaqr, indonesiaqr, singapore1qr, singapore2qr } from "../../assets"

const Addresses = () => {
    return (
        <section className="relative bg-b-100 p-10 flex flex-col items-center">
            <h1 className="text-4xl m-5 my-8 text-b-900 font-bold">Our Locations</h1>
            <div className="relative flex flex-col lg:flex-row">
                {/* Singapore Section */}
                <div className="relative z-10 flex flex-col p-5 m-5 w-full border-2 bg-whitebg border-b-[20px] border-b-800 rounded-bl-3xl rounded-br-3xl rounded-3xl xl:min-w-[700px]">
                    <article className="p-4 transition-all w-full rounded-3xl flex flex-col flex-grow">
                        <h1 className="my-2 flex gap-x-3 items-center font-bold text-2xl"><SlLocationPin /> SINGAPORE</h1>
                        <h3 className="gap-x-3 items-center font-semibold">Ingenium Automation + Engineering Pte Ltd</h3>
                    </article>
                    <div className="flex max-lg:flex-col">
                    <article className="w-full h-full rounded-3xl flex flex-col justify-center">
                        <h1 className="my-2 flex gap-x-3 items-center font-bold text-lg">Admin Office</h1>
                        <p className="my-2 mb-4">111 North Bridge Road #21-01,<br />Peninsula Plaza,<br />Singapore (179098).</p>
                        <h3 className="flex gap-x-3 items-center font-semibold"><span className='text-b-900 font-bold'>TEL:</span>+65 6854 3761</h3>
                        <h3 className="flex gap-x-3 items-center font-semibold"><span className='text-b-900 font-bold'>MOB:</span>+65 6507 4488</h3>
                        <img src={singapore1qr} className="w-[140px] my-5"/>
                    </article>

                    <article className="w-full h-full rounded-3xl flex flex-col justify-center">
                        <h1 className="my-2 flex gap-x-3 items-center font-bold text-lg">Engineering Office</h1>
                        <p className="my-2 mb-4">10, Ubi Crescent #05-08,<br />Ubi Techpark Lobby B,<br />Singapore (408564).</p>
                        <h3 className="flex gap-x-3 items-center font-semibold"><span className='text-b-900 font-bold'>TEL:</span>+65 6593 4370/71</h3>
                        <h3 className="flex gap-x-3 items-center font-semibold"><span className='text-b-900 font-bold'>FAX:</span>+65 6749 9370 </h3>
                        <img src={singapore2qr} className="w-[140px] my-5"/>
                    </article>
                    </div>
                </div>

                {/* India and Indonesia Section */}
                <div className="relative z-10 flex flex-col p-5 m-5 w-full border-2 bg-whitebg border-b-[20px] border-b-800 rounded-bl-3xl rounded-br-3xl rounded-3xl xl:min-w-[700px]">
                    {/* India Section */}
                    <div className="flex max-lg:flex-col gap-5">
                        <div className="w-full">
                        <article className="transition-all w-full rounded-3xl flex flex-col flex-grow py-4">
                            <h1 className="my-2 flex gap-x-3 items-center font-bold text-2xl"><SlLocationPin /> INDIA</h1>
                            <h3 className="flex gap-x-3 items-center font-semibold">Ingenium Automation India Pvt. Ltd.</h3>
                        </article>

                        <article className="w-full rounded-3xl flex flex-col">
                            <h1 className="my-2 flex gap-x-3 items-center font-bold text-lg">Engineering Office</h1>
                            <p className="my-2 mb-4">No. 4L, 560-562, Century Plaza,<br />Anna Salai, Teynampet,<br />Chennai - 600 018.</p>
                            <h3 className="flex gap-x-3 items-center font-semibold"><span className='text-b-900 font-bold'>TEL:</span>+91 044 4795 7162</h3>
                            <h3 className="flex gap-x-3 items-center font-semibold"><span className='text-b-900 font-bold'>MOB:</span>+91 93429 61474</h3>
                            <img src={indiaqr} className="w-[140px] my-5"/>
                        </article>
                        </div>

                    {/* Indonesia Section */}
                        <div className="w-full">
                        <article className="transition-all w-full rounded-3xl flex flex-col flex-grow p-4">
                            <h1 className="my-2 flex gap-x-3 items-center font-bold text-2xl"><SlLocationPin /> INDONESIA</h1>
                            <h3 className="flex gap-x-3 items-center font-semibold">Pt. Ingenium Automation & Services</h3>
                        </article>

                        <article className="w-full rounded-3xl flex flex-col justify-end">
                            <h1 className="my-2 flex gap-x-3 items-center font-bold text-lg">Engineering Office</h1>
                            <p className="my-2 mb-4">Axa Tower Lantai 36 Unit 5-6<br />Jalan Profesor Docktor Satrio Kaveling,<br />18, South Jakarta, Indonesia</p>
                            <h3 className="flex gap-x-3 items-center font-semibold"><span className='text-b-900 font-bold'>TEL:</span>+65 9109 9557</h3>
                            <h3 className="flex gap-x-3 items-center font-semibold"><span className='text-b-900 font-bold'>&nbsp;</span></h3>
                            <img src={indonesiaqr} className="w-[140px] my-5"/>
                        </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Addresses;

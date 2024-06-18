import Whoweare from "./Whoweare";
import Domainsweserve from "./Domainsweserve";
import BrandsExpertised from "./BrandsExpertised";


const Domains = () => {
    return (
        <div id="domains" className="relative w-full bg-b-100 overflow-hidden flex flex-col items-center">
            <h1 className="z-10 text-3xl lg:text-5xl font-bold text-b-950 mt-20">Who Are We?</h1>
            <div id="whoweare" className="my-10 relative p-5 flex justify-center items-center w-full max-w-4xl">
                <Whoweare />
                <div className="hidden md:block absolute md:top-[50px] md:right-[140px] lg:top-[50px] lg:left-[70px] z-10 h-[750px] w-[450px] lg:h-[700px] lg:w-[700px] rounded-2xl bg-b-800" />
            </div>
            
            <div className="my-10 relative p-5 flex flex-col justify-center items-center w-full">
                 <h1 className="z-10 text-3xl lg:text-5xl leading-[56px] text-center font-bold text-b-950">Domains We Serve</h1>
                 <Domainsweserve />
            </div>

            <div className="my-10 relative">
                <h1 className="z-10 relative text-center -mt-10 mb-5 text-3xl lg:text-5xl font-bold text-b-950">Brands Expertised</h1>
                <BrandsExpertised />
            </div>

            
            <div className="absolute -left-[1500px] top-[200px] h-[1000px] w-[3000px] -rotate-45 z-0 bg-b-300"></div>
            <div className="absolute top-[1080px] -left-[600px] h-[1800px] w-[2600px] -rotate-45 z-0 bg-b-300"></div>
       

        </div>
    );
};

export default Domains;
import Whoweare from "./Whoweare";
import Domainsweserve from "./Domainsweserve";

const Domains = () => {
    return (
        <div id="domains" className="relative w-full bg-b-100 overflow-hidden flex flex-col items-center">
            <h1 className="z-10 text-4xl font-bold text-b-800 mt-8">Who We Are</h1>
            <div id="whoweare" className="my-10 relative p-5 flex justify-center items-center w-full max-w-4xl">
                <Whoweare />
                <div className="hidden md:block absolute top-[50px] left-[50px] z-10 h-[666px] w-[747px] rounded-2xl bg-b-800" />
            </div>
            
            <div className="my-10 relative p-5 flex max-lg:flex-col justify-center items-center w-full">
                <h1 className="z-10 text-[50px] leading-[56px] text-center lg:text-right lg:w-1/3 font-bold text-b-800 my-2 lg:my-5 lg:px-20">Domains<br />We Serve</h1>
                <Domainsweserve />
            </div>
            <div className="absolute -left-[1050px] top-[650px] h-[700px] w-[3270px] -rotate-45 z-0 bg-b-300"></div>
            <div className="absolute top-[1349px] left-[450px] h-[960px] w-[960px] -rotate-45 z-0 bg-b-400"></div>
        </div>
    );
};

export default Domains;
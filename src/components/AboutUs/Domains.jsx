import Whoweare from "./Whoweare";
import Domainsweserve from "./Domainsweserve";
import BrandsExpertised from "./BrandsExpertised";
import Projects from "./Projects";

const Domains = () => {
    return (
        <section id="domains" className="relative w-full bg-b-100 overflow-hidden flex flex-col items-center">
            <div id="whoweare" className="relative my-5 lg:p-5 flex flex-col justify-center items-center w-full z-30">
                <h1 className="z-30 text-2xl lg:text-[50px] font-bold text-b-950 my-2 lg:my-5">Who We Are</h1>
                <Whoweare />
            </div>
            <div id="domainsweserve" className="relative my-5 lg:p-5 flex flex-col justify-center items-center w-full z-30">
                <h1 className="z-30 text-2xl lg:text-[50px] text-center font-bold text-b-950 my-2 lg:my-5">Domains We Serve</h1>
                <Domainsweserve />
            </div>
            <div id="projects" className="relative my-5 w-full lg:p-5 flex flex-col items-center justify-center z-30">
                <h1 className="z-30 text-2xl lg:text-[50px] text-center font-bold text-b-950 my-2 lg:my-5">Projects</h1>
                <Projects />
            </div>
            <div className="my-5 z-20 relative">
                <h1 className="z-10 text-2xl lg:text-[50px] text-center font-bold text-b-950 my-2 lg:my-5">Brands Expertised</h1>
                <BrandsExpertised />
            </div>

            <div className="absolute -left-[950px] top-[650px] h-[900px] w-[3370px] -rotate-45 z-0 bg-b-300" aria-hidden="true" />
            <div className="absolute top-[1375px] left-[627px] h-[1600px] w-[1600px] -rotate-45 z-0 bg-b-400" aria-hidden="true" />
        </section>
    );
};

export default Domains;
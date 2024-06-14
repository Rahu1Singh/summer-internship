import Button from "./Button";
import { bosimg } from "../assets";

const defaultClass = ""

const ProductCard = ({className}) => {
  return ( 
    <section className={` ${className ? className : defaultClass} flex flex-col pt-3 max-w-[250px] text-slate-900 space-y-4`}> 
      <article className={`flex flex-col pb-4 mt-4 w-full bg-white rounded-2xl border border-solid border-g-800 shadow-lg space-y-4`}> 
        
        <div className="flex flex-col px-5 -mt-3 w-full space-y-2"> 
          <img loading="lazy" src={bosimg} alt="Ecostruxture Building Advisor" className="self-center aspect-[1.01] w-[200px]" /> 
          <h2 className="text-xl font-semibold">
            Ecostruxture Building Advisor
          </h2> 
          <p className="text-base text-left leading-6"> 
            Apps, analytics & services 
          </p> 
        </div> 
        <Button link="/contact" className="z-10 text-lg font-medium max-lg:text-lg justify-center self-center p-2 leading-5 bg-g-600 text-white border-g-600 hover:bg-white hover:text-g-800 hover:font-bold rounded-[48px]">
          Contact Sales
        </Button>
      </article> 
    </section> 
  ); 
};

export default ProductCard;
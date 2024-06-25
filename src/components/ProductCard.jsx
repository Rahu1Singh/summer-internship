import Button from "./Button";

const ProductCard = ({name, img, desc, link}) => {
  return ( 
      <article className={`max-w-[280px] min-h-[250px] lg:min-h-[360px] flex flex-col justify-between pb-4 mt-4 w-full bg-white rounded-2xl border border-solid border-b-800 shadow-lg lg:space-y-8`}> 
        <div className="flex flex-col justify-between px-5 w-full h-full"> 
          <img loading="lazy" src={img} alt={name} className="self-center max-w-[120px] my-1 lg:my-5" />
          <div>
            <h2 className="md:text-lg lg:text-xl font-semibold my-2">{name}</h2> 
            <p className="hidden lg:block text-base text-left my-2">{desc}</p>
          </div>
        </div> 
        <Button link={link} className="z-10 text-sm lg:text-base font-medium justify-center self-center bg-b-600 text-white border-b-600 hover:bg-transparent hover:text-b-800 hover:font-bold rounded-3xl">
          Learn More
        </Button>
      </article> 
  ); 
};

export default ProductCard;
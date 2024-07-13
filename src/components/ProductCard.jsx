import Button from "./Button";

const ProductCard = ({name, img, desc, link}) => {
  return ( 
      <article className={`w-[160px] md:w-[240px] lg:w-[280px] h-[240px] md:h-[300px] lg:h-[360px] flex flex-col justify-between pb-2 m-4 bg-white rounded-2xl border border-solid border-b-800 shadow-lg lg:space-y-4`}> 
        <div className="flex flex-col justify-between px-2 md:px-5 w-full h-full"> 
          <div className="h-full flex items-center justify-center">
          <img loading="lazy" src={img} alt={name} className="self-center max-w-[80px] lg:max-w-[120px] lg:my-3" /></div>
          <div className="max-lg:my-5">
            <h2 className="md:text-lg lg:text-xl font-semibold my-2">{name}</h2> 
            <p className="hidden lg:block text-base text-left">{desc}</p>
            <a href={link} className="text-sm text-blue-900 font-bold">Learn More..</a>
          </div>
        </div> 
        <Button link='/contact' className="z-10 text-sm lg:text-base font-medium justify-center self-center bg-b-600 text-white border-b-600 hover:bg-transparent hover:text-b-800 hover:font-bold rounded-3xl">
          Contact Us
        </Button>
      </article> 
  ); 
};

export default ProductCard;
import Button from "./Button";

const ProductCard = ({name, img, desc, link}) => {
  return ( 
      <article className={`max-w-[280px] max-h-[420px] flex flex-col justify-between pb-4 mt-4 w-full bg-white rounded-2xl border border-solid border-b-800 shadow-lg space-y-8`}> 
        <div className="flex flex-col justify-between px-5 -mt-3 w-full max-h-2/3"> 
          <img loading="lazy" src={img} alt={name} className="self-center aspect-[1.01] w-[160px] my-5" />
          <h2 className="text-xl font-semibold my-2">{name}</h2> 
          <p className="text-base text-left">{desc}</p>
        </div> 
        <Button link={link} className="z-10 text-md font-medium justify-center self-center bg-b-600 text-white border-b-600 hover:bg-transparent hover:text-b-800 hover:font-bold rounded-3xl">
          Learn More
        </Button>
      </article> 
  ); 
};

export default ProductCard;
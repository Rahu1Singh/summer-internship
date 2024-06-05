import { navbaritems } from "../constants";
import { Footerwave } from "./Footerwave";

const Footer = () => {
    return (
      <div className="static z-10 bg-b-600 text-white">
        {/* SVG wave pattern at the top */}
        <div className="text-b-100 top-0 left-0 w-full overflow-hidden leading-[0]">
          <Footerwave />
        </div>
  
        <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12 relative">
          <h1 className="font-bold text-3xl xl:text-3xl leading-snug text-center">
            Want to get your queries answered? <br /> Let&apos;s talk!
          </h1>
          <div className="container mx-0 min-w-full flex flex-col items-center">
            <a
              className="mt-8 xl:mt-12 px-12 py-5 mx-auto text-lg font-medium leading-tight inline-block rounded-full shadow-xl  bg-b-800 text-whitebg hover:bg-whitebg hover:text-b-600 hover:font-bold hover:border-solid hover:border-[3px] hover:border-b-600 transition-all"
              href="#">
              Contact Us
            </a>
          </div>
  
          <div className="mt-10 xl:mt-20">
            <nav className="flex flex-wrap justify-center text-lg font-medium">
            {navbaritems.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className="px-5 py-2 hover:text-b-900 hover:scale-[1.15] hover:font-bold transition-all"
              >
                {item.title}
              </a>
            ))}
            </nav>
            </div>
            
            <hr className="mt-8 xl:mt-12 border-t border-white opacity-50" />
            <p className="mt-7 text-base text-center">
              Copyright © 2024 | Ingenium | All Rights Reserved
            </p>
          
        </div>
      </div>
    );
  };
  
  export default Footer;
  
import { navbaritems } from "../constants";
import { NavLink } from "react-router-dom";

const Hamburger = () => {
    return (
        <div className="absolute z-50 flex flex-col items-center justify-center h-screen space-y-10">
            {navbaritems.map((item) => (
                <div key={item.id} className="w-full flex flex-col items-center">
                    <a 
                        href={item.url} 
                        className="block uppercase font-medium text-xl py-5 w-full text-center hover:font-bold hover:text-blue-800 transition-colors"
                    >
                        {item.title}
                    </a>
                    {item.id !== "4" && <div className="w-4/5 border-b border-b-300" />}
                </div>
            ))}
        </div>
    );
}

export default Hamburger;
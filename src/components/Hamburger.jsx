import { NavLink } from "react-router-dom";
import { navbaritems } from "../constants";

const Hamburger = ({ handleClick }) => {
    return (
        <div className="absolute p-5 z-50 flex flex-col items-center justify-center h-screen w-full space-y-10 mb-10">
            {navbaritems.map((item) => (
                <div key={item.id} className="w-full flex flex-col items-center">
                    <NavLink 
                        to={item.url} 
                        className="block uppercase font-medium text-xl w-full text-center hover:font-bold hover:text-b-800 transition-colors"
                        onClick={handleClick}
                    >
                        {item.title}
                    </NavLink>
                    {item.id !== "4" && <div className="w-4/5 border-b-2 border-b-700 py-5" />}
                </div>
            ))}
        </div>
    );
}

export default Hamburger;
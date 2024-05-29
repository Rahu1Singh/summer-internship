import { logotransp } from "../assets";
import { navbaritems } from "../constants";

const Navbar = () => {
  return (
    // Navbar container with fixed position at the top of the viewport
    <div className="fixed top-0 left-0 h-[80px] z-50 w-screen bg-b-100 text-black flex align-middle justify-center">
      {/* Content container with padding and font styling */}
      <div className="flex items-center px-10 text-lg font-medium gap-20 h-full">
        {/* Logo */}
        <a className="block px-5" href="#home">
          <img src={logotransp} height={64} width={200} alt="logo" />
        </a>
        {/* Navigation links */}
        <nav className="flex-1">
          <div className="flex flex-row items-center justify-center">
            {/* Mapping through navbar items */}
            {navbaritems.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className="px-8 py-6 leading-5 hover:text-b-800 hover:scale-[1.15] hover:font-bold transition-all"
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
        {/* Contact Us button */}
        <a
          href="#contact_us"
          className="block px-6 py-2 rounded-md bg-b-600 text-whitebg hover:bg-whitebg hover:text-b-600 hover:font-bold hover:border-solid hover:border-[3px] hover:border-b-600 transition-all"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Navbar;

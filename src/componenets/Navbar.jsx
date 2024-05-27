import { logo } from "../assets"
import { navbaritems } from "../constants"

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 h-[80px] z-50 w-screen bg-white/0 text-black flex align-middle justify-center">
        <div className="flex items-center px-7.5 text-lg font-medium gap-40">
            <a className="block px-5">
                <img src={logo} height={64} width={200} alt="logo"/>
            </a>
            <nav className="flex-1 left-0 right-0 bottom-0 static mx-auto">
                <div className="flex flex-row items-center justify-center relative z-2 m-auto">
                    {navbaritems.map((item) => (
                        <a key={item.id} href={item.url} className="uppercase px-8 py-6 leading-5 hover:text-blue-800 hover:scale-[1.15] hover:font-bold transition-all ">{item.title}</a>
                    ))}
                </div>
            </nav>
            <a href="#contact_us" className="block px-6 py-2 rounded-md bg-green-700 text-white hover:bg-white hover:text-green-700 hover:font-bold hover:border-solid hover:border-[3px] hover:border-green-700 transition-all">Contact Us</a>
        </div>
    </div>
  )
}

export default Navbar

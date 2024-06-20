import { useState, useEffect } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { MdMenu, MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

import { logo } from "../assets";
import Button from "./Button";
import Nav from "./Nav";
import Hamburger from "./Hamburger";

const Navbar = () => {
    const location = useLocation();
    const [openNavigation, setOpenNavigation] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [bgColor, setBgColor] = useState('bg-black');
    const [textColor, setTextColor] = useState('text-white');

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    const handleClick = () => {
        if (!openNavigation) return;
        enablePageScroll();
        setOpenNavigation(false);
    };

    
    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scroll down
                setIsVisible(false);
            } else { // if scroll up
                setIsVisible(true);
            }
            if(location.pathname === '/') {
            if (window.scrollY > 80) { // if scrolled down
                setBgColor('bg-b-200/90');
                setTextColor('text-black');
            } else { // if at the top
                setBgColor('bg-black');
                setTextColor('text-white');
            }
        }
            setLastScrollY(window.scrollY);
    }}

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <nav className={`sticky top-0 h-[80px] flex items-center justify-between px-6 ${openNavigation ? 'bg-n-8' : `${location.pathname === '/' ? bgColor : 'bg-b-200/90'} backdrop-blur-sm`} z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            {!openNavigation && <div className="2xl:px-16">
                <img src={logo} width={240} alt="logo" />
            </div>}
            <div className={`hidden lg:static lg:flex`}>
                <Nav text={location.pathname === '/' ? textColor : 'text-black'} />
            </div>
            <div className={`flex 2xl:px-16`}>
                <Button link="/contact">Contact Us</Button>
            </div>
            {!openNavigation && <button onClick={toggleNavigation} className="lg:hidden">
                <MdMenu className="text-2xl" />
            </button>}
            <AnimatePresence>
                {openNavigation && (
                    <motion.div
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 300 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed top-0 right-0 w-screen h-screen bg-b-200/50 backdrop-blur-md flex flex-col items-center z-50"
                    >
                        <div className="fixed top-2 left-6">
                            <img src={logo} height={64} width={200} alt="logo" />
                        </div>
                        <button onClick={toggleNavigation} className="fixed top-4 right-2 m-4">
                            <MdClose className="text-2xl" />
                        </button>
                        <div className="w-full pt-20">
                            <Hamburger handleClick={handleClick} />
                        </div>
                        <div className="fixed right-0 w-5 h-auto z-10 bg-b-300"></div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
